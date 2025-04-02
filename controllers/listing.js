const Listing = require("../models/listing");
const geolocation = require("geolocation");
const User = require('../models/user')
const nodemailer = require("nodemailer");
const cron = require("node-cron");
require('dotenv').config();
const NodeGeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    apiKey: process.env.MAP_API_KEY,
};


const geocoder = NodeGeocoder(options);

module.exports.index = async (req, res) => {
    const listings = await Listing.find();

    res.render("listings/index.ejs", {
        listings
    });
};


module.exports.searchBySkill = async (req, res) => {
    const skill = req.query.skill;

    if (skill) {

        const listings = await Listing.find({
            skills: skill
        });


        if (!listings) {
            req.flash("error", "No results for this Category!");
            return res.redirect("/listings");
        } else {

            req.flash("success", "Properties based on Category");
            res.render("listings/index.ejs", {
                listings
            });
        }
    }
};


module.exports.searchListing = async (req, res) => {
    const query = req.query.title ? req.query.title.trim() : '';
    if (!query) {
        req.flash("error", "Please enter the query!");
        return res.redirect("/listings");
    }
    const listings = await Listing.find({
        $or: [{
                eventName: {
                    $regex: new RegExp(query, 'i')
                }
            },
            {
                organizationName: {
                    $regex: new RegExp(query, 'i')
                }
            },
            {
                skills: {
                    $elemMatch: {
                        $regex: new RegExp(query, 'i')
                    }
                }
            }
        ]
    });
    if (listings.length === 0) {
        req.flash("error", "No results for this search!");
        return res.render("listings/index.ejs", {
            listings: [],
            messages: req.flash()
        });
    }

    res.render("listings/index.ejs", {
        listings,
        messages: req.flash()
    });
};



module.exports.findListings = async (req, res) => {
    const {
        latitude,
        longitude
    } = req.body;
    const listingsWithinRadius = await Listing.find({
        coordinates: {
            $geoWithin: {
                $centerSphere: [
                    [longitude, latitude], 10 / 6371
                ]
            }
        }
    });
    if (!listingsWithinRadius) {
        req.flash("error", "No Propeeties found near you!");
        return;
    }
    let gstPrice = [];
    for (let i = 0; i < listingsWithinRadius.length; i++) {
        gstPrice.push(listingsWithinRadius[i].price * 1.18);
    }
    res.json({
        success: true,
        listings: listingsWithinRadius,
        gstPrice
    });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let {
        id
    } = req.params;

    const listing = await Listing.findById(id).populate({
        path: "reviews",
        select: "image.url username",
        strictPopulate: false
    });
    
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    res.render("listings/show.ejs", {
        listing
    });
};

module.exports.createNewListing = async (req, res) => {
    try {
        // Create a new listing from request data
        const newListing = new Listing(req.body.listing);

        // Convert date & time to a JavaScript Date object
        const dateString = req.body.listing.date.to; // "2025-02-06"
        const timeString = req.body.listing.time.to; // "11:46"

        const [year, month, day] = dateString.split('-').map(Number);
        const [hours, minutes] = timeString.split(':').map(Number);

        const date = new Date(year, month - 1, day, hours, minutes);

        // Generate cron expression (last * means any day of the week)
        const cronExpression = `${date.getSeconds()} ${date.getMinutes() - 5} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} ${date.getDay()}`;
        console.log("Cron Expression:", cronExpression);

        // Add additional details
        newListing.owner = req.user._id;
        newListing.image.filename = req.file.filename;
        newListing.image.url = req.file.path;

        // Convert address to coordinates using geocoder
        const result = await geocoder.geocode(`${newListing.country} ${newListing.location}`);
        newListing.coordinates = {
            type: "Point",
            coordinates: [result[0].longitude, result[0].latitude]
        };

        await newListing.save();

        req.flash("success", "New Listing created!");
        const allUsers = await User.find({ location: newListing.location })
        console.log(allUsers);
        console.log(cronExpression);
        

        if (allUsers.length > 0) {
            const recipients = allUsers; // List of emails
            const transporter = nodemailer.createTransport({
                service: "gmail",
                secure: true,
                port: 465,
                auth: {
                    user: "otp11571@gmail.com",
                    pass: "cwomcpxvfoztwoao" // Store this in environment variables for security
                }
            });

            cron.schedule(cronExpression, () => {
                recipients.forEach((user) => {
                    let mailOptions = {
                        from: "otp11571@gmail.com",
                        to: user.email,
                        subject: `Important Announcement from: ${newListing.organizationName}`,
                        text: "Hurry Up Event is about to end"
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(`Error sending email to ${user.email}:`, error);
                        } else {
                            console.log(`Email sent to ${user.email}:`, info.response);
                        }
                    });
                });
            }, {
                timezone: "Asia/Kolkata"
            });
        }
        else {
            req.flash("error", "No users near this")
            res.redirect('/listings')
        }

        res.redirect("/listings");

    } catch (error) {
        console.error("Error creating listing:", error);
        req.flash("error", "Failed to create listing. Please try again.");
        res.redirect("/listings");
    }
};



module.exports.updateListing = async (req, res) => {
    const {
        id
    } = req.params;
    const updateData = {
        ...req.body.listing
    };
    if (req.file) {
        updateData.image = {
            filename: req.file.filename,
            url: req.file.path
        };
    }
    const result = await geocoder.geocode(`${updateData.country} ${updateData.location}`);
    updateData.coordinates = {
        type: "Point",
        coordinates: [result[0].longitude, result[0].latitude]
    };
    const listing = await Listing.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let {
        id
    } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};



module.exports.renderEmailForm = async (req, res) => {
    let {
        id
    } = req.params;
    const listing = await Listing.findById(id);
    res.render("inform", {
        listing
    })
}


module.exports.sendEmail = async (req, res) => {

    try {
        let {
            subject,
            content
        } = req.body;
        let {
            id
        } = req.params;

        // Populate reviews and their authors
        const listing = await Listing.findById(id).populate({
            path: "reviews",
            select: "email",
        });



        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        // Extract emails from reviews
        // Extract emails from reviews
        const allEmails = listing.reviews.map(user => user.email);

        if (allEmails.length === 0) {
            req.flash("error", "No reviewers with valid emails found");
            return res.redirect(`/listings/${id}`);
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: "otp11571@gmail.com", // Use environment variables for security
                pass: "cwomcpxvfoztwoao"
            }
        });

        // Send email to each reviewer
        allEmails.forEach((email) => {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject,
                text: content
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(`Error sending email to ${email}:`, error);
                } else {
                    console.log(`Email sent to ${email}:`, info.response);
                }
            });
        });

        req.flash("success", "Email sent to all Users!");
        res.redirect(`/listings/${id}`);

    } catch (error) {
        console.error("Error in sendEmail:", error);
        req.flash("error", "Something went wrong!");
        res.redirect("/listings");
    }
};

module.exports.participate = async (req, res) => {
    // console.log(res.locals.currUser);
    const {
        id
    } = req.params;
    const id_user = res.locals.currUser._id;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    listing.reviews.push(id_user);
    await listing.save();

    req.flash("success", "Participated successfully!");
    res.redirect(`/listings/${id}`);
}

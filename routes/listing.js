const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner } = require('../middleware.js');
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });


router.post("/:id/share",wrapAsync(listingController.sendEmail));
//Index and Create Route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single("listing[image][url]"), wrapAsync(listingController.createNewListing));



    //search
router.route("/search")
    .get(wrapAsync(listingController.searchListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get("/skill",wrapAsync(listingController.searchBySkill));

//Show,Update and Delete route
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single("listing[image][url]"), wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

router.route("/:id/share")
    .get(wrapAsync(listingController.renderEmailForm))
    
router.route("/:id/participate").post(wrapAsync(listingController.participate))
module.exports = router;
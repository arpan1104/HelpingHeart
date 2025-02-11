const sampleListings = [
  {
    "organizationName": "Pune Green Initiative",
    "eventName": "River Cleaning Drive",
    "description": "Join us in cleaning the Mula-Mutha river and making Pune cleaner.",
    "location": "Koregaon Park, Pune",
    "country": "India",
    "date": { "from": "2025-03-10", "to": "2025-03-12" },
    "time": { "from": "07:00", "to": "12:00" },
    "skills": "Field Work",
    "image": { "filename": "river_cleaning.jpg", "url": "https://plus.unsplash.com/premium_photo-1663047262953-0dcadd07f251?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    "contactNumber": "+919876543210",
    "email": "info@punegreen.org",
    "owner": "67a3eaa83317d07856893708",
    "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
  },
  
    {
      "organizationName": "Pune Health Foundation",
      "eventName": "Community Health Check-up",
      "description": "Providing free medical check-ups and consultations for underprivileged communities.",
      "location": "Shivaji Nagar, Pune",
      "country": "India",
      "date": { "from": "2025-04-05", "to": "2025-04-05" },
      "time": { "from": "09:00", "to": "15:00" },
      "skills": "Health Care",
      "image": { "filename": "health_camp.jpg", "url": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwY2hlY2t8ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919834567890",
      "email": "health@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Pune Youth Mentorship",
      "eventName": "Student Career Guidance",
      "description": "Helping students explore different career opportunities and mentorship programs.",
      "location": "FC Road, Pune",
      "country": "India",
      "date": { "from": "2025-03-20", "to": "2025-03-20" },
      "time": { "from": "10:00", "to": "14:00" },
      "skills": "Teaching",
      "image": { "filename": "career_guidance.jpg", "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919812345678",
      "email": "mentor@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Animal Welfare Society",
      "eventName": "Stray Animal Care Drive",
      "description": "Providing medical care and food to stray animals in Pune.",
      "location": "Baner, Pune",
      "country": "India",
      "date": { "from": "2025-05-15", "to": "2025-05-15" },
      "time": { "from": "11:00", "to": "16:00" },
      "skills": "Animal Care",
      "image": { "filename": "animal_care.jpg", "url": "https://images.unsplash.com/photo-1516280287949-2747a3304a2f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919876512345",
      "email": "pets@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Pune Fitness Club",
      "eventName": "Free Yoga & Meditation Camp",
      "description": "Join our free yoga and meditation session for a healthier lifestyle.",
      "location": "Kothrud, Pune",
      "country": "India",
      "date": { "from": "2025-06-10", "to": "2025-06-10" },
      "time": { "from": "06:30", "to": "08:30" },
      "skills": "Fitness",
      "image": { "filename": "yoga_session.jpg", "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919832145678",
      "email": "yoga@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Eco Warriors Pune",
      "eventName": "Tree Plantation Drive",
      "description": "Join us in planting trees to make Pune greener and cleaner.",
      "location": "Aundh, Pune",
      "country": "India",
      "date": { "from": "2025-07-22", "to": "2025-07-22" },
      "time": { "from": "08:00", "to": "11:00" },
      "skills": "Field Work",
      "image": { "filename": "tree_plantation.jpg", "url": "https://images.unsplash.com/photo-1524602585632-a2a01c12307c?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919854112233",
      "email": "trees@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Pune Social Service",
      "eventName": "Orphanage Visit & Education Drive",
      "description": "Spend quality time and teach basic skills to children at a local orphanage.",
      "location": "Wakad, Pune",
      "country": "India",
      "date": { "from": "2025-08-18", "to": "2025-08-18" },
      "time": { "from": "10:00", "to": "16:00" },
      "skills": "Teaching",
      "image": { "filename": "orphanage_visit.jpg", "url": "https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JwaGFufGVufDB8fDB8fHww" },
      "contactNumber": "+919887766554",
      "email": "help@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Pune Community Kitchen",
      "eventName": "Food Distribution Drive",
      "description": "Help us distribute free meals to the homeless and those in need.",
      "location": "Camp Area, Pune",
      "country": "India",
      "date": { "from": "2025-09-10", "to": "2025-09-10" },
      "time": { "from": "12:00", "to": "15:00" },
      "skills": "Others",
      "image": { "filename": "food_drive.jpg", "url": "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919811223344",
      "email": "food@pune.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },

    {
      "organizationName": "PCMC Green Warriors",
      "eventName": "Riverfront Cleanup",
      "description": "Join us in cleaning the Pavana River and promoting environmental awareness.",
      "location": "Pavana River, Pimpri",
      "country": "India",
      "date": { "from": "2025-04-10", "to": "2025-04-10" },
      "time": { "from": "07:00", "to": "11:00" },
      "skills": "Field Work",
      "image": { "filename": "riverfront_cleanup.jpg", "url": "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919876543219",
      "email": "info@pcmcgreen.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Health Foundation",
      "eventName": "Free Eye Check-up Camp",
      "description": "Providing free eye tests and consultations for people in need.",
      "location": "Nigdi, PCMC",
      "country": "India",
      "date": { "from": "2025-05-05", "to": "2025-05-05" },
      "time": { "from": "09:30", "to": "14:30" },
      "skills": "Health Care",
      "image": { "filename": "eye_checkup.jpg", "url": "https://plus.unsplash.com/premium_photo-1677333508737-6b6d642bc6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwY2hlY2t1cHxlbnwwfHwwfHx8MA%3D%3D" },
      "contactNumber": "+919812345677",
      "email": "health@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Youth Mentorship",
      "eventName": "Career Guidance for Students",
      "description": "Helping students make informed decisions about their careers and education.",
      "location": "Chinchwad, PCMC",
      "country": "India",
      "date": { "from": "2025-06-12", "to": "2025-06-12" },
      "time": { "from": "10:00", "to": "14:00" },
      "skills": "Teaching",
      "image": { "filename": "career_guidance_pcmc.jpg", "url": "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919832145679",
      "email": "mentor@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Animal Welfare Society PCMC",
      "eventName": "Stray Animal Rescue Drive",
      "description": "Rescuing and providing medical aid to injured stray animals in PCMC.",
      "location": "Bhosari, PCMC",
      "country": "India",
      "date": { "from": "2025-07-20", "to": "2025-07-20" },
      "time": { "from": "10:00", "to": "16:00" },
      "skills": "Animal Care",
      "image": { "filename": "animal_rescue.jpg", "url": "https://plus.unsplash.com/premium_photo-1667099521469-df09eb52c812?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      "contactNumber": "+919876512346",
      "email": "pets@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Fitness Club",
      "eventName": "Free Marathon Training",
      "description": "Join us for a free marathon training session to promote a healthy lifestyle.",
      "location": "Hinjawadi, PCMC",
      "country": "India",
      "date": { "from": "2025-08-05", "to": "2025-08-05" },
      "time": { "from": "06:00", "to": "08:30" },
      "skills": "Fitness",
      "image": { "filename": "marathon_training.jpg", "url": "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyYXRob258ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919832145680",
      "email": "fitness@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Social Welfare",
      "eventName": "Old Age Home Visit",
      "description": "Spending time with senior citizens and engaging them in fun activities.",
      "location": "Akurdi, PCMC",
      "country": "India",
      "date": { "from": "2025-09-18", "to": "2025-09-18" },
      "time": { "from": "10:00", "to": "16:00" },
      "skills": "Others",
      "image": { "filename": "oldage_visit.jpg", "url": "https://images.unsplash.com/photo-1496938461470-aaa34930e2d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYWdlJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D" },
      "contactNumber": "+919887766555",
      "email": "help@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Community Kitchen",
      "eventName": "Food Donation Drive",
      "description": "Distributing food to underprivileged families in PCMC.",
      "location": "Ravet, PCMC",
      "country": "India",
      "date": { "from": "2025-10-10", "to": "2025-10-10" },
      "time": { "from": "12:00", "to": "15:00" },
      "skills": "Others",
      "image": { "filename": "food_donation_pcmc.jpg", "url": "https://plus.unsplash.com/premium_photo-1683134059041-3604e05950e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2QlMjBkb25hdGV8ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919811223345",
      "email": "food@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "PCMC Education Support",
      "eventName": "Evening Study Sessions for Underprivileged Kids",
      "description": "Helping children with their studies and mentoring them for a brighter future.",
      "location": "Tathawade, PCMC",
      "country": "India",
      "date": { "from": "2025-11-15", "to": "2025-11-15" },
      "time": { "from": "17:00", "to": "19:30" },
      "skills": "Teaching",
      "image": { "filename": "study_sessions.jpg", "url": "https://plus.unsplash.com/premium_photo-1663090860219-b2d35bf440f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2glMjBraWRzfGVufDB8fDB8fHww" },
      "contactNumber": "+919833445566",
      "email": "education@pcmc.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Beach Cleanup",
      "eventName": "Juhu Beach Cleanup Drive",
      "description": "Join us in cleaning Juhu Beach and promoting a cleaner Mumbai.",
      "location": "Juhu Beach, Mumbai",
      "country": "India",
      "date": { "from": "2025-03-22", "to": "2025-03-22" },
      "time": { "from": "06:30", "to": "10:30" },
      "skills": "Field Work",
      "image": { "filename": "juhu_cleanup.jpg", "url": "https://plus.unsplash.com/premium_photo-1663039947303-0fad26f737b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBjbGVhbnVwfGVufDB8fDB8fHww" },
      "contactNumber": "+919876543211",
      "email": "cleanup@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Health Initiative",
      "eventName": "Free Health Check-up Camp",
      "description": "Providing free health screenings and medical consultations.",
      "location": "Dadar, Mumbai",
      "country": "India",
      "date": { "from": "2025-04-10", "to": "2025-04-10" },
      "time": { "from": "09:00", "to": "14:00" },
      "skills": "Health Care",
      "image": { "filename": "health_camp.jpg", "url": "https://images.unsplash.com/photo-1623658052801-3dc4c0ea3489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aCUyMGNoZWNrfGVufDB8fDB8fHww" },
      "contactNumber": "+919834567892",
      "email": "health@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Animal Welfare",
      "eventName": "Stray Animal Feeding Drive",
      "description": "Providing food and care to stray animals in Mumbai.",
      "location": "Bandra, Mumbai",
      "country": "India",
      "date": { "from": "2025-05-05", "to": "2025-05-05" },
      "time": { "from": "18:00", "to": "20:00" },
      "skills": "Animal Care",
      "image": { "filename": "animal_care.jpg", "url": "https://plus.unsplash.com/premium_photo-1667099521634-8fd821e4ed12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXklMjBjYXR8ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919876512346",
      "email": "animalcare@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Green Warriors",
      "eventName": "Tree Plantation Drive",
      "description": "Planting trees to improve air quality and create a greener Mumbai.",
      "location": "Goregaon, Mumbai",
      "country": "India",
      "date": { "from": "2025-06-12", "to": "2025-06-12" },
      "time": { "from": "08:00", "to": "12:00" },
      "skills": "Field Work",
      "image": { "filename": "tree_plantation_mumbai.jpg", "url": "https://plus.unsplash.com/premium_photo-1667509241064-0fffd21b604f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyZWUlMjBwbGFudGF0aW9ufGVufDB8fDB8fHww" },
      "contactNumber": "+919854112234",
      "email": "trees@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Youth Mentorship",
      "eventName": "Career Counseling Workshop",
      "description": "Guiding students about career opportunities and skill development.",
      "location": "Andheri, Mumbai",
      "country": "India",
      "date": { "from": "2025-07-18", "to": "2025-07-18" },
      "time": { "from": "10:00", "to": "15:00" },
      "skills": "Teaching",
      "image": { "filename": "career_workshop.jpg", "url": "https://plus.unsplash.com/premium_photo-1663051241451-709fa4de55bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" },
      "contactNumber": "+919812345679",
      "email": "mentor@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Social Welfare",
      "eventName": "Elderly Care Assistance",
      "description": "Spending time with senior citizens and assisting them with daily needs.",
      "location": "Powai, Mumbai",
      "country": "India",
      "date": { "from": "2025-08-21", "to": "2025-08-21" },
      "time": { "from": "10:30", "to": "16:00" },
      "skills": "Others",
      "image": { "filename": "elderly_care.jpg", "url": "https://images.unsplash.com/photo-1580869318757-a6c605b061ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxkZXJseSUyMGNhcmV8ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919887766555",
      "email": "care@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Fitness Club",
      "eventName": "Free Zumba Session",
      "description": "A fun and energetic Zumba session for all fitness enthusiasts.",
      "location": "Thane, Mumbai",
      "country": "India",
      "date": { "from": "2025-09-05", "to": "2025-09-05" },
      "time": { "from": "07:00", "to": "09:00" },
      "skills": "Fitness",
      "image": { "filename": "zumba_session.jpg", "url": "https://plus.unsplash.com/premium_photo-1663054933667-fb307cea9aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8enVtYmF8ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919832145679",
      "email": "fitness@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    },
    {
      "organizationName": "Mumbai Community Support",
      "eventName": "Marathon Drive",
      "description": "Spreading awareness about running in individuals in Mumbai.",
      "location": "Kurla, Mumbai",
      "country": "India",
      "date": { "from": "2025-10-10", "to": "2025-10-10" },
      "time": { "from": "12:00", "to": "16:00" },
      "skills": "Fitness Coaching",
      "image": { "filename": "food_distribution.jpg", "url": "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyYXRob258ZW58MHx8MHx8fDA%3D" },
      "contactNumber": "+919812345680",
      "email": "food@mumbai.org",
      "owner": "67a3eaa83317d07856893708",
      "reviews": ["67a3f3412f6ffec174c88fdd","67a41c67222823358ca7f4cb"]
    }   
  ];
  
  module.exports = { data: sampleListings };
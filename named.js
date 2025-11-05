// ========== DATA SECTION ==========

// Indore Companies Data
 const vijayNagarCompanies = [
        {
            name: "Golden Eagle IT Technologies",
            rating: 4.1,
            reviews: 43,
            address: "4th Floor, Plot No. 8, opposite chai coffee, Vijay Nagar, Indore, Madhya Pradesh 452010",
            phone: "+91 9584309000",
            hr_phone: "+91 9584309001",
            email: "info@goldeneagleit.com",
            hr_email: "careers@goldeneagleit.com",
            website: "https://goldeneagleit.com",
            hours: "Open 24 hours",
            services: "IT Solutions, Software Development",
            employees: "50+",
            founded: "2018"
        },
        {
            name: "Beyond Key",
            rating: 4.6,
            reviews: 112,
            address: "901A, 9th Floor, NRK Business Park, PU4, Vijay Nagar Square, Indore, Madhya Pradesh 452010",
            phone: "+91 731 4721700",
            hr_phone: "+91 731 4721701",
            email: "info@beyondkey.com",
            hr_email: "hr@beyondkey.com",
            website: "https://beyondkey.com",
            hours: "Opens 10 AM",
            services: "Software Development, IT Consulting",
            employees: "200+",
            founded: "2012",
            review: "Great place to work with excellent supportive leadership"
        },
        {
            name: "Dwellfox Private Limited",
            rating: 4.8,
            reviews: 99,
            address: "405, Apollo Premier, Vijay Nagar Square, Indore, Madhya Pradesh 452010",
            phone: "+91 9303083558",
            hr_phone: "+91 9303083559",
            email: "contact@dwellfox.com",
            hr_email: "careers@dwellfox.com",
            website: "https://dwellfox.com",
            hours: "Opens 10 AM",
            services: "AI & ML, Staff Augmentation, ServiceNow, Salesforce",
            employees: "150+",
            founded: "2016",
            review: "Reliable and trustworthy company"
        },
        {
            name: "InTouch Software Solution",
            rating: 4.9,
            reviews: 28,
            address: "903, NRK Business Park, Vijay Nagar Square, Indore, Madhya Pradesh 452010",
            phone: "+91 9691565883",
            hr_phone: "+91 9691565884",
            email: "needhelp@intouchsoftware.co.in",
            hr_email: "careers@intouchsoftware.co.in",
            website: "https://intouchsoftware.in",
            hours: "Opens 8:30 AM",
            services: "Website & Social Media Management",
            employees: "30+",
            founded: "2019"
        },
        {
            name: "Logical Soft Tech Private Limited",
            rating: 4.4,
            reviews: 148,
            address: "388, PU4, next to Krozzon Hotel, Vijay Nagar, Indore, Madhya Pradesh 452010",
            phone: "+91 8210251824",
            hr_phone: "+91 7869731595",
            email: "info@logicalsofttech.com",
            hr_email: "hrlogicalsofttech@gmail.com",
            website: "https://logicalsofttech.com",
            hours: "Opens 10 AM",
            services: "Mobile App, Website Development, SEO/SMM",
            employees: "100+",
            founded: "2015"
        },
        {
            name: "Systology Software Pvt. Ltd.",
            rating: 4.9,
            reviews: 10,
            address: "5/3 Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh 452010",
            phone: "+91 9630904115",
            hr_phone: "+91 9630904116",
            email: "info@systology.co.in",
            hr_email: "careers@systology.co.in",
            website: "https://systology.co.in",
            hours: "Opens 9 AM",
            services: "IT Consulting"
        },
        {
            name: "Walkover Web Solutions Private Limited",
            rating: 4.1,
            reviews: 131,
            address: "5th Floor, LIC Tower, AB Rd, opposite Orbit Mall, Vijay Nagar, Indore",
            phone: "+91 731 2560056",
            hr_phone: "+91 731 2560057",
            email: "info@walkover.in",
            hr_email: "hr@walkover.in",
            website: "https://walkover.in",
            hours: "Opens 9:30 AM",
            services: "Web Solutions",
            employees: "80+",
            founded: "2012"
        },
        {
            name: "Maven Cluster",
            rating: 4.3,
            reviews: 59,
            address: "173 PU4, Vijay Nagar, Indore, Madhya Pradesh 452010",
            phone: "+91 9755555032",
            hr_phone: "+91 9755555033",
            email: "contact@mavencluster.com",
            hr_email: "careers@mavencluster.com",
            website: "https://mavencluster.com",
            hours: "Opens 10 AM",
            services: "Software Solutions"
        },
        {
            name: "Webgility",
            rating: 4.5,
            reviews: 48,
            address: "102 A-B, NRK Business Park, Vijay Nagar, Indore",
            phone: "+91 8777535373",
            hr_phone: "+91 8777535374",
            email: "info@webgility.com",
            hr_email: "careers@webgility.com",
            website: "https://www.webgility.com",
            hours: "Opens 10 AM",
            services: "E-commerce Solutions"
        },
        {
            name: "The AVS Technology",
            rating: 4.5,
            reviews: 23,
            address: "LG49, Orbit Mall, near C21 Mall, Vijay Nagar, Indore",
            phone: "+91 7440449139",
            hr_phone: "+91 7440449140",
            email: "info@theavstechnology.com",
            hr_email: "hr@theavstechnology.com",
            website: "https://theavstechnology.com",
            hours: "Opens 10 AM",
            services: "Software & Website Development"
        },
        {
            name: "Elicit Digital",
            rating: 4.7,
            reviews: 49,
            address: "Plot No. 345, 346, 3rd floor, Scheme 54 PU4, Vijay Nagar, Indore",
            phone: "+91 9111555876",
            hr_phone: "+91 9111555877",
            email: "info@elicitdigital.com",
            hr_email: "careers@elicitdigital.com",
            website: "https://elicitdigital.com",
            hours: "Opens 10 AM",
            services: "AI-Driven Mobile App & Web Development"
        },
        {
            name: "Lemosys",
            rating: 4.3,
            reviews: 69,
            address: "Plot 169, Scheme 78, Part II, Behind Kanak Hospital, Vijay Nagar, Indore",
            phone: "+91 731 4091887",
            hr_phone: "+91 731 4091888",
            email: "info@lemosys.com",
            hr_email: "careers@lemosys.com",
            website: "https://lemosys.com",
            hours: "Opens 9 AM",
            services: "Web Design & Development, IT Staff Augmentation"
        },
        {
            name: "Snayvik Tech Labs Private Limited",
            rating: 4.9,
            reviews: 26,
            address: "Krishna Business Center, 118, Plot No. 11, near Medanta Hospital, Vijay Nagar, Indore",
            phone: "+91 7415519332",
            hr_phone: "+91 7415519333",
            email: "info@snayvik.com",
            hr_email: "careers@snayvik.com",
            website: "https://snayvik.com",
            hours: "Opens 9:30 AM",
            services: "Software Solutions"
        },
        {
            name: "FxBytes Technologies Pvt Ltd",
            rating: 4.1,
            reviews: 21,
            address: "Office No. 314, Shagun Tower A.B. Road, Vijay Nagar Square, Indore",
            phone: "+91 731 4960000",
            hr_phone: "+91 731 4960001",
            email: "info@fxbytes.com",
            hr_email: "careers@fxbytes.com",
            website: "https://fxbytes.com",
            hours: "Opens 8 AM",
            services: "Software Development"
        },
        {
            name: "AT Technologies",
            rating: 5.0,
            reviews: 11,
            address: "Plot 30, First Floor, Scheme No 78 - III, Sector B, Vijay Nagar, Indore",
            phone: "+91 731 4970000",
            hr_phone: "+91 731 4970001",
            email: "info@attechnologies.in",
            hr_email: "careers@attechnologies.in",
            website: "https://attechnologies.in",
            hours: "Opens 10 AM",
            services: "IT Solutions"
        },
        {
            name: "Shanti Infosoft LLP",
            rating: 4.8,
            reviews: 95,
            address: "1st-3rd floor PU4, Plot no 70, Vijay Nagar Square, Indore",
            phone: "+91 9981225000",
            hr_phone: "+91 9981225001",
            email: "info@shantiinfosoft.com",
            hr_email: "careers@shantiinfosoft.com",
            website: "https://shantiinfosoft.com",
            hours: "Opens 10 AM",
            services: "AI / Web and App Design & Development"
        },
        {
            name: "HotWax Systems",
            rating: 4.2,
            reviews: 109,
            address: "80, Vijay Nagar, Indore",
            phone: "+91 731 4093684",
            hr_phone: "+91 731 4093685",
            email: "info@hotwaxsystems.com",
            hr_email: "careers@hotwaxsystems.com",
            website: "https://www.hotwaxsystems.com",
            hours: "Opens 9 AM",
            services: "E-commerce Solutions"
        },
        {
            name: "EncoreSky Technologies Pvt Ltd",
            rating: 4.6,
            reviews: 63,
            address: "350, Vijay Nagar, Indore",
            phone: "+91 731 4967837",
            hr_phone: "+91 731 4967838",
            email: "info@encoresky.com",
            hr_email: "careers@encoresky.com",
            website: "https://encoresky.com",
            hours: "Opens 10 AM",
            services: "Software Development"
        },
        {
            name: "Webllisto",
            rating: 4.7,
            reviews: 61,
            address: "801, Airen Heights, Vijay Nagar, Indore",
            phone: "+91 9589849623",
            hr_phone: "+91 9589849624",
            email: "info@webllisto.com",
            hr_email: "careers@webllisto.com",
            website: "https://webllisto.com",
            hours: "Opens 10:30 AM",
            services: "Web Solutions"
        },
        {
            name: "Techcoopers Software Solutions Pvt. Ltd.",
            rating: 4.5,
            reviews: 28,
            address: "Plot No 8, 2nd Floor, Brilliant Platina, Vijay Nagar, Indore",
            phone: "+91 731 4912780",
            hr_phone: "+91 731 4912781",
            email: "info@techcoopers.com",
            hr_email: "careers@techcoopers.com",
            website: "https://techcoopers.com",
            hours: "Opens 10 AM",
            services: "Software Development"
        },
        {
            name: "Techlene Software Solutions Pvt. Ltd.",
            rating: 4.1,
            reviews: 30,
            address: "P101, Metro Tower, Vijay Nagar Square, near Mangal city, Indore",
            phone: "+91 7047575000",
            hr_phone: "+91 7047575001",
            email: "info@techlene.com",
            hr_email: "careers@techlene.com",
            website: "https://techlene.com",
            hours: "Opens 10 AM",
            services: "Software Solutions"
        },
        {
            name: "IntelliaTech Solutions Pvt Ltd",
            rating: 4.2,
            reviews: 60,
            address: "Plot No.120, near Ana Convent School, Vijay Nagar, Indore",
            phone: "+91 731 4977140",
            hr_phone: "+91 731 4977141",
            email: "info@intelliatech.com",
            hr_email: "careers@intelliatech.com",
            website: "https://intelliatech.com",
            hours: "Opens 10 AM",
            services: "IT Solutions"
        },
        {
            name: "Hyperbeans Technologies Pvt Ltd",
            rating: 4.2,
            reviews: 59,
            address: "A-58, Basant Vihar, AB Rd, behind SBI, Indore",
            phone: "+91 8962868389",
            hr_phone: "+91 8962868390",
            email: "info@hyperbeans.com",
            hr_email: "careers@hyperbeans.com",
            website: "https://hyperbeans.com",
            hours: "Opens 10:30 AM",
            services: "Software Development"
        },
        {
            name: "Simply Alliance Software Solutions Pvt Ltd.",
            rating: 4.8,
            reviews: 11,
            address: "104, 1st Floor, Vijay Nagar Square, Indore",
            phone: "+91 731 4980000",
            hr_phone: "+91 731 4980001",
            email: "info@simplyalliance.com",
            hr_email: "careers@simplyalliance.com",
            website: "https://simplyalliance.com",
            hours: "Opens 11 AM",
            services: "Software Solutions"
        },
        {
            name: "Teclive Technology Pvt. Ltd.",
            rating: 4.9,
            reviews: 27,
            address: "EK 358 Scheme No 54, Vijay Nagar, Indore",
            phone: "+91 9111118291",
            hr_phone: "+91 9111118292",
            email: "info@teclive.co.in",
            hr_email: "careers@teclive.co.in",
            website: "https://teclive.co.in",
            hours: "Opens 11 AM",
            services: "Software Development"
        },
        {
            name: "Evision Software Solutions Pvt. Ltd.",
            rating: 4.5,
            reviews: 18,
            address: "2nd Floor, 296 PU4, Commercial Scheme 54, behind Orbit Mall, Vijay Nagar, Indore",
            phone: "+91 7999058883",
            hr_phone: "+91 7999058884",
            email: "info@evisionsoftware.in",
            hr_email: "careers@evisionsoftware.in",
            website: "https://evisionsoftware.in",
            hours: "Opens 10 AM",
            services: "Software Solutions"
        },
        {
            name: "ESP Softtech PVT LTD",
            rating: 4.8,
            reviews: 87,
            address: "601-602 Princess Business Skyline PU3, Vijay Nagar, Indore",
            phone: "+91 8109784984",
            hr_phone: "+91 8109784985",
            email: "info@espsofttech.com",
            hr_email: "careers@espsofttech.com",
            website: "https://espsofttech.com",
            hours: "Opens 10 AM",
            services: "Blockchain Development"
        },
        {
            name: "Crackkart Infotech Pvt Ltd",
            rating: 4.9,
            reviews: 65,
            address: "AG-131 Scheme No.54, Vijay Nagar, Indore",
            phone: "+91 7224077568",
            hr_phone: "+91 7224077569",
            email: "info@crackkart.com",
            hr_email: "careers@crackkart.com",
            website: "https://crackkart.com",
            hours: "Opens 9 AM",
            services: "E-commerce Solutions"
        },
        {
            name: "EasyComm Innovations Pvt Ltd",
            rating: 5.0,
            reviews: 52,
            address: "9th Floor, 902, Cliffton Corporate, Vijay Nagar, Indore",
            phone: "+91 9244123567",
            hr_phone: "+91 9244123568",
            email: "info@easycomm.in",
            hr_email: "careers@easycomm.in",
            website: "https://easycomm.in",
            hours: "Opens 10 AM",
            services: "Software Solutions"
        },
        {
            name: "Bynebits Infotech Pvt. Ltd.",
            rating: 4.9,
            reviews: 31,
            address: "3rd Floor, Prestige Vihar, Vijay Nagar, Indore",
            phone: "+91 8982815326",
            hr_phone: "+91 8982815327",
            email: "info@bynebits.com",
            hr_email: "careers@bynebits.com",
            website: "https://bynebits.com",
            hours: "Opens 10 AM",
            services: "Software Development"
        },
        {
            name: "Aahan Technologies",
            rating: 4.8,
            reviews: 40,
            address: "Vijay Nagar, Indore",
            phone: "+91 8959362108",
            hr_phone: "+91 8959362109",
            email: "info@aahan.co.in",
            hr_email: "careers@aahan.co.in",
            website: "https://aahan.co.in",
            hours: "Opens 10 AM",
            services: "IT Solutions"
        },
        {
            name: "bluewebspark technologies",
            rating: 4.8,
            reviews: 20,
            address: "NRK Business Park, Vijay Nagar, Scheme No 54, Indore",
            phone: "+91 731 5010000",
            hr_phone: "+91 731 5010001",
            email: "info@bluewebspark.com",
            hr_email: "careers@bluewebspark.com",
            website: "https://bluewebspark.com",
            hours: "Open 24 hours",
            services: "Web Solutions"
        },
        {
            name: "Softvyom Consulting Services Pvt. Ltd.",
            rating: 5.0,
            reviews: 25,
            address: "Shagun Arcade, 312, near Medanta Hospital, Vijay Nagar, Indore",
            phone: "+91 731 5020000",
            hr_phone: "+91 731 5020001",
            email: "info@softvyom.com",
            hr_email: "careers@softvyom.com",
            website: "https://softvyom.com",
            hours: "Opens 10 AM",
            services: "Consulting & Development"
        },
        {
            name: "CYBEANS",
            rating: 5.0,
            reviews: 13,
            address: "1/12, Vijay Nagar Square, Indore",
            phone: "+91 9406786739",
            hr_phone: "+91 9406786740",
            email: "info@cybeans.com",
            hr_email: "careers@cybeans.com",
            website: "https://cybeans.com",
            hours: "Opens 8 AM",
            services: "IT Solutions"
        },
        {
            name: "Techpanda IT Services",
            rating: 4.1,
            reviews: 43,
            address: "Plot Number 109-110 PU4, behind C21 Mall, Vijay Nagar, Indore",
            phone: "+91 9009041407",
            hr_phone: "+91 9009041408",
            email: "info@techpanda.co.in",
            hr_email: "careers@techpanda.co.in",
            website: "https://techpanda.co.in",
            hours: "Opens 10 AM",
            services: "Software Development, Web & App Development"
        },
        {
            name: "Quintus Tech Pvt Ltd",
            rating: 4.8,
            reviews: 54,
            address: "Shagun Arcade, 505, Plot No-8, near Apna Sweets, Vijay Nagar, Indore",
            phone: "+91 731 5030000",
            hr_phone: "+91 731 5030001",
            email: "info@quintustech.com",
            hr_email: "careers@quintustech.com",
            website: "https://quintustech.com",
            hours: "Opens 10 AM",
            services: "IT Solutions"
        },
        {
            name: "SSV Technologies",
            rating: 3.9,
            reviews: 65,
            address: "26, AB Rd, Scheme 54 PU4, Vijay Nagar, Indore",
            phone: "+91 9039063936",
            hr_phone: "+91 9039063937",
            email: "info@ssvtechnologies.com",
            hr_email: "careers@ssvtechnologies.com",
            website: "https://ssvtechnologies.com",
            hours: "Opens 9:30 AM",
            services: "IT Services"
        },
        {
            name: "Techrefic Technologies Pvt. Ltd.",
            rating: 4.6,
            reviews: 26,
            address: "Virtual Coworks, 4th Floor, Mangal city, Vijay Nagar Square, Indore",
            phone: "+91 9644488830",
            hr_phone: "+91 9644488831",
            email: "info@techrefic.com",
            hr_email: "careers@techrefic.com",
            website: "https://techrefic.com",
            hours: "Opens 10 AM",
            services: "IT Solutions"
        },
        {
            name: "Cognizant Technology Solutions India Pvt Ltd",
            rating: 4.8,
            reviews: 71,
            address: "3rd Floor, Brilliant Titanium, Plot No. 9, Vijay Nagar, Indore",
            phone: "+91 731 5040000",
            hr_phone: "+91 731 5040001",
            email: "india.enquiry@cognizant.com",
            hr_email: "recruitment.india@cognizant.com",
            website: "https://www.cognizant.com",
            hours: "Opens 9 AM",
            services: "Enterprise IT Services"
        },
        {
            name: "Appstean Infotech Pvt. Ltd.",
            rating: 4.2,
            reviews: 66,
            address: "Skye Corporate Park, 603-604, Vijay Nagar, Indore",
            phone: "+91 9644410244",
            hr_phone: "+91 9644410245",
            email: "info@appstean.com",
            hr_email: "careers@appstean.com",
            website: "https://appstean.com",
            hours: "Opens 10 AM",
            services: "Software Development"
        },
        {
            name: "CDN Solutions Group",
            rating: 3.8,
            reviews: 107,
            address: "Unit No. 304, Princes Business Skypark, AB Rd, Vijay Nagar, Indore",
            phone: "+91 731 4035928",
            hr_phone: "+91 731 4035929",
            email: "info@cdnsol.com",
            hr_email: "careers@cdnsol.com",
            website: "https://www.cdnsol.com",
            hours: "Opens 10 AM",
            services: "IT Services"
        },
        {
            name: "TechForest Software Pvt. Ltd.",
            rating: 5.0,
            reviews: 30,
            address: "SCH. NO. 54, GF-7, near SICA School Road, Vijay Nagar, Indore",
            phone: "+91 731 4907880",
            hr_phone: "+91 731 4907881",
            email: "info@techforest.in",
            hr_email: "careers@techforest.in",
            website: "https://techforest.in",
            hours: "Open 24 hours",
            services: "Hospital ERP, School ERP, App Development"
        },
        {
            name: "Webkorps Services India Private Limited",
            rating: 4.6,
            reviews: 72,
            address: "4th Floor, Winway World Offices, Vijay Nagar, Indore",
            phone: "+91 731 5050000",
            hr_phone: "+91 731 5050001",
            email: "info@webkorps.com",
            hr_email: "careers@webkorps.com",
            website: "https://webkorps.com",
            hours: "Opens 10 AM",
            services: "IT Services"
        },
        {
            name: "SoftGetix - IT Staff Augmentation Services",
            rating: 4.4,
            reviews: 17,
            address: "519, Shagun Tower, Vijay Nagar Square, Indore",
            phone: "+91 731 4002699",
            hr_phone: "+91 731 4002700",
            email: "info@softgetix.com",
            hr_email: "careers@softgetix.com",
            website: "https://softgetix.com",
            hours: "Opens 10 AM",
            services: "IT Staff Augmentation"
        },
        {
            name: "Techvalens Software Systems",
            rating: 4.1,
            reviews: 112,
            address: "410-OM Gurudev Plaza, Plot No.26 Scheme No.54, Vijay Nagar, Indore",
            phone: "+91 9644506070",
            hr_phone: "+91 9644506071",
            email: "info@techvalens.com",
            hr_email: "careers@techvalens.com",
            website: "https://techvalens.com",
            hours: "Opens 10 AM",
            services: "Software Development"
        },
        {
            name: "DXC Technology",
            rating: 4.1,
            reviews: 286,
            address: "4th & 5th Floor, Brilliant Titanium, Plot No. 9, Scheme 78, Vijay Nagar, Indore",
            phone: "+91 731 4430666",
            hr_phone: "+91 731 4430667",
            email: "info@dxc.com",
            hr_email: "careers@dxc.com",
            website: "https://dxc.com",
            hours: "Opens 9 AM",
            services: "Enterprise IT Services"
        },
        {
            name: "Applatus Technologies Private Limited",
            rating: 5.0,
            reviews: 11,
            address: "2nd floor, Plot no. 347, Vijay Nagar, Indore",
            phone: "+91 9111107373",
            hr_phone: "+91 9111107374",
            email: "info@applatus.com",
            hr_email: "careers@applatus.com",
            website: "https://applatus.com",
            hours: "Opens 9 AM",
            services: "IT Solutions"
        }
    ];


const itParkCompanies = [
    // {name:"IMPETUS TECHNOLOGIES",rating:4.6,reviews:100,address:"Unit No 4-A, STP-II, Third Floor, Crystal IT Park, Indore",phone:"+91 731 4743000",website:"https://impetus.com",hours:"Open 24 hours",services:"Big Data, Analytics, Cloud Computing"},
    // {name:"YASH Technologies",rating:4.7,reviews:103,address:"Crystal IT PARK STP-1, Ground Floor, Indore",phone:"+91 731 6636363",website:"https://www.yash.com",hours:"Opens 10 AM",services:"Digital Transformation, Cloud, AI/ML"},
    // {name:"InfoBeans Technologies",rating:4.5,reviews:193,address:"2nd Floor, Crystal IT Park, Indore",phone:"+91 731 7162000",website:"https://www.infobeans.com",hours:"Opens 9 AM",services:"Product Engineering"},
    // {name:"Immersive",rating:4.8,reviews:97,address:"604, Atulya IT Park, Indore",phone:"+91 80 62180491",website:"https://immersive.io",hours:"Open 24 hours",services:"PHP, JAVA, .Net, Python, Blockchain"},
    // {name:"Worldpay Inc.",rating:4.4,reviews:93,address:"9th Floor, Crystal IT Park-1, Indore",website:"https://www.worldpay.com",hours:"Open 24 hours",services:"Payment Processing Solutions"},
    // {name:"Linkites",rating:4.3,reviews:123,address:"6th Floor, Crystal IT Park, Indore",phone:"+91 731 2970111",website:"https://linkites.com",hours:"Opens 10 AM",services:"Software Development"}
     {
                name: "IMPETUS TECHNOLOGIES (INDIA) PVT LTD",
                rating: 4.6,
                reviews: 100,
                address: "Unit No 4-A, STP-II, Third Floor, Crystal IT Park, Ring Road, Indore",
                phone: "+91 731 4743000",
                website: "https://impetus.com",
                hours: "Open 24 hours",
                services: "Big Data, Analytics, Cloud Computing",
                review: "Good workplace with great learning opportunities"
            },
            {
                name: "YASH Technologies PVT. LTD.",
                rating: 4.7,
                reviews: 103,
                address: "Crystal IT PARK STP-1, Ground Floor, IT/ITES- SEZ, Khandwa Rd, Indore",
                phone: "+91 731 6636363",
                website: "https://www.yash.com",
                hours: "Opens 10 AM",
                services: "Digital Transformation, Cloud, AI/ML",
                review: "Best place to work and employee friendly company with good amount of hike"
            },
            {
                name: "InfoBeans Technologies Limited",
                rating: 4.5,
                reviews: 193,
                address: "2nd Floor, Crystal IT Park, Bhawarkua Main Rd, Indore",
                phone: "+91 731 7162000",
                website: "https://www.infobeans.com",
                hours: "Opens 9 AM",
                services: "Product Engineering, Digital Solutions",
                review: "One of the most tech company provide for student internship"
            },
            {
                name: "Immersive - Software Development Company",
                rating: 4.8,
                reviews: 97,
                address: "604, Atulya IT Park, Bhawarkua Main Rd, next to Crystal IT Park, Indore",
                phone: "+91 80 62180491",
                website: "https://immersive.io",
                hours: "Open 24 hours",
                services: "PHP, JAVA, .Net, Python, Node JS, Blockchain Development"
            },
            {
                name: "Worldpay Inc.",
                rating: 4.4,
                reviews: 93,
                address: "9th Floor, Crystal IT Park-1, Indore",
                website: "https://www.worldpay.com",
                hours: "Open 24 hours",
                services: "Payment Processing Solutions",
                review: "Nice company to join and you can explore your knowledge here"
            },
            {
                name: "Linkites",
                rating: 4.3,
                reviews: 123,
                address: "6th Floor, Building No 1, Right Side, Crystal IT Park, Indore",
                phone: "+91 731 2970111",
                website: "https://linkites.com",
                hours: "Opens 10 AM",
                services: "Software Development",
                review: "Their team's professionalism, technical expertise"
            },
            {
                name: "Mind Ruby Technologies",
                rating: 4.8,
                reviews: 81,
                address: "5th Floor (Right Side), Building STP-1 Crystal IT Park, Khandwa Rd, Indore",
                phone: "+91 731 2927999",
                website: "https://mindruby.com",
                hours: "Opens 10 AM",
                services: "Custom Software Development, Mobile Apps"
            },
            {
                name: "Vertisystem Global Pvt. Ltd. (A MOURI Tech Company)",
                rating: 4.0,
                reviews: 32,
                address: "1st Floor, Crystal IT Park, STP 2, Khandwa Rd, Indore",
                phone: "+91 731 2972377",
                website: "https://vertisystem.com",
                hours: "Open 24 hours",
                services: "IT Services & Solutions",
                review: "Employee engagement and opportunities for advancement"
            },
            {
                name: "Systango",
                rating: 4.4,
                reviews: 123,
                address: "Crystal IT Park, Building 1, 3rd Floor, Ring Rd, Indore",
                phone: "+91 731 2971030",
                website: "https://www.systango.com",
                hours: "Opens 9 AM",
                services: "Product Development, Mobile & Web Apps",
                review: "This place is awesome for big team projects"
            },
            {
                name: "Hiteshi - Best IT Services",
                rating: 3.8,
                reviews: 118,
                address: "8th Floor Crystal IT Park, Indore",
                hr_phone: "+91 731 2971133",
                website: "https://www.hiteshi.com",
                hours: "Opens 9:30 AM",
                services: "Web & Mobile App Development"
            },
            {
                name: "Hokrix Technologies",
                rating: 5.0,
                reviews: 29,
                address: "Crystal It Park, Rajiv Gandhi Circle, Indore",
                phone: "+91 9993438344",
                website: "https://hokrix.com",
                hours: "Opens 10:30 AM",
                services: "Blockchain & AI Development",
                review: "They have sound knowledge of technology and very flexible in working"
            },
            {
                name: "BitByte Software Technology",
                rating: 4.8,
                reviews: 105,
                address: "402, Atulya IT park, MPIDC, Khandwa Rd, opposite to Indian Coffee House, Indore",
                phone: "+91 731 2970998",
                website: "https://bitbyte.in",
                hours: "Opens 10:30 AM",
                services: "Web & Mobile App Development",
                review: "Team work makes the dream work"
            },
            {
                name: "Quest Global Technologies",
                rating: 4.2,
                reviews: 48,
                address: "Atulya IT park, 202, Indore",
                phone: "+91 9826922447",
                website: "https://questglobaltech.com",
                hours: "Opens 10 AM",
                services: "Engineering Solutions"
            },
            {
                name: "Swap Infotech",
                rating: 4.8,
                reviews: 42,
                address: "601, Atulya IT Park, Bhawarkua Main Rd, Indore",
                phone: "+91 9340606911",
                website: "https://swapinfotech.com",
                hours: "Opens 10 AM",
                services: "IT Solutions"
            },
            {
                name: "Shrinkcom Software Private Limited",
                rating: 4.1,
                reviews: 56,
                address: "Atulya IT Park, 602, Indore",
                phone: "+91 8982525343",
                website: "https://shrinkcom.com",
                hours: "Open 24 hours",
                services: "Software Development"
            },
            {
                name: "InfoGrains",
                rating: 4.4,
                reviews: 156,
                address: "407, Atulya IT Park, Bhawarkua Main Rd, Indore",
                hr_phone: "+91 9617635159",
                website: "https://infograins.com",
                hours: "Opens 10 AM",
                services: "Digital Solutions",
                review: "Their team is highly professional, responsive, and technically sound"
            },
            {
                name: "WebiWork Technologies Pvt. Ltd.",
                rating: 4.7,
                reviews: 11,
                address: "6th floor Atulya IT park, Indore",
                phone: "+91 7692906880",
                website: "https://webiwork.com",
                hours: "Opens 10 AM",
                services: "Web & Mobile Development"
            },
            {
                name: "Amstech Incorporation Private Limited",
                rating: 4.9,
                reviews: 36,
                address: "3rd Floor, Veda Business Park, 314, Bhawarkua Main Rd, near Crystal IT Park, Indore",
                hr_phone: "+91 9993126869",
                website: "https://amstechinc.com",
                hours: "Opens 10 AM",
                services: "Software Solutions",
                review: "The work environment at 'Amstech' is simply wonderful"
            },
            {
                name: "Engineer Philosophy Web Services Pvt. Ltd.",
                rating: 4.6,
                reviews: 35,
                address: "205, Atulya IT Park, Khandwa Rd, Indore",
                phone: "+91 9131589465",
                website: "https://engineerphilosophy.com",
                hours: "Opens 9:30 AM",
                services: "Web Development",
                review: "Great place to learn, excel and implement my skills"
            },
            {
                name: "SynergyTop Inc",
                rating: 4.6,
                reviews: 63,
                address: "114 Ground Floor, IT Park, New IT Park Building, 142-A, Indore",
                phone: "+91 7879123770",
                website: "https://synergytop.com",
                hours: "Open 24 hours",
                services: "Software Development & Consulting",
                review: "One of the best IT companies of central India!"
            },
            {
                name: "Impetus Technologies India Pvt. Ltd.",
                rating: 4.5,
                reviews: 113,
                address: "Sarda House, 24-B, AB Rd, near Crystal IT Park, Indore",
                phone: "+91 731 4269300",
                website: "https://www.impetus.com",
                hours: "Opens 9 AM",
                services: "Big Data & Analytics"
            },
            {
                name: "Vista IT Solutions Pvt. Ltd.",
                rating: 4.3,
                reviews: 112,
                address: "142-A, New IT Park building, Indore",
                website: "https://vistaitsolutions.com",
                hours: "Opens 11:30 AM",
                services: "IT Solutions",
                review: "The environment of the company is professional"
            },
            {
                name: "IT Spark Technology Pvt. Ltd.",
                rating: 4.8,
                reviews: 69,
                address: "4th Floor 418 Shekhar Central Manoramaganj, near IT Park, Indore",
                phone: "+91 9109845654",
                website: "https://itspark.in",
                hours: "Opens 10:30 AM",
                services: "Software Development",
                review: "They helped us quickly and precisely on different projects"
            },
            {
                name: "Parkhya Solutions Pvt. Ltd.",
                rating: 4.3,
                reviews: 144,
                address: "121, Devi Ahilya Marg, near IT Park, Indore",
                website: "https://parkhya.com",
                hours: "Opens 9:30 AM",
                services: "Software Solutions"
            },
            {
                name: "Young Decade IT Software Solution",
                rating: 4.7,
                reviews: 533,
                address: "office No 202, 2nd floor, Gracia Heights, Devi Ahilya Marg, above HDFC Bank, Indore",
                phone: "+91 7987611372",
                website: "https://youngdecade.com",
                hours: "Opens 9:30 AM",
                services: "Software Development"
            },
            {
                name: "Conative IT Solutions Pvt. Ltd.",
                rating: 4.0,
                reviews: 129,
                address: "Office No. 217-218, Onam Plaza, Infront of IBus Stop, beside Industry house, Indore",
                phone: "+91 8269788173",
                website: "https://conative.in",
                hours: "Opens 10 AM",
                services: "IT Solutions"
            },
            {
                name: "Sofmen Technologies Private Limited",
                rating: 4.1,
                reviews: 53,
                address: "508, Rafael Tower, 8/2, near IT Park, Indore",
                phone: "+91 731 2565222",
                website: "https://sofmen.com",
                hours: "Opens 10 AM",
                services: "Software Development",
                review: "Good environment, Good behaviour and Great place to learning / Work"
            },
            {
                name: "qualwebs",
                rating: 4.7,
                reviews: 74,
                address: "203, 9930 Spaces 4, Mangal Nagar, Near Rajeev Gandhi Square, AB Rd, Indore",
                phone: "+91 8827796669",
                website: "https://qualwebs.com",
                hours: "Open 24 hours",
                services: "Web Development",
                review: "Amazing company with great projects!"
            },
            {
                name: "Technorizen Software Solution",
                rating: 4.7,
                reviews: 341,
                address: "Sapphire House, 402 A, B, C, Sapna Sangeeta Rd, Indore",
                phone: "+91 7828407092",
                website: "https://technorizen.com",
                hours: "Opens 10 AM",
                services: "Mobile Apps, AI/ML, Blockchain, Digital Marketing"
            },
            {
                name: "Software Technology Parks Of India",
                rating: 4.4,
                reviews: 78,
                address: "New IT Park Building, Atmaram Choudhary Marg, opp. Sukhliya, Indore",
                phone: "+91 731 4030880",
                website: "https://www.stpi.in",
                hours: "Opens 9:30 AM",
                services: "IT Infrastructure & Support"
            },
            {
                name: "EMPOWER INTEGRATED SOLUTIONS (P) LTD.",
                rating: 4.4,
                reviews: 34,
                address: "IT Park, New IT Park Building, Office No. 110, Ground Floor Right Wing, 142 A, Indore",
                phone: "+91 9826027230",
                website: "https://empoweris.com",
                hours: "Opens 9 AM",
                services: "Custom Software Development",
                review: "They offers best customized software development services"
            },
            {
                name: "Logical Soft Tech Private Limited",
                rating: 4.4,
                reviews: 149,
                address: "388, PU4, next to Krozzon Hotel, near IT Park, Indore",
                phone: "+91 8210251824",
                website: "https://logicalsofttech.com",
                hours: "Opens 10 AM",
                services: "Mobile App, Website Development, SEO/SMM",
                review: "Best software company for work with lots of learning opportunities"
            },
            {
                name: "Atulya IT Park",
                rating: 4.3,
                reviews: 202,
                address: "Bhawarkua Main Road, Indore, Madhya Pradesh",
                phone: "+91 7771077700",
                website: "https://atulyaitpark.com",
                hours: "Open 24 hours",
                services: "IT Park Complex",
                review: "Companies and well maintained"
            },
            {
                name: "IT park indore",
                rating: 4.3,
                reviews: 303,
                address: "Khandwa Rd, Indore",
                services: "Technology Park",
                review: "High quality companies and so are the security and features"
            },
            {
                name: "Crystal IT Park",
                rating: 4.4,
                reviews: 2700,
                address: "MVPC+8WC, Indore",
                hours: "Opens 12 AM",
                services: "IT Park Complex",
                review: "Very big it companies are located in crystal park"
            },
            {
                name: "Sinhasa IT Park",
                rating: 4.2,
                reviews: 86,
                address: "IT Park, 28, Indore - Dhar Rd, Indore",
                hours: "Open 24 hours",
                services: "Technology Park",
                review: "Highly recommend for anyone looking to set up operations in Indore!"
            }
];

// Vadodara Companies Data
const vadodaraGotri = [
    {
            name: "Helios Solutions",
            rating: 4.8,
            reviews: 200,
            address: "802, Iscon Atria 2, Gotri Road, Vadodara – 390021, Gujarat",
            phone: "+91 9879717763",
            hr_phone: "+91 9879717764",
            email: "info@heliossolutions.in",
            hr_email: "hr@heliossolutions.in",
            website: "https://heliossolutions.in",
            hours: "Opens 10 AM",
            services: "IoT, AI, AR, VR, Big Data, Chatbot, Blockchain, Software Development",
            employees: "200+",
            founded: "2008",
            review: "15 years of experience delivering 400+ success stories"
        },
        {
            name: "Spaculus Software Pvt. Ltd.",
            rating: 4.7,
            reviews: 150,
            address: "13th Floor, Vihav Supremus, Off, Gotri Rd, near Iscon Heights, Gotri, Vadodara, Gujarat 390021",
            phone: "+91 9825012345",
            hr_phone: "+91 9825012346",
            email: "info@spaculus.com",
            hr_email: "careers@spaculus.com",
            website: "https://spaculus.com",
            hours: "Opens 10 AM",
            services: "Software Development, Mobile Apps, Web Development",
            employees: "150+",
            founded: "2008",
            certifications: "ISO 9001, ISO 27001",
            review: "Leading offshore software development company"
        },
        {
            name: "Atliq Technologies",
            rating: 4.5,
            reviews: 80,
            address: "Gotri Road, Vadodara, Gujarat 390021",
            phone: "+91 9998765432",
            hr_phone: "+91 9998765433",
            email: "info@atliqtech.com",
            hr_email: "hr@atliqtech.com",
            website: "https://atliqtech.com",
            hours: "Opens 9:30 AM",
            services: "IT Solutions, Software Development",
            employees: "60+",
            founded: "2012"
        },
        {
            name: "Inbox Infotech",
            rating: 4.6,
            reviews: 95,
            address: "Gotri Road, Vadodara, Gujarat 390021",
            phone: "+91 9876543210",
            hr_phone: "+91 9876543211",
            email: "contact@inboxinfotech.com",
            hr_email: "hr@inboxinfotech.com",
            website: "https://inboxinfotech.com",
            hours: "Opens 10 AM",
            services: "Web Development, Mobile Apps, IT Infrastructure",
            employees: "80+",
            founded: "2009",
            review: "Customized quality solutions for global clientele"
        },
        {
            name: "Webmyne Systems Pvt. Ltd.",
            rating: 4.7,
            reviews: 180,
            address: "Ivory Terrace, 702, RC Dutt Rd, near Gotri Road, Vadodara, Gujarat 390007",
            phone: "+91 2653506000",
            hr_phone: "+91 2653506001",
            email: "info@webmyne.com",
            hr_email: "careers@webmyne.com",
            website: "https://webmyne.com",
            hours: "Opens 10 AM",
            services: "Software Development, Digital Solutions",
            employees: "180+",
            founded: "2000",
            review: "More than two decades of IT service excellence"
        },
        {
            name: "CDL IT Solutions",
            rating: 4.6,
            reviews: 70,
            address: "329, Arena, Nilamber Corporate Park, Vasna Gotri Link Road, Vadodara, 390007",
            phone: "+91 265 3928697",
            hr_phone: "+91 265 3928698",
            email: "info@cdl-it.com",
            hr_email: "hr@cdl-it.com",
            website: "https://cdl-it.com",
            hours: "Opens 9 AM",
            services: "3PL Logistics Solutions, IT Services",
            employees: "100+",
            founded: "2011"
        },
        {
            name: "NetWeb Software",
            rating: 4.7,
            reviews: 120,
            address: "404-405, Sears Tower, Gotri – Sevasi Road, Main Road, Vadodara-391101 Gujarat",
            phone: "+91 9662398895",
            hr_phone: "+91 9662398896",
            email: "info@netwebindia.com",
            hr_email: "careers@netwebindia.com",
            website: "https://netwebindia.com",
            hours: "Opens 10 AM",
            services: "AI Solutions, Product Development, RPA, Mobile Development",
            employees: "500+",
            founded: "2005",
            review: "High-end software solution provider with global reach"
        },
        {
            name: "Collabera Technologies Pvt Ltd",
            rating: 4.5,
            reviews: 90,
            address: "Gotri Sevasi Road, Gotri, Vadodara Gujarat, 390021",
            phone: "+91 9876543211",
            hr_phone: "+91 9876543212",
            email: "info@collabera.com",
            hr_email: "recruitment@collabera.com",
            website: "https://www.collabera.com",
            hours: "Opens 9 AM",
            services: "Data Analytics, AI, Robotics, IOT",
            employees: "300+",
            founded: "1991",
            review: "MNC providing cutting-edge technology solutions"
        },
        {
            name: "Iscon Atria IT Hub (Multiple Companies)",
            rating: 4.6,
            reviews: 150,
            address: "305, Iscon Atria-1, Gotri Road, Vadodara - 390021",
            phone: "+91 9825000000",
            hr_phone: "+91 9825000001",
            email: "info@isconatria.com",
            hr_email: "leasing@isconatria.com",
            website: "https://isconatria.com",
            hours: "Opens 9:30 AM",
            services: "IT Park hosting multiple IT companies",
            review: "Premium IT park with modern infrastructure"
        },
        {
            name: "Sage Infotech",
            rating: 4.5,
            reviews: 85,
            address: "403, Iscon Atria-2, Gotri Road, Vadodara, Gujarat 390021",
            phone: "+91 265 6540000",
            hr_phone: "+91 265 6540001",
            email: "info@sageinfotech.co.in",
            hr_email: "careers@sageinfotech.co.in",
            website: "https://sageinfotech.co.in",
            hours: "Opens 10 AM",
            services: "Software Development, IT Solutions",
            employees: "120+",
            founded: "2010"
        },
        {
            name: "Radixweb",
            rating: 4.7,
            reviews: 165,
            address: "603-604, Sears Tower, Gotri - Sevasi Road, Vadodara, Gujarat 391101",
            phone: "+91 265 3568000",
            hr_phone: "+91 265 3568001",
            email: "info@radixweb.com",
            hr_email: "hr@radixweb.com",
            website: "https://radixweb.com",
            hours: "Opens 9:30 AM",
            services: "Web & Mobile Development, Cloud Solutions",
            employees: "400+",
            founded: "2000",
            review: "20+ years of digital innovation"
        },
        {
            name: "Magneto IT Solutions",
            rating: 4.6,
            reviews: 135,
            address: "701, Iscon Elegance, Near Iscon Circle, Gotri Road, Vadodara, Gujarat 390021",
            phone: "+91 265 3580000",
            hr_phone: "+91 265 3580001",
            email: "info@magnetoitsolutions.com",
            hr_email: "careers@magnetoitsolutions.com",
            website: "https://magnetoitsolutions.com",
            hours: "Opens 10 AM",
            services: "E-commerce Development, Magento Solutions",
            employees: "250+",
            founded: "2009"
        },
        {
            name: "Sigma IT Solutions",
            rating: 4.5,
            reviews: 92,
            address: "502, Vertex Building, Gotri - Sevasi Road, Vadodara, Gujarat 391101",
            phone: "+91 265 3590000",
            hr_phone: "+91 265 3590001",
            email: "info@sigmait.co.in",
            hr_email: "hr@sigmait.co.in",
            website: "https://sigmait.co.in",
            hours: "Opens 9 AM",
            services: "IT Infrastructure, Software Solutions",
            employees: "90+",
            founded: "2013"
        }
];

const vadodaraAkota = [
        {
            name: "Infosys Limited",
            rating: 5.0,
            reviews: 500,
            address: "Indiabulls Mega Mall, SF-18E, Akota Rd, Anand Nagar, Haripura, Vadodara, Gujarat 390020",
            phone: "+91 80 41563998",
            hr_phone: "+91 80 28522000",
            email: "askus@infosys.com",
            hr_email: "careers@infosys.com",
            website: "https://www.infosys.com",
            hours: "Opens 9 AM",
            services: "IT Consulting, Digital Transformation, Cloud Services, ERP",
            employees: "10000+",
            review: "Leading global IT consulting and services company",
            salary: "Entry: ₹3.2L-5L, Mid: ₹6L-10L, Senior: ₹12L-22L per annum"
        },
        {
            name: "IBM India Private Limited",
            rating: 4.9,
            reviews: 450,
            address: "89, Sheetal Nagar, Akota, Vadodara, Gujarat 390020",
            phone: "+91 80 40114047",
            hr_phone: "+91 80 40114048",
            email: "rccindia@in.ibm.com",
            hr_email: "ibmindiacareers@in.ibm.com",
            website: "https://www.ibm.com",
            hours: "Opens 9 AM",
            services: "Cloud Computing, AI, Machine Learning, Blockchain, Data Analytics, Cybersecurity",
            employees: "5000+",
            review: "Global technology and innovation leader",
            salary: "Entry: ₹4L-6.5L, Mid: ₹7L-14L, Senior: ₹15L-30L per annum"
        },
        {
            name: "Adri IT Solutions",
            rating: 4.7,
            reviews: 110,
            address: "Samanvay Silver, 801-802, Besides Hotel Royal Orchid, Mujmahuda Rd, Pratham Avenue, Akota, Vadodara, Gujarat 390007",
            phone: "+91 9825123456",
            hr_phone: "+91 9825123457",
            email: "info@adriitsolutions.com",
            hr_email: "hr@adriitsolutions.com",
            website: "https://adriitsolutions.com",
            hours: "Opens 10 AM",
            services: "Web Development, Desktop Apps, Mobile Apps, IT Solutions",
            employees: "150+",
            founded: "2005",
            review: "Complete team of professionals with expertise in software development"
        },
        {
            name: "Aditya Infotech",
            rating: 4.4,
            reviews: 65,
            address: "Akota, Vadodara-390020, Gujarat",
            phone: "+91 9909876543",
            hr_phone: "+91 9909876544",
            email: "info@adityainfotech.co.in",
            hr_email: "careers@adityainfotech.co.in",
            website: "https://adityainfotech.co.in",
            hours: "Opens 9:30 AM",
            services: "Web Design, Software Development",
            employees: "40+",
            founded: "2011",
            review: "Local IT service provider with customer focus"
        },
        {
            name: "Concentrix",
            rating: 4.6,
            reviews: 800,
            address: "Near Akota, Vadodara, Gujarat 390020",
            phone: "+91 2653500000",
            hr_phone: "+91 2653500001",
            email: "info.india@concentrix.com",
            hr_email: "careers.india@concentrix.com",
            website: "https://www.concentrix.com",
            hours: "24/7 Operations",
            services: "Customer Experience Solutions, Business Services",
            employees: "2000+",
            review: "Multinational business services firm with customer-focused solutions"
        },
        {
            name: "Webdew",
            rating: 4.8,
            reviews: 140,
            address: "Near HDFC Bank, Sheetal Nagar, Akota, Vadodara, Gujarat 390010",
            phone: "+91 9998877665",
            hr_phone: "+91 9998877666",
            email: "hello@webdew.com",
            hr_email: "careers@webdew.com",
            website: "https://webdew.com",
            hours: "Opens 10 AM",
            services: "Digital Solutions, Web Development, IT Services",
            employees: "100+",
            founded: "2014",
            review: "Core valued IT company with integrity and passion"
        },
        {
            name: "TCS (Tata Consultancy Services)",
            rating: 4.7,
            reviews: 380,
            address: "Indiabulls Mega Mall, 3rd Floor, Akota Road, Vadodara, Gujarat 390020",
            phone: "+91 265 6700000",
            hr_phone: "+91 265 6700001",
            email: "contact.vadodara@tcs.com",
            hr_email: "careers.vadodara@tcs.com",
            website: "https://www.tcs.com",
            hours: "Opens 9 AM",
            services: "IT Services, Consulting, Digital Transformation",
            employees: "3000+",
            review: "India's largest IT services company",
            salary: "Entry: ₹3.5L-4.5L, Mid: ₹6L-12L, Senior: ₹15L-28L per annum"
        },
        {
            name: "Tech Mahindra",
            rating: 4.6,
            reviews: 290,
            address: "Sheetal Nagar, Near Akota Garden, Akota, Vadodara, Gujarat 390020",
            phone: "+91 265 6710000",
            hr_phone: "+91 265 6710001",
            email: "info.vadodara@techmahindra.com",
            hr_email: "careers.vadodara@techmahindra.com",
            website: "https://www.techmahindra.com",
            hours: "Opens 9:30 AM",
            services: "IT Services, Network Services, Digital Solutions",
            employees: "1500+",
            founded: "1986",
            salary: "Entry: ₹3.5L-5L, Mid: ₹6L-13L, Senior: ₹14L-25L per annum"
        },
        {
            name: "Cybage Software",
            rating: 4.5,
            reviews: 175,
            address: "Samanvay Silver Complex, Akota, Vadodara, Gujarat 390007",
            phone: "+91 265 6720000",
            hr_phone: "+91 265 6720001",
            email: "info.vadodara@cybage.com",
            hr_email: "recruitment.vadodara@cybage.com",
            website: "https://www.cybage.com",
            hours: "Opens 10 AM",
            services: "Product Engineering, Quality Engineering, Digital Services",
            employees: "800+",
            founded: "1995"
        },
        {
            name: "Hexaware Technologies",
            rating: 4.6,
            reviews: 210,
            address: "301-302, Samanvay Silver, Akota Road, Vadodara, Gujarat 390007",
            phone: "+91 265 6730000",
            hr_phone: "+91 265 6730001",
            email: "info@hexaware.com",
            hr_email: "careers@hexaware.com",
            website: "https://hexaware.com",
            hours: "Opens 9 AM",
            services: "IT Consulting, Digital Transformation, Cloud Solutions",
            employees: "1200+",
            founded: "1990"
        }
    ];

const vadodaraAlkapuri = [
    // {name:"Dhrup IT Solutions",rating:4.8,reviews:130,address:"National Plaza, S7, RC Dutt Rd, Alkapuri, Vadodara",phone:"+91 9825678901",website:"https://dhrupit.com",hours:"Opens 10 AM",services:"Software Development, IT Solutions"},
    // {name:"Rishabh Software",rating:4.8,reviews:200,address:"Alkapuri Area, Vadodara",phone:"+91 2653500123",website:"https://www.rishabhsoft.com",hours:"Opens 9:30 AM",services:"Software Development, Cloud Solutions"},
    // {name:"Nivida Web Solutions",rating:4.7,reviews:145,address:"305, Privilege Avenue, Vadodara",phone:"+91 9876543234",website:"https://nivida.com",hours:"Opens 10 AM",services:"Web Solutions, IT Consulting"}

     {
            name: "Dhrup IT Solutions Pvt Ltd",
            rating: 4.8,
            reviews: 130,
            address: "National Plaza, S7, RC Dutt Rd, Aradhana Society, Vishwas Colony, Alkapuri, Vadodara, Gujarat 390007",
            phone: "+91 9825678901",
            email: "info@dhrupit.com",
            hr_email: "hr@dhrupit.com",
            website: "https://dhrupit.com",
            hours: "Opens 10 AM",
            services: "Software Development, IT Solutions, Digital Marketing",
            founded: "2016",
            employees: "100+",
            review: "MNC specializing in bespoke IT solutions worldwide"
        },
        {
            name: "CDL Logistics IT",
            rating: 4.6,
            reviews: 85,
            address: "301, 302 Yogi Complex, near Relish Hotel, Sampatrao Colony, Alkapuri, Vadodara, Gujarat 390005",
            phone: "+91 9081234787",
            email: "info@cdl-it.com",
            hr_email: "careers@cdl-it.com",
            website: "https://cdl-it.com",
            hours: "Opens 9 AM",
            services: "3PL Logistics Solutions, IT Management",
            founded: "2011",
            review: "Major UK 3PL logistics brand with Vadodara operations"
        },
        {
            name: "Softcom Industry",
            rating: 4.7,
            reviews: 105,
            address: "702, Ivory Terrace, Opp. Circuit House, R.C. Dutt Road, Vadodara-07 Gujarat",
            phone: "+91 2652345678",
            email: "info@softcomindustry.com",
            hr_email: "hr@softcomindustry.com",
            website: "https://softcomindustry.com",
            hours: "Opens 9:30 AM",
            services: "IT Infrastructure, Technology Solutions",
            review: "Well established IT infrastructure company with global operations"
        },
        {
            name: "Ethics Infotech LLP",
            rating: 4.7,
            reviews: 92,
            address: "SampatRao Colony, Opp. Circuit House, Near Baroda Laparoscopy Centre, Alkapuri, Vadodara Gujarat, India- 390007",
            phone: "+91 9998765444",
            email: "info@ethicsinfotech.com",
            hr_email: "careers@ethicsinfotech.com",
            website: "https://ethicsinfotech.com",
            hours: "Opens 10 AM",
            services: "ERP Software, Business Solutions",
            founded: "2018",
            review: "Best ERP software provider in India at cost-effective rates"
        },
        {
            name: "Bit Infotech",
            rating: 4.6,
            reviews: 78,
            address: "901-903, 9th Floor, Neptune Edge, Sarabhai Compound, Next to Neptune Trinity, Near Genda Circle, Vadodara – 390007",
            phone: "+91 2653456789",
            email: "info@bitinfotech.com",
            hr_email: "hr@bitinfotech.com",
            website: "https://bitinfotech.com",
            hours: "Opens 9 AM",
            services: "IT Services, Engineering Design",
            founded: "2007",
            review: "Pioneer in IT and Engineering Design services globally"
        },
        {
            name: "Nivida Web Solutions Pvt Ltd",
            rating: 4.7,
            reviews: 145,
            address: "305, Privilege Avenue, Opp. Isha Hospital, behind Atlantis Sarabhai campus, Sarabhai Rd, Vadiwadi, Vadodara, Gujarat 390023",
            phone: "+91 9876543234",
            email: "info@nivida.com",
            hr_email: "careers@nivida.com",
            website: "https://nivida.com",
            hours: "Opens 10 AM",
            services: "Web Solutions, IT Consulting, Software Development",
            founded: "2007",
            employees: "150+",
            review: "15 years of experience serving global clients in 7 countries"
        },
        {
            name: "Rishabh Software",
            rating: 4.8,
            reviews: 200,
            address: "Alkapuri Area, Vadodara, Gujarat",
            hr_phone: "+91 2653500123",
            email: "info@rishabhsoft.com",
            hr_email: "careers@rishabhsoft.com",
            website: "https://www.rishabhsoft.com",
            hours: "Opens 9:30 AM",
            services: "Software Development, Digital Transformation, Cloud Solutions",
            employees: "500+",
            founded: "2000",
            review: "Trusted technology partner with impressive infrastructure"}
];

const vadodaraGorwa = [
    // {name:"L&T Technology Services",rating:4.9,reviews:350,address:"L&T Knowledge City, SEZ, Vadodara",phone:"+91 2663008000",website:"https://www.ltts.com",hours:"Opens 9 AM",services:"Engineering R&D, Digital Engineering"},
    // {name:"Reliance Industries IT",rating:4.7,reviews:280,address:"Near Genda Circle, Gorwa, Vadodara",phone:"+91 2262816000",website:"https://www.ril.com",hours:"Opens 9 AM",services:"IT Services, Digital Solutions"},
    // {name:"Symantec Software",rating:4.6,reviews:190,address:"Near Genda Circle, Gorwa, Vadodara",phone:"+91 2653456123",website:"https://www.broadcom.com",hours:"Opens 9:30 AM",services:"Cybersecurity, Enterprise Security"}

    {
            name: "L&T Technology Services (LTTS)",
            rating: 4.9,
            reviews: 350,
            address: "L&T Knowledge City, Special Economic Zone (IT/ITES), West Block – II, NH No. 8, Village Ankhol, Vadodara, Gujarat, 390019",
            phone: "+91 2663008000",
            email: "business.relations@ltts.com",
            hr_email: "recruitment@ltts.com",
            website: "https://www.ltts.com",
            hours: "Opens 9 AM",
            services: "Engineering R&D, Digital Engineering, Embedded Systems, Industrial Automation, AI, IoT",
            employees: "5000+",
            review: "Global leader in engineering research and development services",
            salary: "Entry: ₹4L-7L, Mid: ₹8L-15L, Senior: ₹16L-35L per annum"
        },
        {
            name: "Reliance Industries Ltd - IT Division",
            rating: 4.7,
            reviews: 280,
            address: "Near Genda Circle, Gorwa, Vadodara, Gujarat",
            phone: "+91 2262816000",
            email: "corporate@ril.com",
            hr_email: "careers@ril.com",
            website: "https://www.ril.com",
            hours: "Opens 9 AM",
            services: "IT Services, Digital Solutions, Enterprise Systems",
            employees: "1000+",
            review: "Leading conglomerate with strong IT presence"
        },
        {
            name: "Symantec Software Solutions Pvt Ltd",
            rating: 4.6,
            reviews: 190,
            address: "Near Genda Circle, Gorwa, Vadodara, Gujarat",
            phone: "+91 2653456123",
            email: "info.india@broadcom.com",
            hr_email: "careers.india@broadcom.com",
            website: "https://www.broadcom.com",
            hours: "Opens 9:30 AM",
            services: "Cybersecurity, Enterprise Security Solutions",
            employees: "800+",
            review: "Multinational corporation specializing in security solutions"
        },
        {
            name: "C-Metric Pvt Ltd",
            rating: 4.5,
            reviews: 75,
            address: "Gorwa Area, Vadodara, Gujarat",
            phone: "+91 9876543456",
            email: "info@cmetric.in",
            hr_email: "hr@cmetric.in",
            website: "https://cmetric.in",
            hours: "Opens 10 AM",
            services: "IT Solutions, Software Development",
            review: "Innovative IT company providing tech solutions"
        },
        {
            name: "Oasis Organisation",
            rating: 4.6,
            reviews: 88,
            address: "Gorwa, Vadodara, Gujarat",
            phone: "+91 9988776655",
            email: "contact@oasisorganisation.com",
            hr_email: "careers@oasisorganisation.com",
            website: "https://oasisorganisation.com",
            hours: "Opens 9:30 AM",
            services: "IT Services, Business Solutions",
            review: "Established IT company with diverse service portfolio"
        }
    
];

// Email Templates
const emailTemplates = [
    {
        name: "Template 1 – Asking About Job Openings",
        content: `Hi [HR's Name],

I hope you are doing well. My name is [Your Name], and I am a [Your Job Role] with experience in [Your Key Skills]. I am very interested in opportunities at [Company Name], and I wanted to inquire if there are any current or upcoming openings for a [Job Role] role in your organization.

I would greatly appreciate any information you could share. Thank you for your time, and I look forward to hearing from you.

Best regards,  
[Your Name]`
    },
    {
        name: "Template 2 – When Company is Hiring for DevOps",
        content: `Hi [HR's Name],

I hope you are doing well. My name is [Your Name], and I recently applied for the [Job Role] role at [Company Name]. With my experience in [Key Skills], I believe I am a strong fit for this position.

I am very excited about the opportunity to contribute to [Company Name], and I would be happy if you could take a look at my profile and attached resume. Please let me know if you need any further information.

Thank you for your time and consideration.

Best regards,  
[Your Name]`
    },
    {
        name: "Template 3 – Asking Employee for Referral",
        content: `Hi [Employee's Name],

I hope you are doing well. My name is [Your Name], and I am a [Your Job Role] with experience in [Your Key Skills]. I noticed that [Company Name] is currently hiring for a [Job Role] role, and I feel that my background makes me a strong fit for this position.

Since you're part of the team at [Company Name], I wanted to kindly ask if you'd be open to referring me for this role. I would be truly grateful for your support, and I've attached my resume for your reference.

Thank you for your time, and I completely understand if you're unable to assist at the moment.

Best regards,  
[Your Name]`
    },
    {
        name: "Template 4 – Cold Email to HR (Resume Submission)",
        content: `Subject: Application for [Job Role] Role – [Your Name]

Dear [HR's Name],

I hope this email finds you well. My name is [Your Name], and I am writing to express my interest in the [Job Role] position at [Company Name].

I have hands-on experience in [Key Skills] through [mention any relevant experience or internships]. During my previous roles, I:

• [Example 1 of Achievements or Skills]  
• [Example 2 of Achievements or Skills]  
• [Example 3 of Achievements or Skills]

I believe my background makes me a strong candidate for this role. I've attached my resume for your review, and I would be grateful if you could consider my application.

Thank you for your time and consideration. I look forward to the possibility of contributing to [Company Name].

Best regards,  
[Your Name]  
[Your Email Address]  
[Your Phone Number]  
[LinkedIn | GitHub | Portfolio (Optional)]

Attachment: Resume – [Your Name].pdf`
    }
];

// ========== GLOBAL VARIABLES ==========
let visitedCompanies = {};
let customTemplates = [];
let currentLocation = '';
let currentCity = '';

// ========== STORAGE FUNCTIONS ==========
function loadVisitedData() {
    try {
        const saved = sessionStorage.getItem('visitedCompanies');
        if (saved) visitedCompanies = JSON.parse(saved);
    } catch (e) {
        visitedCompanies = {};
    }
}

function saveVisitedData() {
    try {
        sessionStorage.setItem('visitedCompanies', JSON.stringify(visitedCompanies));
    } catch (e) {
        console.error('Failed to save visited data');
    }
}

function loadCustomTemplates() {
    try {
        const saved = sessionStorage.getItem('customTemplates');
        if (saved) customTemplates = JSON.parse(saved);
    } catch (e) {
        customTemplates = [];
    }
}

function saveCustomTemplates() {
    try {
        sessionStorage.setItem('customTemplates', JSON.stringify(customTemplates));
    } catch (e) {
        console.error('Failed to save custom templates');
    }
}

// ========== NAVIGATION FUNCTIONS ==========
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function showPage(page) {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    
    const pages = ['landingPage', 'citiesPage', 'locationPage', 'listingsPage', 'resourcesPage', 'templatesPage'];
    pages.forEach(p => {
        const element = document.getElementById(p);
        if (element) element.style.display = 'none';
    });
    
    if (page === 'landing') {
        const landingPage = document.getElementById('landingPage');
        if (landingPage) landingPage.style.display = 'block';
    } else if (page === 'cities') {
        const citiesPage = document.getElementById('citiesPage');
        if (citiesPage) citiesPage.style.display = 'block';
    } else if (page === 'resources') {
        const resourcesPage = document.getElementById('resourcesPage');
        const profilesView = document.getElementById('profilesView');
        const devopsDetailView = document.getElementById('devopsDetailView');
        const otherDetailView = document.getElementById('otherDetailView');
        
        if (resourcesPage) resourcesPage.style.display = 'block';
        if (profilesView) profilesView.style.display = 'block';
        if (devopsDetailView) devopsDetailView.style.display = 'none';
        if (otherDetailView) otherDetailView.style.display = 'none';
    } else if (page === 'templates') {
        const templatesPage = document.getElementById('templatesPage');
        if (templatesPage) {
            templatesPage.style.display = 'block';
            renderTemplates();
        }
    }
}

function scrollToFeatures() {
    const features = document.getElementById('features');
    if (features) {
        features.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== CITY & LOCATION FUNCTIONS ==========
function showCityLocations(city) {
    currentCity = city;
    const citiesPage = document.getElementById('citiesPage');
    const locationPage = document.getElementById('locationPage');
    const currentCityName = document.getElementById('currentCityName');
    
    if (citiesPage) citiesPage.style.display = 'none';
    if (locationPage) locationPage.style.display = 'block';
    if (currentCityName) currentCityName.textContent = city === 'indore' ? 'Indore' : 'Vadodara';
    
    const locationsData = {
        indore: [
            {id:'vijayNagar', title:'🏙️ Vijay Nagar Area', subtitle:'Premium IT companies in business district', companies:'47', rating:'4.5', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'},
            {id:'itPark', title:'🏛️ Crystal IT Park', subtitle:'Elite IT companies in IT Park complex', companies:'36', rating:'4.7', img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'}
        ],
        vadodara: [
            {id:'gotri', title:'🌆 Gotri Area', subtitle:'Major IT hub with leading companies', companies:'13', rating:'4.7', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'},
            {id:'akota', title:'🏢 Akota Area', subtitle:'MNC headquarters and tech giants', companies:'10', rating:'4.8', img:'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=600&q=60'},
            {id:'alkapuri', title:'🏛️ Alkapuri', subtitle:'Established IT companies zone', companies:'7', rating:'4.7', img:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'},
            {id:'gorwa', title:'🌐 Gorwa Area', subtitle:'Enterprise and engineering firms', companies:'5', rating:'4.8', img:'https://media.istockphoto.com/id/1953260993/photo/3d-image-of-large-open-space-coworking-office-interior.jpg?s=2048x2048&w=is&k=20&c=3U0ySyyhfcGgJWpRfi0_PQDqDpLZhsS5s4TFPEDbylE='}
        ]
    };

    const locations = locationsData[city];
    const locationCards = document.getElementById('locationCards');
    
    if (locationCards && locations) {
        const html = locations.map(loc => `
            <div class="location-card" onclick="showListings('${loc.id}')">
                <div class="location-image" style="background-image: url('${loc.img}');"></div>
                <div class="location-content">
                    <h2 class="location-title">${loc.title}</h2>
                    <p class="location-subtitle">${loc.subtitle}</p>
                    <div class="location-stats">
                        <div class="location-stat"><span>🏢</span><span>${loc.companies} Companies</span></div>
                        <div class="location-stat"><span>⭐</span><span>${loc.rating} Rating</span></div>
                    </div>
                    <button class="location-btn">Explore Companies →</button>
                </div>
            </div>
        `).join('');
        
        locationCards.innerHTML = html;
    }
}

function goBackToLocations() {
    const listingsPage = document.getElementById('listingsPage');
    const locationPage = document.getElementById('locationPage');
    
    if (listingsPage) listingsPage.style.display = 'none';
    if (locationPage) locationPage.style.display = 'block';
}

// ========== COMPANY LISTING FUNCTIONS ==========
function showListings(location) {
    currentLocation = location;
    loadVisitedData();
    
    const locationData = {
        vijayNagar: {companies: vijayNagarCompanies, title: '🏙️ Vijay Nagar - IT Companies', subtitle: 'Premium IT companies in Vijay Nagar'},
        itPark: {companies: itParkCompanies, title: '🏛️ Crystal IT Park - Companies', subtitle: 'Elite IT companies in Crystal IT Park'},
        gotri: {companies: vadodaraGotri, title: '🌆 Gotri - IT Companies', subtitle: 'Major IT hub companies'},
        akota: {companies: vadodaraAkota, title: '🏢 Akota - IT Companies', subtitle: 'MNC and tech giants'},
        alkapuri: {companies: vadodaraAlkapuri, title: '🏛️ Alkapuri - IT Companies', subtitle: 'Established IT zone'},
        gorwa: {companies: vadodaraGorwa, title: '🌐 Gorwa - IT Companies', subtitle: 'Enterprise firms'}
    };

    const data = locationData[location];
    if (!data) return;
    
    const listingsTitle = document.getElementById('listingsTitle');
    const listingsSubtitle = document.getElementById('listingsSubtitle');
    const locationPage = document.getElementById('locationPage');
    const listingsPage = document.getElementById('listingsPage');
    
    if (listingsTitle) listingsTitle.textContent = data.title;
    if (listingsSubtitle) listingsSubtitle.textContent = data.subtitle;
    if (locationPage) locationPage.style.display = 'none';
    if (listingsPage) listingsPage.style.display = 'block';
    
    renderCompanies(data.companies);
    updateStats(data.companies);
}

function renderCompanies(companies) {
    const grid = document.getElementById('companiesGrid');
    const filteredCount = document.getElementById('filteredCount');
    
    if (!grid) return;
    if (filteredCount) filteredCount.textContent = companies.length;
    
    if (companies.length === 0) {
        grid.innerHTML = '<div class="no-results">No companies found matching your criteria 😔</div>';
        return;
    }

    grid.innerHTML = companies.map(c => {
        const isVisited = visitedCompanies[c.name] || false;
        return `
            <div class="company-card ${isVisited ? 'visited' : ''}">
                <div class="company-header">
                    <div class="company-name">${c.name}</div>
                    <input type="checkbox" class="visited-checkbox" 
                           ${isVisited ? 'checked' : ''}
                           onchange="toggleVisited('${c.name.replace(/'/g, "\\'")}', this)"
                           title="Mark as visited">
                </div>
                <div class="rating">⭐ ${c.rating} (${c.reviews} reviews)</div>
                <div class="company-info"><strong>📍 Address:</strong> ${c.address}</div>
                ${c.phone ? `<div class="company-info"><strong>📞 hr_Phone:</strong> ${c.hr_phone}</div>` : ''}
                ${c.email ? `<div class="company-info"><strong>📧 hr_Email:</strong> ${c.hr_email}</div>` : ''}
                <div class="company-info"><strong>🕒 Hours:</strong> ${c.hours}</div>
                <div class="company-info"><strong>💼 Services:</strong> ${c.services}</div>
                ${c.review ? `<div class="review">"${c.review}"</div>` : ''}
                <a href="${c.website}" target="_blank" class="company-link">🌐 Visit Website</a>
            </div>
        `;
    }).join('');
}

function getAllCurrentCompanies() {
    const locationData = {
        vijayNagar: vijayNagarCompanies,
        itPark: itParkCompanies,
        gotri: vadodaraGotri,
        akota: vadodaraAkota,
        alkapuri: vadodaraAlkapuri,
        gorwa: vadodaraGorwa
    };
    return locationData[currentLocation] || [];
}

function updateStats(companies) {
    const visitedCount = Object.values(visitedCompanies).filter(v => v).length;
    const avgRating = companies.length > 0 
        ? (companies.reduce((sum, c) => sum + c.rating, 0) / companies.length).toFixed(1)
        : '0.0';
    
    const totalCompaniesEl = document.getElementById('totalCompanies');
    const visitedCountEl = document.getElementById('visitedCount');
    const avgRatingEl = document.getElementById('avgRating');
    
    if (totalCompaniesEl) totalCompaniesEl.textContent = companies.length;
    if (visitedCountEl) visitedCountEl.textContent = visitedCount;
    if (avgRatingEl) avgRatingEl.textContent = avgRating;
}

function toggleVisited(name, checkbox) {
    visitedCompanies[name] = checkbox.checked;
    saveVisitedData();
    
    const allCompanies = getAllCurrentCompanies();
    updateStats(allCompanies);
    
    const card = checkbox.closest('.company-card');
    if (card) {
        card.classList.toggle('visited', checkbox.checked);
    }
}

function filterCompanies() {
    const companies = getAllCurrentCompanies();
    const searchInput = document.getElementById('searchInput');
    const ratingFilter = document.getElementById('ratingFilter');
    const visitedFilter = document.getElementById('visitedFilter');
    
    if (!searchInput || !ratingFilter || !visitedFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const ratingValue = parseFloat(ratingFilter.value);
    const visitedValue = visitedFilter.value;

    let filtered = companies.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm) ||
                            c.address.toLowerCase().includes(searchTerm) ||
                            c.services.toLowerCase().includes(searchTerm);
        const matchesRating = isNaN(ratingValue) || c.rating >= ratingValue;
        
        let matchesVisited = true;
        if (visitedValue === 'visited') {
            matchesVisited = visitedCompanies[c.name] === true;
        } else if (visitedValue === 'notVisited') {
            matchesVisited = !visitedCompanies[c.name];
        }

        return matchesSearch && matchesRating && matchesVisited;
    });

    renderCompanies(filtered);
}

function clearAllVisited() {
    if (confirm('Are you sure you want to clear all checkmarks for this location?')) {
        const companies = getAllCurrentCompanies();
        companies.forEach(c => delete visitedCompanies[c.name]);
        saveVisitedData();
        updateStats(companies);
        filterCompanies();
    }
}

function exportVisited() {
    const companies = getAllCurrentCompanies();
    const visited = companies.filter(c => visitedCompanies[c.name]);
    
    const locationNames = {
        vijayNagar: 'Vijay Nagar',
        itPark: 'Crystal IT Park',
        gotri: 'Gotri',
        akota: 'Akota',
        alkapuri: 'Alkapuri',
        gorwa: 'Gorwa'
    };
    
    const locationName = locationNames[currentLocation] || currentLocation;
    const data = visited.map(c => 
        `${c.name}\n${c.website}\n${c.phone || 'N/A'}\n---`
    ).join('\n');
    
    const content = `Visited Companies - ${locationName} (${visited.length})\n\n${data}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visited-companies-${currentLocation}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// ========== RESOURCES FUNCTIONS ==========
// function showResourceDetail(profile) {
//     const profilesView = document.getElementById('profilesView');
//     const devopsDetailView = document.getElementById('devopsDetailView');
//     const otherDetailView = document.getElementById('otherDetailView');
    
//     if (profilesView) profilesView.style.display = 'none';
    
//     if (profile === 'devops') {
//         if (devopsDetailView) devopsDetailView.style.display = 'block';
//         if (otherDetailView) otherDetailView.style.display = 'none';
//     } else {
//         showOtherProfile(profile);
//     }
// }

// function showOtherProfile(profile) {
//     const devopsDetailView = document.getElementById('devopsDetailView');
//     const otherDetailView = document.getElementById('otherDetailView');
//     const otherDetailContent = document.getElementById('otherDetailContent');
    
//     if (devopsDetailView) devopsDetailView.style.display = 'none';
//     if (otherDetailView) otherDetailView.style.display = 'block';
//     if (!otherDetailContent) return;
    
//     const profileData = {
//         datascience: {
//             icon: '📊',
//             title: 'Data Science Roadmap',
//             description: 'Master data analysis, machine learning, and AI',
//             roadmap: [
//                 {num: '01', title: '📊 Statistics & Probability', items: ['Descriptive Statistics', 'Probability Theory', 'Hypothesis Testing', 'Statistical Distributions']},
//                 {num: '02', title: '🐍 Python for Data Science', items: ['NumPy & Pandas', 'Data Manipulation', 'Data Visualization (Matplotlib, Seaborn)', 'Jupyter Notebooks']},
//                 {num: '03', title: '📈 Data Analysis', items: ['Exploratory Data Analysis', 'Data Cleaning', 'Feature Engineering', 'Data Preprocessing']},
//                 {num: '04', title: '🤖 Machine Learning', items: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn Library', 'Model Evaluation']},
//                 {num: '05', title: '🧠 Deep Learning', items: ['Neural Networks', 'TensorFlow & Keras', 'CNN, RNN, LSTM', 'Transfer Learning']},
//                 {num: '06', title: '📊 Big Data Tools', items: ['SQL & Databases', 'Apache Spark', 'Hadoop Basics', 'Data Warehousing']},
//                 {num: '07', title: '📉 Data Visualization', items: ['Tableau/Power BI', 'Advanced Plotting', 'Dashboard Creation', 'Storytelling with Data']},
//                 {num: '08', title: '☁️ MLOps & Deployment', items: ['Model Deployment', 'Docker for ML', 'Cloud Platforms (AWS/Azure)', 'CI/CD for ML']}
//             ]
//         },
//         businessanalyst: {
//             icon: '💼',
//             title: 'Business Analyst Roadmap',
//             description: 'Requirements gathering and business process optimization',
//             roadmap: [
//                 {num: '01', title: '📋 BA Fundamentals', items: ['Business Analysis Basics', 'BABOK Framework', 'Agile & Waterfall', 'BA Tools Overview']},
//                 {num: '02', title: '🎯 Requirements Gathering', items: ['Elicitation Techniques', 'Stakeholder Analysis', 'User Stories & Use Cases', 'Requirements Documentation']},
//                 {num: '03', title: '📊 Data Analysis', items: ['Excel Advanced', 'SQL for Analysis', 'Data Visualization', 'Statistical Analysis']},
//                 {num: '04', title: '🔄 Process Modeling', items: ['BPMN', 'Flowcharts', 'Process Mapping', 'Gap Analysis']},
//                 {num: '05', title: '📈 Business Intelligence', items: ['Power BI/Tableau', 'Dashboard Design', 'KPI Development', 'Reporting']},
//                 {num: '06', title: '🤝 Stakeholder Management', items: ['Communication Skills', 'Presentation Techniques', 'Conflict Resolution', 'Change Management']},
//                 {num: '07', title: '📝 Documentation', items: ['BRD, FRD, SRS', 'User Manuals', 'Test Cases', 'Technical Writing']},
//                 {num: '08', title: '🎓 Certifications', items: ['CBAP/CCBA', 'Agile BA (IIBA)', 'PMI-PBA', 'CSPO']}
//             ]
//         },
//         frontend: {
//             icon: '🎨',
//             title: 'Frontend Developer Roadmap',
//             description: 'Build beautiful and responsive user interfaces',
//             roadmap: [
//                 {num: '01', title: '🌐 HTML Basics', items: ['Semantic HTML', 'Forms & Validation', 'Accessibility', 'SEO Fundamentals']},
//                 {num: '02', title: '🎨 CSS Mastery', items: ['CSS Selectors', 'Flexbox & Grid', 'Responsive Design', 'Animations & Transitions']},
//                 {num: '03', title: '⚡ JavaScript', items: ['ES6+ Features', 'DOM Manipulation', 'Async/Await', 'Fetch API']},
//                 {num: '04', title: '⚛️ React.js', items: ['Components & Props', 'State Management', 'Hooks', 'React Router']},
//                 {num: '05', title: '🎭 Advanced React', items: ['Context API', 'Redux/Zustand', 'Performance Optimization', 'Testing']},
//                 {num: '06', title: '🎯 TypeScript', items: ['Type System', 'Interfaces', 'Generics', 'TypeScript with React']},
//                 {num: '07', title: '🛠️ Build Tools', items: ['Webpack/Vite', 'Babel', 'NPM/Yarn', 'Git & GitHub']},
//                 {num: '08', title: '🚀 Deployment', items: ['Vercel/Netlify', 'CI/CD', 'Performance Optimization', 'SEO & Analytics']}
//             ]
//         },
//         backend: {
//             icon: '🔧',
//             title: 'Backend Developer Roadmap',
//             description: 'Server-side development and database management',
//             roadmap: [
//                 {num: '01', title: '🐍 Choose Language', items: ['Python/Node.js/Java', 'Language Fundamentals', 'OOP Concepts', 'Design Patterns']},
//                 {num: '02', title: '🌐 Web Fundamentals', items: ['HTTP/HTTPS', 'REST APIs', 'Authentication', 'Web Security']},
//                 {num: '03', title: '🗄️ Databases', items: ['SQL (PostgreSQL/MySQL)', 'NoSQL (MongoDB)', 'Database Design', 'Query Optimization']},
//                 {num: '04', title: '🚀 Backend Framework', items: ['Express.js/Django/Spring', 'Routing', 'Middleware', 'Error Handling']},
//                 {num: '05', title: '🔐 Authentication', items: ['JWT', 'OAuth 2.0', 'Session Management', 'Security Best Practices']},
//                 {num: '06', title: '📊 API Development', items: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Versioning']},
//                 {num: '07', title: '☁️ Cloud & DevOps', items: ['AWS/Azure Basics', 'Docker', 'CI/CD Pipelines', 'Monitoring']},
//                 {num: '08', title: '⚡ Advanced Topics', items: ['Microservices', 'Caching (Redis)', 'Message Queues', 'Scalability']}
//             ]
//         },
//         fullstack: {
//             icon: '🚀',
//             title: 'Full Stack Developer Roadmap',
//             description: 'Complete web development from frontend to backend',
//             roadmap: [
//                 {num: '01', title: '🌐 Frontend Basics', items: ['HTML5, CSS3', 'JavaScript ES6+', 'Responsive Design', 'UI/UX Principles']},
//                 {num: '02', title: '⚛️ Frontend Framework', items: ['React/Vue/Angular', 'State Management', 'Component Libraries', 'Testing']},
//                 {num: '03', title: '🔧 Backend Basics', items: ['Node.js/Python', 'HTTP & REST', 'Server Concepts', 'API Design']},
//                 {num: '04', title: '🗄️ Databases', items: ['SQL & NoSQL', 'ORMs', 'Database Design', 'Queries & Optimization']},
//                 {num: '05', title: '🔐 Authentication', items: ['JWT & Sessions', 'OAuth', 'Security', 'Authorization']},
//                 {num: '06', title: '☁️ DevOps Basics', items: ['Git & GitHub', 'Docker', 'CI/CD', 'Cloud Deployment']},
//                 {num: '07', title: '📱 Advanced Topics', items: ['WebSockets', 'GraphQL', 'Microservices', 'Performance']},
//                 {num: '08', title: '🎯 Best Practices', items: ['Code Quality', 'Testing', 'Documentation', 'Scalability']}
//             ]
//         }
        
//     }
// };

//     const data = profileData[profile];
//     if (!data) return;
    
//     const html = `
//         <div class="detail-header">
//             <h2>${data.icon} ${data.title}</h2>
//             <p>${data.description}</p>
//         </div>
        
//         <div class="roadmap-container">
//             <h3 class="roadmap-title">Learning Journey</h3>
//             <div class="roadmap-path"></div> 
//             ${data.roadmap.map((node, i) => `
//                 <div class="roadmap-node">
//                     <div class="node-content node-${i + 1}">
//                         <div class="node-number">${node.num}</div>
//                         <div class="node-title"><span>${node.title}</span></div>
//                         <ul class="node-items">
//                             ${node.items.map(item => `<li>${item}</li>`).join('')}
//                         </ul>
//                     </div>
//                 </div>
//             `).join('')}
//         </div>
        
//         <div style="text-align:center; padding:60px 20px; background:#f9f9f9; border-radius:20px; margin-top:40px;">
//             <h3 style="font-size:2em; color:#C1121F; margin-bottom:20px;">🚀 Coming Soon!</h3>
//             <p style="font-size:1.2em; color:#666;">Free learning resources, YouTube channels, and hands-on projects are on the way!</p>
//             <p style="font-size:1em; color:#999; margin-top:15px;">Stay tuned for complete learning materials 📚</p>
//         </div>
//     `;
    
//     otherDetailContent.innerHTML = html;

function showResourceDetail(profile) {
    const profilesView = document.getElementById('profilesView');
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    
    if (profilesView) profilesView.style.display = 'none';
    
    if (profile === 'devops') {
        if (devopsDetailView) devopsDetailView.style.display = 'block';
        if (otherDetailView) otherDetailView.style.display = 'none';
    } else {
        showOtherProfile(profile);
    }
}

function showOtherProfile(profile) {
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    const otherDetailContent = document.getElementById('otherDetailContent');
    
    if (devopsDetailView) devopsDetailView.style.display = 'none';
    if (otherDetailView) otherDetailView.style.display = 'block';
    if (!otherDetailContent) return;
    
    const profileData = {
        datascience: {
            icon: '📊',
            title: 'Data Science Roadmap',
            description: 'Master data analysis, machine learning, and AI',
            roadmap: [
                {num: '01', title: '📊 Statistics & Probability', items: ['Descriptive Statistics', 'Probability Theory', 'Hypothesis Testing', 'Statistical Distributions']},
                {num: '02', title: '🐍 Python for Data Science', items: ['NumPy & Pandas', 'Data Manipulation', 'Data Visualization (Matplotlib, Seaborn)', 'Jupyter Notebooks']},
                {num: '03', title: '📈 Data Analysis', items: ['Exploratory Data Analysis', 'Data Cleaning', 'Feature Engineering', 'Data Preprocessing']},
                {num: '04', title: '🤖 Machine Learning', items: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn Library', 'Model Evaluation']},
                {num: '05', title: '🧠 Deep Learning', items: ['Neural Networks', 'TensorFlow & Keras', 'CNN, RNN, LSTM', 'Transfer Learning']},
                {num: '06', title: '📊 Big Data Tools', items: ['SQL & Databases', 'Apache Spark', 'Hadoop Basics', 'Data Warehousing']},
                {num: '07', title: '📉 Data Visualization', items: ['Tableau/Power BI', 'Advanced Plotting', 'Dashboard Creation', 'Storytelling with Data']},
                {num: '08', title: '☁️ MLOps & Deployment', items: ['Model Deployment', 'Docker for ML', 'Cloud Platforms (AWS/Azure)', 'CI/CD for ML']}
            ]
        },
        businessanalyst: {
            icon: '💼',
            title: 'Business Analyst Roadmap',
            description: 'Requirements gathering and business process optimization',
            roadmap: [
                {num: '01', title: '📋 BA Fundamentals', items: ['Business Analysis Basics', 'BABOK Framework', 'Agile & Waterfall', 'BA Tools Overview']},
                {num: '02', title: '🎯 Requirements Gathering', items: ['Elicitation Techniques', 'Stakeholder Analysis', 'User Stories & Use Cases', 'Requirements Documentation']},
                {num: '03', title: '📊 Data Analysis', items: ['Excel Advanced', 'SQL for Analysis', 'Data Visualization', 'Statistical Analysis']},
                {num: '04', title: '🔄 Process Modeling', items: ['BPMN', 'Flowcharts', 'Process Mapping', 'Gap Analysis']},
                {num: '05', title: '📈 Business Intelligence', items: ['Power BI/Tableau', 'Dashboard Design', 'KPI Development', 'Reporting']},
                {num: '06', title: '🤝 Stakeholder Management', items: ['Communication Skills', 'Presentation Techniques', 'Conflict Resolution', 'Change Management']},
                {num: '07', title: '📝 Documentation', items: ['BRD, FRD, SRS', 'User Manuals', 'Test Cases', 'Technical Writing']},
                {num: '08', title: '🎓 Certifications', items: ['CBAP/CCBA', 'Agile BA (IIBA)', 'PMI-PBA', 'CSPO']}
            ]
        },
        frontend: {
            icon: '🎨',
            title: 'Frontend Developer Roadmap',
            description: 'Build beautiful and responsive user interfaces',
            roadmap: [
                {num: '01', title: '🌐 HTML Basics', items: ['Semantic HTML', 'Forms & Validation', 'Accessibility', 'SEO Fundamentals']},
                {num: '02', title: '🎨 CSS Mastery', items: ['CSS Selectors', 'Flexbox & Grid', 'Responsive Design', 'Animations & Transitions']},
                {num: '03', title: '⚡ JavaScript', items: ['ES6+ Features', 'DOM Manipulation', 'Async/Await', 'Fetch API']},
                {num: '04', title: '⚛️ React.js', items: ['Components & Props', 'State Management', 'Hooks', 'React Router']},
                {num: '05', title: '🎭 Advanced React', items: ['Context API', 'Redux/Zustand', 'Performance Optimization', 'Testing']},
                {num: '06', title: '🎯 TypeScript', items: ['Type System', 'Interfaces', 'Generics', 'TypeScript with React']},
                {num: '07', title: '🛠️ Build Tools', items: ['Webpack/Vite', 'Babel', 'NPM/Yarn', 'Git & GitHub']},
                {num: '08', title: '🚀 Deployment', items: ['Vercel/Netlify', 'CI/CD', 'Performance Optimization', 'SEO & Analytics']}
            ]
        },
        backend: {
            icon: '🔧',
            title: 'Backend Developer Roadmap',
            description: 'Server-side development and database management',
            roadmap: [
                {num: '01', title: '🐍 Choose Language', items: ['Python/Node.js/Java', 'Language Fundamentals', 'OOP Concepts', 'Design Patterns']},
                {num: '02', title: '🌐 Web Fundamentals', items: ['HTTP/HTTPS', 'REST APIs', 'Authentication', 'Web Security']},
                {num: '03', title: '🗄️ Databases', items: ['SQL (PostgreSQL/MySQL)', 'NoSQL (MongoDB)', 'Database Design', 'Query Optimization']},
                {num: '04', title: '🚀 Backend Framework', items: ['Express.js/Django/Spring', 'Routing', 'Middleware', 'Error Handling']},
                {num: '05', title: '🔐 Authentication', items: ['JWT', 'OAuth 2.0', 'Session Management', 'Security Best Practices']},
                {num: '06', title: '📊 API Development', items: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Versioning']},
                {num: '07', title: '☁️ Cloud & DevOps', items: ['AWS/Azure Basics', 'Docker', 'CI/CD Pipelines', 'Monitoring']},
                {num: '08', title: '⚡ Advanced Topics', items: ['Microservices', 'Caching (Redis)', 'Message Queues', 'Scalability']}
            ]
        },
        fullstack: {
            icon: '🚀',
            title: 'Full Stack Developer Roadmap',
            description: 'Complete web development from frontend to backend',
            roadmap: [
                {num: '01', title: '🌐 Frontend Basics', items: ['HTML5, CSS3', 'JavaScript ES6+', 'Responsive Design', 'UI/UX Principles']},
                {num: '02', title: '⚛️ Frontend Framework', items: ['React/Vue/Angular', 'State Management', 'Component Libraries', 'Testing']},
                {num: '03', title: '🔧 Backend Basics', items: ['Node.js/Python', 'HTTP & REST', 'Server Concepts', 'API Design']},
                {num: '04', title: '🗄️ Databases', items: ['SQL & NoSQL', 'ORMs', 'Database Design', 'Queries & Optimization']},
                {num: '05', title: '🔐 Authentication', items: ['JWT & Sessions', 'OAuth', 'Security', 'Authorization']},
                {num: '06', title: '☁️ DevOps Basics', items: ['Git & GitHub', 'Docker', 'CI/CD', 'Cloud Deployment']},
                {num: '07', title: '📱 Advanced Topics', items: ['WebSockets', 'GraphQL', 'Microservices', 'Performance']},
                {num: '08', title: '🎯 Best Practices', items: ['Code Quality', 'Testing', 'Documentation', 'Scalability']}
            ]
        }
    };
    
    const data = profileData[profile];
    if (!data) return;
    
    const html = `
        <div class="detail-header">
            <h2>${data.icon} ${data.title}</h2>
            <p>${data.description}</p>
        </div>
        
        <div class="roadmap-container">
            <h3 class="roadmap-title">Learning Journey</h3>
            <div class="roadmap-path"></div> 
            ${data.roadmap.map((node, i) => `
                <div class="roadmap-node">
                    <div class="node-content node-${i + 1}">
                        <div class="node-number">${node.num}</div>
                        <div class="node-title"><span>${node.title}</span></div>
                        <ul class="node-items">
                            ${node.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="text-align:center; padding:60px 20px; background:#f9f9f9; border-radius:20px; margin-top:40px;">
            <h3 style="font-size:2em; color:#C1121F; margin-bottom:20px;">🚀 Coming Soon!</h3>
            <p style="font-size:1.2em; color:#666;">Free learning resources, YouTube channels, and hands-on projects are on the way!</p>
            <p style="font-size:1em; color:#999; margin-top:15px;">Stay tuned for complete learning materials 📚</p>
        </div>
    `;
    
    otherDetailContent.innerHTML = html;
}




    

// English Communication Resources
function showEnglishResources() {
    const profilesView = document.getElementById('profilesView');
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    
    if (profilesView) profilesView.style.display = 'none';
    if (devopsDetailView) devopsDetailView.style.display = 'none';
    if (otherDetailView) {
        otherDetailView.style.display = 'block';
        const otherDetailContent = document.getElementById('otherDetailContent');
        
        if (otherDetailContent) {
            const englishContent = `
                <div class="detail-header">
                    <h2>🗣️ English Communication Mastery</h2>
                    <p>Transform your English speaking skills with these curated resources and proven strategies</p>
                </div>

                <div class="resources-section">
                    <h3>📌 Quick Tips to Improve Your English</h3>
                    <div class="roadmap-container" style="padding: 30px;">
                        <div class="node-items" style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #667eea;">
                                <strong>Practice Daily:</strong> Spend at least 30 minutes every day speaking English, even if it's talking to yourself or reading aloud.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #5ea7f7;">
                                <strong>Think in English:</strong> Start thinking in English instead of translating from your native language. This builds fluency faster.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #4ecdc4;">
                                <strong>Watch & Learn:</strong> Watch English movies, series, and YouTube videos with subtitles. Pay attention to pronunciation and expressions.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #ffa726;">
                                <strong>Record Yourself:</strong> Record your voice while speaking English and listen back. Identify areas for improvement.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #ff6b9d;">
                                <strong>Practice with Others:</strong> Join English speaking groups, find language partners, or practice with friends who are also learning.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #c471ed;">
                                <strong>Read Regularly:</strong> Read English newspapers, blogs, or books daily. This improves vocabulary and sentence structure.
                            </li>
                        </div>
                    </div>
                </div>

                <div class="resources-section">
                    <h3>🎬 Top YouTube Channels</h3>
                    <div class="resource-category">
                        <div class="resource-links">
                            <div class="resource-card">
                                <h5>Janhavi Panwar - Wonder Girl <span class="free-badge">FREE</span></h5>
                                <p>Expert in 8 different English accents. Learn pronunciation, communication skills, and speak with confidence. Perfect for beginners and advanced learners.</p>
                                <a href="https://www.youtube.com/@WonderGirlJanhavi" target="_blank" class="resource-link">Watch Channel</a>
                            </div>
                            
                            <div class="resource-card">
                                <h5>Janhavi's Courses <span class="free-badge">PAID</span></h5>
                                <p>Structured courses with accent training, fluency programs, and personalized feedback. 90-day English mastery programs available.</p>
                                <a href="https://janhavipanwar.com/course-2/" target="_blank" class="resource-link">Explore Courses</a>
                            </div>

                            <div class="resource-card">
                                <h5>Warikoo (Ankur Warikoo) <span class="free-badge">FREE</span></h5>
                                <p>Practical life skills including English communication, confidence building, and professional development tips for career growth.</p>
                                <a href="https://www.youtube.com/@warikoo" target="_blank" class="resource-link">Watch Channel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projects-section">
                    <h3>🎯 Proven Learning Approach</h3>
                    <div class="project-item">
                        <h5>Week 1-2: Foundation Building</h5>
                        <p>Start with basic grammar, common phrases, and simple conversations. Watch beginner-level videos from Janhavi Panwar's channel.</p>
                        <div class="project-tags">
                            <span class="tag">Grammar Basics</span>
                            <span class="tag">Common Phrases</span>
                            <span class="tag">Pronunciation</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Week 3-4: Active Practice</h5>
                        <p>Start speaking daily, even if alone. Practice with language partners. Focus on listening and repeating what you hear.</p>
                        <div class="project-tags">
                            <span class="tag">Daily Speaking</span>
                            <span class="tag">Listening Skills</span>
                            <span class="tag">Shadowing</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Week 5-8: Fluency Development</h5>
                        <p>Engage in longer conversations, watch English content without subtitles, and start thinking in English naturally.</p>
                        <div class="project-tags">
                            <span class="tag">Conversations</span>
                            <span class="tag">Content Immersion</span>
                            <span class="tag">Thinking in English</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Week 9-12: Mastery & Confidence</h5>
                        <p>Speak confidently in professional settings, master different accents, and help others learn English.</p>
                        <div class="project-tags">
                            <span class="tag">Professional English</span>
                            <span class="tag">Accent Training</span>
                            <span class="tag">Advanced Fluency</span>
                        </div>
                    </div>
                </div>

                <div class="resources-section">
                    <h3>📚 Additional Learning Resources</h3>
                    <div class="resource-category">
                        <div class="resource-links">
                            <div class="resource-card">
                                <h5>BBC Learning English <span class="free-badge">FREE</span></h5>
                                <p>Structured lessons, grammar explanations, and pronunciation guides from beginner to advanced levels.</p>
                                <a href="https://www.bbc.co.uk/learningenglish" target="_blank" class="resource-link">Start Learning</a>
                            </div>
                            
                            <div class="resource-card">
                                <h5>Duolingo - English <span class="free-badge">FREE</span></h5>
                                <p>Gamified learning experience with daily practice, vocabulary building, and interactive exercises.</p>
                                <a href="https://www.duolingo.com" target="_blank" class="resource-link">Download App</a>
                            </div>

                            <div class="resource-card">
                                <h5>HelloTalk Language Exchange <span class="free-badge">FREE</span></h5>
                                <p>Connect with native English speakers worldwide. Practice through text, voice, and video conversations.</p>
                                <a href="https://www.hellotalk.com" target="_blank" class="resource-link">Join Community</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            otherDetailContent.innerHTML = englishContent;
        }
    }
}

// AI & Technology Resources
function showAIResources() {
    const profilesView = document.getElementById('profilesView');
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    
    if (profilesView) profilesView.style.display = 'none';
    if (devopsDetailView) devopsDetailView.style.display = 'none';
    if (otherDetailView) {
        otherDetailView.style.display = 'block';
        const otherDetailContent = document.getElementById('otherDetailContent');
        
        if (otherDetailContent) {
            const aiContent = `
                <div class="detail-header">
                    <h2>🤖 AI & Technology Essentials</h2>
                    <p>Master artificial intelligence tools and concepts to stay ahead in the digital age</p>
                </div>

                <div class="resources-section">
                    <h3>🚀 Why Learn AI in 2025?</h3>
                    <div class="roadmap-container" style="padding: 30px;">
                        <div class="node-items" style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #667eea;">
                                <strong>Career Advantage:</strong> AI skills are in high demand across all industries - from healthcare to finance, marketing to engineering.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #5ea7f7;">
                                <strong>Productivity Boost:</strong> Automate repetitive tasks, generate content faster, and work smarter with AI tools like ChatGPT and Copilot.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #4ecdc4;">
                                <strong>Problem Solving:</strong> Use AI to analyze data, make predictions, and solve complex problems that were previously impossible.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #ffa726;">
                                <strong>Future-Proof:</strong> AI is not replacing jobs; it's transforming them. Those who understand AI will lead the future workforce.
                            </li>
                            <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #ff6b9d;">
                                <strong>Creative Enhancement:</strong> Generate images, videos, music, and code. AI amplifies your creativity exponentially.
                            </li>
                        </div>
                    </div>
                </div>

                <div class="resources-section">
                    <h3>🎬 Essential AI Video Tutorials</h3>
                    <div class="resource-category">
                        <div class="resource-links">
                            <div class="resource-card">
                                <h5>Complete ChatGPT Tutorial <span class="free-badge">FREE</span></h5>
                                <p>Comprehensive guide to mastering ChatGPT - from basics to advanced prompting techniques. Perfect for beginners.</p>
                                <a href="https://youtu.be/GXvPAdurwrU?si=Pqaf61v6AaWMAc3j" target="_blank" class="resource-link">Watch Now</a>
                            </div>
                            
                            <div class="resource-card">
                                <h5>AI Tools for Everyone <span class="free-badge">FREE</span></h5>
                                <p>Discover practical AI tools you can use daily - from image generation to code assistance and productivity hacks.</p>
                                <a href="https://youtu.be/i3tRkbsE54Q?si=VxDIyQK4NmgbB3ii" target="_blank" class="resource-link">Watch Now</a>
                            </div>

                            <div class="resource-card">
                                <h5>Machine Learning Fundamentals <span class="free-badge">FREE</span></h5>
                                <p>Understand how AI actually works - neural networks, deep learning, and machine learning concepts explained simply.</p>
                                <a href="https://youtu.be/uoYrp0KeRBw?si=-iWVCZ2f36iNshcV" target="_blank" class="resource-link">Watch Now</a>
                            </div>

                            <div class="resource-card">
                                <h5>AI for Business & Career <span class="free-badge">FREE</span></h5>
                                <p>Learn how to leverage AI in your profession - marketing, content creation, data analysis, and automation.</p>
                                <a href="https://youtu.be/E14hUveM4us?si=Gl6EK_5epojWiPHX" target="_blank" class="resource-link">Watch Now</a>
                            </div>

                            <div class="resource-card">
                                <h5>Advanced AI Techniques <span class="free-badge">FREE</span></h5>
                                <p>Deep dive into prompt engineering, fine-tuning models, and building AI-powered applications from scratch.</p>
                                <a href="https://youtu.be/XiRzrSdIxO0?si=F_XWTeJ6wnPscPzR" target="_blank" class="resource-link">Watch Now</a>
                            </div>

                            <div class="resource-card">
                                <h5>10 FREE AI Courses (2025) <span class="free-badge">FREE</span></h5>
                                <p>Curated list of the best free AI courses from Google, Microsoft, MIT, Stanford, and industry leaders.</p>
                                <a href="https://youtu.be/Ha5_nKkgL0A" target="_blank" class="resource-link">Watch Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projects-section">
                    <h3>🗺️ Your AI Learning Journey</h3>
                    <div class="project-item">
                        <h5>Stage 1: AI Basics & Tools (Week 1-2)</h5>
                        <p>Start with ChatGPT, understand prompting, explore AI image generators like DALL-E and Midjourney. Learn basic AI concepts.</p>
                        <div class="project-tags">
                            <span class="tag">ChatGPT</span>
                            <span class="tag">Prompting</span>
                            <span class="tag">AI Tools</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Stage 2: Practical Applications (Week 3-4)</h5>
                        <p>Use AI for real tasks - content writing, code assistance, data analysis. Build your first AI-powered project.</p>
                        <div class="project-tags">
                            <span class="tag">Real Projects</span>
                            <span class="tag">Automation</span>
                            <span class="tag">Productivity</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Stage 3: Understanding ML/DL (Week 5-8)</h5>
                        <p>Learn machine learning fundamentals, neural networks, and how AI models are trained. Take structured courses.</p>
                        <div class="project-tags">
                            <span class="tag">Machine Learning</span>
                            <span class="tag">Neural Networks</span>
                            <span class="tag">Python Basics</span>
                        </div>
                    </div>

                    <div class="project-item">
                        <h5>Stage 4: Specialization (Week 9-12)</h5>
                        <p>Choose your path - NLP, Computer Vision, AI Engineering, or AI Business Applications. Build advanced projects.</p>
                        <div class="project-tags">
                            <span class="tag">Specialization</span>
                            <span class="tag">Advanced Projects</span>
                            <span class="tag">Portfolio</span>
                        </div>
                    </div>
                </div>

                <div class="resources-section">
                    <h3>📚 Free AI Courses & Platforms</h3>
                    <div class="resource-category">
                        <h4>🎓 University & Industry Courses</h4>
                        <div class="resource-links">
                            <div class="resource-card">
                                <h5>AI For Everyone - Andrew Ng <span class="free-badge">FREE</span></h5>
                                <p>6-hour comprehensive course from the most renowned AI professor. Perfect starting point for absolute beginners.</p>
                                <a href="https://www.deeplearning.ai/courses/ai-for-everyone/" target="_blank" class="resource-link">Start Course</a>
                            </div>
                            
                            <div class="resource-card">
                                <h5>Google AI Courses <span class="free-badge">FREE</span></h5>
                                <p>Machine learning crash course, TensorFlow tutorials, and practical AI implementation from Google experts.</p>
                                <a href="https://ai.google/education/" target="_blank" class="resource-link">Explore Courses</a>
                            </div>

                            <div class="resource-card">
                                <h5>Microsoft AI Skills <span class="free-badge">FREE</span></h5>
                                <p>AI fundamentals, Azure AI services, and hands-on labs. Get certified by Microsoft for free.</p>
                                <a href="https://learn.microsoft.com/en-us/training/browse/?terms=AI" target="_blank" class="resource-link">Start Learning</a>
                            </div>

                            <div class="resource-card">
                                <h5>OpenAI Academy <span class="free-badge">FREE</span></h5>
                                <p>Official courses on ChatGPT, API usage, prompt engineering, and building AI applications from OpenAI.</p>
                                <a href="https://platform.openai.com/docs/tutorials" target="_blank" class="resource-link">Access Tutorials</a>
                            </div>

                            <div class="resource-card">
                                <h5>IBM AI SkillsBuild <span class="free-badge">FREE</span></h5>
                                <p>AI basics, chatbot building, natural language processing, and practical AI applications with IBM Watson.</p>
                                <a href="https://skillsbuild.org/students/course-catalog/artificial-intelligence" target="_blank" class="resource-link">Join Program</a>
                            </div>

                            <div class="resource-card">
                                <h5>Coursera - AI Specializations <span class="free-badge">FREE AUDIT</span></h5>
                                <p>Stanford, MIT, and other top universities offer AI courses. Audit for free, pay only for certificates.</p>
                                <a href="https://www.coursera.org/courses?query=artificial+intelligence" target="_blank" class="resource-link">Browse Courses</a>
                            </div>
                        </div>
                    </div>

                    <div class="resource-category" style="margin-top: 30px;">
                        <h4>🛠️ Hands-On Practice Platforms</h4>
                        <div class="resource-links">
                            <div class="resource-card">
                                <h5>Kaggle Learn <span class="free-badge">FREE</span></h5>
                                <p>Interactive Python and machine learning courses with hands-on coding exercises. Join competitions to practice.</p>
                                <a href="https://www.kaggle.com/learn" target="_blank" class="resource-link">Start Practicing</a>
                            </div>

                            <div class="resource-card">
                                <h5>DataCamp AI Track <span class="free-badge">FREEMIUM</span></h5>
                                <p>Interactive coding environment to learn Python, data science, and AI with real-world projects.</p>
                                <a href="https://www.datacamp.com/tracks/ai-fundamentals" target="_blank" class="resource-link">Explore Track</a>
                            </div>

                            <div class="resource-card">
                                <h5>Hugging Face Courses <span class="free-badge">FREE</span></h5>
                                <p>Learn NLP, transformers, and work with state-of-the-art AI models. Access pre-trained models and datasets.</p>
                                <a href="https://huggingface.co/learn" target="_blank" class="resource-link">
                            Start Learning</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projects-section">
                    <h3>💡 Pro Tips for AI Learning</h3>
                    <div class="project-item">
                        <h5>Start with Practical Use Cases</h5>
                        <p>Don't just learn theory - use ChatGPT daily for your work, try AI image generators, automate tasks. Learning by doing is most effective.</p>
                    </div>

                    <div class="project-item">
                        <h5>Build a Portfolio</h5>
                        <p>Create projects showcasing your AI skills - a chatbot, image classifier, or AI-powered website. Share on GitHub and LinkedIn.</p>
                    </div>

                    <div class="project-item">
                        <h5>Stay Updated</h5>
                        <p>AI evolves rapidly. Follow AI researchers on Twitter, subscribe to AI newsletters, join Discord communities like OpenAI and Hugging Face.</p>
                    </div>

                    <div class="project-item">
                        <h5>Join AI Communities</h5>
                        <p>Connect with learners on Reddit (r/MachineLearning, r/ArtificialIntelligence), Discord servers, and LinkedIn. Learn from others' experiences.</p>
                    </div>
                </div>
            `;
            
            otherDetailContent.innerHTML = aiContent;
        }
    }
}


function backToProfiles() {
    const profilesView = document.getElementById('profilesView');
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    
    if (profilesView) profilesView.style.display = 'block';
    if (devopsDetailView) devopsDetailView.style.display = 'none';
    if (otherDetailView) otherDetailView.style.display = 'none';
}

// ========== TEMPLATES FUNCTIONS ==========
function renderTemplates() {
    const grid = document.getElementById('templatesGrid');
    if (!grid) return;
    
    const allTemplates = [...emailTemplates, ...customTemplates];
    
 grid.innerHTML = allTemplates.map((template, index) => `
    <div class="template-card">
        <div class="template-title">${template.name}</div>
        <div class="template-content" id="template-${index}">${template.content}</div>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
            <button class="copy-btn" onclick="copyTemplate(${index})" style="flex: 0 0 auto;">📋 Copy Template</button>
            ${index >= emailTemplates.length ? `
                <button class="copy-btn" onclick="deleteTemplate(${index - emailTemplates.length})" style="background: #dc3545; flex: 0 0 auto;">🗑️ Delete</button>
            ` : ''}
        </div>
    </div>
`).join('');

}

function copyTemplate(index) {
    const allTemplates = [...emailTemplates, ...customTemplates];
    const template = allTemplates[index];
    
    if (!template) return;
    
    navigator.clipboard.writeText(template.content).then(() => {
        alert('✅ Template copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy template. Please try again.');
    });
}

function openAddTemplateModal() {
    const modal = document.getElementById('addTemplateModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeAddTemplateModal() {
    const modal = document.getElementById('addTemplateModal');
    const form = document.getElementById('addTemplateForm');
    
    if (modal) modal.style.display = 'none';
    if (form) form.reset();
}

function addNewTemplate(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('templateName');
    const contentInput = document.getElementById('templateContent');
    
    if (!nameInput || !contentInput) return;
    
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!name || !content) {
        alert('Please fill in all fields');
        return;
    }
    
    const newTemplate = { name, content };
    customTemplates.push(newTemplate);
    saveCustomTemplates();
    
    closeAddTemplateModal();
    renderTemplates();
    alert('✅ Template added successfully!');
}

function deleteTemplate(index) {
    if (confirm('Are you sure you want to delete this template?')) {
        customTemplates.splice(index, 1);
        saveCustomTemplates();
        renderTemplates();
        alert('✅ Template deleted successfully!');
    }
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    loadVisitedData();
    loadCustomTemplates();
    
    // Filter event listeners
    const searchInput = document.getElementById('searchInput');
    const ratingFilter = document.getElementById('ratingFilter');
    const visitedFilter = document.getElementById('visitedFilter');
    
    if (searchInput) searchInput.addEventListener('input', filterCompanies);
    if (ratingFilter) ratingFilter.addEventListener('change', filterCompanies);
    if (visitedFilter) visitedFilter.addEventListener('change', filterCompanies);
    
    // Modal close on outside click
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('addTemplateModal');
        if (modal && event.target === modal) {
            closeAddTemplateModal();
        }
    });
    
    // Form submission for add template
    const addTemplateForm = document.getElementById('addTemplateForm');
    if (addTemplateForm) {
        addTemplateForm.addEventListener('submit', addNewTemplate);
    }
});

// Initialize - Show landing page
showPage('landing');
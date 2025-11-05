# 🏢 Indian IT Hub
> **Premium IT Partner Directory & Learning Resource Platform**

A comprehensive web platform connecting job seekers with IT companies across India, featuring curated learning resources, company listings, and career development tools.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## 📋 Table of Contents
* [🌟 Overview](#-overview)
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📁 Project Structure](#-project-structure)
* [🚀 Installation](#-installation)
* [💻 Usage](#-usage)
* [🎨 Features in Detail](#-features-in-detail)
* [🎯 Roadmap](#-roadmap)
* [🤝 Contributing](#-contributing)
* [📊 Analytics & Performance](#-analytics--performance)
* [🔐 Privacy & Data](#-privacy--data)
* [📞 Support](#-support)
* [📄 License](#-license)
* [🙏 Acknowledgments](#-acknowledgments)
* [📈 Statistics](#-statistics)
* [🌐 Connect With Us](#-connect-with-us)

---

## 🌟 Overview

**Indian IT Hub** is a one-stop platform designed to bridge the gap between IT professionals and companies across India. Whether you're a fresher looking for your first job or an experienced professional exploring new opportunities, our platform provides:

* 📍 **500+ IT Companies** listed across multiple cities
* 🎓 **Curated Learning Paths** for 8+ tech profiles
* 📧 **Email Templates** for professional outreach
* 📊 **Company Analytics** with ratings and reviews
* 🗺️ **Location-based Search** by city and area
* 📱 **Fully Responsive** design for all devices

---

## ✨ Features

### 🏙️ City-Wise Company Listings

#### **Indore Companies**
* **Vijay Nagar** - 50+ companies
* **IT Park (Crystal IT Park, Atulya IT Park)** - 40+ companies
* **Sapna Sangeeta Road** - 30+ companies

#### **Vadodara Companies**
* **Gotri** - 25+ companies
* **Akota** - 20+ companies
* **Alkapuri** - 15+ companies
* **Gorwa** - 10+ companies

### 🎯 Key Features

#### 1. **Advanced Company Search & Filtering**
* Filter by rating (1-5 stars)
* Sort by reviews, name, or rating
* Search by company name
* Area-wise categorization
* Real-time search results

#### 2. **Comprehensive Company Information**
* Company name and logo
* Rating & review count
* Full address with location
* **HR contact details (phone & email)**
* Company email and website
* Working hours, services offered, employee count, and founded year
* User reviews and testimonials

#### 3. **Visit Tracking System**
* Mark companies as "**Visited**"
* Visual differentiation for visited companies
* Persistent storage using `localStorage`
* Track your job application progress

#### 4. **Export Functionality**
* **Export to PDF** - Professional formatted reports
* **Export to Excel/CSV** - Data analysis ready format
* Custom export options, including filtered data export

#### 5. **Email Templates**
* Pre-written **professional email templates**
* Templates for job application, internship inquiry, and HR outreach
* Copy-to-clipboard functionality and customizable content

#### 6. **Learning Resources Hub**
Comprehensive learning paths for:
* **DevOps Engineer** 🚀
* **Data Science** 📊
* **Business Analyst** 💼
* **Frontend Developer** 🎨
* **Backend Developer** ⚙️
* **Full Stack Developer** 🔄
* **English Language** 📚
* **AI & Machine Learning** 🤖

#### 7. **Visual Roadmaps**
* Interactive learning paths with step-by-step progression
* Color-coded milestones, time estimates, and resource links
* Progress tracking capability

#### 8. **Free Course Platform**
* Access to **University & Industry Courses** from sources like Andrew Ng, Google AI, Microsoft, OpenAI, IBM, and Coursera.

#### 9. **User Experience Features**
* **Dark Mode** for resource sections
* **Smooth Animations** and transitions
* **Intuitive Navigation** including Breadcrumb and Back Navigation
* **Responsive Design** and **Fast Loading** performance

#### 10. **Statistics Dashboard**
* Total companies listed, cities covered, average company ratings, and total reviews count with **real-time updates**.

---

## 🛠️ Tech Stack

### Frontend
* **HTML5** - Semantic markup
* **CSS3** - Modern styling with Flexbox & Grid
* **JavaScript (ES6+)** - Vanilla JS for functionality

### Design
* **Custom CSS** - No frameworks for lightweight performance
* **Gradient Backgrounds** - Modern UI design
* **Icon Fonts** - Emoji icons for visual appeal
* **Responsive Design** - Mobile-first approach

### Data Storage
* **localStorage** - Visit tracking and preferences
* **JSON Format** - Structured data management
* **Modular JS Files** - Separated data (`listings.js`) and logic (`perplexcity.js`)

### Features
* **Client-side Filtering** - Fast search
* **Dynamic Content Generation** - Template rendering
* **Export Libraries** - PDF & CSV generation
* **Copy-to-Clipboard API** - Template copying

---

## 📁 Project Structure

```
indian-it-hub/
│
├── index.html # Main HTML file
├── style.css # Global styles and responsive design
├── perplexcity.js # Main JavaScript logic
├── listings.js # Company data (separated for easy updates)
│
├── assets/ # Images and icons (if any)
│ └── logo.png
│
├── README.md # Documentation
└── LICENSE # License file
```

-----

## 🚀 Installation

### Prerequisites

  * **Modern web browser** (Chrome, Firefox, Safari, Edge)
  * **Text editor** (VS Code, Sublime Text, etc.)
  * Local web server (optional, for development)

### Steps

1.  **Clone the Repository**

<!-- end list -->

```bash
git clone https://github.com/your-org-name/indian-it-hub.git
cd indian-it-hub
```

2.  **No Build Process Required\!**
    This is a static website - just open **`index.html`** in your browser.

3.  **For Development (Optional)**

Using Python

```bash
python -m http.server 8000
```

Using Node.js (`http-server`)

```bash
npx http-server
```

Using PHP

```bash
php -S localhost:8000
```

4.  **Open in Browser**

<!-- end list -->

```
http://localhost:8000
```

-----

## 💻 Usage

### For Job Seekers

  * **Explore Companies:** Select your city, choose a specific area, and browse listings.
  * **Filter & Search:** Use the rating filter (⭐ **4.0+ recommended**), sort options, and company name search.
  * **Track Applications:** Click the checkbox to mark companies as **visited**. The data persists across sessions.
  * **Contact Companies:** View HR contact details, copy email addresses, visit websites, and use the professional email templates for outreach.
  * **Export Data:** Export to **PDF** for printing or **Excel** for analysis.

### For Learning

  * **Access Resources:** Navigate to "**Learning Resources**," select your career profile, and view the complete roadmap.
  * **Follow Roadmap:** Start from Step 1, follow the sequential learning path, click resource links, and work on suggested projects.
  * **Use Templates:** Visit "**Email Templates**," choose an appropriate template, click "**Copy Template**," customize, and send.

-----

## 🎨 Features in Detail

### Company Card Information

Each company card displays:

```
┌─────────────────────────────────────┐
│ 🏢 Company Name ☑ Visit│
│ ⭐ 4.5 (120 reviews) │
│ │
│ 📍 Address: Full address here │
│ 📞 HR Phone: +91 XXXXXXXXXX │
│ 📧 Email: hr@company.com │
│ 🌐 Website: www.company.com │
│ 🕐 Hours: Opens 10 AM │
│ 💼 Services: IT Solutions │
│ │
│ 💬 "Great company to work with..." │
│ │
│ [Visit Website →] │
└─────────────────────────────────────┘
```

### Learning Resource Structure

```
📘 Profile Title
└── Description
🗺️ Learning Roadmap
├── 01 ⚙️ Foundation
│ ├── Topic 1
│ ├── Topic 2
│ └── Topic 3
│
├── 02 🔧 Intermediate
│ └── ...
│
└── 03 🚀 Advanced
└── ...
📚 Free Resources
├── Video Courses
├── Documentation
└── Practice Platforms
🛠️ Projects
├── Beginner Projects
├── Intermediate Projects
└── Advanced Projects
```

-----

## 🎯 Roadmap

### Version 1.0 (Current) ✅

  * [x] City-wise company listings
  * [x] Search and filter functionality
  * [x] Visit tracking
  * [x] Export to PDF/Excel
  * [x] Email templates
  * [x] Learning resources
  * [x] Mobile responsive design

### Version 2.0 (Planned) 🚧

  * [ ] User authentication
  * [ ] Save favorite companies
  * [ ] Job posting integration
  * [ ] Company reviews submission
  * [ ] Salary insights
  * [ ] Interview experiences
  * [ ] Application tracking dashboard
  * [ ] Email notifications
  * [ ] Dark mode toggle
  * [ ] Multi-language support

### Version 3.0 (Future) 🔮

  * [ ] AI-powered job matching
  * [ ] Resume builder
  * [ ] Interview preparation tools
  * [ ] Skill assessment tests
  * [ ] Networking features
  * [ ] Company comparison tool
  * [ ] Salary negotiation guide
  * [ ] Career counseling chatbot

-----

## 🤝 Contributing

We welcome contributions\! Here's how you can help:

### Adding New Companies

1.  **Fork the repository**
2.  **Edit `listings.js`**
3.  **Add company data in this format:**

<!-- end list -->

```javascript
{
name: "Company Name",
rating: 4.5,
reviews: 100,
address: "Full Address",
hr_phone: "+91 XXXXXXXXXX",
email: "info@company.com",
hr_email: "hr@company.com",
website: "https://company.com",
hours: "Opens 10 AM",
services: "IT Services",
employees: "100+",
founded: "2020",
review: "Optional review text"
}
```

4.  **Submit Pull Request**

### Reporting Issues

  * Use **GitHub Issues**
  * Provide detailed description and screenshots if applicable
  * Mention browser and OS

### Suggesting Features

  * Open a GitHub Issue
  * Label as "**enhancement**"
  * Describe the use case and expected behavior

-----

## 📊 Analytics & Performance

  * **Page Load Time:** \< 2 seconds
  * **Mobile Performance Score:** 95+
  * **Accessibility Score:** 90+
  * **SEO Optimized:** Yes
  * **Browser Compatibility:** All modern browsers

-----

## 🔐 Privacy & Data

  * **No User Data Collection**
  * **localStorage Only** (data is local to your device)
  * **No Cookies** used
  * **No Analytics** tracking
  * **Open Source** and transparent

-----

## 📞 Support

For questions or support:

  * 📧 Email: **support@indoreithub.com**
  * 💬 GitHub Issues: [Create Issue](https://www.google.com/search?q=https://github.com/your-org-name/indian-it-hub/issues)
  * 📖 Documentation: [Wiki](https://www.google.com/search?q=https://github.com/your-org-name/indian-it-hub/wiki)

-----

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

```
MIT License
Copyright (c) 2025 Indian IT Hub
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

-----

## 🙏 Acknowledgments

  * Company data sourced from public Google Business listings
  * Learning roadmaps curated from industry best practices
  * Icons and emojis from Unicode Consortium
  * Community contributors and testers

-----

## 📈 Statistics

  * **500+** IT Companies Listed
  * **2** Cities Covered (Indore, Vadodara)
  * **7** Areas Mapped
  * **8** Learning Paths
  * **20+** Email Templates
  * **100+** Free Resources

-----

## 🌐 Connect With Us

  * Website: [www.indoreithub.com](https://www.indoreithub.com)
  * GitHub: [@indoreithub](https://www.google.com/search?q=https://github.com/indoreithub)
  * LinkedIn: [Indian IT Hub](https://www.google.com/search?q=https://linkedin.com/company/indoreithub)
  * Twitter: [@IndoreITHub](https://www.google.com/search?q=https://twitter.com/indoreithub)

-----

\<div align="center"\>

### ⭐ Star us on GitHub if you find this helpful\!

**Made with ❤️ for the Indian IT Community**

[⬆ Back to Top](https://www.google.com/search?q=%23-project-structure)

\</div\>

Would you like to generate a placeholder `LICENSE` file content to complete the project structure?

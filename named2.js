

// Access company data from listings.js
// const vijayNagarCompanies = window.vijayNagarCompanies;
// const itParkCompanies = window.itParkCompanies;
// const vadodaraGotri = window.vadodaraGotri;
// const vadodaraAkota = window.vadodaraAkota;
// const vadodaraAlkapuri = window.vadodaraAlkapuri;
// const vadodaraGorwa = window.vadodaraGorwa;

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
                ${c.hr_phone ? `<div class="company-info"><strong>📞 hr_Phone:</strong> ${c.hr_phone}</div>` : ''}
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
        `${c.name}\n${c.website}\n${c.hr_phone || 'N/A'}\n---`
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
function showResourceDetail(profile) {
    const profilesView = document.getElementById('profilesView');
    const devopsDetailView = document.getElementById('devopsDetailView');
    const otherDetailView = document.getElementById('otherDetailView');
    
    if (profilesView) profilesView.style.display = 'none';
    
    if (profile === 'devops') {
        if (devopsDetailView) devopsDetailView.style.display = 'block';
        if (otherDetailView) otherDetailView.style.display = 'none';
    } else {
        // For all other profiles (datascience, businessanalyst, frontend, backend, fullstack)
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
/**
 * Projects Configuration
 * Contains complete details, features, tech stack, and links for each project.
 */

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'frontend', name: 'Frontend / React' },
  { id: 'webapps', name: 'Web Apps & PWA' },
];

export const projectsData = [
  {
    id: 'digital-citizen-assist',
    title: 'Digital Citizen Assist',
    subtitle: 'Citizen Portal for Government Services & Schemes',
    category: 'fullstack',
    featured: true,
    tag: 'Civic Tech & E-Governance',
    brief: 'A web application that simplifies navigating, discovering, and applying for government digital services, welfare schemes, and official public documentation.',
    description: 'Digital Citizen Assist bridges the digital literacy gap for everyday citizens by providing an organized, searchable, and step-by-step portal to access state and national digital services. Built with a high-performance React frontend and robust Spring Boot REST microservices.',
    technologies: ['React.js', 'Spring Boot', 'Java', 'MongoDB', 'Tailwind CSS', 'REST API'],
    accentColor: '#3b82f6',
    github: 'https://github.com/ameynimbare/digital-citizen-assist',
    liveDemo: 'https://digital-citizen-assist.example.com',
    features: [
      'Categorized scheme discovery with real-time keyword search and eligibility filters.',
      'Clear document checklist generator for hassle-free physical and online verification.',
      'Multi-language UI ready architecture designed for accessibility across diverse user demographics.',
      'Spring Boot backend with MongoDB for flexible scheme metadata and fast search queries.',
      'Citizen grievance & inquiry submission with tracking ID generation.'
    ],
    architecture: {
      frontend: 'React 18 SPA with responsive Tailwind CSS & client-side caching',
      backend: 'Spring Boot REST Controller with layered service and repository patterns',
      database: 'MongoDB Atlas with indexed query filters',
      security: 'Input validation, sanitize queries, and CORS policy enforcement'
    },
    challengesSolved: 'Organizing disparate government service guidelines into intuitive step-by-step wizards so non-technical citizens can prepare documents without confusing bureaucracy.',
    keyLearnings: 'Deepened practical knowledge of Spring Boot MVC, MongoDB document schema modeling, and building empathy-driven accessible UI.'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Academic Records & Student Directory Platform',
    category: 'fullstack',
    featured: true,
    tag: 'Academic Web App',
    brief: 'A web application for college administrators and students to manage admissions, enrollments, course records, and academic scores via RESTful APIs.',
    description: 'Designed to replace manual paper records with a streamlined digital workflow. Administrators can manage student profiles, calculate GPA/grades, and filter records by semester, while students can view their attendance logs and performance metrics.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    accentColor: '#8b5cf6',
    github: 'https://github.com/ameynimbare/student-management-system',
    liveDemo: 'https://student-management.example.com',
    features: [
      'Complete CRUD operations for student profiles, course registrations, and roll numbers.',
      'RESTful endpoints with parameterized filtering by department, semester, and year.',
      'Form validation with real-time feedback preventing duplicate roll-number entries.',
      'Interactive dashboard analytics visualizing batch strength and performance distributions.',
      'Exportable CSV and PDF summary report generation for college department records.'
    ],
    architecture: {
      frontend: 'React.js with modular component state, custom hooks, and Lucide icons',
      backend: 'Node.js & Express.js REST API with structured controllers and middleware',
      database: 'MongoDB with Mongoose schemas, relational references, and validation rules',
      security: 'Express rate limiter, sanitized inputs, and structured error handling'
    },
    challengesSolved: 'Handling complex relationship queries between student batches, courses, and marks while ensuring zero data duplication.',
    keyLearnings: 'Mastered the MERN stack development cycle, REST API contracts, async error handling middleware, and client-side data synchronization.'
  },
  {
    id: 'college-portal-pwa',
    title: 'College Portal PWA',
    subtitle: 'Progressive Web App with Offline Functionality',
    category: 'webapps',
    featured: true,
    tag: 'PWA & ASP.NET',
    brief: 'A Progressive Web Application (PWA) allowing college students to view timetables, circulars, syllabus notices, and campus updates even during low or no network connectivity.',
    description: 'Engineered as a mobile-first Progressive Web App to tackle spotty campus Wi-Fi. Features service workers that precache notices, syllabus PDFs, and daily lecture timetables so students never miss a schedule update.',
    technologies: ['ASP.NET Core', 'C#', 'JavaScript', 'HTML5', 'CSS3', 'Service Workers', 'PWA'],
    accentColor: '#06b6d4',
    github: 'https://github.com/ameynimbare/college-portal-pwa',
    liveDemo: 'https://college-portal-pwa.example.com',
    features: [
      'Installable on Android, iOS, and desktop without requiring native app stores.',
      'Service Worker caching strategy (Cache-First with Network Fallback) for offline operation.',
      'Dynamic college notice board with push notification triggers for urgent alerts.',
      'Interactive lecture timetable with current day highlighting and room allocations.',
      'ASP.NET Core backend delivering lightweight JSON feeds and secure administrative endpoints.'
    ],
    architecture: {
      frontend: 'Vanilla JavaScript & modern CSS with Web App Manifest & Service Worker API',
      backend: 'ASP.NET Core Web API with C# controllers for notice and timetable dispatch',
      caching: 'IndexedDB & CacheStorage API for offline persistence of assets and bulletins',
      pwa: '100% Lighthouse PWA compliance with splash screens and standalone display'
    },
    challengesSolved: 'Implementing robust service worker cache invalidation when administrative notices are updated so users do not view stale examination schedules.',
    keyLearnings: 'Gained solid understanding of Progressive Web App standards, service worker lifecycle events, C# ASP.NET Core API fundamentals, and offline-first UX.'
  },
  {
    id: 'developer-portfolio-website',
    title: 'Personal Developer Brand Portfolio',
    subtitle: 'Modern Interactive Portfolio & Design System',
    category: 'frontend',
    featured: false,
    tag: 'Portfolio & UI/UX',
    brief: 'The website you are currently browsing: a high-performance, dark-themed personal showcase built with React 18, Tailwind CSS, and Framer Motion.',
    description: 'A bespoke personal brand portfolio crafted from scratch without relying on generic templates. Highlights visual hierarchy, custom glassmorphism, responsive navigation, and component reusability.',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide React'],
    accentColor: '#ec4899',
    github: 'https://github.com/ameynimbare/personal-portfolio',
    liveDemo: 'https://ameynimbare.dev',
    features: [
      'Fully responsive, mobile-first design with dark/light mode toggle and theme persistence.',
      'Fluid animations powered by Framer Motion and custom CSS glow effects.',
      'Interactive project modal deep-dives and tech stack filtering.',
      'Custom cursor tracker with toggle control and smooth scroll spy navbar.'
    ],
    architecture: {
      frontend: 'React.js with Vite bundler, modular section architecture, and clean data-driven UI',
      styling: 'Tailwind CSS with extended glow utilities and glassmorphic filters'
    },
    challengesSolved: 'Balancing rich glowing visual effects and animations with snappy 60fps rendering performance and zero layout shifts.',
    keyLearnings: 'Refined skills in custom design systems, Framer Motion transitions, responsive accessibility, and modular React patterns.'
  }
];

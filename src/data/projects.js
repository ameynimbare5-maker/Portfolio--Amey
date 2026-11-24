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
    technologies: ['React.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
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
  }

];

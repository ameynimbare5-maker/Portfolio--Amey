/**
 * Certifications, Workshops & Academic Achievements Configuration
 * Easily update certificates, issuing organizations, credentials, and achievements.
 * (Editable placeholders configured - add your actual certificates and links)
 */

export const certificationCategories = [
  { id: 'all', name: 'All' },
  { id: 'certifications', name: 'Certifications & Courses' },
  { id: 'workshops', name: 'Workshops & Seminars' },
  { id: 'academic', name: 'Academic & Hackathons' },
];

export const certificationsData = [
  {
    id: 'react-cert-placeholder',
    title: 'Modern React & Web Development',
    issuer: 'Online Learning Platform (Coursera / Udemy / FreeCodeCamp)',
    category: 'certifications',
    issueDate: '2025',
    credentialId: 'CERT-REACT-2025-XXXX', // Editable placeholder
    verificationUrl: '#', // Replace with your actual certificate verification URL
    badge: 'Frontend Certification',
    description: 'Comprehensive course covering React 18, functional components, hooks lifecycle, Context API, state management, and modern component design patterns.',
    skills: ['React.js', 'Hooks', 'State Management', 'Single Page Applications']
  },
  {
    id: 'javascript-cert-placeholder',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'Technical Learning Platform',
    category: 'certifications',
    issueDate: '2024',
    credentialId: 'CERT-JS-2024-XXXX', // Editable placeholder
    verificationUrl: '#',
    badge: 'Algorithms & ES6',
    description: 'In-depth mastery of JavaScript ES6+ syntax, asynchronous programming, event handling, closures, recursion, and core data structures.',
    skills: ['JavaScript (ES6+)', 'Data Structures', 'OOP', 'Functional Programming']
  },
  {
    id: 'fullstack-workshop-placeholder',
    title: 'Full Stack Web Development Hands-on Workshop',
    issuer: 'College Tech Fest / Developer Student Club',
    category: 'workshops',
    issueDate: '2025',
    credentialId: 'WKSHP-DEV-2025',
    verificationUrl: '#',
    badge: 'Hands-on Workshop',
    description: 'Intensive weekend workshop covering REST API construction, MongoDB database modeling, and connecting React frontends to backend services.',
    skills: ['REST APIs', 'MongoDB', 'Node.js', 'API Testing']
  },
  {
    id: 'git-version-control-cert',
    title: 'Git & GitHub Collaboration Workflow',
    issuer: 'Developer Community / Workshop',
    category: 'workshops',
    issueDate: '2024',
    credentialId: 'GIT-CLI-2024',
    verificationUrl: '#',
    badge: 'Developer Tools',
    description: 'Practical training on Git branching workflows, pull request code reviews, merge conflicts resolution, and open-source contribution practices.',
    skills: ['Git', 'GitHub', 'CI/CD Basics', 'Branching Models']
  },
  {
    id: 'college-hackathon-placeholder',
    title: 'Inter-Collegiate Web Hackathon Participant',
    issuer: 'University / College Tech Fest',
    category: 'academic',
    issueDate: '2025',
    credentialId: 'HACK-MUM-2025',
    verificationUrl: '#',
    badge: 'Hackathon',
    description: 'Collaborated in a time-constrained sprint to brainstorm and prototype an impactful web solution for civic and campus utility problems.',
    skills: ['Rapid Prototyping', 'Teamwork', 'React.js', 'Problem Solving']
  },
  {
    id: 'academic-excellence-placeholder',
    title: 'Academic Performance in BSc IT Practicals',
    issuer: "Gokhale Education Society's Shri B. Vartak College",
    category: 'academic',
    issueDate: '2024–2026',
    credentialId: 'ACAD-EXC-BScIT',
    verificationUrl: '#',
    badge: 'Academic Honor',
    description: 'Consistently demonstrated top-tier practical scores and clean implementation in Laboratory practical sessions across web programming and database systems.',
    skills: ['Lab Practicals', 'Database Systems', 'Java Programming', 'Software Engineering']
  }
];

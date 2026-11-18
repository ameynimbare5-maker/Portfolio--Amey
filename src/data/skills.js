/**
 * Technical Skills Configuration
 * Update categories, skill items, proficiency levels, and badges easily.
 */

export const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'languages', name: 'Languages' },
  { id: 'tools', name: 'Tools & DevOps' },
];

export const skillsData = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    level: 88,
    levelLabel: 'Proficient',
    experience: 'Core Focus',
    icon: 'Code2',
    color: '#06b6d4',
    highlight: true,
    description: 'Component architecture, Hooks, Context API, state management, SPA routing.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 85,
    levelLabel: 'Proficient',
    experience: 'Academic & Projects',
    icon: 'FileCode',
    color: '#eab308',
    highlight: true,
    description: 'Async/Await, Promises, DOM manipulation, closures, event-driven programming.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 90,
    levelLabel: 'Proficient',
    experience: 'Daily Driver',
    icon: 'Palette',
    color: '#38bdf8',
    highlight: true,
    description: 'Utility-first styling, responsive layouts, glassmorphism, custom themes.'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    level: 95,
    levelLabel: 'Advanced',
    experience: 'Solid Foundation',
    icon: 'Layout',
    color: '#f97316',
    description: 'Semantic markup, accessibility (a11y), SEO tags, web storage API.'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 88,
    levelLabel: 'Proficient',
    experience: 'Solid Foundation',
    icon: 'Sparkles',
    color: '#3b82f6',
    description: 'Flexbox, Grid systems, keyframe animations, media queries, CSS variables.'
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    level: 82,
    levelLabel: 'Comfortable',
    experience: 'Academic Projects',
    icon: 'Columns3',
    color: '#a855f7',
    description: 'Grid layout, UI components, modal dialogues, responsive navbar utilities.'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 78,
    levelLabel: 'Intermediate',
    experience: 'Full-stack Projects',
    icon: 'Server',
    color: '#22c55e',
    highlight: true,
    description: 'Event loop, npm ecosystem, asynchronous I/O, server-side scripting.'
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 80,
    levelLabel: 'Intermediate',
    experience: 'Full-stack Projects',
    icon: 'Cpu',
    color: '#94a3b8',
    highlight: true,
    description: 'RESTful API routing, middleware, JWT authentication, CORS handling.'
  },
  {
    name: 'Java',
    category: 'backend',
    level: 82,
    levelLabel: 'Proficient',
    experience: 'Academic & Practicals',
    icon: 'Terminal',
    color: '#ef4444',
    description: 'Object-Oriented Programming (OOP), Collections, Exception Handling, Multithreading.'
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    level: 72,
    levelLabel: 'Learning / Exploring',
    experience: 'Capstone Projects',
    icon: 'Layers',
    color: '#10b981',
    highlight: true,
    description: 'Spring MVC, Dependency Injection, REST Controllers, JPA/Hibernate mapping.'
  },

  // Database
  {
    name: 'MongoDB',
    category: 'database',
    level: 80,
    levelLabel: 'Intermediate',
    experience: 'NoSQL Projects',
    icon: 'Database',
    color: '#10b981',
    highlight: true,
    description: 'Document models, Mongoose schemas, CRUD operations, aggregation pipelines.'
  },
  {
    name: 'MySQL',
    category: 'database',
    level: 85,
    levelLabel: 'Proficient',
    experience: 'Academic Practicals',
    icon: 'Database',
    color: '#0284c7',
    description: 'Relational schema design, SQL queries, JOINs, indexing, normalization.'
  },

  // Programming Languages
  {
    name: 'Python',
    category: 'languages',
    level: 78,
    levelLabel: 'Intermediate',
    experience: 'Academic & Scripting',
    icon: 'FileCode2',
    color: '#38bdf8',
    description: 'Data structures, scripting, algorithms, automation basics.'
  },
  {
    name: 'C++',
    category: 'languages',
    level: 80,
    levelLabel: 'Proficient',
    experience: 'Academic Foundation',
    icon: 'Binary',
    color: '#6366f1',
    description: 'OOP concepts, pointers, memory allocation, standard template library (STL).'
  },
  {
    name: 'C',
    category: 'languages',
    level: 82,
    levelLabel: 'Proficient',
    experience: 'Programming Foundation',
    icon: 'Binary',
    color: '#64748b',
    description: 'Structured programming, arrays, pointers, file handling, memory management.'
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    level: 85,
    levelLabel: 'Proficient',
    experience: 'Daily Workflow',
    icon: 'GitBranch',
    color: '#f97316',
    description: 'Branching, merging, commit conventions, conflict resolution, rebase.'
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 88,
    levelLabel: 'Proficient',
    experience: 'Daily Workflow',
    icon: 'Github',
    color: '#94a3b8',
    description: 'Repository hosting, Pull Requests, Issue tracking, GitHub Pages deployment.'
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 92,
    levelLabel: 'Advanced',
    experience: 'Primary IDE',
    icon: 'Monitor',
    color: '#3b82f6',
    description: 'Extensions, debugging, integrated terminal, Prettier, ESLint configuration.'
  },
  {
    name: 'IntelliJ IDEA',
    category: 'tools',
    level: 78,
    levelLabel: 'Comfortable',
    experience: 'Java / Spring',
    icon: 'Cpu',
    color: '#ec4899',
    description: 'Java application development, Maven/Gradle build tools, Spring runner.'
  },
  {
    name: 'Postman',
    category: 'tools',
    level: 85,
    levelLabel: 'Proficient',
    experience: 'API Testing',
    icon: 'Send',
    color: '#f97316',
    description: 'REST API testing, collections, environment variables, inspecting response payloads.'
  }
];

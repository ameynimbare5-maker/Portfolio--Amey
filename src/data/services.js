/**
 * Services / What I Can Do Configuration
 * Detail services you offer or skills you provide for projects, internships, and freelance.
 */

export const servicesData = [
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    icon: 'Layout',
    color: '#3b82f6',
    description: 'Transforming UI/UX wireframes into pixel-perfect, accessible, and standards-compliant HTML5, CSS3, and JavaScript web interfaces.',
    deliverables: [
      'Semantic & accessible HTML5 markup',
      'Modern, maintainable CSS with Tailwind / Flexbox / Grid',
      'Cross-browser and cross-device compatibility',
      'SEO-friendly structure and fast page load times'
    ]
  },
  {
    id: 'responsive-web',
    title: 'Responsive Website Development',
    icon: 'Smartphone',
    color: '#06b6d4',
    description: 'Building mobile-first, fluid web designs that look and feel seamless across smartphones, tablets, laptops, and ultra-wide screens.',
    deliverables: [
      'Mobile-first responsive fluid grids',
      'Touch-friendly navigation and gesture controls',
      'Adaptive image sizing and lazy loading',
      'Retina-ready typography and high DPI displays'
    ]
  },
  {
    id: 'react-ui-dev',
    title: 'React UI Development',
    icon: 'Code2',
    color: '#8b5cf6',
    description: 'Developing reactive single-page applications (SPAs) with modular components, dynamic state management, and smooth micro-interactions.',
    deliverables: [
      'Custom reusable component libraries',
      'React Hooks, Context API & state architecture',
      'Framer Motion smooth scroll and element animations',
      'Optimized render cycles with React.memo & useMemo'
    ]
  },
  {
    id: 'rest-api-integration',
    title: 'REST API Integration',
    icon: 'Radio',
    color: '#ec4899',
    description: 'Connecting frontend interfaces with backend services, third-party APIs, and authentication providers with robust error handling.',
    deliverables: [
      'Asynchronous data fetching via Axios and Fetch API',
      'Loading skeletons and graceful fallback error states',
      'JWT token management and protected route flows',
      'JSON payload serialization and optimistic UI updates'
    ]
  },
  {
    id: 'basic-backend',
    title: 'Basic Backend Development',
    icon: 'Server',
    color: '#10b981',
    description: 'Crafting clean RESTful backend endpoints, route controllers, and business logic using Node.js/Express or Java Spring Boot.',
    deliverables: [
      'Modular MVC route controllers and service classes',
      'Request input validation and sanitization middleware',
      'CORS configuration and standard HTTP status handling',
      'API documentation and Postman test collections'
    ]
  },
  {
    id: 'database-integration',
    title: 'Database Integration',
    icon: 'Database',
    color: '#f59e0b',
    description: 'Designing data schemas, handling CRUD persistence, and writing efficient queries using MongoDB (Mongoose) and relational MySQL.',
    deliverables: [
      'Structured MongoDB document schemas with Mongoose',
      'Relational table schemas, primary/foreign keys in MySQL',
      'Clean CRUD query abstraction layers',
      'Database connection pooling and environment security'
    ]
  }
];

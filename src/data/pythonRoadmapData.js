export const pythonRoadmap = [
  {
    number: '01',
    title: 'Python Core',
    subtitle: 'Master the language fundamentals',
    topics: [
      {
        name: 'Data Types & Variables',
        tags: ['Core', 'Essential'],
        desc: 'Numbers, strings, booleans, None. Type casting, f-strings, string methods, and mutable vs immutable data.'
      },
      {
        name: 'Control Flow',
        tags: ['Core'],
        desc: 'Conditionals (if/elif/else), while loops, for loops, list/dict comprehensions, break/continue/pass.'
      },
      {
        name: 'Functions & Lambdas',
        tags: ['Core', 'Functional'],
        desc: '*args, **kwargs, closures, decorators, higher-order functions (map, filter, reduce), and lambda expressions.'
      },
      {
        name: 'OOP in Python',
        tags: ['OOP', 'Advanced'],
        desc: 'Classes, __init__, inheritance, method overriding, dunder methods, @property, @classmethod, @staticmethod.'
      },
      {
        name: 'Collections & Generics',
        tags: ['Data Structures'],
        desc: 'Lists, tuples, sets, dicts, defaultdict, Counter, namedtuple, and typing hints for clean, readable code.'
      },
      {
        name: 'Exception Handling',
        tags: ['Reliability'],
        desc: 'try/except/else/finally, raising custom exceptions, logging, and best practices for robust error management.'
      }
    ]
  },
  {
    number: '02',
    title: 'REST API Design',
    subtitle: 'Build clean, secure API services',
    topics: [
      {
        name: 'HTTP & Web Concepts',
        tags: ['Core', 'Web'],
        desc: 'HTTP methods (GET/POST/PUT/PATCH/DELETE), status codes, headers, cookies, and the request-response cycle.'
      },
      {
        name: 'REST Principles',
        tags: ['API Design'],
        desc: 'RESTful constraints, resource naming, statelessness, HATEOAS, API versioning, and idempotency.'
      },
      {
        name: 'Postman & Testing',
        tags: ['Tooling'],
        desc: 'Designing, testing, and documenting APIs with Postman collections, environments, and automated test scripts.'
      },
      {
        name: 'JSON & Serialization',
        tags: ['Data'],
        desc: 'JSON structure, Python json module, serializing/deserializing Python objects, and handling nested payloads.'
      }
    ]
  },
  {
    number: '03',
    title: 'Django Framework',
    subtitle: 'Build robust web applications',
    topics: [
      {
        name: 'Django Architecture',
        tags: ['Framework', 'Core'],
        desc: 'MVT pattern, project vs app, settings configuration, URL routing, views, templates, and the request lifecycle.'
      },
      {
        name: 'Django ORM',
        tags: ['ORM', 'Database'],
        desc: 'Model definition, migrations, QuerySets, related managers, aggregation, F/Q objects, and select_related vs prefetch_related.'
      },
      {
        name: 'Authentication & Security',
        tags: ['Security', 'Auth'],
        desc: 'Django\'s built-in auth system, login/logout, password hashing, CSRF protection, middleware, and permissions.'
      },
      {
        name: 'Django REST Framework',
        tags: ['API', 'Advanced'],
        desc: 'Serializers, ViewSets, Routers, token authentication, throttling, pagination, and filtering with DRF.'
      },
      {
        name: 'Admin & Forms',
        tags: ['Productivity'],
        desc: 'Customizing the Django admin interface, model forms, form validation, ModelForm, and file/image uploads.'
      }
    ]
  },
  {
    number: '04',
    title: 'Database',
    subtitle: 'Store and query data efficiently',
    topics: [
      {
        name: 'SQLite & PostgreSQL',
        tags: ['SQL', 'Core'],
        desc: 'Schema design, CRUD operations, JOINs, indexes, foreign keys, transactions, and Django database routing.'
      },
      {
        name: 'Data Modeling',
        tags: ['Design'],
        desc: 'Normalization (1NF–3NF), ER diagrams, choosing between OneToOne, ForeignKey, and ManyToMany relationships.'
      },
      {
        name: 'QuerySet Optimization',
        tags: ['Performance'],
        desc: 'Lazy vs eager evaluation, database hit analysis with django-debug-toolbar, caching query results with select_related.'
      }
    ]
  },
  {
    number: '05',
    title: 'Git & Deployment',
    subtitle: 'Ship code to production',
    topics: [
      {
        name: 'Git Core',
        tags: ['Core', 'Essential'],
        desc: 'Commits, branches, merges, rebasing, pull requests, branching strategies (Git Flow, trunk-based development).'
      },
      {
        name: 'Cloud Hosting',
        tags: ['Deployment'],
        desc: 'Deploying Django apps to Heroku or AWS EC2, configuring Gunicorn + Nginx, environment variables, and HTTPS setup.'
      },
      {
        name: 'Docker Basics',
        tags: ['Containers'],
        desc: 'Containerizing the Django app with a Dockerfile, Docker Compose for local dev with a PostgreSQL container.'
      }
    ]
  },
  {
    number: '06',
    title: 'Real Project',
    subtitle: 'E-Commerce platform from scratch',
    topics: [
      {
        name: 'User Authentication',
        tags: ['Project', 'Auth'],
        desc: 'Signup, OTP verification, login, JWT token authentication, password reset, and social login integration.'
      },
      {
        name: 'Product Catalog',
        tags: ['Project', 'Features'],
        desc: 'Product listing with categories, filtering, searching, pagination, image upload, and inventory management.'
      },
      {
        name: 'Cart & Orders',
        tags: ['Project', 'Core'],
        desc: 'Shopping cart logic, order placement, address management, status tracking, and payment gateway integration basics.'
      },
      {
        name: 'Admin Dashboard',
        tags: ['Project', 'Management'],
        desc: 'Custom Django admin for managing products, users, orders, and revenue analytics with charts.'
      }
    ]
  }
];

export const dataEngineerRoadmap = [
  {
    number: '01',
    title: 'Advanced Python',
    subtitle: 'Production-grade Python patterns',
    topics: [
      {
        name: 'Generators & Iterators',
        tags: ['Advanced', 'Memory'],
        desc: 'yield, generator expressions, itertools, lazy evaluation for processing large data streams without memory overflow.'
      },
      {
        name: 'Comprehensions & Unpacking',
        tags: ['Pythonic'],
        desc: 'List, dict, and set comprehensions, argument unpacking (*args/**kwargs), and functional patterns (map, filter, zip).'
      },
      {
        name: 'Closures & Decorators',
        tags: ['Advanced', 'Patterns'],
        desc: 'Function factories, scope chain (LEGB), memoization decorators, and building reusable higher-order utilities.'
      },
      {
        name: 'Queues, Regex & Built-ins',
        tags: ['Utility'],
        desc: 'collections.deque, Queue, regex for log parsing, and mastering any, all, sorted, enumerate, zip, chain.'
      }
    ]
  },
  {
    number: '02',
    title: 'Django & ORM',
    subtitle: 'Web layer and database schemas',
    topics: [
      {
        name: 'Django Setup & URLs',
        tags: ['Framework', 'Core'],
        desc: 'Project structure, settings, URL routing, class-based views, middleware, and the request/response pipeline.'
      },
      {
        name: 'Models & Migrations',
        tags: ['ORM', 'Database'],
        desc: 'Defining models, field types, relationships (FK/M2M), makemigrations, migrate, and schema evolution strategies.'
      },
      {
        name: 'Django REST Framework',
        tags: ['API'],
        desc: 'Serializers, APIView, ViewSets, Routers, JWT authentication, and building data APIs consumed by pipelines.'
      },
      {
        name: 'Admin & CRUD',
        tags: ['Productivity'],
        desc: 'Customizing admin views, ModelAdmin, inlines, list_display, search, filters, and automated CRUD endpoints.'
      }
    ]
  },
  {
    number: '03',
    title: 'Data Libraries',
    subtitle: 'NumPy, Pandas & Visualization',
    topics: [
      {
        name: 'NumPy Arrays',
        tags: ['Computation', 'Core'],
        desc: 'Multi-dimensional arrays, broadcasting, vectorized operations, I/O with savetxt/loadtxt/npy formats.'
      },
      {
        name: 'Pandas DataFrames',
        tags: ['Data Wrangling'],
        desc: 'DataFrames from CSV/Excel/JSON, groupby, pivot, merge, time series resampling, and missing value strategies.'
      },
      {
        name: 'Statistics & Linear Algebra',
        tags: ['Math'],
        desc: 'Descriptive stats, distributions, correlation, regression basics, matrix operations with NumPy linalg.'
      },
      {
        name: 'Matplotlib',
        tags: ['Visualization'],
        desc: 'Line, bar, scatter, subplots — visualizing pipeline outputs, data quality metrics, and trend analysis.'
      }
    ]
  },
  {
    number: '04',
    title: 'PySpark',
    subtitle: 'Distributed big data processing',
    topics: [
      {
        name: 'SparkContext & Configuration',
        tags: ['Core', 'Setup'],
        desc: 'SparkConf, SparkContext, SparkSession — setting up local and cluster modes, master URLs, and deployment configs.'
      },
      {
        name: 'RDD Operations',
        tags: ['Low-Level'],
        desc: 'Resilient Distributed Datasets, transformations (map/filter/flatMap/groupBy), actions (collect/count/reduce), and DAGs.'
      },
      {
        name: 'DataFrames & SparkSQL',
        tags: ['High-Level', 'SQL'],
        desc: 'Creating DataFrames from JSON/Parquet, select/filter/groupBy, registerTempTable, and running SQL queries on Spark.'
      },
      {
        name: 'File Formats',
        tags: ['Storage'],
        desc: 'Reading and writing JSON, Parquet, ORC, and Delta formats. Schema inference, partitioning, and columnar optimizations.'
      }
    ]
  },
  {
    number: '05',
    title: 'REST APIs',
    subtitle: 'Expose and consume data services',
    topics: [
      {
        name: 'API Design Principles',
        tags: ['Design', 'Core'],
        desc: 'HTTP verbs, status codes, resource naming, idempotency, versioning, and API contract design.'
      },
      {
        name: 'GET/POST/PUT/DELETE',
        tags: ['CRUD'],
        desc: 'Implementing all CRUD operations in Django REST Framework with proper serialization, validation, and error handling.'
      },
      {
        name: 'Postman & Documentation',
        tags: ['Tooling'],
        desc: 'Testing endpoints in Postman, creating collection documentation, environment variables, and automated API tests.'
      }
    ]
  },
  {
    number: '06',
    title: 'Data Pipelines',
    subtitle: 'Batch and real-time ingestion',
    topics: [
      {
        name: 'Batch Ingestion Architecture',
        tags: ['Architecture', 'Core'],
        desc: 'Scheduled batch jobs, ETL workflows, file-based ingestion patterns (FTP, S3), and idempotent pipeline design.'
      },
      {
        name: 'Real-Time Streaming',
        tags: ['Streaming', 'Advanced'],
        desc: 'Apache Kafka for event streaming, PySpark Structured Streaming, micro-batch processing, and watermarking.'
      },
      {
        name: 'Pipeline Design Patterns',
        tags: ['Best Practices'],
        desc: 'Lambda architecture, Kappa architecture, idempotency, exactly-once semantics, and data quality checks.'
      }
    ]
  }
];

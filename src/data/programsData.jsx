import javaImg from '../assets/java_course.png';
import pythonImg from '../assets/python_course.jpg';
import qaImg from '../assets/qa_course.jpg';
import analystImg from '../assets/data_analyst_course.png';
import engineerImg from '../assets/data_engineer_course.png';
import scientistImg from '../assets/data_scientist_course.png';

export const programs = [
  {
    id: 'java-full-stack',
    image: '/images/illustrations/java.png',
    icon: '☕',
    title: 'Full Stack Java Developer',
    duration: '4-6 Months',
    desc: 'Master the complete Java ecosystem from Core to Cloud. Build real-world banking and enterprise applications.',
    skills: 'Core Java 8 · Spring Boot · Angular 12 · Microservices · AWS · DevOps · Docker · Jenkins',
    color: '#e76f00',
    bg: '#fff7ed',
    tagline: 'Become a job-ready Enterprise Java Specialist',
    overview: 'This comprehensive bootcamp is designed to take you from basic programming concepts to designing and deploying highly scalable enterprise microservices. You will learn core backend development with Java 8+, frontend integration with Angular, cloud deployments on AWS, and automated CI/CD pipelines.',
    highlights: [
      '100% Practical & Project-based training',
      'Build a live multi-module Microservices Banking App',
      'Mock interviews and resume reviews with US tech managers',
      'Learn cloud deployment (AWS EC2, S3, RDS, Lambda)',
      'Master industry standards: JUnit, Docker, CI/CD'
    ],
    tools: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Docker', 'Jenkins', 'Git', 'Maven', 'PostgreSQL', 'JUnit'],
    curriculum: [
      { phase: 'Phase 1 – Core Java', topics: 'OOPS, Inheritance, Interface, Abstract Class, String, Exception Handling, Collections, Generics, Java 8 Features, JDBC, Data Structures, Coding Problems' },
      { phase: 'Phase 2 – Front End', topics: 'HTML5, CSS & SCSS, Bootstrap 5, JavaScript, TypeScript, Angular 12' },
      { phase: 'Phase 3 – Advance Java', topics: 'Spring Core, Spring Boot 2.x, Spring Data JPA, Hibernate ORM, REST API, Microservices, Spring Security, Eureka Server, Config Server' },
      { phase: 'Phase 4 – AWS & DevOps', topics: 'Maven, Jenkins, Docker, EC2, CloudWatch, RDS, SQS/SNS, API Gateway, Lambda, S3, Auto Scaling, JUnit 5, Mockito' },
      { phase: 'Phase 5 – Real Project', topics: 'Live Banking Application with multi-module microservices, debugging, deployment pipeline' },
    ]
  },
  {
    id: 'python-developer',
    image: '/images/illustrations/python.png',
    icon: '🐍',
    title: 'Python Developer',
    duration: '3-5 Months',
    desc: 'Build production-ready web applications with Python and Django. Deploy real e-commerce platforms.',
    skills: 'Python Core · Django · REST API · SQLite · OOPS · Git · Postman · E-Commerce Project',
    color: '#3776ab',
    bg: '#eff6ff',
    tagline: 'Build powerful modern web apps with Python',
    overview: 'Python is the world\'s most popular and versatile programming language. In this bootcamp, you will master Python core libraries, learn web development patterns using the robust Django framework, build secure REST APIs, and deploy a complete production-grade E-Commerce platform.',
    highlights: [
      'Master Python from syntax basics to advanced concepts',
      'Design RESTful APIs from scratch using Django REST Framework',
      'Implement authentication, token security, and database ORMs',
      'Deploy applications with Git and cloud hosting platforms',
      'Construct a complete production-grade E-Commerce system'
    ],
    tools: ['Python', 'Django', 'SQLite', 'PostgreSQL', 'Git', 'Postman', 'GitHub', 'Heroku'],
    curriculum: [
      { phase: 'Phase 1 – Python Core', topics: 'Data Types, String Methods, Operators, Lists, Dicts, Flow Control, Exception Handling, Date & Time, OOPS, Generators, Closures, JSON, PIP' },
      { phase: 'Phase 2 – REST API', topics: 'What is API, Static vs Dynamic Sites, Request/Response, Writing APIs, HTTP Methods, Postman, API Structure Design' },
      { phase: 'Phase 3 – Django Framework', topics: 'Setup, Architecture, Migrations, Git Management, Branching Strategy, User Management, Admin Interface, Forms, Authentication' },
      { phase: 'Phase 4 – Database', topics: 'SQLite Integration, Models & DB Relations, CRUD, Primary & Foreign Keys, QuerySets, Advanced Filtering' },
      { phase: 'Phase 5 – Real Project', topics: 'Full E-Commerce: Signup/OTP/Login, Auth Token, Address Management, Product Catalog, Order Management' },
    ]
  },
  {
    id: 'qa-automation',
    image: '/images/illustrations/qa.png',
    icon: '🔍',
    title: 'QA Automation Engineer',
    duration: '3-5 Months',
    desc: 'Become a certified QA Engineer skilled in manual testing, Java, and Selenium automation from scratch.',
    skills: 'Manual Testing · Core Java · Selenium WebDriver · TestNG · Data Driven · Agile · Jira',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    tagline: 'Bridge the gap between testing and development',
    overview: 'As software products scale, automation is essential for quality control. This course covers everything from manual testing principles and Agile frameworks to writing robust automation test suites using Selenium WebDriver, Java, and TestNG. You will also learn test management with Jira.',
    highlights: [
      'Zero coding background required to start',
      'Learn manual testing workflows and Agile Scrum methodologies',
      'Write Java automation scripts with Selenium WebDriver',
      'Build TestNG automation frameworks using Page Object Model (POM)',
      'CI/CD integration using Jenkins and Maven'
    ],
    tools: ['Selenium', 'Java', 'TestNG', 'Jira', 'Maven', 'Jenkins', 'Git', 'Allure Reports', 'XPath'],
    curriculum: [
      { phase: 'Phase 1 – Manual Testing', topics: 'Types of Testing, Testing Life Cycle, Bug/Defect Life Cycle, Scenario & Test Case Creation, Severity & Priority, Agile Methodology' },
      { phase: 'Phase 2 – Core Java', topics: 'OOPS, Inheritance, Interfaces, Strings, Exception Handling, Collections, Generics, JDBC, Data Structures' },
      { phase: 'Phase 3 – Selenium WebDriver', topics: 'Locators, WebElements, By Mechanism, Actions, Explicit & Implicit Waits, Alerts, Radio Buttons, Dropdowns, Frame & Window Switching' },
      { phase: 'Phase 4 – TestNG & Frameworks', topics: 'TestNG Framework, Data Driven Testing, Page Object Model, Maven, Jenkins CI/CD, Reporting' },
    ]
  },
  {
    id: 'data-analyst',
    image: analystImg,
    icon: '📊',
    title: 'Data Analyst',
    duration: '3-4 Months',
    desc: 'Learn to extract insights from data using Python, Pandas, and Power BI. Work on real datasets.',
    skills: 'Python · NumPy · Pandas · Matplotlib · Statistics · Jupyter · Power BI · Data Visualization',
    color: '#10b981',
    bg: '#ecfdf5',
    tagline: 'Transform raw data into business intelligence',
    overview: 'Businesses generate massive volumes of data daily. This course trains you to clean, explore, analyze, and visualize data. You will master Python libraries like NumPy and Pandas, study core statistical concepts, and build interactive executive dashboards with Power BI.',
    highlights: [
      'Learn data manipulation with Pandas and NumPy',
      'Develop insights with descriptive statistics and data cleaning',
      'Build stunning, interactive dashboards in Power BI',
      'Connect databases and flat files for data transformations',
      'Work on actual real-world business datasets'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Excel'],
    curriculum: [
      { phase: 'Phase 1 – Python Fundamentals', topics: 'Variables, Numbers, Strings, Lists, Tuples, Dicts, if/else, Loops, Functions, Lambda, Classes, Inheritance' },
      { phase: 'Phase 2 – Python Libraries', topics: 'Jupyter Notebook, NumPy (Arrays, Indexing, Slicing, I/O), Pandas (DataFrames, Series, Aggregation, Joins, Missing Data)' },
      { phase: 'Phase 3 – Data Loading & Storage', topics: 'CSV, HDF5, Excel, JSON, HTML Parsing with BeautifulSoup, PyTables' },
      { phase: 'Phase 4 – Statistics & Visualization', topics: 'Basic Statistics, Linear Algebra with NumPy, Random Numbers, Matplotlib (Bar, Scatter, Line Charts), Seaborn' },
    ]
  },
  {
    id: 'data-engineer',
    image: engineerImg,
    icon: '🔧',
    title: 'Data Engineer',
    duration: '4-6 Months',
    desc: 'Build large-scale data pipelines and ETL workflows. Master PySpark, Django, and real-time ingestion.',
    skills: 'Python · PySpark · Django · SQL · NumPy · Pandas · REST API · Batch & Real-Time Ingestion',
    color: '#f97316',
    bg: '#fff7ed',
    tagline: 'Engineer scalable pipelines for big data',
    overview: 'Learn how to build high-volume data architectures. This course covers advanced Python data flows, SQL transformations, PySpark cluster processing, building data APIs, and designing scalable batch and real-time data ingestion pipelines.',
    highlights: [
      'Master PySpark core transformations and SparkSQL actions',
      'Build batch and streaming ingestion workflows',
      'Understand Django ORM database schemas and REST APIs',
      'Work with structured formats: JSON, Parquet, and ORC',
      'Design reliable ETL pipeline architectural patterns'
    ],
    tools: ['Apache Spark', 'PySpark', 'Python', 'Django', 'SQL', 'PostgreSQL', 'Pandas', 'REST APIs'],
    curriculum: [
      { phase: 'Phase 1 – Python Advanced', topics: 'Generators, Iterators, Comprehensions, Argument Unpacking, Closures, Queues, Dates & Regex, Advanced Built-ins (filter, map, any, all)' },
      { phase: 'Phase 2 – Django & Database', topics: 'Django Setup, URL Routing, Templates, Models, Forms, ORM, CRUD, Authentication, Admin Interface' },
      { phase: 'Phase 3 – Data Libraries', topics: 'NumPy Arrays, Pandas DataFrames, Statistics, Linear Algebra, Matplotlib, CSV/HDF5/Excel/JSON' },
      { phase: 'Phase 4 – PySpark & APIs', topics: 'SparkConf, RDD, DataFrame, Transformations, Actions, JSON/Parquet/ORC Formats, REST APIs (GET/POST/PUT/DELETE)' },
      { phase: 'Phase 5 – Real Project', topics: 'Batch Data Ingestion Architecture, Real-Time Streaming Data, Pipeline Design Patterns' },
    ]
  },
  {
    id: 'data-scientist',
    image: scientistImg,
    icon: '🤖',
    title: 'Data Scientist',
    duration: '4-6 Months',
    desc: 'From Python basics to PySpark, Power BI, and machine learning — become a complete data scientist.',
    skills: 'Python · PySpark · NumPy · Pandas · Statistics · Power BI · SparkSQL · Data Ingestion',
    color: '#ef4444',
    bg: '#fef2f2',
    tagline: 'Uncover patterns and build machine learning systems',
    overview: 'From data ingestion to model deployment, this course covers the entire data science pipeline. Master statistical algorithms, data analysis libraries, big data engineering tools like Apache Spark, and build business-focused dashboards using Power BI.',
    highlights: [
      'Acquire a complete toolkit in Python, Pandas, and SparkSQL',
      'Design predictive models using statistics and machine learning',
      'Leverage big data framework processing with Apache Spark',
      'Build data-driven dashboards and DAX metrics in Power BI',
      'Understand end-to-end data pipelines and feature engineering'
    ],
    tools: ['Python', 'Apache Spark', 'PySpark', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL'],
    curriculum: [
      { phase: 'Phase 1 – Python & ML Libraries', topics: 'Python Core, Lambda, Classes, NumPy Arrays, Pandas DataFrames, Statistics, Linear Algebra, Matplotlib, Seaborn' },
      { phase: 'Phase 2 – PySpark', topics: 'SparkConf, RDD, DataFrame API, Transformations, Actions, SparkSQL, JSON/Parquet/ORC/Table formats' },
      { phase: 'Phase 3 – Data Ingestion', topics: 'Batch Data Ingestion, Data Transformation Pipelines, Real-Time Streaming Ingestion' },
      { phase: 'Phase 4 – Power BI', topics: 'Charts & Dashboards, Data Transformation, Database & Flat File Connections, Power Query Editor, Data Modeling, DAX Basics' },
    ]
  }
];

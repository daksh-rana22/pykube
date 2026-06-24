import { useState } from 'react';
import '../styles/Programs.css';

const programs = [
  {
    icon: '☕', title: 'Full Stack Java Developer', duration: '4-6 Months',
    desc: 'Master the complete Java ecosystem from Core to Cloud. Build real-world banking and enterprise applications.',
    skills: 'Core Java 8 · Spring Boot · Angular 12 · Microservices · AWS · DevOps · Docker · Jenkins',
    color: '#e76f00', bg: '#fff7ed',
    curriculum: [
      { phase: 'Phase 1 – Core Java', topics: 'OOPS, Inheritance, Interface, Abstract Class, String, Exception Handling, Collections, Generics, Java 8 Features, JDBC, Data Structures, Coding Problems' },
      { phase: 'Phase 2 – Front End', topics: 'HTML5, CSS & SCSS, Bootstrap 5, JavaScript, TypeScript, Angular 12' },
      { phase: 'Phase 3 – Advance Java', topics: 'Spring Core, Spring Boot 2.x, Spring Data JPA, Hibernate ORM, REST API, Microservices, Spring Security, Eureka Server, Config Server' },
      { phase: 'Phase 4 – AWS & DevOps', topics: 'Maven, Jenkins, Docker, EC2, CloudWatch, RDS, SQS/SNS, API Gateway, Lambda, S3, Auto Scaling, JUnit 5, Mockito' },
      { phase: 'Phase 5 – Real Project', topics: 'Live Banking Application with multi-module microservices, debugging, deployment pipeline' },
    ]
  },
  {
    icon: '🐍', title: 'Python Developer', duration: '3-5 Months',
    desc: 'Build production-ready web applications with Python and Django. Deploy real e-commerce platforms.',
    skills: 'Python Core · Django · REST API · SQLite · OOPS · Git · Postman · E-Commerce Project',
    color: '#3776ab', bg: '#eff6ff',
    curriculum: [
      { phase: 'Phase 1 – Python Core', topics: 'Data Types, String Methods, Operators, Lists, Dicts, Flow Control, Exception Handling, Date & Time, OOPS, Generators, Closures, JSON, PIP' },
      { phase: 'Phase 2 – REST API', topics: 'What is API, Static vs Dynamic Sites, Request/Response, Writing APIs, HTTP Methods, Postman, API Structure Design' },
      { phase: 'Phase 3 – Django Framework', topics: 'Setup, Architecture, Migrations, Git Management, Branching Strategy, User Management, Admin Interface, Forms, Authentication' },
      { phase: 'Phase 4 – Database', topics: 'SQLite Integration, Models & DB Relations, CRUD, Primary & Foreign Keys, QuerySets, Advanced Filtering' },
      { phase: 'Phase 5 – Real Project', topics: 'Full E-Commerce: Signup/OTP/Login, Auth Token, Address Management, Product Catalog, Order Management' },
    ]
  },
  {
    icon: '🔍', title: 'QA Automation Engineer', duration: '3-5 Months',
    desc: 'Become a certified QA Engineer skilled in manual testing, Java, and Selenium automation from scratch.',
    skills: 'Manual Testing · Core Java · Selenium WebDriver · TestNG · Data Driven · Agile · Jira',
    color: '#8b5cf6', bg: '#f5f3ff',
    curriculum: [
      { phase: 'Phase 1 – Manual Testing', topics: 'Types of Testing, Testing Life Cycle, Bug/Defect Life Cycle, Scenario & Test Case Creation, Severity & Priority, Agile Methodology' },
      { phase: 'Phase 2 – Core Java', topics: 'OOPS, Inheritance, Interfaces, Strings, Exception Handling, Collections, Generics, JDBC, Data Structures' },
      { phase: 'Phase 3 – Selenium WebDriver', topics: 'Locators, WebElements, By Mechanism, Actions, Explicit & Implicit Waits, Alerts, Radio Buttons, Dropdowns, Frame & Window Switching' },
      { phase: 'Phase 4 – TestNG & Frameworks', topics: 'TestNG Framework, Data Driven Testing, Page Object Model, Maven, Jenkins CI/CD, Reporting' },
    ]
  },
  {
    icon: '📊', title: 'Data Analyst', duration: '3-4 Months',
    desc: 'Learn to extract insights from data using Python, Pandas, and Power BI. Work on real datasets.',
    skills: 'Python · NumPy · Pandas · Matplotlib · Statistics · Jupyter · Power BI · Data Visualization',
    color: '#10b981', bg: '#ecfdf5',
    curriculum: [
      { phase: 'Phase 1 – Python Fundamentals', topics: 'Variables, Numbers, Strings, Lists, Tuples, Dicts, if/else, Loops, Functions, Lambda, Classes, Inheritance' },
      { phase: 'Phase 2 – Python Libraries', topics: 'Jupyter Notebook, NumPy (Arrays, Indexing, Slicing, I/O), Pandas (DataFrames, Series, Aggregation, Joins, Missing Data)' },
      { phase: 'Phase 3 – Data Loading & Storage', topics: 'CSV, HDF5, Excel, JSON, HTML Parsing with BeautifulSoup, PyTables' },
      { phase: 'Phase 4 – Statistics & Visualization', topics: 'Basic Statistics, Linear Algebra with NumPy, Random Numbers, Matplotlib (Bar, Scatter, Line Charts), Seaborn' },
    ]
  },
  {
    icon: '🔧', title: 'Data Engineer', duration: '4-6 Months',
    desc: 'Build large-scale data pipelines and ETL workflows. Master PySpark, Django, and real-time ingestion.',
    skills: 'Python · PySpark · Django · SQL · NumPy · Pandas · REST API · Batch & Real-Time Ingestion',
    color: '#f97316', bg: '#fff7ed',
    curriculum: [
      { phase: 'Phase 1 – Python Advanced', topics: 'Generators, Iterators, Comprehensions, Argument Unpacking, Closures, Queues, Dates & Regex, Advanced Built-ins (filter, map, any, all)' },
      { phase: 'Phase 2 – Django & Database', topics: 'Django Setup, URL Routing, Templates, Models, Forms, ORM, CRUD, Authentication, Admin Interface' },
      { phase: 'Phase 3 – Data Libraries', topics: 'NumPy Arrays, Pandas DataFrames, Statistics, Linear Algebra, Matplotlib, CSV/HDF5/Excel/JSON' },
      { phase: 'Phase 4 – PySpark & APIs', topics: 'SparkConf, RDD, DataFrame, Transformations, Actions, JSON/Parquet/ORC Formats, REST APIs (GET/POST/PUT/DELETE)' },
      { phase: 'Phase 5 – Data Ingestion', topics: 'Batch Data Ingestion Architecture, Real-Time Streaming Data, Pipeline Design Patterns' },
    ]
  },
  {
    icon: '🤖', title: 'Data Scientist', duration: '4-6 Months',
    desc: 'From Python basics to PySpark, Power BI, and machine learning — become a complete data scientist.',
    skills: 'Python · PySpark · NumPy · Pandas · Statistics · Power BI · SparkSQL · Data Ingestion',
    color: '#ef4444', bg: '#fef2f2',
    curriculum: [
      { phase: 'Phase 1 – Python & ML Libraries', topics: 'Python Core, Lambda, Classes, NumPy Arrays, Pandas DataFrames, Statistics, Linear Algebra, Matplotlib, Seaborn' },
      { phase: 'Phase 2 – PySpark', topics: 'SparkConf, RDD, DataFrame API, Transformations, Actions, SparkSQL, JSON/Parquet/ORC/Table formats' },
      { phase: 'Phase 3 – Data Ingestion', topics: 'Batch Data Ingestion, Data Transformation Pipelines, Real-Time Streaming Ingestion' },
      { phase: 'Phase 4 – Power BI', topics: 'Charts & Dashboards, Data Transformation, Database & Flat File Connections, Power Query Editor, Data Modeling, DAX Basics' },
    ]
  },
];

export default function Programs() {
  const [expanded, setExpanded] = useState({});
  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">Industry-leading training programs</h2>
          <p className="section-subtitle">Job-oriented bootcamps taught by 10+ year industry experts with real-time projects and placement support.</p>
        </div>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div className="program-card" key={i} style={{ '--pc': p.color, '--pb': p.bg }}>
              <div className="program-top">
                <div className="program-icon-wrap"><span>{p.icon}</span></div>
                <span className="program-duration">{p.duration}</span>
              </div>
              <h3 className="program-title">{p.title}</h3>
              <p className="program-desc">{p.desc}</p>
              <div className="program-skills-tags">
                {p.skills.split(' · ').map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>

              {expanded[i] && (
                <div className="program-curriculum">
                  <div className="curriculum-title">📋 Curriculum Overview</div>
                  {p.curriculum.map((c, j) => (
                    <div className="curriculum-phase" key={j}>
                      <div className="phase-name">{c.phase}</div>
                      <p className="phase-topics">{c.topics}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="program-actions">
                <button className="program-toggle" onClick={() => toggle(i)} style={{ color: p.color, borderColor: p.color }}>
                  {expanded[i] ? '▲ Hide Curriculum' : '▼ View Curriculum'}
                </button>
                <a href="#contact" className="program-cta">
                  Enroll Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

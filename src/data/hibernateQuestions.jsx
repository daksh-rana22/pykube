import React from 'react';

export const HIBERNATE_QUESTIONS = [
  {
    id: 9001,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is Hibernate?",
    answer: (
      <>
        <p><strong>Hibernate</strong> is an open-source, lightweight Object-Relational Mapping (ORM) framework for Java applications. It simplifies database interaction by mapping Java domain model classes directly to database tables, handling SQL queries, transactions, and connections automatically.</p>
      </>
    ),
  },
  {
    id: 9002,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is ORM?",
    answer: (
      <>
        <p><strong>ORM</strong> (Object-Relational Mapping) is a programming technique that connects database tables to object-oriented programming language classes, converting data between incompatible systems automatically without manually writing complex SQL.</p>
      </>
    ),
  },
  {
    id: 9003,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Mention the core interfaces of Hibernate",
    answer: (
      <>
        <p>Core interfaces include:</p><ul><li><strong>Configuration:</strong> Bootstraps Hibernate settings.</li><li><strong>SessionFactory:</strong> Thread-safe factory for Session instances.</li><li><strong>Session:</strong> Main interface for CRUD operations.</li><li><strong>Transaction:</strong> Manages database transactions.</li><li><strong>Query:</strong> Executes database queries (HQL or native SQL).</li><li><strong>Criteria:</strong> Object-oriented query building API.</li></ul>
      </>
    ),
  },
  {
    id: 9004,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Mention some benefits of using ORM over JDBC.",
    answer: (
      <>
        <p>Benefits of ORM:</p><ul><li>Eliminates boilerplate JDBC code.</li><li>Supports Object-Oriented features (Inheritance, Polymorphism).</li><li>Database-independent: swapping databases only requires modifying dialects.</li><li>Built-in caching systems (First and Second level cache) improve performance.</li></ul>
      </>
    ),
  },
  {
    id: 9005,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Mention some databases supported by Hibernate.",
    answer: (
      <>
        <p>Hibernate supports all major databases, including Oracle, MySQL, PostgreSQL, Microsoft SQL Server, DB2, H2, and Sybase.</p>
      </>
    ),
  },
  {
    id: 9006,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the difference between sessions.save() & session.persist() method?",
    answer: (
      <>
        <ul><li><code>save()</code>: Returns the generated identifier (Serializable) immediately. It can execute outside transaction boundaries, scheduling inserts.</li><li><code>persist()</code>: Returns void. It guarantees that it will not execute an INSERT statement outside transaction boundaries, making it compliant with JPA specifications.</li></ul>
      </>
    ),
  },
  {
    id: 9007,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What are the main differences between the get() & load() methods?",
    answer: (
      <>
        <ul><li><code>get()</code>: Queries the database immediately and returns the actual object (or null if not found).</li><li><code>load()</code>: Returns a lazy proxy placeholder object immediately, querying the database only when helper attributes are accessed. Throws <code>ObjectNotFoundException</code> if records do not exist.</li></ul>
      </>
    ),
  },
  {
    id: 9008,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Differentiate between the update & merge methods.",
    answer: (
      <>
        <ul><li><code>update()</code>: Re-attaches a detached object to the current session. Throws an exception if another persistent instance with the same identifier is already associated with the session.</li><li><code>merge()</code>: Copies the state of the detached object onto the existing persistent instance, returning the persistent object.</li></ul>
      </>
    ),
  },
  {
    id: 9009,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Mention the states of an object in Hibernate ?",
    answer: (
      <>
        <p>The three main object persistence states are:</p><ul><li><strong>Transient:</strong> Object created in Java, not associated with a session, and has no database representation.</li><li><strong>Persistent:</strong> Object associated with an active session, having a database row. Modifications are automatically tracked.</li><li><strong>Detached:</strong> Object was persistent, but its session has been closed or cleared.</li></ul>
      </>
    ),
  },
  {
    id: 9010,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "How many association mapping types are possible in Hibernate?",
    answer: (
      <>
        <p>Four types: One-to-One, One-to-Many, Many-to-One, and Many-to-Many.</p>
      </>
    ),
  },
  {
    id: 9011,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is lazy loading in Hibernate?",
    answer: (
      <>
        <p><strong>Lazy Loading</strong> is a performance optimization where associated child collections or parent proxies are loaded from the database only when they are explicitly accessed by the application, rather than when the parent entity is first retrieved.</p>
      </>
    ),
  },
  {
    id: 9012,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is Hibernate Query Language or HQL?",
    answer: (
      <>
        <p><strong>HQL</strong> is an object-oriented extension query language, similar to SQL. Instead of querying database tables and columns directly, it queries Hibernate persistent class entities and their properties.</p>
      </>
    ),
  },
  {
    id: 9013,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is the main difference between the first level & second level cache?",
    answer: (
      <>
        <ul><li><strong>First Level Cache:</strong> Bound to the Session object scope. It is mandatory, enabled by default, and cannot be shared across sessions.</li><li><strong>Second Level Cache:</strong> Bound to the SessionFactory scope. It is optional, shared across all active sessions, and requires third-party plugins (like Ehcache).</li></ul>
      </>
    ),
  },
  {
    id: 9014,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Mention some major advantages of Hibernate.",
    answer: (
      <>
        <p>Advantages: database independence, automatic table creation (hbm2ddl), caching management, transactional write-behind, and object-oriented HQL queries.</p>
      </>
    ),
  },
  {
    id: 9015,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Why use the Hibernate Framework over JDBC?",
    answer: (
      <>
        <p>JDBC requires writing vendor-specific SQL and boilerplate connection pooling. Hibernate handles this, abstracts SQL mapping, and manages caches automatically.</p>
      </>
    ),
  },
  {
    id: 9016,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What are the different functionalities of Hibernate?",
    answer: (
      <>
        <p>Functionalities include object state tracking, transaction handling, relational mappings, custom validations, caching hierarchies, and criteria query generation.</p>
      </>
    ),
  },
  {
    id: 9017,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the One-to-One association in the Hibernate Framework.",
    answer: (
      <>
        <p>Maps a single row in one table to exactly one row in another table (e.g., User to UserProfile), often using foreign key constraints or primary key shares.</p>
      </>
    ),
  },
  {
    id: 9018,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Elaborate on One-to-Many association in Hibernate.",
    answer: (
      <>
        <p>Maps one parent row to multiple child rows (e.g., Department to Employees), typically declared using collections (List, Set) in Java.</p>
      </>
    ),
  },
  {
    id: 9019,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is Many-to-Many association mapping in Hibernate?",
    answer: (
      <>
        <p>Maps multiple rows in one table to multiple rows in another (e.g., Student to Course), requiring an intermediate join table to store relationship links.</p>
      </>
    ),
  },
  {
    id: 9020,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "How to integrate Spring & Hibernate?",
    answer: (
      <>
        <p>Integrate by defining a LocalSessionFactoryBean bean in Spring configurations, injecting the Datasource, and managing transactions using HibernateTransactionManager.</p>
      </>
    ),
  },
  {
    id: 9021,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Define Session in the Hibernate Framework. How to get it?",
    answer: (
      <>
        <p>A Session represents a physical connection to the database. Retrieve it from SessionFactory using <code>sessionFactory.openSession()</code> or <code>sessionFactory.getCurrentSession()</code>.</p>
      </>
    ),
  },
  {
    id: 9022,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What do you mean by Hibernate SessionFactory?",
    answer: (
      <>
        <p>SessionFactory is a thread-safe, immutable cache of compiled mappings representing a single database. It is expensive to compile and initialized once at startup.</p>
      </>
    ),
  },
  {
    id: 9023,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What are the differences between openSession & getCurrentSession?",
    answer: (
      <>
        <ul><li><code>openSession()</code>: Always opens a fresh new session, which the developer must close manually.</li><li><code>getCurrentSession()</code>: Returns the active session bound to Spring's transaction context, closing it automatically when transactions complete.</li></ul>
      </>
    ),
  },
  {
    id: 9024,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is a Hibernate configuration file?",
    answer: (
      <>
        <p>A file (typically <code>hibernate.cfg.xml</code>) containing database settings (connection URL, credentials, dialect) and registered mapping configuration files.</p>
      </>
    ),
  },
  {
    id: 9025,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the key components of a Hibernate configuration object.",
    answer: (
      <>
        <p>Key configurations: database connection configurations (JDBC properties), dialect class mapping, connection pooling, and entity mapping references.</p>
      </>
    ),
  },
  {
    id: 9026,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What are the collection types in the Hibernate Framework?",
    answer: (
      <>
        <p>Hibernate supports collections such as Bag (duplicates allowed, unordered), Set (no duplicates, unordered), List (ordered), and Map (key-value associations).</p>
      </>
    ),
  },
  {
    id: 9027,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you mean by a HibernateTemplate class?",
    answer: (
      <>
        <p>A legacy Spring helper class that wraps Hibernate Session operations, automatically translating database exceptions into Spring's hierarchy.</p>
      </>
    ),
  },
  {
    id: 9028,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What are the perks of using the Hibernate Template?",
    answer: (
      <>
        <p>Simplifies session acquisition, handles closures automatically, and abstracts transaction boilerplate code.</p>
      </>
    ),
  },
  {
    id: 9029,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What are the design patterns used in the Hibernate framework?",
    answer: (
      <>
        <p>Patterns used: Factory (SessionFactory), Proxy (Lazy Loading), Data Mapper, Unit of Work (Session), and Template Method.</p>
      </>
    ),
  },
  {
    id: 9030,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the Hibernate Validator Framework?",
    answer: (
      <>
        <p>It provides metadata-driven constraint validation (e.g. <code>@NotNull</code>, <code>@Size</code> annotations) on entities, validating them before persistence.</p>
      </>
    ),
  },
  {
    id: 9031,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What do you mean by Dirty Checking in Hibernate?",
    answer: (
      <>
        <p><strong>Dirty Checking</strong> is Hibernate's automated state tracking. When a transaction commits, Hibernate compares session objects with their loaded states, auto-executing SQL UPDATE queries on changed values without manual updates.</p>
      </>
    ),
  },
  {
    id: 9032,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is Light Object Mapping?",
    answer: (
      <>
        <p>A mapping level where only entity properties and simple relations are mapped, ignoring complex inheritance hierarchies to maintain high performance.</p>
      </>
    ),
  },
  {
    id: 9033,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What do you mean by Hibernate tuning?",
    answer: (
      <>
        <p>Tuning involves optimization actions: enabling lazy fetching, configuring second-level caches, tuning database connection pool sizing, and using batch size limits on fetches.</p>
      </>
    ),
  },
  {
    id: 9034,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the meaning of Transaction Management in Hibernate? How does it work?",
    answer: (
      <>
        <p>Transaction management ensures ACID safety. Developers start transactions via Session, committing or rolling back changes: <br/> <code>Transaction tx = session.beginTransaction();</code></p>
      </>
    ),
  },
  {
    id: 9035,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "How to create the primary key by using Hibernate?",
    answer: (
      <>
        <p>Create keys using mapping generators. Use the <code>@Id</code> annotation paired with <code>@GeneratedValue(strategy = GenerationType.IDENTITY)</code> or sequence generators.</p>
      </>
    ),
  },
  {
    id: 9036,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What do you understand by Query Cache in Hibernate?",
    answer: (
      <>
        <p>Query Cache stores the query results (identifiers) of specific HQL queries. It works in conjunction with second-level caches to fetch actual objects quickly.</p>
      </>
    ),
  },
  {
    id: 9037,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Mention the benefits of Native SQL query support in the Hibernate Framework.",
    answer: (
      <>
        <p>Allows developers to write database-specific optimized queries when HQL expressions are insufficient or slow, returning entity results directly.</p>
      </>
    ),
  },
  {
    id: 9038,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the term Named SQL Query.",
    answer: (
      <>
        <p>A query defined with annotations (e.g. <code>@NamedQuery</code>) or XML configurations, registered at startup, allowing code reuse.</p>
      </>
    ),
  },
  {
    id: 9039,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "When to use merge() & update() in Hibernate?",
    answer: (
      <>
        <ul><li>Use <code>update()</code> when you are certain the current session does not contain a persistent instance of the entity.</li><li>Use <code>merge()</code> to reconcile state changes if concurrent persistent objects are already loaded.</li></ul>
      </>
    ),
  },
  {
    id: 9040,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the key difference between Session & SessionFactory in Hibernate?",
    answer: (
      <>
        <p>SessionFactory is a global, thread-safe, heavy application object. Session is a lightweight, non-thread-safe connection wrapper disposed after transactions.</p>
      </>
    ),
  },
  {
    id: 9041,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Highlight the differences between the save() & saveOrUpdate() methods of Hibernate.",
    answer: (
      <>
        <ul><li><code>save()</code>: Performs an INSERT query, throwing an exception if the entity already has a persistent identifier.</li><li><code>saveOrUpdate()</code>: Performs either INSERT or UPDATE depending on whether the primary identifier exists.</li></ul>
      </>
    ),
  },
  {
    id: 9042,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Difference between the sorted & ordered collection in the Hibernate Framework?",
    answer: (
      <>
        <ul><li><strong>Sorted:</strong> Uses Java collections sorting algorithms (Comparator) in JVM memory after fetching.</li><li><strong>Ordered:</strong> Uses the SQL <code>ORDER BY</code> clause to sort rows directly inside database engines.</li></ul>
      </>
    ),
  },
  {
    id: 9043,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What are the differences between Managed Associations & Hibernate Associations?",
    answer: (
      <>
        <p>Managed Associations are handled manually in Java code relationships. Hibernate Associations are declared using mappings, letting Hibernate manage database relations automatically.</p>
      </>
    ),
  },
  {
    id: 9044,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is the meaning of \u2018Persistence\u2019?",
    answer: (
      <>
        <p>Persistence is the capability of an application to survive execution runs, writing memory states into permanent storage (RDBMS databases).</p>
      </>
    ),
  },
  {
    id: 9045,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "Mention four ORM levels in the Hibernate Framework.",
    answer: (
      <>
        <p>ORM levels include: Pure Relational (JDBC-like), Light Object Mapping (simple entities), Medium Object Mapping, and Full Object Mapping (complex inheritances).</p>
      </>
    ),
  },
  {
    id: 9046,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Describe the core interfaces of Hibernate.",
    answer: (
      <>
        <p>Core interfaces: Configuration (bootstraps), SessionFactory (factory), Session (CRUD context), Transaction (ACID controls), and Query (searches).</p>
      </>
    ),
  },
  {
    id: 9047,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What do you mean by concurrency strategies?",
    answer: (
      <>
        <p>Strategies regulating concurrent cache modifications: Read-Only, Nonstrict-Read-Write, Read-Write, and Transactional configurations.</p>
      </>
    ),
  },
  {
    id: 9048,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is the meaning of JDBC?",
    answer: (
      <>
        <p><strong>JDBC</strong> (Java Database Connectivity) is the standard Java API for executing raw SQL queries targeting relational databases.</p>
      </>
    ),
  },
  {
    id: 9049,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the Configuration object in Hibernate.",
    answer: (
      <>
        <p>The Configuration object bootstraps Hibernate, reading XML configuration files and registering mapped entity classes before building SessionFactory.</p>
      </>
    ),
  },
  {
    id: 9050,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is a transaction in the Hibernate Framework?",
    answer: (
      <>
        <p>A transaction represents a unit of work that executes query sequences atomically, ensuring databases remain consistent.</p>
      </>
    ),
  },
  {
    id: 9051,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is a Query in the Hibernate Framework?",
    answer: (
      <>
        <p>A Query object is obtained from Sessions to execute HQL or native SQL searches, mapping database rows back into Java lists.</p>
      </>
    ),
  },
  {
    id: 9052,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Name some properties you need to configure for a database in a standalone situation.",
    answer: (
      <>
        <p>Properties needed: connection driver class, connection URL, username, password, and the dialect class.</p>
      </>
    ),
  },
  {
    id: 9053,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Which method is used to add criteria to a query?",
    answer: (
      <>
        <p>In Criteria API, use the <code>add()</code> method to apply restrictions (e.g. <code>Restrictions.eq('property', value)</code>) to filter queries.</p>
      </>
    ),
  },
  {
    id: 9054,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the first-level cache in the Hibernate framework.",
    answer: (
      <>
        <p>It is the Session cache. It caches loaded entities within a single session transaction, preventing duplicate SELECT queries.</p>
      </>
    ),
  },
  {
    id: 9055,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the second-level cache in the Hibernate Framework?",
    answer: (
      <>
        <p>A process-level cache shared across all sessions in a SessionFactory, storing entity data across transaction boundaries.</p>
      </>
    ),
  },
  {
    id: 9056,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you mean by Hibernate caching?",
    answer: (
      <>
        <p>Storing previously loaded entity states in memory to prevent repeated slow database queries, speeding up response times.</p>
      </>
    ),
  },
  {
    id: 9057,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What are the key benefits of Hibernate?",
    answer: (
      <>
        <p>Benefits: ORM mapping automation, dynamic query building APIs, transactional safety controls, database dialect abstraction, and multi-tier caching.</p>
      </>
    ),
  },
  {
    id: 9058,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is a dialect in Hibernate?",
    answer: (
      <>
        <p>A dialect compiles HQL queries into database-specific SQL commands, enabling support for MySQL, Oracle, or SQL Server dialects.</p>
      </>
    ),
  },
  {
    id: 9059,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is a transient state in the Hibernate Framework?",
    answer: (
      <>
        <p>An object state where a new Java instance has no primary key ID and is not tracked by any active Hibernate session.</p>
      </>
    ),
  },
  {
    id: 9060,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Is it possible to declare an entity class as final in the Hibernate?",
    answer: (
      <>
        <p>Yes. However, it is discouraged because Hibernate uses proxy classes (which extend the entity class) to support lazy loading. Declaring it final disables lazy fetching.</p>
      </>
    ),
  },
  {
    id: 9061,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What are the main benefits of Criteria API in Hibernate?",
    answer: (
      <>
        <p>Enables dynamic query building at runtime, preventing syntax typos and SQL injection risks by using Java objects instead of query strings.</p>
      </>
    ),
  },
  {
    id: 9062,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is Criteria API in the Hibernate Framework?",
    answer: (
      <>
        <p>An object-oriented query building API that compiles searches dynamically using builder methods and Restrictions expressions.</p>
      </>
    ),
  },
  {
    id: 9063,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you mean by derived properties?",
    answer: (
      <>
        <p>Properties evaluated at runtime using SQL formulas (e.g. total prices calculated from subtotal and tax columns) instead of columns.</p>
      </>
    ),
  },
  {
    id: 9064,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "How can we use new custom interfaces to enhance functionality of built-in interfaces of hibernate?",
    answer: (
      <>
        <p>Developers implement custom callback listeners or extend Interceptor interfaces to intercept database operations (like audit logging) before saving.</p>
      </>
    ),
  },
  {
    id: 9065,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "Explain the N+1 problem in Hibernate.",
    answer: (
      <>
        <p>The **N+1 Problem** occurs when an application loads a list of N parent entities, and then executes N separate SELECT queries to fetch children. It is resolved using join fetching or batch sizing.</p>
      </>
    ),
  },
  {
    id: 9066,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you understand by cascading in Hibernate?",
    answer: (
      <>
        <p>Cascading defines how state changes (save, update, delete) propagate automatically from parent entities to child entities in a relationship.</p>
      </>
    ),
  },
  {
    id: 9067,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "How to create hibernate projects in the eclipse?",
    answer: (
      <>
        <p>Configure Maven dependencies in `pom.xml` for Hibernate Core and database drivers, adding the `hibernate.cfg.xml` config file to src/main/resources.</p>
      </>
    ),
  },
  {
    id: 9068,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "How to implement the joins() in the Hibernate Framework?",
    answer: (
      <>
        <p>Implement joins using HQL (e.g. <code>JOIN FETCH</code>) or Criteria association criteria to load associated records in a single SELECT query.</p>
      </>
    ),
  },
  {
    id: 9069,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What functions does Hibernate Simplify?",
    answer: (
      <>
        <p>Simplifies data object mappings, database connection handling, transaction boundaries, SQL generation, and caching operations.</p>
      </>
    ),
  },
  {
    id: 9070,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "Explain the general communication flow of Hibernate with RDBMS.",
    answer: (
      <>
        <p>Application queries via HQL/Criteria  &rarr;  Hibernate translates queries using dialects  &rarr;  executes JDBC commands  &rarr;  retrieves ResultSets  &rarr;  maps rows into Java objects.</p>
      </>
    ),
  },
  {
    id: 9071,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the meaning of component mapping in Hibernate?",
    answer: (
      <>
        <p>Component mapping maps a Java value object (class without its own identity, like Address) as columns inside a parent entity table (like User).</p>
      </>
    ),
  },
  {
    id: 9072,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is a fetching strategy?",
    answer: (
      <>
        <p>Determines when and how associated entities are retrieved from databases. Strategies include Immediate, Lazy, Eager, and Batch fetching.</p>
      </>
    ),
  },
  {
    id: 9073,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is an automatic dirty checking?",
    answer: (
      <>
        <p>Hibernate's automated state tracking that compares current entity attributes with original snapshots to auto-execute updates upon transaction commits.</p>
      </>
    ),
  },
  {
    id: 9074,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is a transactional write-behind?",
    answer: (
      <>
        <p>An optimization where Hibernate queues SQL modifications, executing them batch-style at the last possible moment (transaction commit) to optimize connections.</p>
      </>
    ),
  },
  {
    id: 9075,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What are the Callback interfaces?",
    answer: (
      <>
        <p>Lifecycle interfaces (like Lifecycle, Validatable) that trigger execution hooks inside entities when objects save, load, or delete.</p>
      </>
    ),
  },
  {
    id: 9076,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the difference between @NotNull, @NotEmpty, & @NotBlank?",
    answer: (
      <>
        <ul><li><code>@NotNull</code>: Checks that the value is not null (allows empty strings).</li><li><code>@NotEmpty</code>: Checks that the value is not null and its size/length is greater than zero.</li><li><code>@NotBlank</code>: Checks that the string is not null and has non-whitespace characters (for strings).</li></ul>
      </>
    ),
  },
  {
    id: 9077,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is optimistic locking? How to use it with Hibernate Framework?",
    answer: (
      <>
        <p>Optimistic locking prevents stale overwrites using a version column (annotated with <code>@Version</code>). If two transactions attempt updates, the first commits and the second throws <code>StaleObjectStateException</code>.</p>
      </>
    ),
  },
  {
    id: 9078,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is lazy fetching in the Hibernate Framework?",
    answer: (
      <>
        <p>Associated entities or proxy fields are loaded from database tables only when accessed, reducing query payloads.</p>
      </>
    ),
  },
  {
    id: 9079,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is the way to prevent stale object updating in Hibernate?",
    answer: (
      <>
        <p>Prevent updates to stale objects by using optimistic locking (adding a version column decorated with <code>@Version</code>) or pessimistic locking strategies.</p>
      </>
    ),
  },
  {
    id: 9080,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the saveOrUpdate() method?",
    answer: (
      <>
        <p>An operation that saves new entities (executing INSERT) or updates existing persistent records (executing UPDATE) depending on primary key states.</p>
      </>
    ),
  },
  {
    id: 9081,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What is the difference between the list() & iterate() methods in the Hibernate Framework?",
    answer: (
      <>
        <ul><li><code>list()</code>: Returns complete entity lists in a single SELECT query. It does not look in the first-level cache.</li><li><code>iterate()</code>: Fetches only primary keys first, querying the cache or database for each entity separately (causes N+1 queries if cache is cold).</li></ul>
      </>
    ),
  },
  {
    id: 9082,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What are the ways of configuring Hibernate?",
    answer: (
      <>
        <p>Configure using programmatic setup, XML files (<code>hibernate.cfg.xml</code>), or properties files (<code>hibernate.properties</code>).</p>
      </>
    ),
  },
  {
    id: 9083,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "Explain the connection pool concept.",
    answer: (
      <>
        <p>A cache of active database connections maintained by the server, allowing fast reuse without repeated handshake delays.</p>
      </>
    ),
  },
  {
    id: 9084,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "How to configure the size of a connection pool?",
    answer: (
      <>
        <p>Configure the size using property keys like <code>hibernate.c3p0.max_size</code> or HikariCP configurations in properties files.</p>
      </>
    ),
  },
  {
    id: 9085,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What are the reasons to use Session.beginTransaction() function?",
    answer: (
      <>
        <p>Begins a database transaction, securing atomic operation steps and ensuring data consistency.</p>
      </>
    ),
  },
  {
    id: 9086,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you mean by the Bag collection?",
    answer: (
      <>
        <p>A Bag is a collection type that allows duplicate elements but does not guarantee any iteration order, mapped as collections in Java.</p>
      </>
    ),
  },
  {
    id: 9087,
    category: 'Hibernate',
    difficulty: 'medium',
    question: "What do you understand by eager loading in Hibernate?",
    answer: (
      <>
        <p>Eager loading fetches associated child relationships immediately inside the primary query using JOINs, loading them before request access.</p>
      </>
    ),
  },
  {
    id: 9088,
    category: 'Hibernate',
    difficulty: 'easy',
    question: "What is a lazy initialization in Hibernate?",
    answer: (
      <>
        <p>Initializes parent objects while deferring child relations loading, fetching child details only upon request loops.</p>
      </>
    ),
  },
  {
    id: 9089,
    category: 'Hibernate',
    difficulty: 'hard',
    question: "What is the key difference between optimistic locking & pessimistic locking?",
    answer: (
      <>
        <ul><li><strong>Optimistic:</strong> Assumes conflicts are rare. Uses version columns to validate concurrent commits, throwing exceptions on collision.</li><li><strong>Pessimistic:</strong> Assumes conflicts are common. Locks rows in the database (e.g. <code>SELECT FOR UPDATE</code>) to block concurrent updates.</li></ul>
      </>
    ),
  },
];

import React from 'react';

export const SQL_QUESTIONS = [
  {
    id: 27001,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is SQL?",
    answer: (
      <>
        <p><strong>SQL (Structured Query Language)</strong> is a standardized programming language used to manage, query, and manipulate relational databases. It enables developers and database administrators to create databases, define schemas, insert, update, delete data, and perform complex data retrieval operations.</p>
        <p>Common relational database management systems (RDBMS) that use SQL include PostgreSQL, MySQL, SQL Server, Oracle, and SQLite.</p>
      </>
    ),
  },
  {
    id: 27002,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is a Database?",
    answer: (
      <>
        <p>A <strong>database</strong> is an organized, structured collection of data stored and accessed electronically from a computer system. Databases are designed to hold massive amounts of information securely and allow multiple users to query and update the data simultaneously with high performance and data integrity.</p>
      </>
    ),
  },
  {
    id: 27003,
    category: 'SQL',
    difficulty: 'easy',
    question: "What are DBMS and RDBMS?",
    answer: (
      <>
        <p>These represent different database systems based on data architecture:</p>
        <ul>
          <li><strong>DBMS (Database Management System):</strong> Software used to store, manage, retrieve, and organize data in files. Data is typically stored in a hierarchical or network format, often without strict relationships or integrity rules between files.</li>
          <li><strong>RDBMS (Relational Database Management System):</strong> A more advanced DBMS that stores data in a tabular format (rows and columns). It enforces relationships using primary and foreign keys, supports ACID properties, and uses SQL as the query language.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27004,
    category: 'SQL',
    difficulty: 'easy',
    question: "What are Tables and Fields?",
    answer: (
      <>
        <p>In relational databases, data is organized using tables and fields:</p>
        <ul>
          <li><strong>Table:</strong> A collection of related data entries structured in grid format, consisting of rows (records) and columns (attributes).</li>
          <li><strong>Field:</strong> A specific column in a table that represents a single attribute or property of the data records (e.g., <code>first_name</code>, <code>email</code>, or <code>created_at</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27005,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are Constraints in SQL?",
    answer: (
      <>
        <p><strong>Constraints</strong> are rules applied to columns in a table to restrict the type of data that can be inserted, maintaining accuracy and reliability. Common SQL constraints include:</p>
        <ul>
          <li><code>PRIMARY KEY</code>: Uniquely identifies each record and prevents null values.</li>
          <li><code>FOREIGN KEY</code>: Enforces relationships and referential integrity between tables.</li>
          <li><code>UNIQUE</code>: Ensures all values in a column are distinct.</li>
          <li><code>NOT NULL</code>: Prevents null values from being stored.</li>
          <li><code>CHECK</code>: Validates that values meet a specific condition (e.g., <code>age &gt;= 18</code>).</li>
          <li><code>DEFAULT</code>: Provides a default value if none is specified.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27006,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Data Integrity?",
    answer: (
      <>
        <p><strong>Data Integrity</strong> refers to the overall accuracy, completeness, consistency, and reliability of data stored in a database. It is enforced using constraints and triggers and is classified into:</p>
        <ul>
          <li><strong>Entity Integrity:</strong> Assures every table has a primary key and that no duplicate or null keys are stored.</li>
          <li><strong>Referential Integrity:</strong> Ensures foreign keys match valid primary keys in related tables, preventing orphaned records.</li>
          <li><strong>Domain Integrity:</strong> Validates that data values conform to defined formats, types, and ranges (using datatypes and CHECK constraints).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27007,
    category: 'SQL',
    difficulty: 'easy',
    question: "What are the subsets of SQL?",
    answer: (
      <>
        <p>SQL is divided into several sub-languages according to functionality:</p>
        <ul>
          <li><strong>DDL (Data Definition Language):</strong> Defines database schemas and structures. Commands: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>.</li>
          <li><strong>DML (Data Manipulation Language):</strong> Manages data within tables. Commands: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.</li>
          <li><strong>DQL (Data Query Language):</strong> Retrieves data from tables. Command: <code>SELECT</code>.</li>
          <li><strong>DCL (Data Control Language):</strong> Manages permissions and security. Commands: <code>GRANT</code>, <code>REVOKE</code>.</li>
          <li><strong>TCL (Transaction Control Language):</strong> Manages transactions. Commands: <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27008,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Normalization in a Database?",
    answer: (
      <>
        <p><strong>Normalization</strong> is the process of structuring a relational database schema to reduce data redundancy and eliminate anomalies (insert, update, and delete anomalies). It involves dividing large tables into smaller tables and defining relationships between them.</p>
        <p>The standard normal forms include:</p>
        <ul>
          <li><strong>1NF (First Normal Form):</strong> Each column must contain atomic (indivisible) values, and each record must be unique.</li>
          <li><strong>2NF (Second Normal Form):</strong> Must be in 1NF, and all non-key attributes must be fully functionally dependent on the primary key (no partial dependencies).</li>
          <li><strong>3NF (Third Normal Form):</strong> Must be in 2NF, and there must be no transitive dependencies (non-key columns depending on other non-key columns).</li>
          <li><strong>BCNF (Boyce-Codd Normal Form):</strong> A stronger version of 3NF where for every functional dependency X → Y, X must be a super key.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27009,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is an inconsistent dependency?",
    answer: (
      <>
        <p>An <strong>inconsistent dependency</strong> (or transitive dependency) occurs when a non-prime attribute in a table depends on another non-prime attribute, rather than directly on the primary key. This violates Third Normal Form (3NF).</p>
        <p>For example, if we have a table <code>Books(BookID, Author, AuthorNationality)</code>, the primary key is <code>BookID</code>. Here, <code>AuthorNationality</code> depends on <code>Author</code>, which in turn depends on <code>BookID</code>. If the author's nationality changes, it could lead to data inconsistency across multiple book entries unless normalized into separate tables.</p>
      </>
    ),
  },
  {
    id: 27010,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the difference between DROP and TRUNCATE commands?",
    answer: (
      <>
        <p>Both are DDL commands, but they have different effects on database structures:</p>
        <ul>
          <li><strong>TRUNCATE:</strong> Deletes all rows within a table but keeps the table structure, columns, constraints, and indexes intact. It cannot be rolled back in some databases without active transactions and is faster than DELETE.</li>
          <li><strong>DROP:</strong> Completely removes the table structure, along with all its data, indexes, triggers, and permissions from the database. The table ceases to exist.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27011,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is a “TRIGGER” in SQL?",
    answer: (
      <>
        <p>A <strong>Trigger</strong> is a special class of stored procedure that automatically executes (fires) in response to a specific event on a table or view, such as <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</p>
        <p>Triggers are commonly used to enforce complex business rules, maintain audit trails, and calculate summary values automatically.</p>
        <div className="qa-code-block">{`CREATE TRIGGER trg_AuditEmployee
ON Employees
AFTER INSERT
AS
BEGIN
    INSERT INTO EmployeeAuditLog(EmpID, ActionDate)
    SELECT ID, GETDATE() FROM inserted;
END;`}</div>
      </>
    ),
  },
  {
    id: 27012,
    category: 'SQL',
    difficulty: 'easy',
    question: "What are the types of relationships in SQL Server databases?",
    answer: (
      <>
        <p>Data relationships link tables together using primary and foreign keys:</p>
        <ul>
          <li><strong>One-to-One (1:1):</strong> A record in Table A is associated with exactly one record in Table B. E.g., <code>User</code> and <code>UserProfile</code>.</li>
          <li><strong>One-to-Many (1:N):</strong> A record in Table A can be associated with multiple records in Table B. E.g., <code>Customer</code> and <code>Orders</code>. This is the most common relationship type.</li>
          <li><strong>Many-to-Many (M:N):</strong> Multiple records in Table A can relate to multiple records in Table B. E.g., <code>Students</code> and <code>Courses</code>. This is implemented using a junction/associative table.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27013,
    category: 'SQL',
    difficulty: 'medium',
    question: "How many authentication modes are there in SQL Server?",
    answer: (
      <>
        <p>Microsoft SQL Server supports two primary security authentication modes:</p>
        <ul>
          <li><strong>Windows Authentication Mode:</strong> Integrates database access with Windows Active Directory/local accounts. Users logged into Windows can access SQL Server without entering database credentials.</li>
          <li><strong>Mixed Mode (Windows & SQL Server Authentication):</strong> Allows users to connect using either Windows accounts or explicit SQL Server credentials (username and password, like the standard <code>sa</code> login).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27014,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is a function in SQL Server?",
    answer: (
      <>
        <p>A <strong>Function</strong> in SQL Server is a database object that wraps a set of SQL queries, accepts input parameters, performs calculations, and returns a value. They are classified into:</p>
        <ul>
          <li><strong>Scalar Functions:</strong> Return a single data value (e.g., string, date, or number).</li>
          <li><strong>Table-Valued Functions:</strong> Return a tabular result set (a table) and can be queried in the <code>FROM</code> clause of a SELECT statement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27015,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the difference between a primary key and a unique key?",
    answer: (
      <>
        <p>Both keys enforce uniqueness, but they have major differences:</p>
        <ul>
          <li><strong>Primary Key:</strong> Uniquely identifies a row. A table can have only **one** primary key. It does not allow any <code>NULL</code> values. By default, it creates a clustered index.</li>
          <li><strong>Unique Key:</strong> Enforces uniqueness across a column. A table can have **multiple** unique keys. In many database engines, it allows a single <code>NULL</code> value. By default, it creates a non-clustered index.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27016,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the types of join and explain each?",
    answer: (
      <>
        <p>Joins are used to combine rows from multiple tables based on a related column:</p>
        <ul>
          <li><strong>INNER JOIN:</strong> Returns records that have matching values in both tables.</li>
          <li><strong>LEFT (OUTER) JOIN:</strong> Returns all records from the left table, and the matched records from the right table. Unmatched right side values appear as <code>NULL</code>.</li>
          <li><strong>RIGHT (OUTER) JOIN:</strong> Returns all records from the right table, and the matched records from the left.</li>
          <li><strong>FULL (OUTER) JOIN:</strong> Returns all records when there is a match in either the left or right table.</li>
          <li><strong>CROSS JOIN:</strong> Returns the Cartesian product of both tables (combines every row of the first table with every row of the second).</li>
          <li><strong>SELF JOIN:</strong> A regular join in which a table is joined with itself.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27017,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is a stored procedure?",
    answer: (
      <>
        <p>A <strong>Stored Procedure</strong> is a prepared SQL code snippet that is saved and compiled in the database server, allowing it to be reused multiple times. It can accept input parameters, return output parameters, execute DML/DDL operations, and perform transaction controls, providing modularity and preventing SQL injection.</p>
        <div className="qa-code-block">{`CREATE PROCEDURE GetUserById
    @UserId INT
AS
BEGIN
    SELECT * FROM Users WHERE ID = @UserId;
END;`}</div>
      </>
    ),
  },
  {
    id: 27018,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Database Cardinality?",
    answer: (
      <>
        <p>In SQL, <strong>Cardinality</strong> refers to the uniqueness of data values contained in a column of a database table. It helps query optimizers plan index lookups:</p>
        <ul>
          <li><strong>High Cardinality:</strong> Columns containing unique or near-unique values (e.g., <code>SSN</code>, <code>Email</code>, <code>UserID</code>). Indexes on these columns are highly effective.</li>
          <li><strong>Low Cardinality:</strong> Columns containing highly repetitive values (e.g., <code>Gender</code>, <code>Status</code>, <code>Country</code>). Indexes on these columns are generally ignored by optimizers in favor of full table scans.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27019,
    category: 'SQL',
    difficulty: 'hard',
    question: "Mention the different types of Cursors?",
    answer: (
      <>
        <p>A <strong>Cursor</strong> is a database object used to retrieve data from a result set one row at a time. The main types of cursors in SQL Server are:</p>
        <ul>
          <li><strong>Static Cursors:</strong> Populates the complete result set into tempdb at opening. Changes made by other users are not visible.</li>
          <li><strong>Dynamic Cursors:</strong> Reflects all data additions, updates, and deletions made by others as you scroll through the cursor.</li>
          <li><strong>Forward-Only Cursors:</strong> Can only scroll forward from the first row to the last row. Highly efficient.</li>
          <li><strong>Keyset-Driven Cursors:</strong> The membership and order of rows are fixed when the cursor is opened; membership is managed by a set of keys in tempdb.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27020,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Schema in SQL, and what are its advantages?",
    answer: (
      <>
        <p>A <strong>Schema</strong> is a logical container or namespace within a database that groups related objects (tables, views, stored procedures, indexes). Its advantages include:</p>
        <ul>
          <li>Organizes database objects systematically in large databases.</li>
          <li>Provides granular security controls, allowing administrators to grant permissions on an entire schema level.</li>
          <li>Prevents name collisions (e.g., <code>hr.Employees</code> and <code>sales.Employees</code> can coexist).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27021,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the difference between UNION and UNION ALL?",
    answer: (
      <>
        <p>Both operators combine the result sets of two or more SELECT queries into a single result, but with key operational differences:</p>
        <ul>
          <li><strong>UNION:</strong> Removes duplicate rows from the combined result set. Requires sorting the data to filter out duplicates, which makes it slower.</li>
          <li><strong>UNION ALL:</strong> Combines all rows, including duplicates, directly without sorting. It is significantly faster.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27022,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the difference between INNER JOIN and OUTER JOIN?",
    answer: (
      <>
        <p>The differences lie in how unmatched rows are handled:</p>
        <ul>
          <li><strong>INNER JOIN:</strong> Compares records from both tables and returns rows only when there is a match in the join condition.</li>
          <li><strong>OUTER JOIN (LEFT, RIGHT, FULL):</strong> Returns matched rows plus unmatched rows from the designated side(s) filled with <code>NULL</code> values for the missing data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27023,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is the difference between a clustered index and a non-clustered index?",
    answer: (
      <>
        <p>Indexes improve query performance. The main differences are:</p>
        <ul>
          <li><strong>Clustered Index:</strong> Sorts and stores the actual data rows of the table on disk based on the index key. A table can have only **one** clustered index because data can be sorted in only one way.</li>
          <li><strong>Non-Clustered Index:</strong> Stores the index structure separately from the actual data table. The leaf nodes of a non-clustered index contain pointers (row locators) back to the actual data. A table can have **multiple** non-clustered indexes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27024,
    category: 'SQL',
    difficulty: 'easy',
    question: "How can you install SQL?",
    answer: (
      <>
        <p>Installing SQL refers to setting up a Relational Database Management System (RDBMS) on a server or local machine:</p>
        <ol>
          <li>Download the installer package for the RDBMS of choice (e.g., MySQL Installer, PostgreSQL Installer, or SQL Server Express edition).</li>
          <li>Run the installer and follow the configuration wizard: select installation features, specify instance name, set up port configuration (default 1433 for SQL Server, 5432 for PostgreSQL, 3306 for MySQL).</li>
          <li>Configure database administrator credentials (e.g., database root or system administrator password).</li>
          <li>Use a GUI management tool like SSMS, pgAdmin, or DBeaver to connect to the server.</li>
        </ol>
      </>
    ),
  },
  {
    id: 27025,
    category: 'SQL',
    difficulty: 'easy',
    question: "How to rename the column name in SQL Server?",
    answer: (
      <>
        <p>In Microsoft SQL Server, you rename a column using the system stored procedure <code>sp_rename</code>:</p>
        <div className="qa-code-block">{`-- Syntax: sp_rename 'TableName.OldColumnName', 'NewColumnName', 'COLUMN'
EXEC sp_rename 'Employees.DeptID', 'DepartmentID', 'COLUMN';`}</div>
        <p>In standard ANSI SQL (PostgreSQL, MySQL), you use the <code>ALTER TABLE</code> statement:</p>
        <div className="qa-code-block">{`ALTER TABLE Employees RENAME COLUMN DeptID TO DepartmentID;`}</div>
      </>
    ),
  },
  {
    id: 27026,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the different types of SQL Queries?",
    answer: (
      <>
        <p>SQL queries are classified based on structure and logic:</p>
        <ul>
          <li><strong>Single-Table Query:</strong> Basic queries reading from a single table with filters.</li>
          <li><strong>Multi-Table Query (Joins):</strong> Queries merging records from multiple tables.</li>
          <li><strong>Subqueries (Nested Queries):</strong> A query placed inside another query.</li>
          <li><strong>Aggregate Queries:</strong> Queries using <code>GROUP BY</code> and aggregate functions to summarize records.</li>
          <li><strong>CTEs (Common Table Expressions):</strong> Temporary named result sets used to simplify complex query logic.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27027,
    category: 'SQL',
    difficulty: 'hard',
    question: "What are Nested Triggers?",
    answer: (
      <>
        <p>A <strong>Nested Trigger</strong> occurs when a trigger executes an action (like an INSERT, UPDATE, or DELETE) that fires another trigger on the same or a different table. If enabled, SQL Server allows this chain reaction to cascade across tables to keep data synchronized.</p>
      </>
    ),
  },
  {
    id: 27028,
    category: 'SQL',
    difficulty: 'hard',
    question: "What are the levels of Nested Triggers in SQL?",
    answer: (
      <>
        <p>In Microsoft SQL Server, triggers can nest up to a maximum of <strong>32 levels</strong>. If a cascading chain exceeds 32 nested trigger executions, the transaction is automatically aborted, rolled back, and an error is thrown to prevent infinite loops.</p>
      </>
    ),
  },
  {
    id: 27029,
    category: 'SQL',
    difficulty: 'easy',
    question: "What does OLTP stands for?",
    answer: (
      <>
        <p><strong>OLTP</strong> stands for <strong>Online Transaction Processing</strong>.</p>
      </>
    ),
  },
  {
    id: 27030,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is the role of OLTP?",
    answer: (
      <>
        <p>The role of OLTP systems is to support and manage fast, transactional, day-to-day business operations. OLTP systems are optimized for:</p>
        <ul>
          <li>High volume of quick, simple insert, update, and delete queries.</li>
          <li>Very low latency and high concurrency (millions of users checking accounts or ordering goods).</li>
          <li>Normalized database designs to ensure transaction data integrity (ACID properties).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27031,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is OLAP?",
    answer: (
      <>
        <p><strong>OLAP</strong> stands for <strong>Online Analytical Processing</strong>. It refers to systems designed for business intelligence, data analysis, and complex reporting.</p>
      </>
    ),
  },
  {
    id: 27032,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the key characteristics of OLAP?",
    answer: (
      <>
        <p>Key characteristics of OLAP systems include:</p>
        <ul>
          <li>Optimized for complex read-only queries spanning millions of rows.</li>
          <li>Uses denormalized schemas (Star schema or Snowflake schema) to speed up analysis.</li>
          <li>Supports multi-dimensional data models (data cubes) for slicing, dicing, and drill-downs.</li>
          <li>Typically loaded via batch processing (ETL) rather than real-time user inserts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27033,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is the alternative for the TOP clause in SQL?",
    answer: (
      <>
        <p>The <code>TOP</code> clause is proprietary to SQL Server. Standard SQL alternatives include:</p>
        <ul>
          <li><strong>LIMIT Clause:</strong> Used in MySQL, PostgreSQL, and SQLite (e.g., <code>LIMIT 10</code>).</li>
          <li><strong>FETCH FIRST Clause:</strong> ANSI-standard syntax used in Oracle and DB2 (e.g., <code>FETCH FIRST 10 ROWS ONLY</code>).</li>
          <li><strong>ROW_NUMBER():</strong> A window function used to filter rows dynamically based on partitioned indices.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27034,
    category: 'SQL',
    difficulty: 'hard',
    question: "How many sorting algorithms are available?",
    answer: (
      <>
        <p>In relational database engines, query planners employ several sorting algorithms to organize query outputs or construct index tables, including:</p>
        <ul>
          <li><strong>Quick Sort:</strong> Used for in-memory sorting.</li>
          <li><strong>Merge Sort:</strong> Preferred for disk-based external sorting when datasets exceed available RAM.</li>
          <li><strong>Heap Sort:</strong> Often used to process query limits like <code>ORDER BY ... LIMIT N</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27035,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the difference between SQL HAVING clause and WHERE clause?",
    answer: (
      <>
        <p>The difference lies in when the filters are applied during query execution:</p>
        <ul>
          <li><strong>WHERE Clause:</strong> Filters rows **before** any grouping or aggregation occurs. It cannot be used with aggregate functions (e.g., <code>SUM</code>, <code>AVG</code>).</li>
          <li><strong>HAVING Clause:</strong> Filters groups **after** the <code>GROUP BY</code> clause has been processed. It is used exclusively with aggregate conditions (e.g., <code>HAVING COUNT(id) &gt; 5</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27036,
    category: 'SQL',
    difficulty: 'medium',
    question: "How can we disable a trigger?",
    answer: (
      <>
        <p>To temporarily turn off a trigger in SQL Server without deleting it, use the <code>DISABLE TRIGGER</code> statement:</p>
        <div className="qa-code-block">{`-- Disable a specific trigger
DISABLE TRIGGER trg_AuditEmployee ON Employees;

-- Re-enable the trigger
ENABLE TRIGGER trg_AuditEmployee ON Employees;`}</div>
      </>
    ),
  },
  {
    id: 27037,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is Database White box testing?",
    answer: (
      <>
        <p><strong>Database White Box Testing</strong> focuses on verifying the internal structure, code, schema, and logical flow of a database. Testers validate database triggers, stored procedures, views, referential integrity constraints, and query indexes, requiring deep knowledge of SQL programming and database architecture.</p>
      </>
    ),
  },
  {
    id: 27038,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is a Subquery?",
    answer: (
      <>
        <p>A <strong>Subquery</strong> (or nested query) is a query query placed inside another SQL query (SELECT, INSERT, UPDATE, or DELETE). Subqueries must be enclosed in parentheses and can return a single scalar value, a single column (list), or a table payload.</p>
        <div className="qa-code-block">{`SELECT name, salary FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);`}</div>
      </>
    ),
  },
  {
    id: 27039,
    category: 'SQL',
    difficulty: 'easy',
    question: "How to create a stored procedure using SQL Server?",
    answer: (
      <>
        <p>Use the <code>CREATE PROCEDURE</code> statement followed by the query block:</p>
        <div className="qa-code-block">{`CREATE PROCEDURE GetActiveUsers
AS
BEGIN
    SELECT name, email 
    FROM Users 
    WHERE is_active = 1;
END;`}</div>
        <p>Run the procedure using the execute command: <code>EXEC GetActiveUsers;</code></p>
      </>
    ),
  },
  {
    id: 27040,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is the different between SQL and NoSQL databases?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>SQL Databases:</strong> Relational structure; use predefined schema; tables, rows and columns; scale vertically (increase CPU/RAM); enforce ACID transactions. Examples: PostgreSQL, Oracle, MySQL.</li>
          <li><strong>NoSQL Databases:</strong> Non-relational structure; dynamic schemas for unstructured data; document, key-value, graph, or column family formats; scale horizontally (add more servers); favor eventual consistency (BASE model). Examples: MongoDB, Cassandra, Redis.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27041,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is a Cross-Join?",
    answer: (
      <>
        <p>A <strong>CROSS JOIN</strong> returns the Cartesian product of the two joined tables. It combines every row from the first table with every row from the second table. If Table A has 5 rows and Table B has 10 rows, a CROSS JOIN yields 50 rows. No join condition is specified.</p>
        <div className="qa-code-block">{`SELECT A.Color, B.Size 
FROM Colors A 
CROSS JOIN Sizes B;`}</div>
      </>
    ),
  },
  {
    id: 27042,
    category: 'SQL',
    difficulty: 'medium',
    question: "Difference between VARCHAR2 and CHAR datatype in SQL?",
    answer: (
      <>
        <p>These differ in memory allocation (common in Oracle/SQL Server):</p>
        <ul>
          <li><strong>CHAR:</strong> Fixed-length character string. If you store a string shorter than the specified length, it pads the remaining space with blank spaces. E.g., storing "John" in <code>CHAR(10)</code> consumes 10 bytes.</li>
          <li><strong>VARCHAR2 / VARCHAR:</strong> Variable-length string. It stores only the characters supplied without any padding. E.g., storing "John" in <code>VARCHAR2(10)</code> consumes only 4 bytes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27043,
    category: 'SQL',
    difficulty: 'medium',
    question: "What do you understand by SQL injection?",
    answer: (
      <>
        <p><strong>SQL Injection (SQLi)</strong> is a critical security vulnerability where an attacker manipulates application inputs to inject malicious SQL commands into database queries, allowing them to bypass authentication, read or destroy data, or execute server administrator actions.</p>
      </>
    ),
  },
  {
    id: 27044,
    category: 'SQL',
    difficulty: 'medium',
    question: "How to prevent a SQL injection attack?",
    answer: (
      <>
        <p>SQL Injection can be prevented using standard coding practices:</p>
        <ul>
          <li><strong>Prepared Statements (Parameterized Queries):</strong> Ensures input parameters are treated strictly as data literals, not executable code. This is the most effective defense.</li>
          <li><strong>Stored Procedures:</strong> Parameters are automatically bound as parameters rather than raw SQL strings.</li>
          <li><strong>Input Validation & Sanitization:</strong> Using allow-lists and validation routines on inputs.</li>
          <li><strong>Least Privilege Access:</strong> Restricting database user permissions to minimize potential exploit damage.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27045,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the ALIAS command in SQL?",
    answer: (
      <>
        <p>An <strong>Alias</strong> is a temporary name assigned to a table or column within a query using the <code>AS</code> keyword. It makes query code more readable and simplifies complex self-joins or aggregations.</p>
        <div className="qa-code-block">{`SELECT first_name AS name, salary * 12 AS annual_salary
FROM Employees AS empCode;`}</div>
      </>
    ),
  },
  {
    id: 27046,
    category: 'SQL',
    difficulty: 'hard',
    question: "How dynamic SQL can be executed?",
    answer: (
      <>
        <p>Dynamic SQL involves constructing SQL queries dynamically as strings during runtime. In SQL Server, it can be executed using:</p>
        <ul>
          <li><strong>EXEC Command:</strong> Takes a string variable and executes it directly: <code>EXEC(@sqlString)</code>. It does not support parameter binding easily and is vulnerable to SQL injection.</li>
          <li><strong>sp_executesql stored procedure:</strong> Preferred method. It supports parameters, improves performance through plan reuse, and enhances security:
            <div className="qa-code-block">{`DECLARE @SQL NVARCHAR(MAX);
SET @SQL = N'SELECT * FROM Employees WHERE ID = @EmpId';
EXEC sp_executesql @SQL, N'@EmpId INT', @EmpId = 101;`}</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 27047,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is a Query in SQL?",
    answer: (
      <>
        <p>A <strong>Query</strong> is a specific command or request written in SQL syntax to retrieve, insert, update, or delete data from database tables.</p>
      </>
    ),
  },
  {
    id: 27048,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is a recursive stored procedure?",
    answer: (
      <>
        <p>A <strong>Recursive Stored Procedure</strong> is a stored procedure that calls itself iteratively to resolve a problem (like evaluating organizational hierarchies or bill-of-materials structures). In SQL Server, recursive executions must not exceed a nesting level limit (default 32) to prevent memory crashes.</p>
      </>
    ),
  },
  {
    id: 27049,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the case manipulation functions in SQL?",
    answer: (
      <>
        <p>Case manipulation functions change the character casing of strings in queries:</p>
        <ul>
          <li><code>LOWER(str)</code>: Converts characters to lowercase.</li>
          <li><code>UPPER(str)</code>: Converts characters to uppercase.</li>
          <li><code>INITCAP(str)</code>: Converts the first letter of each word to uppercase and the rest to lowercase (Oracle SQL standard).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27050,
    category: 'SQL',
    difficulty: 'easy',
    question: "What does GRANT command do in SQL?",
    answer: (
      <>
        <p>The <code>GRANT</code> command is a Data Control Language (DCL) instruction used to allocate system permissions (like SELECT, INSERT, UPDATE, or EXECUTE) on database objects to specific users or roles.</p>
        <div className="qa-code-block">{`GRANT SELECT, INSERT ON Employees TO hr_manager;`}</div>
      </>
    ),
  },
  {
    id: 27051,
    category: 'SQL',
    difficulty: 'hard',
    question: "What different tables are present in MySQL?",
    answer: (
      <>
        <p>In MySQL, "tables" differ by their underlying storage engines, which handle different use cases:</p>
        <ul>
          <li><strong>InnoDB:</strong> Default storage engine. Supports transactions (ACID), foreign keys, row-level locking, and crash recovery.</li>
          <li><strong>MyISAM:</strong> Fast for read-heavy operations, lacks transaction support and foreign keys, and uses table-level locking.</li>
          <li><strong>Memory:</strong> Stores all data in RAM for extremely fast temporary access. Data is lost if the server restarts.</li>
          <li><strong>Archive:</strong> Optimized for storing massive amounts of historical audit records, supports compression, allows inserts/selects but not deletes or updates.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27052,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is a Live Lock?",
    answer: (
      <>
        <p>A <strong>Live Lock</strong> occurs when two or more processes continuously change their state in response to changes in the other processes without doing any useful work. Unlike a Deadlock (where processes are frozen waiting for each other), in a Livelock, the processes are active and running but stuck in an infinite state-transition loop.</p>
      </>
    ),
  },
  {
    id: 27053,
    category: 'SQL',
    difficulty: 'hard',
    question: "How to delete duplicate records in a table without primary key?",
    answer: (
      <>
        <p>You can remove duplicate entries using a Common Table Expression (CTE) combined with the <code>ROW_NUMBER()</code> window function to identify duplicate groups:</p>
        <div className="qa-code-block">{`WITH DuplicateCTE AS (
    SELECT name, email,
           ROW_NUMBER() OVER (PARTITION BY name, email ORDER BY (SELECT NULL)) as row_num
    FROM Employees
)
DELETE FROM DuplicateCTE WHERE row_num > 1;`}</div>
      </>
    ),
  },
  {
    id: 27054,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is ISAM?",
    answer: (
      <>
        <p><strong>ISAM (Indexed Sequential Access Method)</strong> is a low-level file management system developed by IBM that allows records to be accessed sequentially or randomly using an index. It is the precursor to modern database engines and served as the foundation for MySQL's original MyISAM engine.</p>
      </>
    ),
  },
  {
    id: 27055,
    category: 'SQL',
    difficulty: 'medium',
    question: "Define the different types of SQL sandbox?",
    answer: (
      <>
        <p>An SQL sandbox is an isolated database environment used for testing and training without risking production data. Types include:</p>
        <ul>
          <li><strong>Local Instance:</strong> Databases installed locally on a developer's machine (e.g., PostgreSQL local server).</li>
          <li><strong>Docker Sandboxes:</strong> Running databases inside isolated containers, allowing developers to spin up specific versions quickly.</li>
          <li><strong>Cloud Sandbox:</strong> Isolated test instances hosted on platforms like AWS RDS or Azure SQL.</li>
          <li><strong>Online Sandbox/Fiddles:</strong> Browser-based SQL compilers (e.g., SQL Fiddle, db&lt;&gt;fiddle) used to execute queries without installation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27056,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is a Right Outer Join?",
    answer: (
      <>
        <p>A <strong>RIGHT OUTER JOIN</strong> combines rows from two tables, returning all rows from the right table and the matched rows from the left table. If no match is found, columns on the left side are filled with <code>NULL</code>.</p>
      </>
    ),
  },
  {
    id: 27057,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is Database Black Box Testing?",
    answer: (
      <>
        <p><strong>Database Black Box Testing</strong> verifies data outputs in response to user inputs from the UI without inspecting the internal database code, stored procedures, or structures. It focuses on validating that data is correctly saved, updated, and displayed on the interface as expected.</p>
      </>
    ),
  },
  {
    id: 27058,
    category: 'SQL',
    difficulty: 'easy',
    question: "What’s the procedure rename column name in SQL Server?",
    answer: (
      <>
        <p>In Microsoft SQL Server, you rename a column using the system stored procedure <code>sp_rename</code>:</p>
        <div className="qa-code-block">{`EXEC sp_rename 'TableName.OldColName', 'NewColName', 'COLUMN';`}</div>
      </>
    ),
  },
  {
    id: 27059,
    category: 'SQL',
    difficulty: 'easy',
    question: "How can you connect to the SQL Server from SSMS?",
    answer: (
      <>
        <p>Connecting to a SQL Server database via SSMS (SQL Server Management Studio) involves:</p>
        <ol>
          <li>Open SSMS on your computer.</li>
          <li>In the "Connect to Server" dialog, select "Database Engine" as the Server Type.</li>
          <li>Enter the Server Name (e.g., <code>localhost</code>, IP address, or server instance name).</li>
          <li>Choose the authentication mode (Windows Authentication or Mixed Mode/SQL Server Authentication).</li>
          <li>Click "Connect".</li>
        </ol>
      </>
    ),
  },
  {
    id: 27060,
    category: 'SQL',
    difficulty: 'medium',
    question: "How to identify server names in SQL Server?",
    answer: (
      <>
        <p>You can identify the server name in SQL Server using the following methods:</p>
        <ul>
          <li>Execute the query: <code>SELECT @@SERVERNAME;</code> inside a query window.</li>
          <li>Use <code>localhost</code> or a dot (<code>.</code>) if SQL Server is installed on your local computer.</li>
          <li>Check the SQL Server Configuration Manager under SQL Server Services.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27061,
    category: 'SQL',
    difficulty: 'medium',
    question: "Explain what is PostgreSQL?",
    answer: (
      <>
        <p><strong>PostgreSQL</strong> is a powerful, open-source object-relational database management system (ORDBMS). It is known for its extensibility, standards compliance (SQL:2016), reliability, and support for advanced features like JSON indexing, window functions, and partitioning.</p>
      </>
    ),
  },
  {
    id: 27062,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the different datatypes of PostgreSQL?",
    answer: (
      <>
        <p>PostgreSQL supports a wide range of datatypes, including:</p>
        <ul>
          <li><strong>Numeric:</strong> <code>INTEGER</code>, <code>BIGINT</code>, <code>NUMERIC</code>, <code>REAL</code>.</li>
          <li><strong>Character:</strong> <code>VARCHAR(n)</code>, <code>CHAR(n)</code>, <code>TEXT</code>.</li>
          <li><strong>Temporal:</strong> <code>DATE</code>, <code>TIME</code>, <code>TIMESTAMP WITH TIME ZONE</code>.</li>
          <li><strong>Boolean:</strong> <code>BOOLEAN</code>.</li>
          <li><strong>Structured/NoSQL:</strong> <code>JSON</code>, <code>JSONB</code>, <code>XML</code>, <code>UUID</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27063,
    category: 'SQL',
    difficulty: 'medium',
    question: "Compare PostgreSQL with MongoDB.",
    answer: (
      <>
        <p>Comparison between PostgreSQL and MongoDB:</p>
        <ul>
          <li><strong>Model:</strong> PostgreSQL is object-relational; MongoDB is document-oriented.</li>
          <li><strong>Schema:</strong> PostgreSQL enforces rigid tables and schemas; MongoDB supports dynamic, schema-less JSON-like documents.</li>
          <li><strong>Transactions:</strong> PostgreSQL is built for complex ACID transactions; MongoDB supports transactions but is optimized for horizontal scalability and fast unstructured read/write.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27064,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is Multi-Version concurrency control (MVCC) in PostgreSQL?",
    answer: (
      <>
        <p><strong>MVCC (Multi-Version Concurrency Control)</strong> is a method used by PostgreSQL to handle concurrent database transactions without lock escalation. Instead of locking rows during updates, MVCC retains older versions of updated rows. This allows read transactions to view snapshots of data without being blocked by ongoing write operations.</p>
      </>
    ),
  },
  {
    id: 27065,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is Write-Ahead Logging (WAL)?",
    answer: (
      <>
        <p><strong>Write-Ahead Logging (WAL)</strong> is a database reliability mechanism where changes are written and flushed to a secure log file on disk (the WAL log) **before** they are written to the actual database files. This guarantees data durability and crash recovery, allowing the database to rebuild its state if a power failure occurs.</p>
      </>
    ),
  },
  {
    id: 27066,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is dependency and mention the different dependencies?",
    answer: (
      <>
        <p>In databases, a <strong>dependency</strong> is a relationship between attributes where the value of one attribute determines the value of another. Types include:</p>
        <ul>
          <li><strong>Functional Dependency:</strong> Attribute A uniquely determines Attribute B (A → B).</li>
          <li><strong>Partial Dependency:</strong> A non-key attribute depends on only a part of a composite primary key.</li>
          <li><strong>Transitive Dependency:</strong> A non-key attribute depends on another non-key attribute (violates 3NF).</li>
          <li><strong>Multi-valued Dependency:</strong> The presence of one attribute determines the presence of a set of other independent values (violates 4NF).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27067,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the different forms of Normalisation?",
    answer: (
      <>
        <p>Normalization structures database tables to prevent redundancy. The levels include:</p>
        <ul>
          <li><strong>1NF:</strong> Eliminates duplicate columns and groups; requires atomic values.</li>
          <li><strong>2NF:</strong> Removes partial dependencies.</li>
          <li><strong>3NF:</strong> Removes transitive dependencies.</li>
          <li><strong>BCNF:</strong> Stronger 3NF, resolving anomalies in tables with overlapping candidate keys.</li>
          <li><strong>4NF:</strong> Eliminates multi-valued dependencies.</li>
          <li><strong>5NF:</strong> Eliminates join dependencies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27068,
    category: 'SQL',
    difficulty: 'easy',
    question: "Specify the Aggregate Functions used in SQL.",
    answer: (
      <>
        <p>Aggregate functions perform calculations on multiple values and return a single summary value. Common functions include:</p>
        <ul>
          <li><code>SUM()</code>: Calculates total value.</li>
          <li><code>AVG()</code>: Calculates mean value.</li>
          <li><code>COUNT()</code>: Counts rows or non-null values.</li>
          <li><code>MIN()</code>: Retrieves lowest value.</li>
          <li><code>MAX()</code>: Retrieves highest value.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27069,
    category: 'SQL',
    difficulty: 'medium',
    question: "Which Character Manipulation Functions are used in SQL?",
    answer: (
      <>
        <p>Character manipulation functions modify text data in SQL queries:</p>
        <ul>
          <li><code>CONCAT(a, b)</code>: Joins two strings together.</li>
          <li><code>SUBSTR(str, start, len)</code>: Extracts a substring.</li>
          <li><code>LENGTH(str)</code>: Returns the character count.</li>
          <li><code>REPLACE(str, target, replacement)</code>: Replaces occurrences of a substring.</li>
          <li><code>TRIM(str)</code>: Removes leading/trailing spaces.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27070,
    category: 'SQL',
    difficulty: 'medium',
    question: "Highlight the difference between Index and View?",
    answer: (
      <>
        <p>Indexes and Views serve different purposes in database management:</p>
        <ul>
          <li><strong>Index:</strong> A physical storage structure created to optimize query performance by speeding up searches. It consumes disk space.</li>
          <li><strong>View:</strong> A virtual table containing no data itself. It stores a pre-defined SELECT query that is executed dynamically whenever the view is queried. It does not consume data storage space.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27071,
    category: 'SQL',
    difficulty: 'hard',
    question: "Draw a comparison between LONG and LOB Data types.",
    answer: (
      <>
        <p>In databases like Oracle, these datatypes store large objects:</p>
        <ul>
          <li><strong>LONG:</strong> Legacy datatype used to store variable-length character data up to 2 GB. A table can have only one LONG column, and it does not support random access or advanced operations.</li>
          <li><strong>LOB (Large Object - CLOB/BLOB):</strong> Modern datatype designed to store text (CLOB) or binary (BLOB) data up to 4 GB or more. A table can have multiple LOB columns, and they support random access, replication, and transactional logging.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27072,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Data Inconsistency?",
    answer: (
      <>
        <p><strong>Data Inconsistency</strong> occurs when the same data is stored in different formats or values across multiple tables in a database (e.g., a customer address being updated in the orders table but not in the accounts table). It is caused by data redundancy and lack of normalization.</p>
      </>
    ),
  },
  {
    id: 27073,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the procedure to create a table from an existing table?",
    answer: (
      <>
        <p>You can create a new table and populate it with data from an existing table using these commands:</p>
        <p>In SQL Server:</p>
        <div className="qa-code-block">{`SELECT * INTO NewTable FROM OldTable;`}</div>
        <p>In MySQL, PostgreSQL, and Oracle:</p>
        <div className="qa-code-block">{`CREATE TABLE NewTable AS SELECT * FROM OldTable;`}</div>
      </>
    ),
  },
  {
    id: 27074,
    category: 'SQL',
    difficulty: 'medium',
    question: "What’s the use of the MERGE statement?",
    answer: (
      <>
        <p>The <code>MERGE</code> statement (also known as Upsert) allows you to conditionally insert, update, or delete rows in a target table based on the results of a join with a source table, consolidating three queries into one atomic transaction.</p>
        <div className="qa-code-block">{`MERGE TargetTable AS T
USING SourceTable AS S
ON T.ID = S.ID
WHEN MATCHED THEN
    UPDATE SET T.Name = S.Name
WHEN NOT MATCHED THEN
    INSERT (ID, Name) VALUES (S.ID, S.Name);`}</div>
      </>
    ),
  },
  {
    id: 27075,
    category: 'SQL',
    difficulty: 'easy',
    question: "Mention different clauses used in SQL.",
    answer: (
      <>
        <p>Clauses are built-in functions used to filter and organize data inside SQL queries:</p>
        <ul>
          <li><code>WHERE</code>: Filters row inputs.</li>
          <li><code>GROUP BY</code>: Groups identical rows together.</li>
          <li><code>HAVING</code>: Filters grouped records.</li>
          <li><code>ORDER BY</code>: Sorts output records.</li>
          <li><code>LIMIT / OFFSET</code>: Restricts returned row count.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27076,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the benefits of PL/SQL functions?",
    answer: (
      <>
        <p>PL/SQL functions provide several programming advantages:</p>
        <ul>
          <li><strong>Modularity:</strong> Packages complex calculations into reusable code blocks.</li>
          <li><strong>Performance:</strong> Reduces network traffic by executing multiple steps directly on the database server.</li>
          <li><strong>Integration:</strong> Functions can be directly called within SELECT statements, WHERE clauses, or JOIN conditions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27077,
    category: 'SQL',
    difficulty: 'medium',
    question: "What factors affect the functionalities of databases?",
    answer: (
      <>
        <p>Key factors influencing database speed, reliability, and functionality include:</p>
        <ul>
          <li>Hardware resources (CPU speed, memory allocation, disk I/O).</li>
          <li>Index configurations (proper indexes speed up reads but slow down writes).</li>
          <li>Query complexity (poorly written joins and subqueries).</li>
          <li>Lock escalation and database concurrency levels.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27078,
    category: 'SQL',
    difficulty: 'medium',
    question: "Comparison between STUFF and REPLACE statements.",
    answer: (
      <>
        <p>These string functions operate differently in SQL Server:</p>
        <ul>
          <li><strong>STUFF:</strong> Deletes a specific length of characters from a starting position and inserts a new substring in their place.
            <div className="qa-code-block">{`SELECT STUFF('abcdef', 2, 3, 'XYZ'); -- Returns 'aXYZef'`}</div>
          </li>
          <li><strong>REPLACE:</strong> Replaces all occurrences of a target substring with a new substring.
            <div className="qa-code-block">{`SELECT REPLACE('abcdef', 'bcd', 'XYZ'); -- Returns 'aXYZef'`}</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 27079,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is a COMMIT statement in SQL?",
    answer: (
      <>
        <p>The <code>COMMIT</code> statement is a Transaction Control Language (TCL) command used to save all changes made during the current transaction permanently to disk, making them visible to other users.</p>
      </>
    ),
  },
  {
    id: 27080,
    category: 'SQL',
    difficulty: 'medium',
    question: "Explain what is ETL in SQL?",
    answer: (
      <>
        <p><strong>ETL</strong> stands for <strong>Extract, Transform, Load</strong>. It refers to the data integration process used in data warehousing:</p>
        <ul>
          <li><strong>Extract:</strong> Reading and gathering raw data from multiple operational databases.</li>
          <li><strong>Transform:</strong> Cleaning, filtering, formatting, and restructuring the extracted data to fit business analysis schemas.</li>
          <li><strong>Load:</strong> Writing the transformed data into a target data warehouse for OLAP analysis.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27081,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is Equi-JOIN and non-Equi-JOIN?",
    answer: (
      <>
        <p>These classifications are based on the comparison operator used in the join condition:</p>
        <ul>
          <li><strong>Equi-JOIN:</strong> Uses the equality operator (<code>=</code>) to match records between tables.
            <div className="qa-code-block">{`SELECT * FROM Emp E JOIN Dept D ON E.DeptID = D.ID;`}</div>
          </li>
          <li><strong>Non-Equi-JOIN:</strong> Uses comparison operators other than equality (e.g., <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, or <code>BETWEEN</code>) to join records.
            <div className="qa-code-block">{`SELECT * FROM Emp E JOIN SalaryGrades G ON E.Sal BETWEEN G.MinSal AND G.MaxSal;`}</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 27082,
    category: 'SQL',
    difficulty: 'hard',
    question: "What is lock escalation?",
    answer: (
      <>
        <p><strong>Lock Escalation</strong> is an optimization mechanism where the database engine converts many fine-grained locks (like individual row or page locks) into a single coarse-grained lock (like a table lock). This reduces database system memory overhead when a query modifies thousands of rows.</p>
      </>
    ),
  },
  {
    id: 27083,
    category: 'SQL',
    difficulty: 'hard',
    question: "What are the benefits of lock escalation?",
    answer: (
      <>
        <p>The primary benefits of lock escalation include:</p>
        <ul>
          <li><strong>Memory Conservation:</strong> Releases thousands of tiny lock objects from memory, preventing database crashes due to lock pool exhaustion.</li>
          <li><strong>System Speed:</strong> Reduces CPU overhead required to track, check, and release multiple row locks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27084,
    category: 'SQL',
    difficulty: 'medium',
    question: "What is DELETE CASCADE constraint?",
    answer: (
      <>
        <p>The <code>ON DELETE CASCADE</code> option is configured on foreign key constraints. When a record in the parent table is deleted, the database automatically deletes all matching child records in the related tables, preventing referential integrity errors (orphaned records).</p>
      </>
    ),
  },
  {
    id: 27085,
    category: 'SQL',
    difficulty: 'medium',
    question: "What are the different types of indexes in SQL?",
    answer: (
      <>
        <p>Databases use various index architectures to optimize search pathways:</p>
        <ul>
          <li><strong>Clustered Index:</strong> Restructures physical table sorting on disk.</li>
          <li><strong>Non-Clustered Index:</strong> Creates a separate search lookup table.</li>
          <li><strong>Unique Index:</strong> Ensures no duplicate values are entered in indexed columns.</li>
          <li><strong>Composite Index:</strong> Uses multiple columns to construct the search key.</li>
          <li><strong>Full-Text Index:</strong> Optimized for searching words in massive text fields.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27086,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is Pattern Matching in SQL?",
    answer: (
      <>
        <p>Pattern matching checks if string fields match specific characters. In SQL, this is commonly done using the <code>LIKE</code> operator with wildcards:</p>
        <ul>
          <li><code>%</code>: Matches zero or more characters (e.g., <code>LIKE 'J%'</code> matches "John", "Jack").</li>
          <li><code>_</code>: Matches exactly one character (e.g., <code>LIKE 'J_ne'</code> matches "Jane", "June").</li>
        </ul>
      </>
    ),
  },
  {
    id: 27087,
    category: 'SQL',
    difficulty: 'easy',
    question: "How to get the connection string from SQL Server?",
    answer: (
      <>
        <p>A connection string specifies the parameters required by an application to connect to the database. You construct it using these key-value configurations:</p>
        <div className="qa-code-block">{`Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;`}</div>
        <p>If using Windows Authentication:</p>
        <div className="qa-code-block">{`Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;`}</div>
      </>
    ),
  },
  {
    id: 27088,
    category: 'SQL',
    difficulty: 'medium',
    question: "What factors affect the query performance?",
    answer: (
      <>
        <p>SQL query performance is influenced by several factors:</p>
        <ul>
          <li>Lack of indexes on search columns, leading to slow full table scans.</li>
          <li>Over-fetching data (using <code>SELECT *</code> instead of selecting specific columns).</li>
          <li>Non-sargable query structures (e.g., applying functions to columns in the WHERE clause, which invalidates index lookups).</li>
          <li>Stale query statistics, causing database optimizers to choose sub-optimal execution plans.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27089,
    category: 'SQL',
    difficulty: 'medium',
    question: "Can you avoid Duplicate Keys in SQL?",
    answer: (
      <>
        <p>To prevent duplicate keys, you can implement constraints and conditional operations:</p>
        <ul>
          <li>Define <code>PRIMARY KEY</code> or <code>UNIQUE</code> constraints on target columns.</li>
          <li>Use clauses like <code>INSERT IGNORE</code> (MySQL) or <code>ON CONFLICT DO NOTHING</code> (PostgreSQL) to skip inserts that violate keys.</li>
          <li>Implement <code>MERGE</code> statements to update existing keys instead of inserting duplicates.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27090,
    category: 'SQL',
    difficulty: 'easy',
    question: "How can you fetch common records from two tables?",
    answer: (
      <>
        <p>You can fetch intersecting records using the following methods:</p>
        <ul>
          <li><strong>INNER JOIN:</strong>
            <div className="qa-code-block">{`SELECT A.ID, A.Name FROM TableA A INNER JOIN TableB B ON A.ID = B.ID;`}</div>
          </li>
          <li><strong>INTERSECT Operator:</strong> Returns rows common to both queries.
            <div className="qa-code-block">{`SELECT ID, Name FROM TableA INTERSECT SELECT ID, Name FROM TableB;`}</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 27091,
    category: 'SQL',
    difficulty: 'medium',
    question: "Define collation sensitivity?",
    answer: (
      <>
        <p><strong>Collation Sensitivity</strong> defines how a database handles sorting, comparing, and filtering characters. It determines whether the database engine distinguishes differences between upper/lowercase letters, accent marks, and other character properties.</p>
      </>
    ),
  },
  {
    id: 27092,
    category: 'SQL',
    difficulty: 'medium',
    question: "Specify different types of collation sensitivity?",
    answer: (
      <>
        <p>Common collation sensitivities include:</p>
        <ul>
          <li><strong>Case Sensitivity (CS / CI):</strong> Distinguishes (CS) or ignores (CI) differences between uppercase and lowercase (e.g., 'a' vs 'A').</li>
          <li><strong>Accent Sensitivity (AS / AI):</strong> Distinguishes (AS) or ignores (AI) accent marks (e.g., 'a' vs 'á').</li>
          <li><strong>Kana Sensitivity (KS / KI):</strong> Distinguishes Japanese Hiragana and Katakana characters.</li>
          <li><strong>Width Sensitivity (WS / WI):</strong> Distinguishes full-width and half-width characters.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27093,
    category: 'SQL',
    difficulty: 'easy',
    question: "Mention different DDL commands in SQL.",
    answer: (
      <>
        <p>Data Definition Language (DDL) commands define or modify database schemas:</p>
        <ul>
          <li><code>CREATE</code>: Creates database objects (tables, views, indexes).</li>
          <li><code>ALTER</code>: Modifies existing schema structures.</li>
          <li><code>DROP</code>: Deletes schema objects entirely.</li>
          <li><code>TRUNCATE</code>: Empties tables without deleting their schema.</li>
          <li><code>RENAME</code>: Renames objects.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27094,
    category: 'SQL',
    difficulty: 'medium',
    question: "Name and explain different TCL commands in MySQL.",
    answer: (
      <>
        <p>Transaction Control Language (TCL) commands manage transactions in InnoDB tables:</p>
        <ul>
          <li><code>COMMIT</code>: Saves transaction changes permanently to disk.</li>
          <li><code>ROLLBACK</code>: Cancels changes, returning the database to its pre-transaction state.</li>
          <li><code>SAVEPOINT</code>: Sets a temporary savepoint inside a transaction, allowing partial rollbacks.</li>
          <li><code>SET TRANSACTION</code>: Sets isolation levels (e.g., READ COMMITTED).</li>
        </ul>
      </>
    ),
  },
  {
    id: 27095,
    category: 'SQL',
    difficulty: 'medium',
    question: "Briefly explain what is Denormalization?",
    answer: (
      <>
        <p><strong>Denormalization</strong> is the process of deliberately adding redundant data to a normalized database schema. While this violates normalization forms, it is done to speed up complex queries in read-heavy systems (like data warehouses) by reducing the need for expensive multi-table joins.</p>
      </>
    ),
  },
  {
    id: 27096,
    category: 'SQL',
    difficulty: 'easy',
    question: "What is the use of Auto Increment in SQL?",
    answer: (
      <>
        <p><strong>Auto Increment</strong> automatically generates a unique sequential number for a column whenever a new record is inserted, making it ideal for primary keys (e.g., <code>IDENTITY</code> in SQL Server, <code>AUTO_INCREMENT</code> in MySQL, or <code>SERIAL</code> in PostgreSQL).</p>
      </>
    ),
  },
  {
    id: 27097,
    category: 'SQL',
    difficulty: 'easy',
    question: "What do you understand by Database Relationship?",
    answer: (
      <>
        <p>A <strong>Database Relationship</strong> is a link established between tables using primary and foreign keys, enabling database engines to retrieve associated data across tables reliably.</p>
      </>
    ),
  },
  {
    id: 27098,
    category: 'SQL',
    difficulty: 'easy',
    question: "What are the different types of Database Relationship?",
    answer: (
      <>
        <p>The three relationships in database design include:</p>
        <ul>
          <li>One-to-One</li>
          <li>One-to-Many</li>
          <li>Many-to-Many (using junction tables)</li>
        </ul>
      </>
    ),
  },
  {
    id: 27099,
    category: 'SQL',
    difficulty: 'hard',
    question: "Which one is faster: a temporary table or a table variable?",
    answer: (
      <>
        <p>In SQL Server, performance depends on data volume:</p>
        <ul>
          <li><strong>Table Variables (<code>@TableVar</code>):</strong> Faster for small datasets (typically under 100 rows). They reside in memory, do not generate transaction logs, and do not trigger query recompilations. However, they lack statistics.</li>
          <li><strong>Temporary Tables (<code>#TempTable</code>):</strong> Faster for large datasets. They are stored in tempdb, support indexes, and generate statistics, allowing query optimizers to build efficient execution plans for complex operations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 27100,
    category: 'SQL',
    difficulty: 'easy',
    question: "What do you mean by a Clause in SQL?",
    answer: (
      <>
        <p>A <strong>Clause</strong> is an optional component of an SQL statement used to filter, sort, or group records to refine query results (e.g., <code>WHERE</code>, <code>ORDER BY</code>, <code>HAVING</code>).</p>
      </>
    ),
  }
];

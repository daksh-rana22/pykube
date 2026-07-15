import React from 'react';

export const PLSQL_QUESTIONS = [
  {
    id: 18001,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is the meaning of PL/SQL?",
    answer: (
      <>
        <p><strong>PL/SQL</strong> stands for <strong>Procedural Language/Structured Query Language</strong>. It is Oracle Corporation's procedural extension to SQL that combines SQL's data manipulation capabilities with procedural programming constructs like loops, conditions, and exception handling.</p>
      </>
    ),
  },
  {
    id: 18002,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between TYPE RECORD & % ROWTYPE?",
    answer: (
      <>
        <ul><li><strong>TYPE RECORD:</strong> A user-defined composite data type where each field can have a different data type, defined manually.</li><li><strong>%ROWTYPE:</strong> Automatically inherits all column definitions (names and types) from an existing table or cursor row.</li></ul>
      </>
    ),
  },
  {
    id: 18003,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Show the code of a cursor for the loop.",
    answer: (
      <>
        <p>A cursor FOR loop implicitly opens, fetches, and closes a cursor:</p><p><code>FOR rec IN (SELECT * FROM employees) LOOP DBMS_OUTPUT.PUT_LINE(rec.emp_name); END LOOP;</code></p>
      </>
    ),
  },
  {
    id: 18004,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "List the uses of a database trigger.",
    answer: (
      <>
        <p>Uses: enforcing complex business rules, auditing data modifications, auto-generating derived column values, and replicating data across tables on DML events.</p>
      </>
    ),
  },
  {
    id: 18005,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Mention the two types of exceptions.",
    answer: (
      <>
        <ul><li><strong>Predefined (System) Exceptions:</strong> Built-in Oracle-named exceptions like NO_DATA_FOUND, TOO_MANY_ROWS.</li><li><strong>User-Defined Exceptions:</strong> Custom exceptions declared by developers and raised using RAISE.</li></ul>
      </>
    ),
  },
  {
    id: 18006,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain what Raise_application_error is?",
    answer: (
      <>
        <p><code>RAISE_APPLICATION_ERROR(error_number, message)</code> is a procedure used to create custom error messages with error codes between -20000 and -20999, returned to the calling environment.</p>
      </>
    ),
  },
  {
    id: 18007,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What are two virtual table columns available during database trigger execution?",
    answer: (
      <>
        <ul><li><strong>:NEW</strong> - References the new column values being inserted or updated.</li><li><strong>:OLD</strong> - References the original column values before update or delete operations.</li></ul>
      </>
    ),
  },
  {
    id: 18008,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are the rules applied to NULLs while doing comparisons?",
    answer: (
      <>
        <p>Any comparison with NULL yields NULL (unknown), not TRUE or FALSE. Use IS NULL or IS NOT NULL to test for NULL values explicitly.</p>
      </>
    ),
  },
  {
    id: 18009,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "How to compile a process in PL SQL?",
    answer: (
      <>
        <p>Use the ALTER command: <code>ALTER PROCEDURE procedure_name COMPILE;</code> or for packages: <code>ALTER PACKAGE package_name COMPILE;</code></p>
      </>
    ),
  },
  {
    id: 18010,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Differentiate between the runtime error & Syntax error.",
    answer: (
      <>
        <ul><li><strong>Syntax Error:</strong> Detected during compilation due to incorrect PL/SQL grammar (e.g. missing semicolons).</li><li><strong>Runtime Error:</strong> Occurs during execution (e.g. division by zero, NO_DATA_FOUND).</li></ul>
      </>
    ),
  },
  {
    id: 18011,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain the COMMIT, ROLLBACK, & SAVEPOINT statements.",
    answer: (
      <>
        <ul><li><strong>COMMIT:</strong> Permanently saves all DML changes made in the current transaction.</li><li><strong>ROLLBACK:</strong> Undoes all uncommitted DML changes.</li><li><strong>SAVEPOINT:</strong> Creates a named intermediate point within a transaction to partially roll back.</li></ul>
      </>
    ),
  },
  {
    id: 18012,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Define Explicit & Implicit Cursors.",
    answer: (
      <>
        <ul><li><strong>Implicit Cursor:</strong> Automatically created by Oracle for single-row SELECT INTO, INSERT, UPDATE, DELETE statements.</li><li><strong>Explicit Cursor:</strong> Manually declared and controlled by developers using OPEN, FETCH, and CLOSE statements.</li></ul>
      </>
    ),
  },
  {
    id: 18013,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is a mutating table error?",
    answer: (
      <>
        <p>An ORA-04091 error that occurs when a row-level trigger tries to query or modify the same table it is triggered on, creating a circular dependency.</p>
      </>
    ),
  },
  {
    id: 18014,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Where is a Declare statement used?",
    answer: (
      <>
        <p>The DECLARE section is the optional first section of any PL/SQL block, used to declare variables, constants, cursors, and exceptions before the BEGIN section.</p>
      </>
    ),
  },
  {
    id: 18015,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the importance of SQLERRM & SQLCODE?",
    answer: (
      <>
        <ul><li><strong>SQLCODE:</strong> Returns the numeric error code of the most recently raised exception.</li><li><strong>SQLERRM:</strong> Returns the error message text associated with the SQLCODE value.</li></ul>
      </>
    ),
  },
  {
    id: 18016,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Does the SQL*Plus have a PL/SQL Engine?",
    answer: (
      <>
        <p>No. SQL*Plus does not have its own PL/SQL engine. It sends all PL/SQL blocks to the Oracle database server's built-in PL/SQL engine for processing.</p>
      </>
    ),
  },
  {
    id: 18017,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What packages are accessible to PL/SQL developers?",
    answer: (
      <>
        <p>Built-in packages: DBMS_OUTPUT (console printing), DBMS_SQL (dynamic SQL), DBMS_JOB (job scheduling), UTL_FILE (file I/O), and DBMS_LOB (LOB handling).</p>
      </>
    ),
  },
  {
    id: 18018,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the three basic parts of a database trigger?",
    answer: (
      <>
        <ul><li><strong>Triggering Event:</strong> The DML/DDL action (INSERT, UPDATE, DELETE) that fires the trigger.</li><li><strong>Trigger Timing:</strong> BEFORE or AFTER the event.</li><li><strong>Trigger Body:</strong> The PL/SQL block of code that executes.</li></ul>
      </>
    ),
  },
  {
    id: 18019,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the character functions?",
    answer: (
      <>
        <p>Functions: UPPER(), LOWER(), INITCAP(), SUBSTR(), LENGTH(), INSTR(), REPLACE(), TRIM(), LPAD(), RPAD(), and CONCAT().</p>
      </>
    ),
  },
  {
    id: 18020,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Explain what BTITLE & TTITLE is?",
    answer: (
      <>
        <ul><li><strong>TTITLE:</strong> Sets a title that appears at the top of each page of a SQL*Plus report output.</li><li><strong>BTITLE:</strong> Sets a title that appears at the bottom of each page of the report.</li></ul>
      </>
    ),
  },
  {
    id: 18021,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is PL/SQL?",
    answer: (
      <>
        <p>PL/SQL is Oracle's procedural extension to SQL that supports variables, loops, conditionals, exceptions, and stored procedures, allowing complex business logic to run directly inside the database engine.</p>
      </>
    ),
  },
  {
    id: 18022,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the features of PL/SQL?",
    answer: (
      <>
        <p>Features: integration with SQL, support for procedural constructs (IF/LOOP), exception handling, modularity (procedures/functions/packages), and portability across Oracle platforms.</p>
      </>
    ),
  },
  {
    id: 18023,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the different sections of a PL/SQL block?",
    answer: (
      <>
        <ul><li><strong>DECLARE (optional):</strong> Variable and cursor declarations.</li><li><strong>BEGIN (required):</strong> The executable statements.</li><li><strong>EXCEPTION (optional):</strong> Error handling logic.</li><li><strong>END (required):</strong> Terminates the block.</li></ul>
      </>
    ),
  },
  {
    id: 18024,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the advantages of PL/SQL?",
    answer: (
      <>
        <p>Advantages: reduced network traffic (batch SQL sent in one block), tight SQL integration, portability, support for stored procedures and triggers, and robust exception handling.</p>
      </>
    ),
  },
  {
    id: 18025,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between DML & DDL in Oracle?",
    answer: (
      <>
        <ul><li><strong>DML (Data Manipulation Language):</strong> INSERT, UPDATE, DELETE, SELECT - manipulates data rows.</li><li><strong>DDL (Data Definition Language):</strong> CREATE, ALTER, DROP, TRUNCATE - modifies schema objects.</li></ul>
      </>
    ),
  },
  {
    id: 18026,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "How to handle exceptions in PL/SQL?",
    answer: (
      <>
        <p>Using EXCEPTION blocks after BEGIN sections: <code>EXCEPTION WHEN NO_DATA_FOUND THEN ... WHEN OTHERS THEN ...</code></p>
      </>
    ),
  },
  {
    id: 18027,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is a stored procedure in PL/SQL?",
    answer: (
      <>
        <p>A named PL/SQL block stored persistently in the database that can be called by name, accepting IN/OUT parameters, and reused by multiple applications.</p>
      </>
    ),
  },
  {
    id: 18028,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is a function in PL/SQL?",
    answer: (
      <>
        <p>A named PL/SQL block similar to a procedure but always returns a single value using the RETURN statement, and can be called within SQL expressions.</p>
      </>
    ),
  },
  {
    id: 18029,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the parameter modes in PL/SQL?",
    answer: (
      <>
        <ul><li><strong>IN:</strong> Read-only input parameter (default mode).</li><li><strong>OUT:</strong> Write-only output parameter returned to caller.</li><li><strong>IN OUT:</strong> Can be both read from and written to.</li></ul>
      </>
    ),
  },
  {
    id: 18030,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is an anonymous block in PL/SQL?",
    answer: (
      <>
        <p>A PL/SQL block without a name that is not stored in the database, executed once in a session using EXECUTE or directly in SQL*Plus.</p>
      </>
    ),
  },
  {
    id: 18031,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are aggregate functions in PL/SQL?",
    answer: (
      <>
        <p>Functions operating on groups of rows: COUNT(), SUM(), AVG(), MAX(), MIN(), STDDEV(), VARIANCE().</p>
      </>
    ),
  },
  {
    id: 18032,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "How do you declare a variable in PL/SQL?",
    answer: (
      <>
        <p>Variables are declared in the DECLARE section with syntax: <code>variable_name datatype [DEFAULT value];</code> e.g. <code>v_salary NUMBER(10,2) DEFAULT 0;</code></p>
      </>
    ),
  },
  {
    id: 18033,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between CHAR and VARCHAR2 in Oracle?",
    answer: (
      <>
        <ul><li><strong>CHAR:</strong> Fixed-length character string, padded with spaces.</li><li><strong>VARCHAR2:</strong> Variable-length character string, stores only actual content characters.</li></ul>
      </>
    ),
  },
  {
    id: 18034,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is a PL/SQL collection?",
    answer: (
      <>
        <p>A composite data structure that stores multiple values of the same type. Types: Associative Arrays (INDEX BY), Nested Tables, and VARRAYs.</p>
      </>
    ),
  },
  {
    id: 18035,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the NOCOPY hint in PL/SQL?",
    answer: (
      <>
        <p>A compiler hint used with OUT and IN OUT parameters to pass large collections or records by reference instead of by value, improving performance by avoiding copying.</p>
      </>
    ),
  },
  {
    id: 18036,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between DELETE and TRUNCATE in Oracle?",
    answer: (
      <>
        <ul><li><strong>DELETE:</strong> DML operation, can be rolled back, fires row-level triggers, slower for large tables.</li><li><strong>TRUNCATE:</strong> DDL operation, cannot be rolled back, does not fire triggers, faster.</li></ul>
      </>
    ),
  },
  {
    id: 18037,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are number functions in PL/SQL?",
    answer: (
      <>
        <p>Functions: ABS(), CEIL(), FLOOR(), ROUND(), TRUNC(), MOD(), POWER(), SQRT(), and SIGN().</p>
      </>
    ),
  },
  {
    id: 18038,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are date functions in PL/SQL?",
    answer: (
      <>
        <p>Functions: SYSDATE, ADD_MONTHS(), MONTHS_BETWEEN(), LAST_DAY(), NEXT_DAY(), TO_DATE(), and TRUNC() for dates.</p>
      </>
    ),
  },
  {
    id: 18039,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "How do you use %TYPE in PL/SQL?",
    answer: (
      <>
        <p>%TYPE anchors a variable's data type to an existing table column or another variable: <code>v_salary employees.salary%TYPE;</code> ensuring type consistency automatically.</p>
      </>
    ),
  },
  {
    id: 18040,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is the DUAL table in Oracle?",
    answer: (
      <>
        <p>A special one-row, one-column table in Oracle used to evaluate SQL expressions, functions, or constants without querying actual user tables: <code>SELECT SYSDATE FROM DUAL;</code></p>
      </>
    ),
  },
  {
    id: 18041,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What data types are available in the PL/SQL?",
    answer: (
      <>
        <p>Types: NUMBER, VARCHAR2, CHAR, DATE, BOOLEAN, BINARY_INTEGER, PLS_INTEGER, LONG, CLOB, BLOB, NVARCHAR2, and RAW.</p>
      </>
    ),
  },
  {
    id: 18042,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is the basic structure of the PL/SQL block?",
    answer: (
      <>
        <p>Structure: DECLARE (variable declarations), BEGIN (executable code), EXCEPTION (error handlers), END. Only BEGIN and END are mandatory sections.</p>
      </>
    ),
  },
  {
    id: 18043,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between PROCEDURE, FUNCTION, & PACKAGE in PL/SQL?",
    answer: (
      <>
        <ul><li><strong>Procedure:</strong> Named block executing actions, no return value.</li><li><strong>Function:</strong> Named block that always returns a value.</li><li><strong>Package:</strong> A container grouping related procedures, functions, and variables together.</li></ul>
      </>
    ),
  },
  {
    id: 18044,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Differentiate between a Stored Procedure & Function.",
    answer: (
      <>
        <ul><li><strong>Stored Procedure:</strong> Used to perform actions. Does not return values directly. Called using EXEC/CALL.</li><li><strong>Function:</strong> Used to compute values. Must return a value. Can be used inside SQL queries.</li></ul>
      </>
    ),
  },
  {
    id: 18045,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Comparison between Error & Exception?",
    answer: (
      <>
        <ul><li><strong>Error:</strong> A critical system-level issue (e.g. memory failure) that cannot be handled programmatically.</li><li><strong>Exception:</strong> A recoverable runtime condition handled using PL/SQL EXCEPTION blocks.</li></ul>
      </>
    ),
  },
  {
    id: 18046,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are some common exceptions and errors in PL/SQL?",
    answer: (
      <>
        <p>Common: NO_DATA_FOUND, TOO_MANY_ROWS, ZERO_DIVIDE, VALUE_ERROR, INVALID_CURSOR, DUP_VAL_ON_INDEX, and CURSOR_ALREADY_OPEN.</p>
      </>
    ),
  },
  {
    id: 18047,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "List a few predefined exceptions in PL/SQL?",
    answer: (
      <>
        <p>NO_DATA_FOUND (ORA-01403), TOO_MANY_ROWS (ORA-01422), ZERO_DIVIDE (ORA-01476), VALUE_ERROR (ORA-06502), and INVALID_NUMBER (ORA-01722).</p>
      </>
    ),
  },
  {
    id: 18048,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What do you mean by a trigger in PL/SQL?",
    answer: (
      <>
        <p>A stored PL/SQL block that automatically fires in response to specific DML or DDL events on a table, view, schema, or database.</p>
      </>
    ),
  },
  {
    id: 18049,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Specify the types of triggers in PL/SQL?",
    answer: (
      <>
        <ul><li>Row-level triggers (FOR EACH ROW)</li><li>Statement-level triggers</li><li>BEFORE triggers</li><li>AFTER triggers</li><li>INSTEAD OF triggers (for views)</li><li>DDL triggers</li><li>Database event triggers</li></ul>
      </>
    ),
  },
  {
    id: 18050,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between stored procedures & triggers execution?",
    answer: (
      <>
        <ul><li><strong>Stored Procedures:</strong> Explicitly called by users or applications.</li><li><strong>Triggers:</strong> Implicitly and automatically fired by the database engine on defined DML or DDL events.</li></ul>
      </>
    ),
  },
  {
    id: 18051,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Define Stored Procedure in PL/SQL?",
    answer: (
      <>
        <p>A compiled, named PL/SQL block stored persistently in the database schema, callable from applications or other PL/SQL blocks using parameters.</p>
      </>
    ),
  },
  {
    id: 18052,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain PL/SQL Cursors?",
    answer: (
      <>
        <p>Cursors are pointers to a private SQL work area that store query result sets, allowing row-by-row processing using OPEN, FETCH, and CLOSE operations.</p>
      </>
    ),
  },
  {
    id: 18053,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What do you get by the cursor attribute SQL%ROWCOUNT?",
    answer: (
      <>
        <p>Returns the number of rows affected by the most recently executed DML statement (INSERT, UPDATE, DELETE, or SELECT INTO).</p>
      </>
    ),
  },
  {
    id: 18054,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What will you get by a cursor attribute SQL%FOUND?",
    answer: (
      <>
        <p>Returns TRUE if the most recent DML statement affected at least one row, or if the last FETCH returned a row.</p>
      </>
    ),
  },
  {
    id: 18055,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What will you get by a cursor attribute SQL%NOTFOUND?",
    answer: (
      <>
        <p>Returns TRUE if the most recent DML statement did not affect any rows, or if the last FETCH returned no row (used to detect end of cursor loop).</p>
      </>
    ),
  },
  {
    id: 18056,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the PL/SQL package?",
    answer: (
      <>
        <p>A schema object that groups logically related PL/SQL procedures, functions, variables, constants, cursors, and exceptions into a single named unit.</p>
      </>
    ),
  },
  {
    id: 18057,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Mention the two different parts of a PL/SQL packages?",
    answer: (
      <>
        <ul><li><strong>Package Specification:</strong> The public interface declaring the procedures, functions, and variables visible to other schema objects.</li><li><strong>Package Body:</strong> The private implementation containing the actual code for all declared items.</li></ul>
      </>
    ),
  },
  {
    id: 18058,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Specify the cursor attributes used in PL/SQL?",
    answer: (
      <>
        <p>Attributes: <code>%FOUND</code> (row returned), <code>%NOTFOUND</code> (no row returned), <code>%ROWCOUNT</code> (rows processed), <code>%ISOPEN</code> (cursor is open).</p>
      </>
    ),
  },
  {
    id: 18059,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Highlight the differences between SQL & PL/SQL?",
    answer: (
      <>
        <ul><li><strong>SQL:</strong> Declarative, set-based data manipulation language. Single statements executed individually.</li><li><strong>PL/SQL:</strong> Procedural extension to SQL supporting variables, loops, conditions, and block execution.</li></ul>
      </>
    ),
  },
  {
    id: 18060,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between %TYPE and %ROWTYPE? Give an example?",
    answer: (
      <>
        <ul><li><strong>%TYPE:</strong> Anchors to a single column: <code>v_name employees.name%TYPE;</code></li><li><strong>%ROWTYPE:</strong> Anchors to an entire table row: <code>v_emp employees%ROWTYPE;</code> giving access to all columns.</li></ul>
      </>
    ),
  },
  {
    id: 18061,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "List down a few schema objects created using PL/SQL?",
    answer: (
      <>
        <p>Objects: Stored Procedures, Functions, Packages, Triggers, Sequences, Synonyms, Views, and Database Links.</p>
      </>
    ),
  },
  {
    id: 18062,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are the key differences between a ROLLBACK command & a ROLLBACK TO statement?",
    answer: (
      <>
        <ul><li><strong>ROLLBACK:</strong> Undoes all uncommitted changes in the entire current transaction.</li><li><strong>ROLLBACK TO savepoint_name:</strong> Undoes only the work done after the specified SAVEPOINT, keeping earlier changes.</li></ul>
      </>
    ),
  },
  {
    id: 18063,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Specify the different types of constraints.",
    answer: (
      <>
        <p>Constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY (REFERENCES), CHECK, and DEFAULT (Oracle 12c+).</p>
      </>
    ),
  },
  {
    id: 18064,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Highlight differences between triggers and constraints?",
    answer: (
      <>
        <ul><li><strong>Constraints:</strong> Declarative rules enforced automatically by Oracle without code (e.g. PRIMARY KEY).</li><li><strong>Triggers:</strong> Procedural code executed on events, allowing complex custom business rule enforcement.</li></ul>
      </>
    ),
  },
  {
    id: 18065,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain what PL/SQL Records is?",
    answer: (
      <>
        <p>A composite data type grouping related items under a single name, where each field can have a different data type — similar to a row in a database table.</p>
      </>
    ),
  },
  {
    id: 18066,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain IN OUT parameter mode?",
    answer: (
      <>
        <p>IN OUT parameters pass values into a subprogram AND receive modified values back after execution, acting as both input and output simultaneously.</p>
      </>
    ),
  },
  {
    id: 18067,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is an error ORA-03113?",
    answer: (
      <>
        <p>ORA-03113: <em>end-of-file on communication channel</em> — indicates the Oracle server process terminated abnormally, breaking the client connection.</p>
      </>
    ),
  },
  {
    id: 18068,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What do you understand by SYS.ALL_DEPENDENCIES?",
    answer: (
      <>
        <p>A data dictionary view listing all dependencies between schema objects (e.g. which procedures depend on which tables or packages), helping impact analysis during changes.</p>
      </>
    ),
  },
  {
    id: 18069,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "List some uses of Triggers?",
    answer: (
      <>
        <p>Uses: auto-audit logging, enforcing referential integrity, auto-populating derived columns, preventing invalid DML operations, and replicating data changes.</p>
      </>
    ),
  },
  {
    id: 18070,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are blocks in PL/SQL?",
    answer: (
      <>
        <p>The fundamental execution units in PL/SQL consisting of DECLARE, BEGIN, EXCEPTION, and END sections. Blocks can be nested inside other blocks.</p>
      </>
    ),
  },
  {
    id: 18071,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is a Constraining table & a Mutating table?",
    answer: (
      <>
        <ul><li><strong>Mutating table:</strong> The table being modified by a DML statement that caused a trigger to fire.</li><li><strong>Constraining table:</strong> A table referenced in the trigger body that is being read for constraint validation.</li></ul>
      </>
    ),
  },
  {
    id: 18072,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Compare actual & formal parameters?",
    answer: (
      <>
        <ul><li><strong>Formal parameters:</strong> Placeholders declared in the procedure/function signature definition.</li><li><strong>Actual parameters:</strong> Real values or variables passed by the caller when invoking the subprogram.</li></ul>
      </>
    ),
  },
  {
    id: 18073,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are the three modes of a parameter?",
    answer: (
      <>
        <p>IN (read-only input), OUT (write-only output), and IN OUT (read-write bidirectional parameter).</p>
      </>
    ),
  },
  {
    id: 18074,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Why %ISOPEN attribute is always false for the implicit cursor?",
    answer: (
      <>
        <p>Because Oracle automatically opens and closes implicit cursors after each SQL statement execution. By the time user code checks %ISOPEN, the cursor is already closed.</p>
      </>
    ),
  },
  {
    id: 18075,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the difference between cursor declared in the procedures & cursors declared in a package specification?",
    answer: (
      <>
        <ul><li><strong>Procedure cursor:</strong> Local scope, only accessible within that procedure.</li><li><strong>Package specification cursor:</strong> Public scope, accessible by all callers of the package across the session.</li></ul>
      </>
    ),
  },
  {
    id: 18076,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain INSTEAD OF triggers?",
    answer: (
      <>
        <p>Special triggers that fire in place of INSERT, UPDATE, or DELETE operations on views, allowing DML on views that would otherwise be non-updatable.</p>
      </>
    ),
  },
  {
    id: 18077,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What do you understand by expressions in PL/SQL?",
    answer: (
      <>
        <p>Combinations of operands (variables, constants, literals) and operators (+, -, *, /, ||) that produce a single value during execution.</p>
      </>
    ),
  },
  {
    id: 18078,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is a forward declaration in functions?",
    answer: (
      <>
        <p>Declaring a function's signature (name, parameters, return type) before its full implementation body, allowing mutual recursion between subprograms within the same package.</p>
      </>
    ),
  },
  {
    id: 18079,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the use of the WHERE CURRENT OF clause in the cursor?",
    answer: (
      <>
        <p>Used in UPDATE or DELETE statements inside cursor loops to modify or delete the row most recently fetched by the cursor, avoiding re-querying for the row.</p>
      </>
    ),
  },
  {
    id: 18080,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain what ROWID & ROWNUM is?",
    answer: (
      <>
        <ul><li><strong>ROWID:</strong> A unique physical address identifying the exact disk location of a row (file, block, row number).</li><li><strong>ROWNUM:</strong> A pseudo column assigning sequential numbers to result rows before ORDER BY is applied.</li></ul>
      </>
    ),
  },
  {
    id: 18081,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is PL/SQL Table?",
    answer: (
      <>
        <p>An older term for Associative Arrays (INDEX BY tables) — one-dimensional collections indexed by integers or VARCHAR2 keys, existing only in memory.</p>
      </>
    ),
  },
  {
    id: 18082,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the difference between PL/SQL Table & Nested Table?",
    answer: (
      <>
        <ul><li><strong>PL/SQL Table (Associative Array):</strong> Memory-only, can use sparse indexes.</li><li><strong>Nested Table:</strong> Can be stored in the database, always uses dense sequential indexes.</li></ul>
      </>
    ),
  },
  {
    id: 18083,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Define Varrays.",
    answer: (
      <>
        <p>Variable-size arrays with a fixed maximum size declared at creation time. Elements are always stored in sequential order (dense), and can be persisted to database columns.</p>
      </>
    ),
  },
  {
    id: 18084,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain how to declare a Varray?",
    answer: (
      <>
        <p>Declare with type definition: <code>TYPE num_list IS VARRAY(10) OF NUMBER;</code> then declare a variable: <code>v_list num_list := num_list();</code></p>
      </>
    ),
  },
  {
    id: 18085,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What do you understand by the RETURNING clause in PL/SQL?",
    answer: (
      <>
        <p>An extension of DML statements (INSERT, UPDATE, DELETE) that returns affected column values directly into PL/SQL variables without a separate SELECT query.</p>
      </>
    ),
  },
  {
    id: 18086,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Explain what BULK COLLECT is?",
    answer: (
      <>
        <p>A PL/SQL optimization clause that fetches multiple rows from a cursor into a collection in a single round-trip, dramatically reducing context switching overhead between SQL and PL/SQL engines.</p>
      </>
    ),
  },
  {
    id: 18087,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the difference between BULK COLLECT & FORALL?",
    answer: (
      <>
        <ul><li><strong>BULK COLLECT:</strong> Fetches multiple rows from SQL into PL/SQL collections (read operations).</li><li><strong>FORALL:</strong> Sends multiple DML statements in a single SQL engine call using collection data (write operations).</li></ul>
      </>
    ),
  },
  {
    id: 18088,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Explain what a Transaction is in PL/SQL?",
    answer: (
      <>
        <p>A logical unit of work consisting of one or more SQL statements that either all succeed (COMMIT) or all fail (ROLLBACK), ensuring data integrity.</p>
      </>
    ),
  },
  {
    id: 18089,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are the properties of transactions (ACID)?",
    answer: (
      <>
        <ul><li><strong>Atomicity:</strong> All operations succeed or all fail.</li><li><strong>Consistency:</strong> Database stays in a valid state.</li><li><strong>Isolation:</strong> Transactions don't interfere with each other.</li><li><strong>Durability:</strong> Committed changes persist permanently.</li></ul>
      </>
    ),
  },
  {
    id: 18090,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Differentiate between COMMIT & ROLLBACK?",
    answer: (
      <>
        <ul><li><strong>COMMIT:</strong> Permanently saves all DML changes and releases row locks.</li><li><strong>ROLLBACK:</strong> Discards all uncommitted changes and releases row locks.</li></ul>
      </>
    ),
  },
  {
    id: 18091,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is a SAVEPOINT?",
    answer: (
      <>
        <p>A marker within a transaction that allows partial rollback to a named point without undoing the entire transaction: <code>SAVEPOINT sp1;</code> ... <code>ROLLBACK TO sp1;</code></p>
      </>
    ),
  },
  {
    id: 18092,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Explain the lock mechanism in Oracle.",
    answer: (
      <>
        <p>Oracle uses automatic locking at the row level for DML operations (no lock escalation), preventing dirty reads. Locks are held until COMMIT or ROLLBACK releases them.</p>
      </>
    ),
  },
  {
    id: 18093,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What are the different levels of locking in Oracle?",
    answer: (
      <>
        <p>Levels: Row-level locks (TX lock for DML rows), Table-level locks (TM lock), and Data Dictionary locks. Row-level locking provides maximum concurrency.</p>
      </>
    ),
  },
  {
    id: 18094,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is a Deadlock? How to avoid it?",
    answer: (
      <>
        <p>A deadlock occurs when two sessions each hold a lock the other needs, causing permanent waiting. Avoid by always accessing tables in the same order and using SELECT FOR UPDATE NOWAIT.</p>
      </>
    ),
  },
  {
    id: 18095,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Define dynamic SQL in PL/SQL.",
    answer: (
      <>
        <p>SQL statements constructed as strings at runtime and executed dynamically using EXECUTE IMMEDIATE or the DBMS_SQL package, allowing flexible schema-independent queries.</p>
      </>
    ),
  },
  {
    id: 18096,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the use of the EXECUTE IMMEDIATE statement?",
    answer: (
      <>
        <p>Executes a dynamic SQL string at runtime: <code>EXECUTE IMMEDIATE 'CREATE TABLE ' || tbl_name || ' (id NUMBER)';</code> supports DDL and DML with bind variables.</p>
      </>
    ),
  },
  {
    id: 18097,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "How does DBMS_SQL package help in Dynamic SQL?",
    answer: (
      <>
        <p>DBMS_SQL provides low-level APIs (PARSE, BIND_VARIABLE, EXECUTE, FETCH_ROWS) for executing dynamic SQL, useful when column counts or types are unknown at compile time.</p>
      </>
    ),
  },
  {
    id: 18098,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What do you mean by SQL Injection? How to prevent it in PL/SQL?",
    answer: (
      <>
        <p>SQL injection inserts malicious SQL into dynamic queries. Prevent it using bind variables in EXECUTE IMMEDIATE: <code>EXECUTE IMMEDIATE sql_str USING bind_val;</code> and the DBMS_ASSERT package.</p>
      </>
    ),
  },
  {
    id: 18099,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Explain compilation warnings in PL/SQL.",
    answer: (
      <>
        <p>PL/SQL compilation warnings (PLWSQL-05xxx) alert developers to potentially problematic code patterns (e.g. performance issues, dead code). Controlled via PLSQL_WARNINGS parameter.</p>
      </>
    ),
  },
  {
    id: 18100,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the utility of the PL/SQL compiler optimization level?",
    answer: (
      <>
        <p>Set via PLSQL_OPTIMIZE_LEVEL (0-3). Level 2 (default) enables standard optimizations. Level 3 enables subprogram inlining for maximum performance gains.</p>
      </>
    ),
  },
  {
    id: 18101,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are the differences between a Primary Key & Unique Key?",
    answer: (
      <>
        <ul><li><strong>Primary Key:</strong> Cannot be NULL, only one per table, automatically creates a unique index.</li><li><strong>Unique Key:</strong> Can contain one NULL value, multiple allowed per table.</li></ul>
      </>
    ),
  },
  {
    id: 18102,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Highlight the differences between ON DELETE CASCADE & ON DELETE SET NULL?",
    answer: (
      <>
        <ul><li><strong>ON DELETE CASCADE:</strong> Automatically deletes child rows when the parent row is deleted.</li><li><strong>ON DELETE SET NULL:</strong> Sets the child foreign key column to NULL when the parent row is deleted.</li></ul>
      </>
    ),
  },
  {
    id: 18103,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What is the meaning of Candidate Key?",
    answer: (
      <>
        <p>A column or set of columns that can uniquely identify every row in a table. A table may have multiple candidate keys; the one chosen as primary is the Primary Key.</p>
      </>
    ),
  },
  {
    id: 18104,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What are Views? List down its uses.",
    answer: (
      <>
        <p>Virtual tables built from SELECT queries stored in the database. Uses: simplifying complex joins, restricting data access, providing data independence, and hiding business logic.</p>
      </>
    ),
  },
  {
    id: 18105,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between the Simple View and Complex View?",
    answer: (
      <>
        <ul><li><strong>Simple View:</strong> Based on a single table, supports DML operations directly.</li><li><strong>Complex View:</strong> Based on multiple tables with JOINs, GROUP BY, or functions; generally non-updatable without INSTEAD OF triggers.</li></ul>
      </>
    ),
  },
  {
    id: 18106,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What are the DML operations restrictions on Views?",
    answer: (
      <>
        <p>Views with GROUP BY, DISTINCT, aggregate functions, ROWNUM, or JOINs generally cannot be used for INSERT/UPDATE/DELETE. INSTEAD OF triggers bypass these restrictions.</p>
      </>
    ),
  },
  {
    id: 18107,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Specify the functionalities of Trigger?",
    answer: (
      <>
        <p>Functionalities: data validation, auto-auditing changes, enforcing business rules, generating derived data, and preventing unauthorized DML operations.</p>
      </>
    ),
  },
  {
    id: 18108,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Explain Global Variables?",
    answer: (
      <>
        <p>Variables declared in the package specification (not body) that persist for the entire session lifetime, accessible by all subprograms within the package.</p>
      </>
    ),
  },
  {
    id: 18109,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What do you understand by a Flashback Query?",
    answer: (
      <>
        <p>An Oracle feature allowing queries of table data as it existed at a past point in time using AS OF TIMESTAMP or AS OF SCN syntax, leveraging undo data.</p>
      </>
    ),
  },
  {
    id: 18110,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Define a Join?",
    answer: (
      <>
        <p>A SQL operation combining rows from two or more tables based on a related column (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN).</p>
      </>
    ),
  },
  {
    id: 18111,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What do you mean by a View?",
    answer: (
      <>
        <p>A named virtual table defined by a stored SELECT query, presenting a tailored subset or transformed view of underlying table data.</p>
      </>
    ),
  },
  {
    id: 18112,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the use of the Cascade Constraints?",
    answer: (
      <>
        <p>CASCADE CONSTRAINTS is used with DROP TABLE or ALTER TABLE commands to automatically drop dependent foreign key constraints referencing the table being altered.</p>
      </>
    ),
  },
  {
    id: 18113,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What is the use of Table Functions?",
    answer: (
      <>
        <p>Pipelined or non-pipelined functions that return collections queryable as a table in FROM clauses: <code>SELECT * FROM TABLE(my_func());</code></p>
      </>
    ),
  },
  {
    id: 18114,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Explain what is Materialized Views? Where are they used?",
    answer: (
      <>
        <p>Physical copies of query result sets stored on disk, refreshed periodically. Used in data warehouses and reporting systems to avoid re-executing expensive joins on every query.</p>
      </>
    ),
  },
  {
    id: 18115,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the fundamental difference between a Permanent Tablespace & a Temporary Tablespace?",
    answer: (
      <>
        <ul><li><strong>Permanent Tablespace:</strong> Stores persistent database objects like tables and indexes.</li><li><strong>Temporary Tablespace:</strong> Stores temporary sort operations and session-level temporary tables, cleared after sessions end.</li></ul>
      </>
    ),
  },
  {
    id: 18116,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Define an Anonymous Block & How to execute it?",
    answer: (
      <>
        <p>An unnamed PL/SQL block that is not stored in the database. Execute it by typing the block directly in SQL*Plus or SQL Developer and pressing the run button or using the slash (/) command.</p>
      </>
    ),
  },
  {
    id: 18117,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "Define a SAVEPOINT Command?",
    answer: (
      <>
        <p>A transaction control command creating a named restore point within a transaction: <code>SAVEPOINT point_name;</code> Allows partial rollback without canceling the full transaction.</p>
      </>
    ),
  },
  {
    id: 18118,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What are Pseudo columns? How to use pseudo columns in the Procedural Statements?",
    answer: (
      <>
        <p>Pseudo columns behave like table columns but are not stored (e.g. ROWID, ROWNUM, LEVEL, SYSDATE, NEXTVAL). Use them in SELECT or WHERE clauses: <code>SELECT ROWNUM, name FROM employees;</code></p>
      </>
    ),
  },
  {
    id: 18119,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "Explain Select for Update? How to use it in a Cursor?",
    answer: (
      <>
        <p>SELECT FOR UPDATE locks selected rows for the duration of the transaction. In cursors: <code>CURSOR c IS SELECT * FROM employees FOR UPDATE;</code> then use WHERE CURRENT OF c in UPDATE/DELETE.</p>
      </>
    ),
  },
  {
    id: 18120,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "What is the difference between Stored Procedures & Database Triggers?",
    answer: (
      <>
        <ul><li><strong>Stored Procedures:</strong> Explicitly invoked by applications or other PL/SQL blocks.</li><li><strong>Database Triggers:</strong> Implicitly fired by the database engine automatically on DML or DDL events.</li></ul>
      </>
    ),
  },
  {
    id: 18121,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "Highlight the differences between the Nested Tables & Varrays?",
    answer: (
      <>
        <ul><li><strong>Nested Tables:</strong> Unbounded size, sparse indexing allowed, can be stored in database columns.</li><li><strong>Varrays:</strong> Fixed maximum size declared at creation, always dense, stored as single objects in database columns.</li></ul>
      </>
    ),
  },
  {
    id: 18122,
    category: 'PL/SQL',
    difficulty: 'easy',
    question: "What do you mean by disabling a Trigger?",
    answer: (
      <>
        <p>Temporarily preventing a trigger from firing without dropping it: <code>ALTER TRIGGER trigger_name DISABLE;</code> Useful during bulk data loads to improve performance.</p>
      </>
    ),
  },
  {
    id: 18123,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What are the Conditional Predicates?",
    answer: (
      <>
        <p>Boolean expressions inside DML triggers (INSERTING, UPDATING, DELETING) that identify which specific DML operation caused the trigger to fire, enabling single trigger handling of multiple events.</p>
      </>
    ),
  },
  {
    id: 18124,
    category: 'PL/SQL',
    difficulty: 'medium',
    question: "How to initialize a parameter in a procedure?",
    answer: (
      <>
        <p>Provide a DEFAULT clause in the parameter declaration: <code>PROCEDURE calc(p_val IN NUMBER DEFAULT 0) IS BEGIN ... END;</code> Callers can then omit that argument.</p>
      </>
    ),
  },
  {
    id: 18125,
    category: 'PL/SQL',
    difficulty: 'hard',
    question: "What are the Function Purity Levels?",
    answer: (
      <>
        <p>Purity levels define restrictions on functions called from SQL: WNDS (writes no database state), RNDS (reads no database state), WNPS (writes no package state), RNPS (reads no package state).</p>
      </>
    ),
  },
];

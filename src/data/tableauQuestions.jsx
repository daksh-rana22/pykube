import React from 'react';

export const TABLEAU_QUESTIONS = [
  {
    id: 28001,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Tableau?",
    answer: (
      <>
        <p><strong>Tableau</strong> is a leading business intelligence and data visualization software used to analyze, visualize, and share massive amounts of data. It connects to diverse data sources, compiles them into a unified interface, and allows users to build interactive dashboards, charts, and reports using an intuitive drag-and-drop mechanism.</p>
      </>
    ),
  },
  {
    id: 28002,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is data visualization in Tableau?",
    answer: (
      <>
        <p><strong>Data Visualization</strong> is the graphical representation of raw information and datasets. In Tableau, this involves transforming records from databases or spreadsheets into visual graphics (such as charts, maps, and plots) to help business users identify trends, patterns, and outliers at a glance.</p>
      </>
    ),
  },
  {
    id: 28003,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are the features of Tableau?",
    answer: (
      <>
        <p>Key features of Tableau include:</p>
        <ul>
          <li><strong>Direct Data Connections:</strong> Connects to files (Excel, CSV, JSON) and relational/cloud databases (PostgreSQL, BigQuery, Snowflake).</li>
          <li><strong>Drag-and-Drop Interface:</strong> Allows building complex charts without coding.</li>
          <li><strong>Live and Extract Connections:</strong> Work with real-time streaming data or query high-speed compressed snapshots.</li>
          <li><strong>Device Designer:</strong> Create and publish dashboards optimized for mobile, tablet, or desktop layouts.</li>
          <li><strong>Cross-Database Joins:</strong> Combine tables from separate systems into a single view.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28004,
    category: 'Tableau',
    difficulty: 'hard',
    question: "Define LOD Expression?",
    answer: (
      <>
        <p><strong>LOD (Level of Detail) Expressions</strong> allow users to compute values at the data source level at different levels of granularity compared to the visualization level. The three types of LOD expressions are:</p>
        <ul>
          <li><strong>FIXED:</strong> Computes the aggregate value using only the specified dimensions, completely ignoring the dimensions present in the visualization.</li>
          <li><strong>INCLUDE:</strong> Computes values using both the specified dimensions and whatever dimensions are active in the visualization.</li>
          <li><strong>EXCLUDE:</strong> Explicitly excludes the specified dimensions from the calculation even if they are in the visualization.</li>
        </ul>
        <p>Example syntax: <code>{`{ FIXED [Region] : SUM([Sales]) }`}</code></p>
      </>
    ),
  },
  {
    id: 28005,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define Heat Map?",
    answer: (
      <>
        <p>A <strong>Heat Map</strong> is a visualization that displays data density and patterns across a grid using color gradients. It is useful for comparing two categorical dimensions and identifying hot/cold zones based on the intensity of a numeric measure.</p>
      </>
    ),
  },
  {
    id: 28006,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What do you understand by TreeMap?",
    answer: (
      <>
        <p>A <strong>TreeMap</strong> displays hierarchical data as nested rectangles. The size of each rectangle represents its proportional value (e.g., Sales volume), and the color represents another metric or category, allowing easy comparison of proportions across categories.</p>
      </>
    ),
  },
  {
    id: 28007,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain different connection types in Tableau?",
    answer: (
      <>
        <p>Tableau offers two connection methods to interface with data sources:</p>
        <ul>
          <li><strong>Live Connection:</strong> Establishes a direct connection to the database. Every filter or action on the dashboard queries the database in real-time. Best for live-streaming data, but can be slow if the source database is unoptimized.</li>
          <li><strong>Extract Connection:</strong> Creates a compressed snapshot of the dataset stored in a local columnar cache (.hyper file). It queries fast and runs offline, but requires schedule refreshes to get updated data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28008,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What Are the Filters? Name the Different Filters in Tableau?",
    answer: (
      <>
        <p><strong>Filters</strong> are rules used to restrict or exclude specific data records from appearing in worksheets or dashboards. In order of execution, the filters in Tableau are:</p>
        <ol>
          <li><strong>Extract Filters:</strong> Filters data while creating the extract.</li>
          <li><strong>Data Source Filters:</strong> Applies filters to the entire data source.</li>
          <li><strong>Context Filters:</strong> Creates a parent filter that limits the scope of other filters.</li>
          <li><strong>Dimension Filters:</strong> Filters qualitative fields (e.g., Region, Category).</li>
          <li><strong>Measure Filters:</strong> Filters aggregated numeric fields (e.g., Sales &gt; 500).</li>
          <li><strong>Table Calculation Filters:</strong> Filters the view without modifying underlying query data.</li>
        </ol>
      </>
    ),
  },
  {
    id: 28009,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain blended axis?",
    answer: (
      <>
        <p>A <strong>Blended Axis</strong> (or Shared Axis) is used when you want to compare multiple measures in a single pane sharing a single axis. You create it by dragging a measure onto the existing axis ruler in the view. Both measures share the same space and coordinate system.</p>
      </>
    ),
  },
  {
    id: 28010,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Define shelves and sets?",
    answer: (
      <>
        <p>These are core layout and data grouping elements in Tableau:</p>
        <ul>
          <li><strong>Shelves:</strong> Functional areas in a worksheet (like Rows, Columns, Filters, Pages, and the Marks Card) where you drag and drop fields to design the visual query.</li>
          <li><strong>Sets:</strong> Custom fields that group a subset of data based on specific conditions (e.g., Top 10 Customers by Sales). They exist as dynamic IN/OUT categories.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28011,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Mark Card in Tableau?",
    answer: (
      <>
        <p>The <strong>Marks Card</strong> is a panel used to configure the visual properties of data points in a worksheet. It allows you to bind fields to visual properties like Color, Size, Label, Detail, Tooltip, and Shape, transforming data values into graphical features.</p>
      </>
    ),
  },
  {
    id: 28012,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Define published data source?",
    answer: (
      <>
        <p>A <strong>Published Data Source</strong> is a connection schema (including custom joins, calculations, and hierarchies) that is published from Tableau Desktop to Tableau Server/Cloud. Once published, multiple users can access the same data source, ensuring a single source of truth across different workbooks.</p>
      </>
    ),
  },
  {
    id: 28013,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain Bullet graph?",
    answer: (
      <>
        <p>A <strong>Bullet Graph</strong> is a variation of a bar chart designed to compare a primary measure (e.g., Year-to-Date Revenue) against a target value (e.g., target budget) and contextual performance ranges (e.g., bad, satisfactory, good) depicted by background color bands.</p>
      </>
    ),
  },
  {
    id: 28014,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define Gantt chart?",
    answer: (
      <>
        <p>A <strong>Gantt Chart</strong> visualizes task schedules and durations over a time axis. It is created by dragging a date dimension to Columns, a task dimension to Rows, and a calculated field representing task duration (in days/hours) to the Size marks card.</p>
      </>
    ),
  },
  {
    id: 28015,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Tableau Reader?",
    answer: (
      <>
        <p><strong>Tableau Reader</strong> is a free desktop application that allows users to open, view, and interact with packaged workbooks (.twbx files) created in Tableau Desktop. Users can filter and drill down, but cannot edit or author new visualizations.</p>
      </>
    ),
  },
  {
    id: 28016,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is a TDE file?",
    answer: (
      <>
        <p><strong>TDE (Tableau Data Extract)</strong> is the legacy file format used by Tableau to store compressed columnar data snapshots for fast querying. It has been replaced by the high-performance <strong>.hyper</strong> format, which optimizes query performance on large datasets.</p>
      </>
    ),
  },
  {
    id: 28017,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is the maximum number of rows Tableau can utilize at one time?",
    answer: (
      <>
        <p>Tableau does **not have a built-in limit** on the number of rows it can process. The row limit is determined by the memory capacity, hardware resources of the machine, and the capability of the underlying database database engine.</p>
      </>
    ),
  },
  {
    id: 28018,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What is the DRIVE Program Methodology?",
    answer: (
      <>
        <p>The <strong>DRIVE</strong> Program Methodology is a framework developed by Tableau for deploying enterprise-wide analytical solutions. It consists of five key phases:</p>
        <ul>
          <li><strong>Discovery:</strong> Understanding business goals and data requirements.</li>
          <li><strong>Rollout:</strong> Deploying the servers and configuring desktop environments.</li>
          <li><strong>Integration:</strong> Setting up secure data pipelines and security models.</li>
          <li><strong>Valuation:</strong> Measuring dashboard adoption and business value.</li>
          <li><strong>Enablement:</strong> Training users and creating an internal community.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28019,
    category: 'Tableau',
    difficulty: 'medium',
    question: "How to use groups in a calculated field?",
    answer: (
      <>
        <p>In Tableau, groups cannot be referenced directly by name in calculated fields. To work around this:</p>
        <ul>
          <li>Use <code>IF ... ELSE</code> logic to replicate the group logic directly inside the calculation.</li>
          <li>If using groups from Tableau Server, query group membership using the user function: <code>{`ISMEMBEROF("GroupName")`}</code>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28020,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What is Assume referential integrity?",
    answer: (
      <>
        <p><strong>Assume Referential Integrity</strong> is an optimization setting for data sources in Tableau. If referential integrity is guaranteed (meaning all keys in a child table exist in the parent table), checking this option allows Tableau to generate queries using simple <code>INNER JOIN</code>s instead of default <code>LEFT JOIN</code>s, improving query execution speed.</p>
      </>
    ),
  },
  {
    id: 28021,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a calculated field in Tableau?",
    answer: (
      <>
        <p>A <strong>Calculated Field</strong> is a new field created by applying mathematical, logical, date, or string functions to existing fields in the dataset. These calculations are computed dynamically at runtime when the dashboard is loaded.</p>
      </>
    ),
  },
  {
    id: 28022,
    category: 'Tableau',
    difficulty: 'medium',
    question: "How to combine data from multiple tables in Tableau?",
    answer: (
      <>
        <p>Tableau offers four main ways to merge data across tables:</p>
        <ul>
          <li><strong>Relationships:</strong> A dynamic logical layer that links tables based on matching fields without flattening the data (preferred method).</li>
          <li><strong>Joins:</strong> Physical combining of tables into a single table at the database level (Inner, Left, Right, Full).</li>
          <li><strong>Unions:</strong> Appends rows of one table to another (requires matching column schemas).</li>
          <li><strong>Data Blending:</strong> Merges data from separate data sources on a sheet-by-sheet basis.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28023,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are parameters in Tableau?",
    answer: (
      <>
        <p><strong>Parameters</strong> are dynamic variables that can replace constant values in calculations, filters, and reference lines. They allow end-users to input values (e.g., numeric thresholds, slider selections) to interactively adjust the dashboard calculations.</p>
      </>
    ),
  },
  {
    id: 28024,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is Tableau data engine?",
    answer: (
      <>
        <p>The <strong>Tableau Data Engine</strong> is the core system component that handles data storage and processes analytic queries. In modern versions, this is the <strong>Hyper engine</strong>, a high-performance in-memory database designed to process millions of rows in seconds.</p>
      </>
    ),
  },
  {
    id: 28025,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Define different types of filters in Tableau?",
    answer: (
      <>
        <p>Tableau includes six filters executed in a strict order: Extract Filters, Data Source Filters, Context Filters, Dimension Filters, Measure Filters, and Table Calculation Filters.</p>
      </>
    ),
  },
  {
    id: 28026,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is the difference between a live and extract connection?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Live Connection:</strong> Directly queries the database. Updates are immediate, but performance depends on the database engine.</li>
          <li><strong>Extract Connection:</strong> Imports a compressed snapshot (.hyper file) into Tableau's memory cache, resulting in fast query execution but requiring scheduled refreshes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28027,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define a dashboard?",
    answer: (
      <>
        <p>A <strong>Dashboard</strong> is a collection of several worksheets displayed together in a single view. It allows users to compare and monitor diverse visual metrics simultaneously, and supports interactive elements (actions, filters, parameters) that sync across worksheets.</p>
      </>
    ),
  },
  {
    id: 28028,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is story in Tableau?",
    answer: (
      <>
        <p>A <strong>Story</strong> is a sheet containing a sequence of worksheets or dashboards structured to walk viewers through a logical narrative, showing how data leads to specific insights.</p>
      </>
    ),
  },
  {
    id: 28029,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define a worksheet?",
    answer: (
      <>
        <p>A <strong>Worksheet</strong> is a single canvas where you drag and drop fields from the data pane onto shelves to build a specific chart, map, or visualization.</p>
      </>
    ),
  },
  {
    id: 28030,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are dual axes?",
    answer: (
      <>
        <p><strong>Dual Axes</strong> allow you to plot two separate measures in a single chart window, creating two independent parallel axes on the left and right sides of the pane. They are useful for comparing different variables (e.g., Sales as bars and Profit as a line).</p>
      </>
    ),
  },
  {
    id: 28031,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a blended axis?",
    answer: (
      <>
        <p>A <strong>Blended Axis</strong> is a layout where multiple measures share a single axis and coordinate space. You create it by dragging a second measure onto an existing axis in the view.</p>
      </>
    ),
  },
  {
    id: 28032,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain the difference between blended axis and dual axis?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Dual Axis:</strong> Creates two separate axes (left and right) with independent scales, allowing you to plot two measures with different datatypes or ranges.</li>
          <li><strong>Blended Axis:</strong> Combines multiple measures on a single shared axis, forcing all data points to share the same scale and color palette.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28033,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define groups in Tableau?",
    answer: (
      <>
        <p>A <strong>Group</strong> is a static combination of dimension members that are consolidated into a single sub-category. For example, grouping "Canada" and "USA" into a custom group named "North America".</p>
      </>
    ),
  },
  {
    id: 28034,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are sets?",
    answer: (
      <>
        <p><strong>Sets</strong> are custom fields that partition a subset of data based on specific conditions. Unlike static groups, sets can be dynamic, automatically adding or removing dimension members based on calculation rules.</p>
      </>
    ),
  },
  {
    id: 28035,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define Bins in Tableau?",
    answer: (
      <>
        <p><strong>Bins</strong> are equal-sized buckets used to partition continuous measure values into discrete intervals. Bins are commonly used to construct frequency distributions and <strong>Histograms</strong>.</p>
      </>
    ),
  },
  {
    id: 28036,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is the difference between a group and a set?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Group:</strong> Combines static members of a single dimension. Cannot have dynamic conditions and exists strictly within that dimension's hierarchy.</li>
          <li><strong>Set:</strong> A dynamic collection that can look across multiple dimensions and check criteria (e.g., Top 10 items). Sets return a boolean value (IN or OUT) and can be used in calculated fields.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28037,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is data joining vs data blending?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Data Joining:</strong> Combines tables from a single or multiple databases at the row-level, flattening the tables into a single physical table before sending queries.</li>
          <li><strong>Data Blending:</strong> Combines data from separate data sources. It queries each source independently, aggregates the results, and then blends them together on the sheet using a linking field.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28038,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is the difference between custom SQL and joining tables?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Joining Tables:</strong> Drag-and-drop joining on the canvas. It allows Tableau to optimize queries and join paths.</li>
          <li><strong>Custom SQL:</strong> Writing a raw SQL query. It bypasses Tableau's query optimizer and forces the database engine to run the custom query, which can slow down performance on large datasets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28039,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is an aggregation?",
    answer: (
      <>
        <p><strong>Aggregation</strong> is the process of summarizing row-level data values into a single value, such as <code>SUM</code>, <code>AVG</code>, <code>COUNT</code>, <code>MIN</code>, or <code>MAX</code>. By default, Tableau aggregates measures in the view.</p>
      </>
    ),
  },
  {
    id: 28040,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define disaggregation of data?",
    answer: (
      <>
        <p><strong>Disaggregation</strong> displays all individual data rows from the source table. To do this, uncheck "Aggregate Measures" under the Analysis menu, which splits summary points into individual marks.</p>
      </>
    ),
  },
  {
    id: 28041,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is the maximum number of tables you can join in Tableau?",
    answer: (
      <>
        <p>Tableau allows you to join a maximum of <strong>32 tables</strong> in a single data source connection.</p>
      </>
    ),
  },
  {
    id: 28042,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain how to calculate percentage in Tableau?",
    answer: (
      <>
        <p>You can calculate percentages in Tableau using the following methods:</p>
        <ul>
          <li><strong>Quick Table Calculations:</strong> Right-click a measure pill and select <strong>Quick Table Calculation &gt; Percent of Total</strong>.</li>
          <li><strong>Calculated Fields:</strong> Create a calculation like <code>SUM([Sales]) / TOTAL(SUM([Sales]))</code> or using LOD fixed formulas.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28043,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a Histogram in Tableau?",
    answer: (
      <>
        <p>A <strong>Histogram</strong> is a chart that displays the frequency distribution of a continuous variable. The continuous data is grouped into equal-sized bins, represented by vertical bars.</p>
      </>
    ),
  },
  {
    id: 28044,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How to load an Excel file in Tableau?",
    answer: (
      <>
        <p>To connect to Excel:</p>
        <ol>
          <li>Open Tableau and click on <strong>Microsoft Excel</strong> under the Connect pane.</li>
          <li>Navigate and select the Excel file from your computer.</li>
          <li>In the Data Source sheet, drag the sheets you want to analyze onto the canvas.</li>
        </ol>
      </>
    ),
  },
  {
    id: 28045,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is a box-plot?",
    answer: (
      <>
        <p>A <strong>Box-Plot</strong> (box-and-whisker plot) is a chart that displays the distribution of data points based on their five-number summary: Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), and Maximum, showing outliers clearly.</p>
      </>
    ),
  },
  {
    id: 28046,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is an inner join in Tableau?",
    answer: (
      <>
        <p>An <strong>Inner Join</strong> combines tables by returning rows only when there is a match on the specified join condition in both tables.</p>
      </>
    ),
  },
  {
    id: 28047,
    category: 'Tableau',
    difficulty: 'easy',
    question: "When to use inner joins?",
    answer: (
      <>
        <p>Use inner joins when you want to analyze records that have matching keys in both tables, ignoring unmatched rows (e.g., matching sales transactions with customer profiles).</p>
      </>
    ),
  },
  {
    id: 28048,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is left join in Tableau?",
    answer: (
      <>
        <p>A <strong>Left Join</strong> returns all rows from the primary (left) table and matched rows from the secondary (right) table. Unmatched right rows are displayed as <code>NULL</code>.</p>
      </>
    ),
  },
  {
    id: 28049,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Why left join is useful?",
    answer: (
      <>
        <p>Left Join ensures that no records from the primary table are discarded, even if they do not have matching data in the secondary table (e.g., retaining all customers, even those who have not made purchases).</p>
      </>
    ),
  },
  {
    id: 28050,
    category: 'Tableau',
    difficulty: 'hard',
    question: "How to optimize a dashboard performance in Tableau?",
    answer: (
      <>
        <p>You can optimize performance using these practices:</p>
        <ul>
          <li>Use <strong>Extract Connections</strong> (.hyper files) rather than Live connections.</li>
          <li>Apply Context Filters to reduce the volume of data queried.</li>
          <li>Hide all unused fields in the data pane.</li>
          <li>Avoid complex custom SQL queries and nested LOD calculations.</li>
          <li>Reduce the number of worksheets and quick filters on a single dashboard page.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28051,
    category: 'Tableau',
    difficulty: 'medium',
    question: "List down some traits to differentiate data sources.",
    answer: (
      <>
        <p>Data sources in Tableau are differentiated by several characteristics:</p>
        <ul>
          <li><strong>Format:</strong> File-based (Excel, JSON) vs Server-based (MySQL, BigQuery).</li>
          <li><strong>Connection:</strong> Live (real-time) vs Extract (local snapshot).</li>
          <li><strong>Security:</strong> OAuth authentication vs Embedded credentials.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28052,
    category: 'Tableau',
    difficulty: 'medium',
    question: "How to handle large datasets in Tableau?",
    answer: (
      <>
        <p>To analyze large datasets efficiently:</p>
        <ul>
          <li>Generate aggregated extracts to reduce the total row count.</li>
          <li>Use index columns as data source filters.</li>
          <li>Avoid using complex nested string calculations.</li>
          <li>Incorporate Action Filters instead of multiple global quick filters.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28053,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Mention some file extensions along with their uses in Tableau.",
    answer: (
      <>
        <p>Common Tableau file formats include:</p>
        <ul>
          <li><strong>.twb (Tableau Workbook):</strong> Stores the XML structure of sheets and dashboard layouts without the actual data.</li>
          <li><strong>.twbx (Tableau Packaged Workbook):</strong> A zip package containing both the workbook layout (.twb) and the data sources.</li>
          <li><strong>.hyper:</strong> High-performance columnar data extract files.</li>
          <li><strong>.tds (Tableau Data Source):</strong> Stores connection information (database paths, field names) without the data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28054,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are the four types of shelves in Tableau?",
    answer: (
      <>
        <p>The primary shelves are: <strong>Columns Shelf</strong>, <strong>Rows Shelf</strong>, <strong>Filters Shelf</strong>, and <strong>Pages Shelf</strong>.</p>
      </>
    ),
  },
  {
    id: 28055,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What products does Tableau offers?",
    answer: (
      <>
        <p>The Tableau product suite includes:</p>
        <ul>
          <li><strong>Tableau Desktop:</strong> Tool used to create visualizations and dashboards.</li>
          <li><strong>Tableau Server/Cloud:</strong> Enterprise sharing and hosting platforms.</li>
          <li><strong>Tableau Prep:</strong> Data preparation and cleaning tool.</li>
          <li><strong>Tableau Public:</strong> Free public server for sharing dashboards.</li>
          <li><strong>Tableau Reader:</strong> Free app for openingpackaged workbooks locally.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28056,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Tableau CRM?",
    answer: (
      <>
        <p><strong>Tableau CRM</strong> (formerly Einstein Analytics) is an analytical platform integrated within Salesforce. It is optimized for sales reps to view predictions and CRM insights directly inside Salesforce workflows.</p>
      </>
    ),
  },
  {
    id: 28057,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Explain the use of Tableau Catalog.",
    answer: (
      <>
        <p><strong>Tableau Catalog</strong> is part of the Data Management add-on. It provides a complete view of the data lineage, metadata, and impact analysis of external data sources, showing how source modifications affect published workbooks.</p>
      </>
    ),
  },
  {
    id: 28058,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Tableau Public?",
    answer: (
      <>
        <p><strong>Tableau Public</strong> is a free platform that allows anyone to publish interactive data visualizations to the web. Published workbooks are public and can be viewed or downloaded by other users.</p>
      </>
    ),
  },
  {
    id: 28059,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What do you understand by Tableau Prep?",
    answer: (
      <>
        <p><strong>Tableau Prep</strong> is a data preparation application used to clean, combine, and shape data. It consists of Tableau Prep Builder for creating flows, and Tableau Prep Conductor to schedule flow executions.</p>
      </>
    ),
  },
  {
    id: 28060,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Tableau desktop?",
    answer: (
      <>
        <p><strong>Tableau Desktop</strong> is the authoring application used by analysts to connect to databases, build visualizations, and design interactive dashboards and reports.</p>
      </>
    ),
  },
  {
    id: 28061,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What are some possible reasons behind the slow performance of Tableau?",
    answer: (
      <>
        <p>Common performance bottlenecks include:</p>
        <ul>
          <li>Using live connections on unindexed tables or slow databases.</li>
          <li>Having too many quick filters or worksheets on a single dashboard.</li>
          <li>Using custom SQL statements with nested query loops.</li>
          <li>Inefficient calculations (e.g., using string parsing inside LOD calculations).</li>
        </ul>
      </>
    ),
  },
  {
    id: 28062,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are groups in Tableau?",
    answer: (
      <>
        <p>A <strong>Group</strong> is a static combination of dimension members that creates a higher-level category. For example, grouping "France" and "Germany" into a custom group named "Europe".</p>
      </>
    ),
  },
  {
    id: 28063,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How to create a group?",
    answer: (
      <>
        <p>To create a group, right-click the dimension field in the Data pane and select <strong>Create &gt; Group</strong>. Then, select the members you want to group and click <strong>Group</strong>.</p>
      </>
    ),
  },
  {
    id: 28064,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is a Tableau Data Server?",
    answer: (
      <>
        <p>The <strong>Tableau Data Server</strong> is a component of Tableau Server that manages published data sources. It handles security, driver configurations, metadata, and schedules extract refreshes, allowing shared access across workbooks.</p>
      </>
    ),
  },
  {
    id: 28065,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What is the difference between a table calculation and a calculated field?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Calculated Field:</strong> Computed at the data source level. It executes queries on the database server.</li>
          <li><strong>Table Calculation:</strong> Computed locally in Tableau's cache on the filtered result set. It operates only on the columns and rows currently displayed in the view (e.g., <code>RUNNING_SUM</code>, <code>RANK</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 28066,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is data modeling in Tableau?",
    answer: (
      <>
        <p><strong>Data Modeling</strong> is the process of defining relationships between tables. Modern versions of Tableau support a two-layer model: the logical layer (using dynamic Relationships) and the physical layer (using traditional Joins and Unions).</p>
      </>
    ),
  },
  {
    id: 28067,
    category: 'Tableau',
    difficulty: 'medium',
    question: "How to perform data modeling in Tableau?",
    answer: (
      <>
        <p>Data modeling is performed on the Data Source page:</p>
        <ol>
          <li>Drag a table onto the canvas (Logical Layer).</li>
          <li>Drag a second table near the first to define a relationship (noodle connection) based on a matching key.</li>
          <li>To configure Joins, double-click a table to open the Physical Layer canvas, then drag and configure physical join tables.</li>
        </ol>
      </>
    ),
  },
  {
    id: 28068,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is data blending and why is it used?",
    answer: (
      <>
        <p><strong>Data Blending</strong> combines data from separate data sources on a single sheet. It is used when the data sources are stored in different databases and cannot be joined, or when data resides at different levels of aggregation.</p>
      </>
    ),
  },
  {
    id: 28069,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What are the limitations of data blending?",
    answer: (
      <>
        <p>Key limitations of data blending include:</p>
        <ul>
          <li>Data from the secondary source is always aggregated, which can lead to non-additive errors.</li>
          <li>Functions like <code>COUNTD</code> (count distinct) and <code>MEDIAN</code> may not work with secondary fields.</li>
          <li>It requires a common linking field present in both views.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28070,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What are the key elements of data blending?",
    answer: (
      <>
        <p>Data blending relies on three components:</p>
        <ul>
          <li><strong>Primary Data Source:</strong> The first source dragged onto the sheet (indicated by a blue checkmark).</li>
          <li><strong>Secondary Data Source:</strong> Additional source dragged onto the sheet (indicated by an orange checkmark).</li>
          <li><strong>Linking Field:</strong> The shared dimension that links the sources (indicated by a chain-link icon).</li>
        </ul>
      </>
    ),
  },
  {
    id: 28071,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is an alias in Tableau?",
    answer: (
      <>
        <p>An <strong>Alias</strong> is a custom name assigned to a dimension member value. For example, renaming "USA" to "United States" in the view without modifying the source database.</p>
      </>
    ),
  },
  {
    id: 28072,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Explain what is an overlay chart in Tableau?",
    answer: (
      <>
        <p>An <strong>Overlay Chart</strong> (often called a Blended Axis chart) places multiple measures in the same pane sharing a single axis, allowing you to overlay data points on the same scale.</p>
      </>
    ),
  },
  {
    id: 28073,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Mention a few differences between Tableau Desktop and Tableau Server.",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>Tableau Desktop:</strong> An authoring application installed on a local computer, used to build dashboards and edit calculations.</li>
          <li><strong>Tableau Server:</strong> A web-based platform used to host, share, schedule refreshes, and collaborate on dashboards published from Desktop.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28074,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How to create a dual-axis chart in Tableau?",
    answer: (
      <>
        <p>To create a dual-axis chart:</p>
        <ol>
          <li>Drag two measures onto the Rows or Columns shelf.</li>
          <li>Right-click the second measure pill and select <strong>Dual Axis</strong>.</li>
          <li>To align the scales, right-click the right axis and select <strong>Synchronize Axis</strong>.</li>
        </ol>
      </>
    ),
  },
  {
    id: 28075,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a stacked bar chart?",
    answer: (
      <>
        <p>A <strong>Stacked Bar Chart</strong> is a bar chart split into sub-segments representing different categories, displaying how categories contribute to the total bar length.</p>
      </>
    ),
  },
  {
    id: 28076,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What do you mean by context filters?",
    answer: (
      <>
        <p>A <strong>Context Filter</strong> is an independent filter that filters the dataset first, creating a temporary table in memory. All other filters on the worksheet are then processed within that subset, improving performance and accuracy.</p>
      </>
    ),
  },
  {
    id: 28077,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What are the pros and cons of using context filters?",
    answer: (
      <>
        <p>Pros and cons of context filters include:</p>
        <ul>
          <li><strong>Pros:</strong> Improves query speeds if the filter excludes 90% of the dataset. Forces other filters to evaluate relative to the context subset.</li>
          <li><strong>Cons:</strong> Building the temporary table creates database overhead. If the filter is changed frequently, it can slow down performance due to rebuilding the cache.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28078,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a line chart in Tableau?",
    answer: (
      <>
        <p>A <strong>Line Chart</strong> connects individual data points to display trends over time. It is built by dragging a date dimension to Columns and a measure to Rows.</p>
      </>
    ),
  },
  {
    id: 28079,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What are discrete and continuous fields in Tableau?",
    answer: (
      <>
        <p>These classifications determine how fields behave in the view:</p>
        <ul>
          <li><strong>Discrete Fields (Blue):</strong> Represent separate, distinct values. When dragged to shelves, they create headers and labels in the view.</li>
          <li><strong>Continuous Fields (Green):</strong> Represent infinite, unbroken ranges. When dragged to shelves, they create axes in the view.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28080,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a bubble chart?",
    answer: (
      <>
        <p>A <strong>Bubble Chart</strong> displays data points as circles in a cluster, where the size and color of each circle represent specific measures.</p>
      </>
    ),
  },
  {
    id: 28081,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is Rank Function in Tableau?",
    answer: (
      <>
        <p>The <strong>Rank</strong> function is a table calculation that assigns a numeric rank (e.g., 1, 2, 3) to values within a partition based on sorting order.</p>
      </>
    ),
  },
  {
    id: 28082,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Name some rank-related functions you can use in Tableau.",
    answer: (
      <>
        <p>Tableau includes five ranking functions:</p>
        <ul>
          <li><code>RANK()</code>: Standard rank, leaves gaps for ties (e.g., 1, 2, 2, 4).</li>
          <li><code>RANK_DENSE()</code>: Standard rank, does not leave gaps (e.g., 1, 2, 2, 3).</li>
          <li><code>RANK_MODIFIED()</code>: Returns rank where ties get the highest rank value in the group.</li>
          <li><code>RANK_UNIQUE()</code>: Assigns a unique rank to every row, even if values are identical.</li>
          <li><code>RANK_PERCENTILE()</code>: Returns the percentile rank between 0 and 1.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28083,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How can you generate latitude and longitude in Tableau?",
    answer: (
      <>
        <p>Tableau automatically generates latitude and longitude coordinates for columns containing recognized geographic names (such as Country, State, City, or Zip Code), creating geographic fields (e.g., <code>[Latitude (generated)]</code>).</p>
      </>
    ),
  },
  {
    id: 28084,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How to increase the size of a pie in Tableau?",
    answer: (
      <>
        <p>To resize a Pie Chart, click the <strong>Size</strong> card on the Marks Card panel and drag the slider, or change the view layout dropdown on the toolbar from <strong>Standard</strong> to <strong>Entire View</strong>.</p>
      </>
    ),
  },
  {
    id: 28085,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Define sets and groups.",
    answer: (
      <>
        <p><strong>Groups</strong> are static combinations of dimension members. <strong>Sets</strong> are dynamic collections that isolate a subset of records based on defined logic rules.</p>
      </>
    ),
  },
  {
    id: 28086,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is a bar-plot in Tableau?",
    answer: (
      <>
        <p>A <strong>Bar-Plot</strong> (Bar Chart) plots categorical dimensions against the lengths of a numeric measure, allowing comparison of quantities across categories.</p>
      </>
    ),
  },
  {
    id: 28087,
    category: 'Tableau',
    difficulty: 'hard',
    question: "How to create a bar code in Tableau?",
    answer: (
      <>
        <p>A Barcode Chart (or strip plot) displays data points along a single axis. To create one, change the mark type on the Marks Card from Automatic to **Tick**, drag a continuous measure to Columns, and drag a detail dimension to the Detail marks card.</p>
      </>
    ),
  },
  {
    id: 28088,
    category: 'Tableau',
    difficulty: 'easy',
    question: "Can you connect convert a string type column into a number type column?",
    answer: (
      <>
        <p><strong>Yes</strong>, you can change the datatype by clicking the datatype icon next to the field in the Data pane and selecting <strong>Number (decimal)</strong> or <strong>Number (whole)</strong>, or by creating a calculated field using <code>INT()</code> or <code>FLOAT()</code> functions.</p>
      </>
    ),
  },
  {
    id: 28089,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What are the key components of a server in Tableau?",
    answer: (
      <>
        <p>Tableau Server consists of several service components:</p>
        <ul>
          <li><strong>Gateway:</strong> Handles routing of incoming web requests.</li>
          <li><strong>Application Server:</strong> Manages web portal user sessions and permissions.</li>
          <li><strong>VizQL Server:</strong> Converts user queries into visual graphics.</li>
          <li><strong>Backgrounder:</strong> Processes background tasks (extract refreshes, subscriptions).</li>
          <li><strong>Data Engine (Hyper):</strong> Stores and queries data extracts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28090,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is the use of LOD Expression in Tableau?",
    answer: (
      <>
        <p>LOD expressions are used to calculate values at different levels of detail, helping to resolve cohort analyses, customer first purchase dates, or proportional contributions without modifying the dashboard view structure.</p>
      </>
    ),
  },
  {
    id: 28091,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How can you sort data in Tableau?",
    answer: (
      <>
        <p>You can sort data using these options:</p>
        <ul>
          <li>Use the quick sort buttons on the toolbar or hover over an axis to click the sort icon.</li>
          <li>Right-click a dimension pill in the view and select <strong>Sort</strong> to configure custom sorting options.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28092,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is forecasting in Tableau?",
    answer: (
      <>
        <p><strong>Forecasting</strong> is the process of predicting future data points based on historical patterns. Tableau uses an exponential smoothing model to project future values and add prediction intervals to time-series line charts.</p>
      </>
    ),
  },
  {
    id: 28093,
    category: 'Tableau',
    difficulty: 'easy',
    question: "How to create a forecast in Tableau?",
    answer: (
      <>
        <p>To add a forecast, navigate to the <strong>Analytics</strong> pane, drag the <strong>Forecast</strong> model into the view, and drop it onto the worksheet canvas.</p>
      </>
    ),
  },
  {
    id: 28094,
    category: 'Tableau',
    difficulty: 'medium',
    question: "Name different types of functions used in Tableau.",
    answer: (
      <>
        <p>Tableau supports several functions for building calculations:</p>
        <ul>
          <li>Number Functions (e.g., <code>ROUND</code>, <code>ABS</code>)</li>
          <li>String Functions (e.g., <code>CONTAINS</code>, <code>SPLIT</code>)</li>
          <li>Date Functions (e.g., <code>DATEADD</code>, <code>DATEDIFF</code>)</li>
          <li>Logical Functions (e.g., <code>IFNULL</code>, <code>CASE</code>)</li>
          <li>Aggregate Functions (e.g., <code>SUM</code>, <code>COUNTD</code>)</li>
          <li>Table Calculation Functions (e.g., <code>LOOKUP</code>, <code>PREVIOUS_VALUE</code>)</li>
        </ul>
      </>
    ),
  },
  {
    id: 28095,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What is Line Chart in Tableau?",
    answer: (
      <>
        <p>A Line Chart displays data points connected by line segments. It is commonly used to show trends and changes in continuous variables over time.</p>
      </>
    ),
  },
  {
    id: 28096,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What are the different types of Level of Detail?",
    answer: (
      <>
        <p>The three levels of detail expressions are: <strong>FIXED</strong>, <strong>INCLUDE</strong>, and <strong>EXCLUDE</strong>.</p>
      </>
    ),
  },
  {
    id: 28097,
    category: 'Tableau',
    difficulty: 'easy',
    question: "What are trend lines in Tableau?",
    answer: (
      <>
        <p><strong>Trend Lines</strong> are statistical reference lines added to scatter plots or line charts to display relationships between variables. They support Linear, Logarithmic, Exponential, and Polynomial fit models.</p>
      </>
    ),
  },
  {
    id: 28098,
    category: 'Tableau',
    difficulty: 'medium',
    question: "What is a Waterfall Chart?",
    answer: (
      <>
        <p>A <strong>Waterfall Chart</strong> displays a running cumulative total of positive and negative values, showing how subsequent values contribute to the final total. It is created using Gantt marks and calculated running totals.</p>
      </>
    ),
  },
  {
    id: 28099,
    category: 'Tableau',
    difficulty: 'hard',
    question: "List the elements of a Waterfall Chart.",
    answer: (
      <>
        <p>To construct a Waterfall Chart in Tableau, you need:</p>
        <ul>
          <li>Gantt Bar marks.</li>
          <li>A running total calculation on the primary measure.</li>
          <li>A size field calculation representing negative row-level values (e.g., <code>-[Measure]</code>) to draw the bars downward to fill the space.</li>
        </ul>
      </>
    ),
  },
  {
    id: 28100,
    category: 'Tableau',
    difficulty: 'hard',
    question: "What are parameter constraints?",
    answer: (
      <>
        <p><strong>Parameter Constraints</strong> define the valid inputs allowed for a parameter in Tableau. You configure them during parameter creation as: **All** (accept any value of that type), **List** (fixed options), or **Range** (minimum and maximum limits with step sizes).</p>
      </>
    ),
  }
];

import React from 'react';

export const POWER_BI_QUESTIONS = [
  {
    id: 19001,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is Power BI?",
    answer: (
      <>
        <p><strong>Power BI</strong> is a Microsoft business analytics service that provides interactive visualizations and business intelligence capabilities, enabling users to create reports and dashboards from various data sources without requiring deep technical expertise.</p>
      </>
    ),
  },
  {
    id: 19002,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Why should we use Power BI?",
    answer: (
      <>
        <p>Power BI offers real-time dashboards, easy data connectivity, rich visualizations, affordable pricing, seamless Microsoft ecosystem integration (Excel, Azure, Teams), and strong collaboration features.</p>
      </>
    ),
  },
  {
    id: 19003,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the difference between Power BI and Tableau?",
    answer: (
      <>
        <ul><li><strong>Power BI:</strong> More affordable, tightly integrated with Microsoft products, uses DAX formula language, best for Microsoft environments.</li><li><strong>Tableau:</strong> More powerful data visualization capabilities, uses VizQL, better for complex analytical workloads, higher cost.</li></ul>
      </>
    ),
  },
  {
    id: 19004,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is Power BI Desktop?",
    answer: (
      <>
        <p>A free Windows application used to connect to data sources, transform data (Power Query), build data models, and create reports locally before publishing them to Power BI Service.</p>
      </>
    ),
  },
  {
    id: 19005,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is Power Pivot?",
    answer: (
      <>
        <p>An Excel add-in and Power BI component that provides an in-memory data modeling engine (xVelocity), enabling creation of sophisticated data models and calculations using DAX formulas.</p>
      </>
    ),
  },
  {
    id: 19006,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is Power Query?",
    answer: (
      <>
        <p>A data connectivity and transformation technology (ETL tool) built into Power BI and Excel that allows connecting to hundreds of data sources, cleaning, shaping, and loading data into models.</p>
      </>
    ),
  },
  {
    id: 19007,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What do you understand by self-service business intelligence (SSBI)?",
    answer: (
      <>
        <p>SSBI enables business users (non-IT) to access, analyze, and create reports from data independently without relying on IT departments, using intuitive drag-and-drop tools like Power BI.</p>
      </>
    ),
  },
  {
    id: 19008,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the different parts of Microsoft's self-service business intelligence (SSBI) solution?",
    answer: (
      <>
        <p>Components: Power Query (data preparation), Power Pivot (data modeling), Power View (interactive visualizations), Power Map (geospatial visuals), and Power BI Service (cloud publishing).</p>
      </>
    ),
  },
  {
    id: 19009,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is DAX?",
    answer: (
      <>
        <p><strong>DAX</strong> (Data Analysis Expressions) is a formula language used in Power BI, Power Pivot, and SSAS to create custom calculations, measures, and calculated columns in data models.</p>
      </>
    ),
  },
  {
    id: 19010,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are Custom Visuals in Power BI?",
    answer: (
      <>
        <p>Visualizations created by third-party developers or organizations (using the Power BI Visuals SDK) and available from Microsoft AppSource, extending beyond built-in chart types.</p>
      </>
    ),
  },
  {
    id: 19011,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is GetData in Power BI?",
    answer: (
      <>
        <p>The entry point in Power BI Desktop for connecting to data sources. It opens a dialog listing hundreds of connectors (databases, files, web, cloud services) to import or connect data.</p>
      </>
    ),
  },
  {
    id: 19012,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the various types of refresh options provided in Power BI?",
    answer: (
      <>
        <p>Refresh types: Package Refresh (reimport data), Data Refresh (update cached data), Tile Refresh (update dashboard tiles), and Visual Container Refresh (update report visuals).</p>
      </>
    ),
  },
  {
    id: 19013,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Name the different connectivity modes available in Power BI?",
    answer: (
      <>
        <p>Connectivity modes: Import (data copied into Power BI memory), DirectQuery (live query against source), Live Connection (connects to SSAS or Power BI datasets), and Composite (mix of Import and DirectQuery).</p>
      </>
    ),
  },
  {
    id: 19014,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Explain how relationships are defined in Power BI Desktop?",
    answer: (
      <>
        <p>Relationships are defined in the Model view by connecting matching columns (keys) between tables. Power BI auto-detects them, or users can manually create them with defined cardinality (one-to-many) and cross-filter direction.</p>
      </>
    ),
  },
  {
    id: 19015,
    category: 'Power BI',
    difficulty: 'hard',
    question: "Can you have more than one functional relationship between two tables in a Power Pivot data model?",
    answer: (
      <>
        <p>No. Only one active relationship can exist between two tables at a time. Additional relationships can be created but are set as inactive, and must be activated explicitly using the USERELATIONSHIP() DAX function.</p>
      </>
    ),
  },
  {
    id: 19016,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Can you have a table in the model which does not have any relationship with other tables?",
    answer: (
      <>
        <p>Yes. Standalone (disconnected) tables are common for parameter tables, disconnected slicers, or measure tables. They function independently without impacting other table filters.</p>
      </>
    ),
  },
  {
    id: 19017,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Explain what M language is in Power BI?",
    answer: (
      <>
        <p>M (Mashup language) is the functional, case-sensitive scripting language used by Power Query Editor to define data transformation steps, written as a series of let ... in expressions.</p>
      </>
    ),
  },
  {
    id: 19018,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are content packs?",
    answer: (
      <>
        <p>Pre-built collections of dashboards, reports, and datasets from SaaS services (e.g. Salesforce, Google Analytics) that users can import into their Power BI workspace with minimal configuration.</p>
      </>
    ),
  },
  {
    id: 19019,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is the comprehensive working system of Power BI?",
    answer: (
      <>
        <p>Power BI works as: Data Sources &rarr; Power Query (ETL) &rarr; Power Pivot (Data Model) &rarr; DAX Calculations &rarr; Visualizations &rarr; Published to Power BI Service &rarr; Shared via Apps/Dashboards.</p>
      </>
    ),
  },
  {
    id: 19020,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is Visualization in Power BI?",
    answer: (
      <>
        <p>Graphical representations of data (charts, maps, tables, gauges, cards) placed on report pages that dynamically respond to filters, slicers, and cross-highlight interactions.</p>
      </>
    ),
  },
  {
    id: 19021,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Where is data stored in Power BI?",
    answer: (
      <>
        <p>Imported data is stored in the xVelocity in-memory columnar storage engine within Power BI. In the cloud, data resides in Azure Blob Storage and Azure SQL Database managed by Microsoft.</p>
      </>
    ),
  },
  {
    id: 19022,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is row-level security?",
    answer: (
      <>
        <p>Row-Level Security (RLS) restricts data access at the row level for specific users by defining DAX filter expressions on tables, ensuring users only see data they are authorized to view.</p>
      </>
    ),
  },
  {
    id: 19023,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are the different views available in Power BI Desktop?",
    answer: (
      <>
        <p>Views: Report view (build visualizations), Data view (inspect table data), and Model view (manage table relationships).</p>
      </>
    ),
  },
  {
    id: 19024,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the critical components of the Power BI toolkit?",
    answer: (
      <>
        <p>Components: Power BI Desktop, Power BI Service (cloud), Power BI Mobile apps, Power BI Gateway, Power BI Embedded, and Power BI Report Server (on-premise).</p>
      </>
    ),
  },
  {
    id: 19025,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What do you mean by the content pack?",
    answer: (
      <>
        <p>A packaged collection of pre-built dashboards, reports, and datasets that can be imported from third-party services or shared internally within an organization workspace.</p>
      </>
    ),
  },
  {
    id: 19026,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What do you mean by grouping?",
    answer: (
      <>
        <p>Grouping in Power BI combines discrete values in a visual into logical categories (e.g. grouping countries into regions), helping simplify complex visualizations.</p>
      </>
    ),
  },
  {
    id: 19027,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What is query folding in Power BI?",
    answer: (
      <>
        <p>The process where Power Query translates transformation steps into native SQL queries executed by the source database, improving performance by pushing computation to the server instead of running locally.</p>
      </>
    ),
  },
  {
    id: 19028,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is a comprehensive working system of Power BI?",
    answer: (
      <>
        <p>Power BI integrates data ingestion (GetData), transformation (Power Query), modeling (DAX), visualization (reports), and sharing (Power BI Service) into a cohesive end-to-end BI platform.</p>
      </>
    ),
  },
  {
    id: 19029,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is the maximum data limit per client for the free version of Power BI?",
    answer: (
      <>
        <p>The free version of Power BI provides <strong>1 GB</strong> of storage per user for datasets published to Power BI Service.</p>
      </>
    ),
  },
  {
    id: 19030,
    category: 'Power BI',
    difficulty: 'hard',
    question: "Explain Bidirectional Cross-Filtering in Power BI?",
    answer: (
      <>
        <p>Allows filters to propagate in both directions across a relationship (from both the one-side and many-side tables), enabling more flexible but potentially ambiguous filtering scenarios in complex models.</p>
      </>
    ),
  },
  {
    id: 19031,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the different types of gateways available in Power BI? Why would you use them?",
    answer: (
      <>
        <ul><li><strong>On-premises data gateway (Standard mode):</strong> Shared gateway for multiple users connecting to on-premise data sources.</li><li><strong>On-premises data gateway (Personal mode):</strong> Single-user gateway for individual scheduled refreshes.</li></ul>
      </>
    ),
  },
  {
    id: 19032,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Explain z-order in Power BI?",
    answer: (
      <>
        <p>Z-order controls the stacking/layering order of overlapping visual elements on a report canvas. Elements with a higher z-order appear on top of those with lower z-order values.</p>
      </>
    ),
  },
  {
    id: 19033,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is the difference between Power BI and Power BI Pro?",
    answer: (
      <>
        <ul><li><strong>Power BI Free:</strong> 1 GB storage, no sharing, no collaboration.</li><li><strong>Power BI Pro:</strong> 10 GB storage, content sharing, workspace collaboration, API access, and scheduled refresh.</li></ul>
      </>
    ),
  },
  {
    id: 19034,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What do you understand by the term responsive slicers?",
    answer: (
      <>
        <p>Slicers that automatically resize and reformat their layout (from vertical lists to horizontal tiles) based on the available space on the report canvas.</p>
      </>
    ),
  },
  {
    id: 19035,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is the meaning of the term data alerts in Power BI?",
    answer: (
      <>
        <p>Notifications configured on dashboard KPI tiles or gauge visuals that trigger emails or mobile alerts when data values exceed or fall below defined threshold limits.</p>
      </>
    ),
  },
  {
    id: 19036,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What do you understand by Power BI Designer?",
    answer: (
      <>
        <p>An early name for Power BI Desktop, the Windows client application used to author reports and data models before publishing to the Power BI Service cloud platform.</p>
      </>
    ),
  },
  {
    id: 19037,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What is the difference between Distinct() and Values() in DAX?",
    answer: (
      <>
        <ul><li><strong>DISTINCT():</strong> Returns unique values from a column, excluding BLANK.</li><li><strong>VALUES():</strong> Returns unique values including an extra BLANK row if referential integrity violations exist in relationships.</li></ul>
      </>
    ),
  },
  {
    id: 19038,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the advantages of the direct query method in Power BI?",
    answer: (
      <>
        <p>Advantages: always shows latest data without refresh scheduling, supports large datasets exceeding Power BI memory limits, and reduces storage requirements since data stays at source.</p>
      </>
    ),
  },
  {
    id: 19039,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How is the Schedule Refresh feature designed to work?",
    answer: (
      <>
        <p>Configured in Power BI Service settings, Schedule Refresh automatically refreshes imported datasets at defined intervals (up to 8x/day free, 48x/day Pro) using an on-premises gateway for local sources.</p>
      </>
    ),
  },
  {
    id: 19040,
    category: 'Power BI',
    difficulty: 'hard',
    question: "Which in-memory analytics engine does Power Pivot use?",
    answer: (
      <>
        <p>Power Pivot uses the <strong>xVelocity</strong> (VertiPaq) in-memory columnar storage engine, which compresses and stores data in RAM for extremely fast query responses on large datasets.</p>
      </>
    ),
  },
  {
    id: 19041,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are the building blocks of Power BI?",
    answer: (
      <>
        <p>Building blocks: Visualizations, Datasets, Reports, Dashboards, and Tiles.</p>
      </>
    ),
  },
  {
    id: 19042,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to connect JIRA to Power Business Intelligence?",
    answer: (
      <>
        <p>Connect via Power BI GetData &rarr; Online Services &rarr; JIRA connector, or use the JIRA REST API as a Web connector, entering JIRA cloud URL and authentication credentials.</p>
      </>
    ),
  },
  {
    id: 19043,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Name some data refresh options in Power BI?",
    answer: (
      <>
        <p>Options: Manual refresh, Scheduled refresh, Real-time streaming refresh, and Incremental refresh (Pro/Premium).</p>
      </>
    ),
  },
  {
    id: 19044,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Name different types of visualizations in Power BI.",
    answer: (
      <>
        <p>Types: Bar/Column charts, Line charts, Pie/Donut charts, Maps (filled/bubble), Scatter plots, Tables, Matrix, Cards, KPIs, Gauges, Treemaps, Waterfall charts, and Funnels.</p>
      </>
    ),
  },
  {
    id: 19045,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to use custom visual file in Power BI?",
    answer: (
      <>
        <p>Import a .pbiviz file via Visualizations pane &rarr; ellipsis (...) &rarr; Import a visual from a file &rarr; select the .pbiviz file. The custom visual then appears in the Visualizations panel.</p>
      </>
    ),
  },
  {
    id: 19046,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are some commonly used DAX functions?",
    answer: (
      <>
        <p>Functions: CALCULATE(), SUM(), SUMX(), FILTER(), ALL(), ALLEXCEPT(), RELATED(), IF(), SWITCH(), EARLIER(), DATEADD(), TOTALYTD(), and RANKX().</p>
      </>
    ),
  },
  {
    id: 19047,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the perks of using DAX?",
    answer: (
      <>
        <p>DAX enables complex time intelligence calculations, dynamic measures, row and filter context handling, and leverages the VertiPaq engine for near-instant results on millions of rows.</p>
      </>
    ),
  },
  {
    id: 19048,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Name some popular data shaping techniques.",
    answer: (
      <>
        <p>Techniques: Remove columns/rows, Filter rows, Split columns, Pivot/Unpivot columns, Merge queries, Append queries, Replace values, and Change data types.</p>
      </>
    ),
  },
  {
    id: 19049,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the use of FILTER function?",
    answer: (
      <>
        <p>FILTER() returns a subset of a table meeting specified conditions, used inside other DAX functions like CALCULATE() to apply dynamic row-level filters to calculations.</p>
      </>
    ),
  },
  {
    id: 19050,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are some commonly used tasks in Query Editor?",
    answer: (
      <>
        <p>Tasks: Remove columns, Filter rows, Rename columns, Change data types, Merge/Append queries, Split columns by delimiter, Group By, and Pivot/Unpivot.</p>
      </>
    ),
  },
  {
    id: 19051,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Difference between Data management gateway and Power BI personal gateway?",
    answer: (
      <>
        <ul><li><strong>Data Management Gateway:</strong> Enterprise-grade, supports multiple users and multiple on-premise data sources simultaneously.</li><li><strong>Personal Gateway:</strong> Individual-use only, supports a single user's scheduled refresh needs.</li></ul>
      </>
    ),
  },
  {
    id: 19052,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Highlight the difference between MSBI vs Power BI.",
    answer: (
      <>
        <ul><li><strong>MSBI:</strong> Enterprise SQL Server BI stack (SSIS, SSRS, SSAS), requires IT/developer expertise.</li><li><strong>Power BI:</strong> Self-service cloud BI tool, accessible to business users with minimal IT involvement.</li></ul>
      </>
    ),
  },
  {
    id: 19053,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Name the formats in Power BI.",
    answer: (
      <>
        <p>Formats: .pbix (Power BI Desktop file), .pbit (Power BI template), .pbiviz (custom visual), and .rdl (paginated report).</p>
      </>
    ),
  },
  {
    id: 19054,
    category: 'Power BI',
    difficulty: 'easy',
    question: "How to connect SQL server to Power BI?",
    answer: (
      <>
        <p>In Power BI Desktop: Get Data &rarr; SQL Server &rarr; enter server and database name &rarr; choose Import or DirectQuery mode &rarr; authenticate and load tables.</p>
      </>
    ),
  },
  {
    id: 19055,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What do you understand by OData feed in Power BI?",
    answer: (
      <>
        <p>OData (Open Data Protocol) is a REST-based standard for data access. Power BI can connect to any OData endpoint via Get Data &rarr; OData Feed to import structured data.</p>
      </>
    ),
  },
  {
    id: 19056,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Define Slicer in Power BI?",
    answer: (
      <>
        <p>A visual filter control on report pages that allows users to interactively filter report visuals by selecting values (date ranges, categories, checkboxes) directly on the canvas.</p>
      </>
    ),
  },
  {
    id: 19057,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is GetData?",
    answer: (
      <>
        <p>The central feature in Power BI Desktop for connecting to data sources including databases, files (Excel, CSV), cloud services, and APIs to import or directly query data.</p>
      </>
    ),
  },
  {
    id: 19058,
    category: 'Power BI',
    difficulty: 'easy',
    question: "List down some supported database sources for Power BI?",
    answer: (
      <>
        <p>Sources: SQL Server, Azure SQL, Oracle, MySQL, PostgreSQL, Snowflake, Google BigQuery, Amazon Redshift, SAP HANA, IBM Db2, and Teradata.</p>
      </>
    ),
  },
  {
    id: 19059,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the difference between SSAS and Power BI?",
    answer: (
      <>
        <ul><li><strong>SSAS:</strong> Enterprise-grade multidimensional/tabular model server requiring dedicated infrastructure and developer expertise.</li><li><strong>Power BI:</strong> Cloud-based self-service BI tool with built-in tabular engine accessible to business users.</li></ul>
      </>
    ),
  },
  {
    id: 19060,
    category: 'Power BI',
    difficulty: 'hard',
    question: "How to implement many-to-many relationships in Power BI?",
    answer: (
      <>
        <p>Use a bridge/junction table containing foreign keys from both tables, creating two one-to-many relationships through the bridge. Alternatively, Power BI Desktop supports native many-to-many cardinality (requires careful filter direction management).</p>
      </>
    ),
  },
  {
    id: 19061,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the different types of filters in Power BI Reports?",
    answer: (
      <>
        <p>Filter types: Visual-level filters (single visual), Page-level filters (all visuals on a page), Report-level filters (all pages), and Drillthrough filters (cross-page navigation filters).</p>
      </>
    ),
  },
  {
    id: 19062,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the difference between a New Measure and a New Column?",
    answer: (
      <>
        <ul><li><strong>New Measure:</strong> DAX formula evaluated dynamically in filter context at query time. Not stored as data.</li><li><strong>New Column:</strong> DAX formula evaluated row-by-row at data refresh time. Stored as data in the model.</li></ul>
      </>
    ),
  },
  {
    id: 19063,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What are the three core concepts of DAX?",
    answer: (
      <>
        <p>The three core concepts: <strong>Row Context</strong> (evaluating expressions row by row), <strong>Filter Context</strong> (filters applied from slicers/visuals), and <strong>Context Transition</strong> (converting row context to filter context via CALCULATE).</p>
      </>
    ),
  },
  {
    id: 19064,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What is the purpose of the CALCULATE function in DAX?",
    answer: (
      <>
        <p>CALCULATE() evaluates a DAX expression in a modified filter context. It is the most important DAX function, used to override, add, or remove filters: <code>CALCULATE(SUM(Sales[Amount]), Region[Name] = "West")</code></p>
      </>
    ),
  },
  {
    id: 19065,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the difference between Star Schema and Snowflake Schema?",
    answer: (
      <>
        <ul><li><strong>Star Schema:</strong> Fact table surrounded by denormalized dimension tables. Simpler, faster queries.</li><li><strong>Snowflake Schema:</strong> Dimension tables further normalized into sub-tables. Less redundancy, more joins required.</li></ul>
      </>
    ),
  },
  {
    id: 19066,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are KPIs in Power BI?",
    answer: (
      <>
        <p>Key Performance Indicators are visual metrics that compare a current value against a defined target/goal, displayed using a base measure, target value, and optional trend axis.</p>
      </>
    ),
  },
  {
    id: 19067,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is a bookmark in Power BI, and why would you use it?",
    answer: (
      <>
        <p>A bookmark captures the current state of a report page (filters, slicer selections, visual visibility). Used to create guided narratives, toggle panel visibility, and navigation buttons.</p>
      </>
    ),
  },
  {
    id: 19068,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the use of the Power BI Embedded service?",
    answer: (
      <>
        <p>Power BI Embedded allows developers to integrate Power BI reports and dashboards directly into custom applications or websites using REST APIs and JavaScript SDK, without requiring end-user Power BI licenses.</p>
      </>
    ),
  },
  {
    id: 19069,
    category: 'Power BI',
    difficulty: 'medium',
    question: "Explain the concept of Drill-through in Power BI reports.",
    answer: (
      <>
        <p>Drill-through allows users to right-click a data point in one report page and navigate to a separate detail page filtered to that specific context, enabling deep-dive analysis.</p>
      </>
    ),
  },
  {
    id: 19070,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What is the difference between an active and an inactive relationship?",
    answer: (
      <>
        <ul><li><strong>Active relationship:</strong> Used automatically by DAX calculations and visuals for filtering.</li><li><strong>Inactive relationship:</strong> Ignored by default; must be activated explicitly using the USERELATIONSHIP() function in DAX measures.</li></ul>
      </>
    ),
  },
  {
    id: 19071,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the role of the Advanced Editor in Power Query?",
    answer: (
      <>
        <p>The Advanced Editor displays and allows direct editing of the M language script underlying all Power Query transformation steps, enabling complex custom transformations not available via the UI.</p>
      </>
    ),
  },
  {
    id: 19072,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are dataflows in Power BI?",
    answer: (
      <>
        <p>Cloud-based self-service ETL tools in Power BI Service that prepare and store reusable data entities in Azure Data Lake Storage, shareable across multiple reports and workspaces.</p>
      </>
    ),
  },
  {
    id: 19073,
    category: 'Power BI',
    difficulty: 'hard',
    question: "How do you handle runtime errors or missing data values in DAX calculations?",
    answer: (
      <>
        <p>Use error-handling functions: IFERROR() to return alternate values on errors, ISBLANK() to check for blank values, and COALESCE() or IF(ISBLANK()) patterns to substitute defaults.</p>
      </>
    ),
  },
  {
    id: 19074,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What is the difference between a Dashboard and a Report in Power BI?",
    answer: (
      <>
        <ul><li><strong>Report:</strong> Multi-page, interactive canvas with full filter and drill capabilities, created in Desktop or Service.</li><li><strong>Dashboard:</strong> Single-page collection of pinned tiles from multiple reports and datasets, supports data alerts.</li></ul>
      </>
    ),
  },
  {
    id: 19075,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is row-level security (RLS) and how do you implement it?",
    answer: (
      <>
        <p>RLS restricts data rows visible to specific users. Implement by: defining roles in Power BI Desktop (Modeling &rarr; Manage Roles), writing DAX filter expressions, and assigning users to roles in Power BI Service.</p>
      </>
    ),
  },
  {
    id: 19076,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the purpose of the Performance Analyzer tool?",
    answer: (
      <>
        <p>Records and displays the rendering time of each visual and DAX query on a report page, helping identify slow visuals and optimize DAX measures or model structure.</p>
      </>
    ),
  },
  {
    id: 19077,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are parameters in Power Query, and how are they useful?",
    answer: (
      <>
        <p>Named variables in Power Query (M) that store dynamic values (e.g. file paths, server names), enabling easily configurable queries without editing M code directly.</p>
      </>
    ),
  },
  {
    id: 19078,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What do you understand by the concept of Context Transition in DAX?",
    answer: (
      <>
        <p>Context transition occurs when CALCULATE() or a measure is called inside a row context, automatically converting each current row's values into an equivalent filter context applied to the data model.</p>
      </>
    ),
  },
  {
    id: 19079,
    category: 'Power BI',
    difficulty: 'hard',
    question: "What is the difference between the sum and sumx functions in Power BI?",
    answer: (
      <>
        <ul><li><strong>SUM():</strong> Aggregates a single column directly. Simple and fast: <code>SUM(Sales[Amount])</code></li><li><strong>SUMX():</strong> Iterates over a table row by row, evaluating an expression per row before summing: <code>SUMX(Sales, Sales[Qty] * Sales[Price])</code></li></ul>
      </>
    ),
  },
  {
    id: 19080,
    category: 'Power BI',
    difficulty: 'hard',
    question: "How do you optimize a large Power BI data model for better performance?",
    answer: (
      <>
        <p>Optimizations: remove unused columns/tables, use integer keys for relationships, avoid calculated columns (prefer measures), use star schema, enable incremental refresh, and minimize bidirectional relationships.</p>
      </>
    ),
  },
  {
    id: 19081,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to define the relationships between two tables in a data model in the Power BI Desktop?",
    answer: (
      <>
        <p>In the Model view, drag the key column from one table to the matching column in the other table, then configure cardinality (e.g. One-to-Many) and cross-filter direction in the Edit Relationship dialog.</p>
      </>
    ),
  },
  {
    id: 19082,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the difference between Import and DirectQuery modes in Power BI?",
    answer: (
      <>
        <ul><li><strong>Import:</strong> Copies data into Power BI memory. Fast query performance, supports all DAX. Requires scheduled refresh.</li><li><strong>DirectQuery:</strong> Queries source at runtime. Always current data, but slower and has DAX/feature limitations.</li></ul>
      </>
    ),
  },
  {
    id: 19083,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Can I schedule data refresh for Power BI reports hosted in the cloud?",
    answer: (
      <>
        <p>Yes, using Power BI Service dataset settings. For on-premise sources, an on-premise data gateway is required. Free users get 8 refreshes/day; Pro/Premium users get up to 48 refreshes/day.</p>
      </>
    ),
  },
  {
    id: 19084,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How can I use Power BI with real-time data sources?",
    answer: (
      <>
        <p>Use Streaming Datasets in Power BI Service (via REST API or Azure Stream Analytics push), or use DirectQuery against real-time databases like Azure SQL with auto page refresh enabled.</p>
      </>
    ),
  },
  {
    id: 19085,
    category: 'Power BI',
    difficulty: 'easy',
    question: "What are the options for sharing Power BI reports with others?",
    answer: (
      <>
        <p>Options: Publish to Power BI Service and share links, embed in SharePoint Online, publish to web (public), export as PDF/PowerPoint, use Power BI Apps, or embed in Teams.</p>
      </>
    ),
  },
  {
    id: 19086,
    category: 'Power BI',
    difficulty: 'hard',
    question: "How can I create custom functions in Power BI?",
    answer: (
      <>
        <p>In Power Query, create a query with parameters, then right-click it and select 'Create Function'. The function can then be called from other queries, applying transformations dynamically.</p>
      </>
    ),
  },
  {
    id: 19087,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the differences between Power BI Desktop and Power BI Service?",
    answer: (
      <>
        <ul><li><strong>Power BI Desktop:</strong> Free Windows app for building reports and models locally.</li><li><strong>Power BI Service:</strong> Cloud platform (app.powerbi.com) for publishing, sharing, collaboration, and scheduling refreshes.</li></ul>
      </>
    ),
  },
  {
    id: 19088,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to create a KPI in Power BI?",
    answer: (
      <>
        <p>Add the KPI visual to the canvas, then configure: Value (base measure), Target (goal measure), and Trend axis (date column). Format color thresholds for above/below target states.</p>
      </>
    ),
  },
  {
    id: 19089,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to create a Power BI template?",
    answer: (
      <>
        <p>In Power BI Desktop, go to File &rarr; Export &rarr; Power BI Template. Add a description, then save the .pbit file. Templates contain the report structure and data model but not the data itself.</p>
      </>
    ),
  },
  {
    id: 19090,
    category: 'Power BI',
    difficulty: 'hard',
    question: "How to use Power BI with Python or R?",
    answer: (
      <>
        <p>Enable Python/R scripting in Power BI options, then use Script Visual to render Python/R plots, or use Python/R Script as a data source step in Power Query for advanced data processing.</p>
      </>
    ),
  },
  {
    id: 19091,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How fact table can be used in Data Modelling?",
    answer: (
      <>
        <p>Fact tables store measurable transactional data (sales amounts, quantities) with foreign keys linking to dimension tables. In Power BI star schema, the fact table sits at the center of all dimension relationships.</p>
      </>
    ),
  },
  {
    id: 19092,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is snowflake schema?",
    answer: (
      <>
        <p>A data warehouse schema where dimension tables are normalized into multiple related sub-dimension tables, reducing redundancy but requiring more joins compared to a star schema.</p>
      </>
    ),
  },
  {
    id: 19093,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What do you understand by paginated reports?",
    answer: (
      <>
        <p>Pixel-perfect, printable reports designed for multi-page output with precise layouts, created using Power BI Report Builder (.rdl format), ideal for invoices, financial statements, and regulatory documents.</p>
      </>
    ),
  },
  {
    id: 19094,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What are the key characteristics of paginated reports?",
    answer: (
      <>
        <p>Characteristics: fixed-layout formatting, support for thousands of pages, parameters for filtering, export to PDF/Excel/Word, header/footer support, and subreports.</p>
      </>
    ),
  },
  {
    id: 19095,
    category: 'Power BI',
    difficulty: 'easy',
    question: "Briefly explain what is one-to-many relationship?",
    answer: (
      <>
        <p>A relationship where one row in the primary (one-side) table relates to multiple rows in the related (many-side) table, e.g. one Customer can have many Orders.</p>
      </>
    ),
  },
  {
    id: 19096,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is the main difference between Filter and Slicer?",
    answer: (
      <>
        <ul><li><strong>Filter:</strong> Applied via the Filters pane, not directly visible on the report canvas to end users.</li><li><strong>Slicer:</strong> A visible, interactive visual control on the canvas that users can interact with directly.</li></ul>
      </>
    ),
  },
  {
    id: 19097,
    category: 'Power BI',
    difficulty: 'medium',
    question: "How to draw a comparison between Target and Actual value from a Power BI report?",
    answer: (
      <>
        <p>Use KPI visuals, Gauge charts, or a combination line and clustered column chart, placing Actual values in one series and Target values in another for side-by-side comparison with conditional formatting.</p>
      </>
    ),
  },
  {
    id: 19098,
    category: 'Power BI',
    difficulty: 'hard',
    question: "Can you create multiple dynamic connections between two tables?",
    answer: (
      <>
        <p>Only one active relationship can exist between two tables. Additional relationships can be added as inactive and selectively activated within DAX measures using USERELATIONSHIP() inside CALCULATE().</p>
      </>
    ),
  },
  {
    id: 19099,
    category: 'Power BI',
    difficulty: 'hard',
    question: "Explain why TOP N is not accessible for the Page & Report Level Filter?",
    answer: (
      <>
        <p>TOP N filtering requires a measure value for ranking, which depends on the visual-level context. Page and Report level filters lack a specific measure context, making TOP N filtering inapplicable at those scopes.</p>
      </>
    ),
  },
  {
    id: 19100,
    category: 'Power BI',
    difficulty: 'medium',
    question: "What is a collect function?",
    answer: (
      <>
        <p>In Power BI DAX context, COLLECTRESULTS or similar aggregation patterns gather values from row iterations. In Power Apps/Power Automate integration, Collect() gathers records into a collection variable for later use.</p>
      </>
    ),
  },
];

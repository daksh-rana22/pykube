import React from 'react';

export const EXCEL_QUESTIONS = [
  {
    id: 5001,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is Microsoft Excel?",
    answer: (
      <>
        <p><strong>Microsoft Excel</strong> is a powerful spreadsheet application developed by Microsoft. It is widely used for data analysis, mathematical modeling, budgeting, financial reporting, and organizing data in tabular format using rows and columns.</p>
      </>
    ),
  },
  {
    id: 5002,
    category: 'Excel',
    difficulty: 'easy',
    question: "What do you mean by cells in Excel?",
    answer: (
      <>
        <p>A <strong>Cell</strong> is the basic unit of a worksheet where data is entered. It is formed by the intersection of a vertical column and a horizontal row. Each cell can contain text, numbers, formulas, or formatting.</p>
      </>
    ),
  },
  {
    id: 5003,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is a cell address?",
    answer: (
      <>
        <p>A <strong>Cell Address</strong> (or cell reference) identifies the unique location of a cell. It is formed by combining the column letter and the row number. For example, cell <code>B5</code> is located at the intersection of column B and row 5.</p>
      </>
    ),
  },
  {
    id: 5004,
    category: 'Excel',
    difficulty: 'easy',
    question: "How can you add cells, rows or columns in Excel?",
    answer: (
      <>
        <p>You can insert them using these methods:</p>
                <ul>
                  <li><strong>Using the Right-click menu:</strong> Right-click a cell, row number, or column letter, select <strong>Insert</strong>, and choose where to shift cells.</li>
                  <li><strong>Using the Ribbon:</strong> Go to the <strong>Home</strong> tab &gt; <strong>Cells</strong> group &gt; click the <strong>Insert</strong> dropdown and select Insert Cells, Insert Sheet Rows, or Insert Sheet Columns.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5005,
    category: 'Excel',
    difficulty: 'easy',
    question: "How would you format a cell? What are the options?",
    answer: (
      <>
        <p>To format a cell, right-click and select <strong>Format Cells</strong> (or press <code>Ctrl + 1</code>). Available options include:</p>
                <ul>
                  <li><strong>Number:</strong> Set number formats (Currency, Date, Percentage).</li>
                  <li><strong>Alignment:</strong> Adjust text orientation and text wrapping.</li>
                  <li><strong>Font:</strong> Choose typeface, size, color, and styles.</li>
                  <li><strong>Border:</strong> Add outlines and grids.</li>
                  <li><strong>Fill:</strong> Set background cell background colors.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5006,
    category: 'Excel',
    difficulty: 'easy',
    question: "What does the red triangle indicate at the top right hand corner of the cell?",
    answer: (
      <>
        <p>A red triangle in the upper right corner of a cell indicates that a **Note** or **Comment** is attached to that cell. Hovering your mouse cursor over the cell will display the text comment.</p>
      </>
    ),
  },
  {
    id: 5007,
    category: 'Excel',
    difficulty: 'easy',
    question: "How would you add comments to a cell?",
    answer: (
      <>
        <p>You can add a comment by right-clicking the target cell and selecting <strong>New Comment</strong> (threaded conversations) or <strong>New Note</strong> (static text note). Alternatively, you can use the keyboard shortcut <code>Shift + F2</code>.</p>
      </>
    ),
  },
  {
    id: 5008,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is Freeze Panes in MS-Excel?",
    answer: (
      <>
        <p><strong>Freeze Panes</strong> is a feature that keeps specific rows or columns visible while scrolling through the rest of the worksheet. It is useful for keeping header rows or ID columns in view when navigating large datasets.</p>
      </>
    ),
  },
  {
    id: 5009,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is Ribbon?",
    answer: (
      <>
        <p>The <strong>Ribbon</strong> is the user interface strip at the top of the Excel window. It organizes Excel command features into tabs (e.g. Home, Insert, Page Layout, Formulas, Data) which contain groups of related options.</p>
      </>
    ),
  },
  {
    id: 5010,
    category: 'Excel',
    difficulty: 'medium',
    question: "What are the several report formats in Excel?",
    answer: (
      <>
        <p>Common report layouts and file formats in Excel include:</p>
                <ul>
                  <li><strong>Excel Workbook:</strong> Standard format (<code>.xlsx</code>).</li>
                  <li><strong>Excel Macro-Enabled Workbook:</strong> For sheets containing VBA macros (<code>.xlsm</code>).</li>
                  <li><strong>Excel Binary Workbook:</strong> Highly compressed binary layout that loads faster (<code>.xlsb</code>).</li>
                  <li><strong>PDF document:</strong> For distribution (read-only print format).</li>
                </ul>
      </>
    ),
  },
  {
    id: 5011,
    category: 'Excel',
    difficulty: 'hard',
    question: "Is it possible to make Pivot table using multiple sources of data?",
    answer: (
      <>
        <p>Yes. You can create a Pivot Table from multiple tables by using the **Excel Data Model**. When inserting the Pivot Table, check the box that says <strong>"Add this data to the Data Model"</strong>. This allows you to define relationships between tables (like SQL joins) and combine fields in a single Pivot Table.</p>
      </>
    ),
  },
  {
    id: 5012,
    category: 'Excel',
    difficulty: 'easy',
    question: "What does the IF function in Excel?",
    answer: (
      <>
        <p>The <code>IF</code> function performs a logical test and returns one value if the test is TRUE, and another value if it is FALSE.</p>
                <p>Syntax: <code>=IF(logical_test, value_if_true, value_if_false)</code></p>
                <p>Example: <code>=IF(A1 &gt;= 50, "Pass", "Fail")</code></p>
      </>
    ),
  },
  {
    id: 5013,
    category: 'Excel',
    difficulty: 'medium',
    question: "Can you protect workbooks in Excel?",
    answer: (
      <>
        <p>Yes. You can protect workbooks at two levels:</p>
                <ul>
                  <li><strong>Workbook Structure Protection:</strong> Prevents users from adding, deleting, renaming, or moving sheets (Home &gt; Review &gt; Protect Workbook).</li>
                  <li><strong>File Encryption:</strong> Restricts access by requiring a password to open the file (File &gt; Info &gt; Protect Workbook &gt; Encrypt with Password).</li>
                </ul>
      </>
    ),
  },
  {
    id: 5014,
    category: 'Excel',
    difficulty: 'medium',
    question: "How do you apply a single format to all the sheets present in a workbook?",
    answer: (
      <>
        <p>To format all sheets simultaneously:</p>
                <ol>
                  <li>Right-click any sheet tab and select <strong>Select All Sheets</strong>.</li>
                  <li>Perform formatting actions (e.g. font size, row heights) on the active sheet.</li>
                  <li>The changes will automatically apply to all sheets in the group.</li>
                  <li>Right-click and select <strong>Ungroup Sheets</strong> when finished.</li>
                </ol>
      </>
    ),
  },
  {
    id: 5015,
    category: 'Excel',
    difficulty: 'medium',
    question: "How do you create Named Ranges?",
    answer: (
      <>
        <p>To create a Named Range:</p>
                <ol>
                  <li>Select the cell or range of cells.</li>
                  <li>Type the desired name in the <strong>Name Box</strong> (located to the left of the formula bar).</li>
                  <li>Press <code>Enter</code>.</li>
                </ol>
      </>
    ),
  },
  {
    id: 5016,
    category: 'Excel',
    difficulty: 'easy',
    question: "How can you resize the column?",
    answer: (
      <>
        <p>Resize columns by dragging the border line on the right side of the column header, or double-clicking the column divider to **AutoFit** the width to the longest cell value.</p>
      </>
    ),
  },
  {
    id: 5017,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the quick way to return to a particular area of a worksheet?",
    answer: (
      <>
        <p>You can quickly navigate using the <strong>Go To</strong> dialog box (press <code>F5</code> or <code>Ctrl + G</code>), type the cell reference (e.g., <code>Z100</code>) or select a Named Range, and press Enter.</p>
      </>
    ),
  },
  {
    id: 5018,
    category: 'Excel',
    difficulty: 'easy',
    question: "How cell reference is useful in the calculation?",
    answer: (
      <>
        <p>Cell references are vital because they allow formulas to dynamically update. If a formula refers to cell <code>A1</code>, updating the value in <code>A1</code> automatically recalculates all dependent formulas without needing manual updates.</p>
      </>
    ),
  },
  {
    id: 5019,
    category: 'Excel',
    difficulty: 'medium',
    question: "How a worksheet protected from getting copied?",
    answer: (
      <>
        <p>While you cannot fully block copying if the file is open, you can restrict modifications by protecting the sheet (Review &gt; Protect Sheet) and disabling selection of locked cells. Saving the sheet as a read-only PDF is also an effective barrier.</p>
      </>
    ),
  },
  {
    id: 5020,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the function of Slicer in Excel?",
    answer: (
      <>
        <p>A <strong>Slicer</strong> is an interactive visual filtering tool used with PivotTables and Excel Tables. It displays clickable buttons that allow users to filter table data instantly, making dashboard reporting user-friendly.</p>
      </>
    ),
  },
  {
    id: 5021,
    category: 'Excel',
    difficulty: 'medium',
    question: "What are the various types of references in Excel?",
    answer: (
      <>
        <p>The three reference modes are:</p>
                <ul>
                  <li><strong>Relative Reference (A1):</strong> Adjusts automatically when copied to other cells.</li>
                  <li><strong>Absolute Reference ($A$1):</strong> Locks column and row, remaining constant when copied.</li>
                  <li><strong>Mixed Reference ($A1 or A$1):</strong> Locks either the column or row while keeping the other relative.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5022,
    category: 'Excel',
    difficulty: 'easy',
    question: "How can you remove duplicates in Excel?",
    answer: (
      <>
        <p>Select your table range, go to the <strong>Data</strong> tab &gt; <strong>Data Tools</strong> group &gt; click <strong>Remove Duplicates</strong>, select which columns to scan, and click OK.</p>
      </>
    ),
  },
  {
    id: 5023,
    category: 'Excel',
    difficulty: 'medium',
    question: "How can you protect cells in Excel?",
    answer: (
      <>
        <p>To protect cells:</p>
                <ol>
                  <li>Select cells to unlock, open Format Cells (Ctrl + 1), go to the **Protection** tab, and uncheck **Locked**.</li>
                  <li>Go to the **Review** tab and select **Protect Sheet** (setting a password).</li>
                  <li>Only locked cells will be protected from editing.</li>
                </ol>
      </>
    ),
  },
  {
    id: 5024,
    category: 'Excel',
    difficulty: 'easy',
    question: "How can you apply conditional formatting in Excel?",
    answer: (
      <>
        <p>Select your cells, go to the <strong>Home</strong> tab &gt; <strong>Conditional Formatting</strong>, choose a rule (e.g. Highlight cells, Color scales), define the values/colors, and click OK.</p>
      </>
    ),
  },
  {
    id: 5025,
    category: 'Excel',
    difficulty: 'easy',
    question: "How do you create a chart/graph in Excel?",
    answer: (
      <>
        <p>Select your data range, go to the <strong>Insert</strong> tab, select a chart type (e.g. Column, Line, Pie) from the Charts group, and customize it using Chart Design tools.</p>
      </>
    ),
  },
  {
    id: 5026,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is a PivotTable in Excel?",
    answer: (
      <>
        <p>A <strong>PivotTable</strong> is an interactive data summarization tool that lets you group, aggregate, filter, and pivot large transaction lists into structured summary tables.</p>
      </>
    ),
  },
  {
    id: 5027,
    category: 'Excel',
    difficulty: 'easy',
    question: "What are functions in Excel?",
    answer: (
      <>
        <p>Functions are pre-programmed formulas built into Excel to perform specific calculations (e.g. <code>SUM</code>, <code>VLOOKUP</code>, <code>AVERAGE</code>).</p>
      </>
    ),
  },
  {
    id: 5028,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the difference between COUNT and COUNTA functions in Excel?",
    answer: (
      <>
        <p>The differences are:</p>
                <ul>
                  <li><code>COUNT</code>: Counts only cells containing numerical values.</li>
                  <li><code>COUNTA</code>: Counts all non-empty cells (containing numbers, text, or errors).</li>
                </ul>
      </>
    ),
  },
  {
    id: 5029,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the SUMIF function used for?",
    answer: (
      <>
        <p>The <code>SUMIF</code> function adds values in a range that meet a specified criteria.</p>
                <p>Example: <code>=SUMIF(A1:A10, "Sales", B1:B10)</code> adds values in B where A contains "Sales".</p>
      </>
    ),
  },
  {
    id: 5030,
    category: 'Excel',
    difficulty: 'easy',
    question: "How function is different from the formula in Microsoft Excel?",
    answer: (
      <>
        <p>Definitions:</p>
                <ul>
                  <li><strong>Formula:</strong> A custom expression written by the user (e.g. <code>=A1+B1</code>).</li>
                  <li><strong>Function:</strong> A built-in calculation routine provided by Excel (e.g. <code>=SUM(A1:B1)</code>).</li>
                </ul>
      </>
    ),
  },
  {
    id: 5031,
    category: 'Excel',
    difficulty: 'medium',
    question: "what are the different kinds of errors in MS Excel?",
    answer: (
      <>
        <p>Common cell errors include:</p>
                <ul>
                  <li><code>#DIV/0!</code> - Division by zero.</li>
                  <li><code>#N/A</code> - Value is not available (common in VLOOKUP search failures).</li>
                  <li><code>#REF!</code> - Invalid cell reference (e.g., deleted row).</li>
                  <li><code>#VALUE!</code> - Mismatched data types in calculations.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5032,
    category: 'Excel',
    difficulty: 'easy',
    question: "Specify the name of the function to insert the current time and date in Microsoft Excel?",
    answer: (
      <>
        <p>Use the <code>NOW()</code> function to return both the current date and time. Use <code>TODAY()</code> for just the current date.</p>
      </>
    ),
  },
  {
    id: 5033,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to merge the cell in Excel?",
    answer: (
      <>
        <p>Select the cells, go to the <strong>Home</strong> tab &gt; click the <strong>Merge & Center</strong> button (or select from its dropdown options).</p>
      </>
    ),
  },
  {
    id: 5034,
    category: 'Excel',
    difficulty: 'medium',
    question: "Mention different data formats available in Microsoft Excel.",
    answer: (
      <>
        <p>Data formats include: General, Number, Currency, Accounting, Short/Long Date, Time, Percentage, Fraction, Scientific, and Text.</p>
      </>
    ),
  },
  {
    id: 5035,
    category: 'Excel',
    difficulty: 'medium',
    question: "Name the various logical functions used in excel.",
    answer: (
      <>
        <p>Common logical functions are: <code>AND</code>, <code>OR</code>, <code>NOT</code>, <code>IF</code>, <code>IFS</code>, <code>XOR</code>, and <code>IFERROR</code>.</p>
      </>
    ),
  },
  {
    id: 5036,
    category: 'Excel',
    difficulty: 'hard',
    question: "Explain two different macro languages used in the Microsoft Excel.",
    answer: (
      <>
        <p>Languages used for automation:</p>
                <ul>
                  <li><strong>VBA (Visual Basic for Applications):</strong> The legacy, powerful scripting language built into desktop Excel.</li>
                  <li><strong>Office Scripts (TypeScript):</strong> The modern language used for cloud/web automation and Power Automate integration.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5037,
    category: 'Excel',
    difficulty: 'medium',
    question: "What are wildcards in Microsoft Excel?",
    answer: (
      <>
        <p>Wildcards are special characters used in searches and filters:</p>
                <ul>
                  <li><code>*</code> (asterisk) - Represents any number of characters.</li>
                  <li><code>?</code> (question mark) - Represents a single character.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5038,
    category: 'Excel',
    difficulty: 'medium',
    question: "How to apply the same formatting to multiple excel sheets?",
    answer: (
      <>
        <p>Group the sheets by selecting sheet tabs while holding the <code>Ctrl</code> or <code>Shift</code> key. Formatting actions made on the active sheet will reflect across all grouped sheets.</p>
      </>
    ),
  },
  {
    id: 5039,
    category: 'Excel',
    difficulty: 'hard',
    question: "Explain the function of INDEX MATCH work in Microsoft Excel?",
    answer: (
      <>
        <p><strong>INDEX-MATCH</strong> is a lookup combo. <code>MATCH</code> finds the row index of a value, and <code>INDEX</code> retrieves the value at that row index in another column. It is superior to VLOOKUP because it can search left and handles row insertions safely.</p>
      </>
    ),
  },
  {
    id: 5040,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to convert an excel file into a pdf file?",
    answer: (
      <>
        <p>Go to <strong>File</strong> &gt; <strong>Save As</strong> (or <strong>Export</strong>) &gt; select <strong>PDF (*.pdf)</strong> from the save file type dropdown list and click Save.</p>
      </>
    ),
  },
  {
    id: 5041,
    category: 'Excel',
    difficulty: 'easy',
    question: "How do you insert a new worksheet in Excel?",
    answer: (
      <>
        <p>Click the <strong>"+"</strong> button next to sheet tabs, or press the shortcut keys <code>Shift + F11</code>.</p>
      </>
    ),
  },
  {
    id: 5042,
    category: 'Excel',
    difficulty: 'easy',
    question: "How do you freeze panes in Excel?",
    answer: (
      <>
        <p>Go to the <strong>View</strong> tab &gt; <strong>Freeze Panes</strong> dropdown group &gt; select Freeze Panes, Freeze Top Row, or Freeze First Column.</p>
      </>
    ),
  },
  {
    id: 5043,
    category: 'Excel',
    difficulty: 'easy',
    question: "How do you protect a worksheet in Excel?",
    answer: (
      <>
        <p>Go to the <strong>Review</strong> tab &gt; click <strong>Protect Sheet</strong> &gt; set your password/privileges and click OK.</p>
      </>
    ),
  },
  {
    id: 5044,
    category: 'Excel',
    difficulty: 'medium',
    question: "How to build named ranges in Excel?",
    answer: (
      <>
        <p>Select your target range, click the Name Box left of the formula bar, type a unique name, and press Enter.</p>
      </>
    ),
  },
  {
    id: 5045,
    category: 'Excel',
    difficulty: 'hard',
    question: "Explain what do you mean by a variant data type?",
    answer: (
      <>
        <p>In Excel VBA, a <strong>Variant</strong> is a special data type that can hold any type of data (numbers, strings, dates, arrays) dynamically. It uses more memory but is highly flexible.</p>
      </>
    ),
  },
  {
    id: 5046,
    category: 'Excel',
    difficulty: 'easy',
    question: "Explain what is the meaning of \u201crelative cell address.\u201d",
    answer: (
      <>
        <p>A relative address (e.g. <code>A1</code>) represents a reference that changes relative to the direction when copied or dragged to other cells.</p>
      </>
    ),
  },
  {
    id: 5047,
    category: 'Excel',
    difficulty: 'easy',
    question: "what is the use of relative cell address?",
    answer: (
      <>
        <p>It allows developers to write a single formula (e.g. row multiplication) and drag it down an entire column, automatically calculating relative cells per row.</p>
      </>
    ),
  },
  {
    id: 5048,
    category: 'Excel',
    difficulty: 'medium',
    question: "Where is the code window in VBA located?",
    answer: (
      <>
        <p>Open the Visual Basic Editor (press <code>Alt + F11</code>), and double-click a sheet or module in the left project pane to open its code execution window.</p>
      </>
    ),
  },
  {
    id: 5049,
    category: 'Excel',
    difficulty: 'hard',
    question: "Mention three core modules in VBA.",
    answer: (
      <>
        <p>Core elements include: <strong>Standard Modules</strong> (general macros), <strong>Class Modules</strong> (custom objects), and <strong>Sheet/Workbook Modules</strong> (event-driven scripts).</p>
      </>
    ),
  },
  {
    id: 5050,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the purpose of Flash Fill in Microsoft Excel?",
    answer: (
      <>
        <p><strong>Flash Fill</strong> automatically detects patterns in data entry and fills the remaining rows (e.g. split full names into First and Last names) without requiring formulas.</p>
      </>
    ),
  },
  {
    id: 5051,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is a NameBox in Microsoft Excel?",
    answer: (
      <>
        <p>The <strong>Name Box</strong> is the input area to the left of the formula bar. It displays the active cell coordinates and allows users to quickly define Named Ranges.</p>
      </>
    ),
  },
  {
    id: 5052,
    category: 'Excel',
    difficulty: 'medium',
    question: "How can you perform a what-if analysis in the spreadsheet?",
    answer: (
      <>
        <p>Perform What-If analyses using tools located in the <strong>Data</strong> tab &gt; <strong>What-If Analysis</strong> group: <strong>Scenario Manager</strong>, <strong>Goal Seek</strong>, and <strong>Data Tables</strong>.</p>
      </>
    ),
  },
  {
    id: 5053,
    category: 'Excel',
    difficulty: 'easy',
    question: "What do the AND and OR functions do in Excel?",
    answer: (
      <>
        <p>Logical operations:</p>
                <ul>
                  <li><code>AND</code>: Returns TRUE if all logical tests are true.</li>
                  <li><code>OR</code>: Returns TRUE if at least one logical test is true.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5054,
    category: 'Excel',
    difficulty: 'medium',
    question: "What function in Excel can you use to determine whether a day is a weekday?",
    answer: (
      <>
        <p>Use the <code>WEEKDAY()</code> function. It returns a number (1-7) representing the day of the week, which can be evaluated to check if it represents a Saturday or Sunday.</p>
      </>
    ),
  },
  {
    id: 5055,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to outline a group of cells in Microsoft Excel?",
    answer: (
      <>
        <p>Select your cell range, go to the <strong>Data</strong> tab &gt; click the <strong>Group</strong> button in the Outline group to create collapsible summary rows or columns.</p>
      </>
    ),
  },
  {
    id: 5056,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to lock cell references in a formula?",
    answer: (
      <>
        <p>Add dollar signs (<code>$</code>) manually, or highlight the cell reference in the formula bar and press the <code>F4</code> key to cycle absolute locking modes.</p>
      </>
    ),
  },
  {
    id: 5057,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the significance of the SUBTOTAL function?",
    answer: (
      <>
        <p>The <code>SUBTOTAL</code> function calculates aggregations (like SUM, AVERAGE) while automatically ignoring rows hidden by active filters, preventing double-counting.</p>
      </>
    ),
  },
  {
    id: 5058,
    category: 'Excel',
    difficulty: 'medium',
    question: "Why use cross-tabulation in excel?",
    answer: (
      <>
        <p>Cross-tabulation (using PivotTables) simplifies multivariate analyses by showing frequencies and summaries across intersecting rows and columns.</p>
      </>
    ),
  },
  {
    id: 5059,
    category: 'Excel',
    difficulty: 'easy',
    question: "How would you add notes to a cell in Microsoft Excel?",
    answer: (
      <>
        <p>Right-click the cell, select <strong>New Note</strong>, type your text, and click outside the note boundary.</p>
      </>
    ),
  },
  {
    id: 5060,
    category: 'Excel',
    difficulty: 'hard',
    question: "How many cells are in Microsoft Excel?",
    answer: (
      <>
        <p>An Excel sheet has 1,048,576 rows and 16,384 columns, yielding a total of **17,179,869,184 cells**.</p>
      </>
    ),
  },
  {
    id: 5061,
    category: 'Excel',
    difficulty: 'easy',
    question: "Can we create shortcuts to Microsoft Excel functions?",
    answer: (
      <>
        <p>Yes. You can assign custom keyboard shortcuts by recording macro routines and setting macro execution shortcut keys.</p>
      </>
    ),
  },
  {
    id: 5062,
    category: 'Excel',
    difficulty: 'easy',
    question: "Explain the difference between absolute and relative cell references.",
    answer: (
      <>
        <p>Absolute references remain completely static when formulas are copied. Relative references shift position based on copy offsets.</p>
      </>
    ),
  },
  {
    id: 5063,
    category: 'Excel',
    difficulty: 'easy',
    question: "How do you split merged cells in Excel?",
    answer: (
      <>
        <p>Select the merged cell and click the <strong>Merge & Center</strong> button on the Home tab again to toggle it off.</p>
      </>
    ),
  },
  {
    id: 5064,
    category: 'Excel',
    difficulty: 'medium',
    question: "How do you format the axis labels in a chart?",
    answer: (
      <>
        <p>Right-click the chart axis, select <strong>Format Axis...</strong>, and modify the numbers, scale, and font sizes in the side panel.</p>
      </>
    ),
  },
  {
    id: 5065,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the TRIM function in Excel?",
    answer: (
      <>
        <p>The <code>TRIM()</code> function strips out all extra spaces from a string, leaving only single spaces between words.</p>
      </>
    ),
  },
  {
    id: 5066,
    category: 'Excel',
    difficulty: 'medium',
    question: "Explain the difference between a clustered column chart and a stacked column chart in Excel.",
    answer: (
      <>
        <p>Clustered columns display bars side-by-side. Stacked columns stack bars on top of each other to show cumulative parts.</p>
      </>
    ),
  },
  {
    id: 5067,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to find the largest value in a range of cells in Excel.",
    answer: (
      <>
        <p>Use the <code>MAX()</code> function (e.g. <code>=MAX(A1:A100)</code>).</p>
      </>
    ),
  },
  {
    id: 5068,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the difference between a column chart and a bar chart in Excel.",
    answer: (
      <>
        <p>Column charts show vertical bars. Bar charts show horizontal bars.</p>
      </>
    ),
  },
  {
    id: 5069,
    category: 'Excel',
    difficulty: 'medium',
    question: "How to protect specific cells in an Excel worksheet from being modified?",
    answer: (
      <>
        <p>Unlock the editable cells in Format Cells &gt; Protection, then protect the worksheet using Review &gt; Protect Sheet.</p>
      </>
    ),
  },
  {
    id: 5070,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the AVERAGE function in Excel and how is it used?",
    answer: (
      <>
        <p>Calculates the mathematical mean of a range (e.g. <code>=AVERAGE(A1:A10)</code>).</p>
      </>
    ),
  },
  {
    id: 5071,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to eliminate leading, trailing, or double spaces in a text in Microsoft Excel?",
    answer: (
      <>
        <p>Wrap the text reference inside the <code>TRIM()</code> function.</p>
      </>
    ),
  },
  {
    id: 5072,
    category: 'Excel',
    difficulty: 'easy',
    question: "What are the most useful keyboard shortcuts you use in Microsoft Excel?",
    answer: (
      <>
        <p>Keyboard shortcuts: <code>Ctrl + C/V</code> (copy/paste), <code>F4</code> (absolute reference), <code>Ctrl + Z</code> (undo), and <code>Ctrl + arrow keys</code> (navigate range edges).</p>
      </>
    ),
  },
  {
    id: 5073,
    category: 'Excel',
    difficulty: 'easy',
    question: "Specify the shortcut for spell check in Excel?",
    answer: (
      <>
        <p>Press the <code>F7</code> key to launch the spell check tool.</p>
      </>
    ),
  },
  {
    id: 5074,
    category: 'Excel',
    difficulty: 'medium',
    question: "How to group dates in Pivot Tables in Excel?",
    answer: (
      <>
        <p>Right-click any date cell inside the Pivot Table, select <strong>Group...</strong>, and choose Months, Quarters, or Years.</p>
      </>
    ),
  },
  {
    id: 5075,
    category: 'Excel',
    difficulty: 'medium',
    question: "When you should use a Waterfall chart?",
    answer: (
      <>
        <p>Use a Waterfall chart to show how a starting value transitions to a ending value after applying sequential positive and negative changes.</p>
      </>
    ),
  },
  {
    id: 5076,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is a Bullet chart in Microsoft Excel?",
    answer: (
      <>
        <p>A Bullet chart is a variation of a bar chart that displays performance against targets and qualitative ranges (e.g. poor, good, excellent).</p>
      </>
    ),
  },
  {
    id: 5077,
    category: 'Excel',
    difficulty: 'medium',
    question: "When to use bullet charts in Excel?",
    answer: (
      <>
        <p>Use bullet charts to display key performance metrics against goal targets in space-constrained dashboard panels.</p>
      </>
    ),
  },
  {
    id: 5078,
    category: 'Excel',
    difficulty: 'hard',
    question: "How to create bullet charts in Excel?",
    answer: (
      <>
        <p>Create bullet charts in Excel by modifying stacked column charts, using overlapping series and error bars to represent targets.</p>
      </>
    ),
  },
  {
    id: 5079,
    category: 'Excel',
    difficulty: 'easy',
    question: "How can you replace one value with another in Excel?",
    answer: (
      <>
        <p>Press <code>Ctrl + H</code> to open Find and Replace, type the target and replacement values, and click Replace All.</p>
      </>
    ),
  },
  {
    id: 5080,
    category: 'Excel',
    difficulty: 'medium',
    question: "What are the different types of data filters available in Excel?",
    answer: (
      <>
        <p>Filters include: Text filters, Number filters, Date filters, and Color-based filters.</p>
      </>
    ),
  },
  {
    id: 5081,
    category: 'Excel',
    difficulty: 'hard',
    question: "How to debug a code in VBA?",
    answer: (
      <>
        <p>Debug in VBE by inserting breakpoints (click left margin), stepping through lines using <code>F8</code>, and inspecting variables in the Locals window.</p>
      </>
    ),
  },
  {
    id: 5082,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the use of timeline in Microsoft Excel?",
    answer: (
      <>
        <p>A Timeline is an interactive visual filter used in PivotTables to slide across dates dynamically.</p>
      </>
    ),
  },
  {
    id: 5083,
    category: 'Excel',
    difficulty: 'easy',
    question: "What do you mean by logical test in Microsoft Excel?",
    answer: (
      <>
        <p>A logical test evaluates an expression and returns TRUE or FALSE (e.g. <code>A1 &gt; 100</code>).</p>
      </>
    ),
  },
  {
    id: 5084,
    category: 'Excel',
    difficulty: 'medium',
    question: "Can you sort multiple columns at one time.",
    answer: (
      <>
        <p>Yes. Go to the <strong>Data</strong> tab &gt; click the <strong>Sort</strong> button &gt; add levels to define primary and secondary sort columns.</p>
      </>
    ),
  },
  {
    id: 5085,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is One variable Data Table in Excel?",
    answer: (
      <>
        <p>A Data Table is a what-if analysis tool that calculates multiple scenarios by substituting one variable in a formula.</p>
      </>
    ),
  },
  {
    id: 5086,
    category: 'Excel',
    difficulty: 'hard',
    question: "How to create One Variable Data Table in Excel?",
    answer: (
      <>
        <p>Set up input variables, select the table range, go to Data &gt; What-If Analysis &gt; Data Table, set the Input Cell, and click OK.</p>
      </>
    ),
  },
  {
    id: 5087,
    category: 'Excel',
    difficulty: 'easy',
    question: "Explain how to wrap text in Excel.",
    answer: (
      <>
        <p>Select cells, go to Home tab &gt; Alignment group &gt; click the <strong>Wrap Text</strong> button to display text on multiple lines.</p>
      </>
    ),
  },
  {
    id: 5088,
    category: 'Excel',
    difficulty: 'medium',
    question: "How can you rearrange cells in Microsoft Excel?",
    answer: (
      <>
        <p>Drag cell borders while holding the <code>Shift</code> key to insert and shift existing cells.</p>
      </>
    ),
  },
  {
    id: 5089,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is a Donut Chart in Excel?",
    answer: (
      <>
        <p>A Donut Chart is similar to a Pie chart but contains a hollow center, allowing you to display multiple data series in concentric rings.</p>
      </>
    ),
  },
  {
    id: 5090,
    category: 'Excel',
    difficulty: 'medium',
    question: "How Donut Chart is created in Microsoft Excel?",
    answer: (
      <>
        <p>Select data, go to Insert tab &gt; click Pie chart dropdown list &gt; choose Donut chart.</p>
      </>
    ),
  },
  {
    id: 5091,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to create a dropdown list in Excel?",
    answer: (
      <>
        <p>Select target cells, go to the <strong>Data</strong> tab &gt; click <strong>Data Validation</strong> &gt; set Allow to **List** &gt; input list source range and click OK.</p>
      </>
    ),
  },
  {
    id: 5092,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the difference between COUNT and COUNTIF in Excel?",
    answer: (
      <>
        <p>Differences in counting scope:</p>
                <ul>
                  <li><code>COUNT</code>: Counts all numeric values.</li>
                  <li><code>COUNTIF</code>: Counts only cells that meet a specific criteria.</li>
                </ul>
      </>
    ),
  },
  {
    id: 5093,
    category: 'Excel',
    difficulty: 'easy',
    question: "Specify the different file formats used to save an MS Excel file?",
    answer: (
      <>
        <p>Excel formats include <code>.xlsx</code> (standard), <code>.xlsm</code> (macros), <code>.xlsb</code> (binary), and <code>.csv</code> (text delimiter).</p>
      </>
    ),
  },
  {
    id: 5094,
    category: 'Excel',
    difficulty: 'easy',
    question: "How to add hyperlink in MS Excel?",
    answer: (
      <>
        <p>Right-click the cell, select <strong>Link</strong> (or press <code>Ctrl + K</code>), input the URL/target sheet, and click OK.</p>
      </>
    ),
  },
  {
    id: 5095,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the SHEET formula in Excel?",
    answer: (
      <>
        <p>The <code>SHEET()</code> function returns the numeric index of a referenced sheet in the workbook.</p>
      </>
    ),
  },
  {
    id: 5096,
    category: 'Excel',
    difficulty: 'medium',
    question: "What is the process of importing data from another Workbook?",
    answer: (
      <>
        <p>Import data using Power Query (Data tab &gt; Get Data &gt; From File &gt; From Excel Workbook) to establish refreshable database links.</p>
      </>
    ),
  },
  {
    id: 5097,
    category: 'Excel',
    difficulty: 'medium',
    question: "Describe bubble chart in Excel.",
    answer: (
      <>
        <p>A Bubble chart is a variation of a scatter plot that displays three dimensions of data: X value, Y value, and the bubble size dimension.</p>
      </>
    ),
  },
  {
    id: 5098,
    category: 'Excel',
    difficulty: 'easy',
    question: "What is the use of Count All or COUNTA?",
    answer: (
      <>
        <p>The <code>COUNTA()</code> function counts all cells containing data (text, numbers, boolean, or errors) in a range.</p>
      </>
    ),
  },
  {
    id: 5099,
    category: 'Excel',
    difficulty: 'hard',
    question: "How INDEX and MATCH function work together?",
    answer: (
      <>
        <p>They combine to perform fast lookups: <code>=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))</code>.</p>
      </>
    ),
  },
  {
    id: 5100,
    category: 'Excel',
    difficulty: 'medium',
    question: "Where Surface Chart is used?",
    answer: (
      <>
        <p>A Surface chart is used to visualize optimum combinations between two sets of data across a 3D topographic surface map.</p>
      </>
    ),
  },
];

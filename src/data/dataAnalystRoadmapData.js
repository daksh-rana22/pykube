export const dataAnalystRoadmap = [
  {
    number: '01',
    title: 'Python Fundamentals',
    subtitle: 'Build your data scripting foundation',
    topics: [
      {
        name: 'Python Core Syntax',
        tags: ['Core', 'Essential'],
        desc: 'Variables, data types, operators, strings, lists, tuples, dicts, sets, if/else, loops, and functions.'
      },
      {
        name: 'OOP & Advanced Python',
        tags: ['OOP', 'Advanced'],
        desc: 'Classes, inheritance, lambda, map/filter, list comprehensions, generators, file I/O, and exception handling.'
      },
      {
        name: 'Regex & Date/Time',
        tags: ['Utility'],
        desc: 'Regular expressions for text parsing, datetime module, timedelta, timezone handling, and strftime/strptime.'
      }
    ]
  },
  {
    number: '02',
    title: 'NumPy',
    subtitle: 'Numerical computing with arrays',
    topics: [
      {
        name: 'NumPy Arrays',
        tags: ['Core', 'N-dimensional'],
        desc: 'ndarray creation, shape, dtype, np.zeros/ones/arange/linspace, reshape, and array attributes.'
      },
      {
        name: 'Array Operations',
        tags: ['Computation'],
        desc: 'Element-wise operations, broadcasting rules, slicing, boolean indexing, fancy indexing, and universal functions (ufuncs).'
      },
      {
        name: 'Linear Algebra',
        tags: ['Math'],
        desc: 'Matrix multiplication (dot/matmul), transpose, inverse, eigenvalues, and solving linear systems with np.linalg.'
      },
      {
        name: 'Random & Statistics',
        tags: ['Statistics'],
        desc: 'Random number generation, seeding, distributions (normal, binomial, uniform), mean, median, std, percentile.'
      }
    ]
  },
  {
    number: '03',
    title: 'Pandas',
    subtitle: 'Data manipulation & analysis',
    topics: [
      {
        name: 'Series & DataFrames',
        tags: ['Core', 'Essential'],
        desc: 'Creating DataFrames from CSV/Excel/JSON, indexing (iloc/loc), column selection, dtypes, and .info()/.describe().'
      },
      {
        name: 'Data Cleaning',
        tags: ['ETL', 'Quality'],
        desc: 'Handling missing values (fillna, dropna), duplicates, type conversion, string operations with .str accessor.'
      },
      {
        name: 'Aggregation & GroupBy',
        tags: ['Analysis'],
        desc: 'groupby, pivot_table, agg, transform, apply — computing business metrics across groups and categories.'
      },
      {
        name: 'Joins & Merges',
        tags: ['Combining Data'],
        desc: 'merge (inner/left/right/outer joins), concat, join — combining multiple datasets like SQL joins in Python.'
      },
      {
        name: 'Time Series',
        tags: ['Advanced'],
        desc: 'DatetimeIndex, resample, rolling windows, shift, period calculations, and analyzing temporal patterns.'
      }
    ]
  },
  {
    number: '04',
    title: 'Data Loading & Storage',
    subtitle: 'Read and write from any source',
    topics: [
      {
        name: 'CSV & Excel',
        tags: ['Files', 'Core'],
        desc: 'pd.read_csv, pd.read_excel, delimiter handling, encoding issues, chunking large files, and to_csv/to_excel.'
      },
      {
        name: 'JSON & HTML',
        tags: ['Web Data'],
        desc: 'pd.read_json, json module, web scraping with BeautifulSoup (pd.read_html), and parsing nested JSON.'
      },
      {
        name: 'HDF5 & Parquet',
        tags: ['Big Data', 'Performance'],
        desc: 'Columnar storage with Parquet via PyArrow, HDF5 via PyTables — efficient binary formats for large datasets.'
      }
    ]
  },
  {
    number: '05',
    title: 'Statistics & Visualization',
    subtitle: 'Uncover and communicate insights',
    topics: [
      {
        name: 'Descriptive Statistics',
        tags: ['Stats', 'Core'],
        desc: 'Measures of central tendency, spread, skewness, kurtosis, correlation (Pearson, Spearman), and covariance.'
      },
      {
        name: 'Matplotlib',
        tags: ['Visualization'],
        desc: 'Line, bar, scatter, histogram, pie charts. Customizing axes, titles, legends, subplots, and figure styling.'
      },
      {
        name: 'Seaborn',
        tags: ['Visualization', 'Statistical'],
        desc: 'heatmap, pairplot, boxplot, violin plot, FacetGrid — statistical visualizations with minimal code.'
      },
      {
        name: 'Power BI',
        tags: ['BI Tool', 'Reporting'],
        desc: 'Connecting to data sources, Power Query transformations, building interactive dashboards, slicers, and DAX basics.'
      }
    ]
  }
];

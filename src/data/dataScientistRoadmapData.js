export const dataScientistRoadmap = [
  {
    number: '01',
    title: 'Python & ML Libraries',
    subtitle: 'Master the data science toolkit',
    topics: [
      {
        name: 'Python Core',
        tags: ['Core', 'Essential'],
        desc: 'Data types, control flow, functions, OOP, lambda, list comprehensions, generators, and exception handling.'
      },
      {
        name: 'NumPy',
        tags: ['Computation'],
        desc: 'N-dimensional arrays, broadcasting, vectorized operations, linear algebra, and random number generation.'
      },
      {
        name: 'Pandas',
        tags: ['Data Wrangling'],
        desc: 'DataFrames, Series, data cleaning (fillna/dropna), groupby, merge, pivot_table, and time series analysis.'
      },
      {
        name: 'Matplotlib & Seaborn',
        tags: ['Visualization'],
        desc: 'Line/bar/scatter/histogram charts, subplots, heatmaps, pairplots, and customizing publication-quality figures.'
      },
      {
        name: 'Statistics Foundations',
        tags: ['Math', 'Core'],
        desc: 'Descriptive stats, probability distributions (normal, binomial, Poisson), hypothesis testing, p-values, and confidence intervals.'
      }
    ]
  },
  {
    number: '02',
    title: 'Machine Learning',
    subtitle: 'Build predictive models',
    topics: [
      {
        name: 'Supervised Learning',
        tags: ['ML', 'Core'],
        desc: 'Linear regression, logistic regression, decision trees, random forests, gradient boosting (XGBoost, LightGBM), and SVMs.'
      },
      {
        name: 'Unsupervised Learning',
        tags: ['ML', 'Clustering'],
        desc: 'K-Means clustering, hierarchical clustering, DBSCAN, PCA for dimensionality reduction, and anomaly detection.'
      },
      {
        name: 'Model Evaluation',
        tags: ['Metrics'],
        desc: 'Train/test split, cross-validation, accuracy, precision, recall, F1, AUC-ROC, confusion matrix, and bias-variance tradeoff.'
      },
      {
        name: 'Feature Engineering',
        tags: ['Data Prep'],
        desc: 'Encoding categorical variables, scaling (StandardScaler, MinMaxScaler), feature selection, and handling class imbalance.'
      },
      {
        name: 'Scikit-Learn Pipelines',
        tags: ['Production'],
        desc: 'Pipeline, ColumnTransformer, GridSearchCV, RandomizedSearchCV, model persistence with joblib/pickle.'
      }
    ]
  },
  {
    number: '03',
    title: 'PySpark',
    subtitle: 'Big data for data science',
    topics: [
      {
        name: 'SparkSession & RDDs',
        tags: ['Core', 'Distributed'],
        desc: 'SparkSession, SparkContext, RDD transformations, actions, DAG execution, and understanding lazy evaluation.'
      },
      {
        name: 'DataFrame API & SparkSQL',
        tags: ['Analysis'],
        desc: 'Spark DataFrames, schema inference, select/filter/groupBy, SQL queries with spark.sql(), and joins on big datasets.'
      },
      {
        name: 'MLlib',
        tags: ['Distributed ML'],
        desc: 'Spark ML Pipelines, distributed linear regression, classification, clustering, and collaborative filtering at scale.'
      },
      {
        name: 'File Formats',
        tags: ['Storage'],
        desc: 'Reading and writing Parquet, ORC, JSON, and Delta Lake — columnar storage, partitioning, and schema evolution.'
      }
    ]
  },
  {
    number: '04',
    title: 'Data Ingestion',
    subtitle: 'Feed data into your pipelines',
    topics: [
      {
        name: 'Batch Ingestion',
        tags: ['ETL', 'Core'],
        desc: 'Scheduled batch processing, reading from S3/HDFS/local, transformation logic, and writing to data warehouses.'
      },
      {
        name: 'Data Transformation',
        tags: ['ETL'],
        desc: 'Cleaning, enriching, and reshaping data through ETL pipelines — handling schema drift, nulls, and outliers.'
      },
      {
        name: 'Real-Time Streaming',
        tags: ['Streaming', 'Advanced'],
        desc: 'Kafka producers/consumers, PySpark Structured Streaming, windowed aggregations, and watermarking for late data.'
      }
    ]
  },
  {
    number: '05',
    title: 'Power BI',
    subtitle: 'Business intelligence & reporting',
    topics: [
      {
        name: 'Data Connections',
        tags: ['Integration', 'Core'],
        desc: 'Connecting Power BI to SQL databases, flat files (CSV/Excel), REST APIs, Azure services, and SharePoint.'
      },
      {
        name: 'Power Query (ETL)',
        tags: ['Transform'],
        desc: 'M language basics, data cleansing, merging tables, column transformations, and automating data refresh.'
      },
      {
        name: 'Data Modeling',
        tags: ['Modeling'],
        desc: 'Star schema, snowflake schema, relationships (one-to-many), cardinality, and cross-filter direction strategies.'
      },
      {
        name: 'DAX & Measures',
        tags: ['DAX', 'Advanced'],
        desc: 'CALCULATE, SUMX, FILTER, RELATED, time intelligence (SAMEPERIODLASTYEAR, TOTALYTD), and KPI measures.'
      },
      {
        name: 'Dashboards & Reports',
        tags: ['Visualization'],
        desc: 'Charts, slicers, tooltips, conditional formatting, bookmarks, drill-through, row-level security, and publishing.'
      }
    ]
  }
];

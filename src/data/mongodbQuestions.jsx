import React from 'react';

export const MONGODB_QUESTIONS = [
  {
    id: 16001,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Define the term MongoDB?",
    answer: (
      <>
        <p><strong>MongoDB</strong> is a popular open-source, non-relational, document-oriented NoSQL database system. It stores data records as flexible, JSON-like documents (BSON format) rather than standard relational tables.</p>
      </>
    ),
  },
  {
    id: 16002,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is a Namespace in MongoDB?",
    answer: (
      <>
        <p>A <strong>Namespace</strong> is the concatenation of the database name and the collection name (separated by a dot, e.g., <code>dbname.collectionname</code>), serving as the unique identifier for a database collection.</p>
      </>
    ),
  },
  {
    id: 16003,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What do you mean by sharding in MongoDB?",
    answer: (
      <>
        <p><strong>Sharding</strong> is MongoDB's method for horizontal scaling, distributing database collection records across multiple physical servers (shards) using a shard key to support large datasets and high throughput.</p>
      </>
    ),
  },
  {
    id: 16004,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Explain a replica set?",
    answer: (
      <>
        <p>A <strong>Replica Set</strong> is a group of mongod processes that maintain the same data copy. It consists of one primary node (receives all write operations) and multiple secondary nodes (replicate primary logs and provide failover capability).</p>
      </>
    ),
  },
  {
    id: 16005,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "How does replication work in MongoDB?",
    answer: (
      <>
        <p>Replication works via the **oplog** (operation log). Secondaries constantly query the primary's oplog and apply those operations to their local datasets asynchronously to keep data in sync.</p>
      </>
    ),
  },
  {
    id: 16006,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What are things to consider while creating Schema in MongoDB?",
    answer: (
      <>
        <p>Considerations: user query patterns, data growth limits (maximum document size 16MB), document embedding (1:1 or 1:N bounded relationships) vs. referencing (1:N unbounded relationships), and indexing properties.</p>
      </>
    ),
  },
  {
    id: 16007,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What is the use of a profiler in MongoDB?",
    answer: (
      <>
        <p>The database profiler logs detailed performance profiles of read/write queries, allowing developers to identify slow operations (running longer than threshold limits) for indexing optimization.</p>
      </>
    ),
  },
  {
    id: 16008,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "Can you move old files into the moveChunk directory?",
    answer: (
      <>
        <p>The <code>moveChunk</code> directory is created by MongoDB during sharding migrations to hold temp chunk backups. Once migrations succeed, MongoDB deletes files. Do not manually copy user files here.</p>
      </>
    ),
  },
  {
    id: 16009,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the indexes in MongoDB?",
    answer: (
      <>
        <p>Special data structures that store a small fraction of the collection data in an ordered format, letting queries quickly locate matching records without scanning whole databases.</p>
      </>
    ),
  },
  {
    id: 16010,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Define a GridFS in MongoDB?",
    answer: (
      <>
        <p><strong>GridFS</strong> is a specification for storing and retrieving large files (e.g. videos, audio) that exceed the BSON limit of 16MB by dividing files into smaller chunks (typically 255KB each).</p>
      </>
    ),
  },
  {
    id: 16011,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are some alternatives to MongoDB?",
    answer: (
      <>
        <p>Alternatives: CouchDB, Cassandra, Amazon DynamoDB, Redis, Couchbase, and PostgreSQL (for JSONB storage).</p>
      </>
    ),
  },
  {
    id: 16012,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What do you mean by NoSQL databases? Is MongoDB a NoSQL database?",
    answer: (
      <>
        <p>NoSQL stands for 'Not Only SQL'. It represents non-relational databases that store unstructured or semi-structured data. Yes, MongoDB is a document-based NoSQL database.</p>
      </>
    ),
  },
  {
    id: 16013,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Which programming languages does MongoDB support?",
    answer: (
      <>
        <p>MongoDB supports official driver clients for Node.js, Java, Python, C++, C#, Go, Ruby, PHP, Rust, Swift, and Scala.</p>
      </>
    ),
  },
  {
    id: 16014,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "List down different NoSQL databases types? Give some examples.",
    answer: (
      <>
        <ul><li><strong>Document store:</strong> MongoDB, CouchDB.</li><li><strong>Key-Value store:</strong> Redis, Memcached.</li><li><strong>Wide-column store:</strong> Cassandra, HBase.</li><li><strong>Graph database:</strong> Neo4j, ArangoDB.</li></ul>
      </>
    ),
  },
  {
    id: 16015,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Is MongoDB better than other SQL databases? If yes, explain how?",
    answer: (
      <>
        <p>MongoDB is better for scaling write-heavy applications and handling unstructured polymorphic schemas, but SQL databases are preferred for complex multi-table transactional integrity requirements.</p>
      </>
    ),
  },
  {
    id: 16016,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the difference between MySQL ad MongoDB?",
    answer: (
      <>
        <ul><li><strong>MySQL:</strong> Relational structure, predefined schemas, supports JOIN queries, scales vertically.</li><li><strong>MongoDB:</strong> Document structure (BSON), flexible schema dynamics, joins via lookup pipelines, scales horizontally.</li></ul>
      </>
    ),
  },
  {
    id: 16017,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Specify the reasons for which MongoDB is considered the best NoSQL database?",
    answer: (
      <>
        <p>High scalability, robust aggregation framework pipelines, rich index capabilities, active community support, and native JSON matches for web layers.</p>
      </>
    ),
  },
  {
    id: 16018,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Can you attain the primary key- foreign key relationship in MongoDB?",
    answer: (
      <>
        <p>Not natively via constraints. Developers reference ObjectId properties (like foreign keys) manually and join them using the <code>$lookup</code> aggregation stage.</p>
      </>
    ),
  },
  {
    id: 16019,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What is the structure of an ObjectID in MongoDB?",
    answer: (
      <>
        <p>An <strong>ObjectId</strong> is a 12-byte identifier: 4-byte timestamp (creation time), 5-byte random value (machine/process identification), and 3-byte incrementing counter.</p>
      </>
    ),
  },
  {
    id: 16020,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "In which programming language is MongoDB written?",
    answer: (
      <>
        <p>MongoDB is primarily written in <strong>C++</strong>, with some components in JavaScript and Go.</p>
      </>
    ),
  },
  {
    id: 16021,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "How to do Transaction locking in MongoDB?",
    answer: (
      <>
        <p>MongoDB uses sessions and multi-document transactions (ACID). Locking is managed internally using pessimistic write-locks at document level: <br/> <code>session.startTransaction();</code></p>
      </>
    ),
  },
  {
    id: 16022,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Why is a 32-bit version of MongoDB not preferred?",
    answer: (
      <>
        <p>Because 32-bit systems limit database size to 2GB since they can only address small virtual memory volumes, whereas 64-bit systems handle petabytes.</p>
      </>
    ),
  },
  {
    id: 16023,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is a covered query in MongoDB?",
    answer: (
      <>
        <p>A query whose input search fields and requested project fields match defined index keys exactly, letting MongoDB resolve it entirely from indexes without loading docs.</p>
      </>
    ),
  },
  {
    id: 16024,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Why is a covered query important?",
    answer: (
      <>
        <p>Because it avoids expensive disk I/O reads by returning results directly from high-speed RAM indexes, maximizing API speeds.</p>
      </>
    ),
  },
  {
    id: 16025,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What are primary & secondary in a replica set?",
    answer: (
      <>
        <ul><li><strong>Primary:</strong> The single node that processes all database write requests.</li><li><strong>Secondary:</strong> Nodes that mirror the primary's database state to handle read operations or failover events.</li></ul>
      </>
    ),
  },
  {
    id: 16026,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are CRUD operations in MongoDB?",
    answer: (
      <>
        <p>Create (<code>insertOne</code>), Read (<code>find</code>), Update (<code>updateOne</code>), and Delete (<code>deleteOne</code>).</p>
      </>
    ),
  },
  {
    id: 16027,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Why are MongoDB data files large?",
    answer: (
      <>
        <p>MongoDB pre-allocates data file volumes to avoid filesystem fragmentation and allocates empty padding space for document growths.</p>
      </>
    ),
  },
  {
    id: 16028,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What storage engines does MongoDB use?",
    answer: (
      <>
        <p><strong>WiredTiger</strong> is the default engine. In older legacy versions, MMAPv1 was supported. Memory-mapped storage engines are also available.</p>
      </>
    ),
  },
  {
    id: 16029,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "How MongoDB provides concurrency?",
    answer: (
      <>
        <p>Uses ticket-based reader-writer locks in WiredTiger, allowing thousands of concurrent reads and concurrent writes on different documents concurrently.</p>
      </>
    ),
  },
  {
    id: 16030,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Highlight some key differences between MongoDB and Redis database?",
    answer: (
      <>
        <ul><li><strong>MongoDB:</strong> Disk-based document database supporting rich query filters.</li><li><strong>Redis:</strong> In-memory key-value cache database optimized for sub-millisecond lookups.</li></ul>
      </>
    ),
  },
  {
    id: 16031,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is the key difference between CouchDB and MongoDB?",
    answer: (
      <>
        <ul><li><strong>MongoDB:</strong> Uses binary BSON format, supports dynamic query operators and indexes.</li><li><strong>CouchDB:</strong> Uses JSON format, queries are written as MapReduce views, and relies on HTTP REST APIs natively.</li></ul>
      </>
    ),
  },
  {
    id: 16032,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is the difference between Cassandra and MongoDB?",
    answer: (
      <>
        <ul><li><strong>Cassandra:</strong> Wide-column store, masterless architecture (peer-to-peer), writes are super fast.</li><li><strong>MongoDB:</strong> Document store, single-master replica sets (CP system).</li></ul>
      </>
    ),
  },
  {
    id: 16033,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "If you remove the object attribute, is it deleted from the database?",
    answer: (
      <>
        <p>Yes, removing an attribute using the <code>$unset</code> operator deletes that property from the database document record.</p>
      </>
    ),
  },
  {
    id: 16034,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the salient features of MongoDB?",
    answer: (
      <>
        <p>Salient features: schema-less documents, indexing, replication fallbacks, horizontal sharding, and rich aggregation frameworks.</p>
      </>
    ),
  },
  {
    id: 16035,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is an Aggregation in MongoDB?",
    answer: (
      <>
        <p>Operations that process data records and return computed results (e.g. counting, grouping) via pipeline stages.</p>
      </>
    ),
  },
  {
    id: 16036,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What do you mean by Replication?",
    answer: (
      <>
        <p>Synchronizing data records across multiple physical database servers to ensure reliability, high availability, and redundancy.</p>
      </>
    ),
  },
  {
    id: 16037,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What data types are stored by MongoDB?",
    answer: (
      <>
        <p>Data types: String, Integer, Double, Boolean, Array, Object, Timestamp, Null, Date, and ObjectId.</p>
      </>
    ),
  },
  {
    id: 16038,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the embedded documents?",
    answer: (
      <>
        <p>Documents nested inside parent documents as fields, allowing related hierarchical data models to be retrieved in single I/O operations.</p>
      </>
    ),
  },
  {
    id: 16039,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What do you understand by application-level encryption?",
    answer: (
      <>
        <p>Encrypting document fields on the application server side *before* sending data to MongoDB, ensuring that database administrators cannot read sensitive text.</p>
      </>
    ),
  },
  {
    id: 16040,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Explain storage encryption.",
    answer: (
      <>
        <p>Encrypting database files on disk (Encryption at Rest) using algorithms like AES-256 to prevent unauthorized data reads from physical server files.</p>
      </>
    ),
  },
  {
    id: 16041,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Which method should you use to create an index?",
    answer: (
      <>
        <p>Use the <code>createIndex</code> method: <br/> <code>db.collection.createIndex({"{"} fieldName: 1 {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16042,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What do you understand by oplog in the Replica set?",
    answer: (
      <>
        <p>The **oplog** (operation log) is a capped collection in the local database that records all write modifications applied to the primary node for secondaries to replicate.</p>
      </>
    ),
  },
  {
    id: 16043,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Explain the term vertical scaling?",
    answer: (
      <>
        <p>Increasing system power by adding more resource capacity (RAM, CPU) to a single database server machine.</p>
      </>
    ),
  },
  {
    id: 16044,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Define the term horizontal scaling.",
    answer: (
      <>
        <p>Increasing database capacity by partitioning datasets and distributing records across multiple server machines (sharding).</p>
      </>
    ),
  },
  {
    id: 16045,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What are the key components of a sharded cluster?",
    answer: (
      <>
        <p>Components: Shards (contain database subsets), Config Servers (store configurations), and Mongos (query routers directing updates).</p>
      </>
    ),
  },
  {
    id: 16046,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Why use the pretty() method?",
    answer: (
      <>
        <p>Appended to query cursors to format retrieved document JSON logs into a readable, indented format in the MongoDB shell.</p>
      </>
    ),
  },
  {
    id: 16047,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Which method should we use to remove a document from the collection?",
    answer: (
      <>
        <p>Use the <code>deleteOne</code> or <code>deleteMany</code> method: <br/> <code>db.users.deleteOne({"{"} _id: id {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16048,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Explain MongoDB Projection.",
    answer: (
      <>
        <p>Specifying which fields MongoDB should return from matching documents (e.g. 1 to show, 0 to hide): <br/> <code>db.users.find({"{"}{"}"}, {"{"} name: 1, email: 0 {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16049,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Specify the importance of the limit() method?",
    answer: (
      <>
        <p>Restricts the maximum number of documents returned by a query, optimizing network bandwidth: <br/> <code>db.users.find().limit(5)</code></p>
      </>
    ),
  },
  {
    id: 16050,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is a collection in MongoDB?",
    answer: (
      <>
        <p>A grouped set of MongoDB documents, serving as the non-relational equivalent of a table in SQL systems.</p>
      </>
    ),
  },
  {
    id: 16051,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the use of the DB command?",
    answer: (
      <>
        <p>Typing <code>db</code> inside the Mongo CLI displays the name of the database currently in use.</p>
      </>
    ),
  },
  {
    id: 16052,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Which method should be used to update documents in the collection?",
    answer: (
      <>
        <p>Use <code>updateOne</code>, <code>updateMany</code>, or <code>replaceOne</code>: <br/> <code>db.users.updateOne({"{"} _id: id {"}"}, {"{"} $set: {"{"} active: true {"}"} {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16053,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Which command can I use to restore the backup?",
    answer: (
      <>
        <p>Use the command line utility: <code>mongorestore --db dbname /backupdir</code></p>
      </>
    ),
  },
  {
    id: 16054,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Why use dot notation in MongoDB?",
    answer: (
      <>
        <p>Dot notation allows querying and updating properties inside nested embedded documents or matching specific array indexes: <br/> <code>db.users.find({"{"} 'address.city': 'Dallas' {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16055,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What do you mean by Auditing?",
    answer: (
      <>
        <p>Logging database operations (e.g. user logins, document changes) to track system access for security compliance.</p>
      </>
    ),
  },
  {
    id: 16056,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is an aggregation pipeline?",
    answer: (
      <>
        <p>A framework where documents pass through sequential stages (e.g., matching, grouping, sorting) to calculate aggregated outputs.</p>
      </>
    ),
  },
  {
    id: 16057,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "Define MapReduce.",
    answer: (
      <>
        <p>A legacy data processing engine that runs map and reduce JavaScript functions to process and aggregate large datasets.</p>
      </>
    ),
  },
  {
    id: 16058,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the purpose of the save() method?",
    answer: (
      <>
        <p>A legacy wrapper that inserts a document if it lacks an `_id` field, or replaces it if it already exists in the collection.</p>
      </>
    ),
  },
  {
    id: 16059,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Where is MongoDB used?",
    answer: (
      <>
        <p>Used in content management, real-time analytics engines, catalog systems, and web application backends (MERN/MEAN stacks).</p>
      </>
    ),
  },
  {
    id: 16060,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Are null values allowed in MongoDB?",
    answer: (
      <>
        <p>Yes, fields can store null values, and queries can filter documents where properties are null: <br/> <code>db.users.find({"{"} age: null {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16061,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "How does Sharding work along with replication?",
    answer: (
      <>
        <p>Each individual shard in a sharded cluster is deployed as a Replica Set to ensure high availability and redundancy for every data partition.</p>
      </>
    ),
  },
  {
    id: 16062,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "How can you see the connections used by Mongos?",
    answer: (
      <>
        <p>Run connection metrics operations on the mongos instances: <br/> <code>db.serverStatus().connections</code></p>
      </>
    ),
  },
  {
    id: 16063,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the disadvantages or drawbacks of MongoDB?",
    answer: (
      <>
        <p>Drawbacks: high memory usage (due to caching), 16MB document size limit, no native JOIN constraints, and lack of relational foreign keys.</p>
      </>
    ),
  },
  {
    id: 16064,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the perks of MongoDB?",
    answer: (
      <>
        <p>Perks: horizontal scaling via sharding, flexible document schema structure, rich aggregation pipelines, and high performance read operations.</p>
      </>
    ),
  },
  {
    id: 16065,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Which command in MongoDB is used to provide all information of a query plan?",
    answer: (
      <>
        <p>Append <code>explain('executionStats')</code> to query execution cursors to see index details and execution stats: <br/> <code>db.users.find().explain()</code></p>
      </>
    ),
  },
  {
    id: 16066,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What do you mean by capped collections?",
    answer: (
      <>
        <p>Fixed-size collections that overwrite older documents automatically once they reach their space limit, keeping records sorted by insertion order (e.g. Oplog).</p>
      </>
    ),
  },
  {
    id: 16067,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Is it possible to configure the cache size on MongoDB?",
    answer: (
      <>
        <p>Yes. You can configure the WiredTiger internal cache size limit using the command line option: <code>--wiredTigerCacheSizeGB</code>.</p>
      </>
    ),
  },
  {
    id: 16068,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Why does MongoDB use BSON?",
    answer: (
      <>
        <p>Because BSON is faster to parse and traverse, and supports date and binary types that standard JSON does not support.</p>
      </>
    ),
  },
  {
    id: 16069,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Explain how to write a query to search for document/s with array elements.",
    answer: (
      <>
        <p>Query array values directly: <code>db.users.find({"{"} tags: 'web' {"}"})</code>, or query exact matches: <code>db.users.find({"{"} tags: {"{"} $all: ['web', 'js'] {"}"} {"}"})</code>.</p>
      </>
    ),
  },
  {
    id: 16070,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Explain why MongoDB is a schema-less database?",
    answer: (
      <>
        <p>Because documents in the same collection do not need to share the same fields, and dynamic attributes can be added without database migrations.</p>
      </>
    ),
  },
  {
    id: 16071,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "How can we find the size of the collection in MongoDB?",
    answer: (
      <>
        <p>Use the stats command: <br/> <code>db.users.stats().size</code></p>
      </>
    ),
  },
  {
    id: 16072,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Specify some benefits of MongoDB.",
    answer: (
      <>
        <p>Benefits: dynamic schema properties, indexing speed, replication failovers, horizontal scalability, and JSON structure compatibility.</p>
      </>
    ),
  },
  {
    id: 16073,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Why are covered queries faster?",
    answer: (
      <>
        <p>Because they retrieve results entirely from RAM indexes, avoiding slow disk lookups for matching documents.</p>
      </>
    ),
  },
  {
    id: 16074,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What does NoSQL mean?",
    answer: (
      <>
        <p>Not Only SQL, representing non-relational database structures that store unstructured or semi-structured data datasets.</p>
      </>
    ),
  },
  {
    id: 16075,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the difference between Mongo DB and MySQL?",
    answer: (
      <>
        <p>MySQL uses tables and fixed schemas. MongoDB uses collections and flexible, schema-less BSON document models.</p>
      </>
    ),
  },
  {
    id: 16076,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are some common use cases of MongoDB?",
    answer: (
      <>
        <p>Use cases: catalog systems, user profile storage, content management hubs, IoT log aggregators, and real-time telemetry analytics.</p>
      </>
    ),
  },
  {
    id: 16077,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the syntax to update a document in a collection?",
    answer: (
      <>
        <p>Syntax: <br/> <code>db.collection.updateOne({"{"} filter {"}"}, {"{"} $set: {"{"} field: value {"}"} {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16078,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is secondary index in MongoDB?",
    answer: (
      <>
        <p>Any index created on fields other than the primary identifier <code>_id</code> (e.g. Indexing email or birthdate).</p>
      </>
    ),
  },
  {
    id: 16079,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is compound index?",
    answer: (
      <>
        <p>An index that references multiple fields in a defined order to optimize sorting and queries matching multiple criteria: <br/> <code>db.users.createIndex({"{"} name: 1, age: -1 {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16080,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is a partial index in MongoDB?",
    answer: (
      <>
        <p>An index that only indexes documents that meet a filter condition (e.g., indexing email only when it exists), saving storage space: <br/> <code>db.users.createIndex({"{"} email: 1 {"}"}, {"{"} partialFilterExpression: {"{"} email: {"{"} $exists: true {"}"} {"}"} {"}"})</code></p>
      </>
    ),
  },
  {
    id: 16081,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Explain what is Capped Collection?",
    answer: (
      <>
        <p>Fixed-size collections that automatically overwrite their oldest documents once they reach their maximum limit.</p>
      </>
    ),
  },
  {
    id: 16082,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "How to perform Join operations in MongoDB?",
    answer: (
      <>
        <p>Use the <code>$lookup</code> aggregation pipeline stage to perform left outer joins between collections: <br/> <code>{"{"} $lookup: {"{"} from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' {"}"} {"}"}</code></p>
      </>
    ),
  },
  {
    id: 16083,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "How to configure the cache size in MongoDB?",
    answer: (
      <>
        <p>Set the cache size in the configuration file or via the command line: <code>storage.wiredTiger.engineConfig.cacheSizeGB</code>.</p>
      </>
    ),
  },
  {
    id: 16084,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Mention the aggregate functions of MongoDB?",
    answer: (
      <>
        <p>Pipeline stages: <code>$match</code>, <code>$group</code>, <code>$sort</code>, <code>$project</code>, <code>$limit</code>, and <code>$unwind</code>.</p>
      </>
    ),
  },
  {
    id: 16085,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the datatypes of MongoDB?",
    answer: (
      <>
        <p>Types: String, Double, Array, ObjectId, Boolean, Date, Integer, Timestamp, Binary data, and Null.</p>
      </>
    ),
  },
  {
    id: 16086,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What is the difference between MongoDB and RDBMS?",
    answer: (
      <>
        <p>RDBMS stores data in structured tables with foreign keys. MongoDB stores data in flexible, schema-less BSON documents.</p>
      </>
    ),
  },
  {
    id: 16087,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "What are the different types of Indexes in MongoDB?",
    answer: (
      <>
        <p>Types: Single Field, Compound, Multikey (for arrays), Geospatial, Text, Hashed, and Partial Indexes.</p>
      </>
    ),
  },
  {
    id: 16088,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is ACID Transaction?",
    answer: (
      <>
        <p>ACID (Atomicity, Consistency, Isolation, Durability) guarantees that multi-document database operations execute safely and reliably.</p>
      </>
    ),
  },
  {
    id: 16089,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Briefly describe what is CRUD in MongoDB?",
    answer: (
      <>
        <p>CRUD represents Create (insert), Read (find), Update (update), and Delete (remove) operations.</p>
      </>
    ),
  },
  {
    id: 16090,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is a storage engine in MongoDB?",
    answer: (
      <>
        <p>The component responsible for managing how documents are stored, indexed, and cached on disk and in memory (e.g. WiredTiger).</p>
      </>
    ),
  },
  {
    id: 16091,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "Is it possible to configure the cache size for MMAPv1 in MongoDB?",
    answer: (
      <>
        <p>No. The legacy MMAPv1 engine does not have its own cache; it delegates memory mapping management to the OS filesystem cache.</p>
      </>
    ),
  },
  {
    id: 16092,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What is Splitting in MongoDB?",
    answer: (
      <>
        <p>The background process where the sharding balancer splits a chunk that exceeds the maximum chunk size (default 64MB) into two smaller chunks.</p>
      </>
    ),
  },
  {
    id: 16093,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What are the different data models in MongoDB?",
    answer: (
      <>
        <p>Data models: Normalized model (using document references) and Denormalized model (using embedded documents).</p>
      </>
    ),
  },
  {
    id: 16094,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Explain what is a Relational Database Management System?",
    answer: (
      <>
        <p>A database management system that structures data as tables with defined columns and relations (e.g. MySQL, PostgreSQL).</p>
      </>
    ),
  },
  {
    id: 16095,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is the minimum number of nodes a replica set requires?",
    answer: (
      <>
        <p>A minimum of **three** nodes is required to elect a primary node dynamically (either three data nodes, or two data nodes plus an arbiter).</p>
      </>
    ),
  },
  {
    id: 16096,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "What is Shard Key in MongoDB?",
    answer: (
      <>
        <p>A field chosen to partition collection documents across multiple shards, determining how database write operations are distributed.</p>
      </>
    ),
  },
  {
    id: 16097,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "Define journaling in MongoDB.",
    answer: (
      <>
        <p>A recovery log mechanism that writes operations to journal files on disk before applying updates, enabling recovery from crashes.</p>
      </>
    ),
  },
  {
    id: 16098,
    category: 'MongoDB',
    difficulty: 'easy',
    question: "Do the MongoDB databases have a schema?",
    answer: (
      <>
        <p>MongoDB databases do not enforce a schema natively, but you can define schema validation rules (JSON Schema validation) for collections.</p>
      </>
    ),
  },
  {
    id: 16099,
    category: 'MongoDB',
    difficulty: 'hard',
    question: "What is change streams in MongoDB?",
    answer: (
      <>
        <p>A feature allowing applications to listen to real-time data changes in collections or databases without polling the oplog directly.</p>
      </>
    ),
  },
  {
    id: 16100,
    category: 'MongoDB',
    difficulty: 'medium',
    question: "How does MongoDB handle schema evolution?",
    answer: (
      <>
        <p>By letting developers save documents with new fields immediately without performing database migrations. Legacy documents are handled gracefully in code.</p>
      </>
    ),
  },
];

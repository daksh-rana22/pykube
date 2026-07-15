import React from 'react';

export const REST_API_QUESTIONS = [
  {
    id: 21001,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is a REST API?",
    answer: (
      <>
        <p><strong>REST API</strong> (Representational State Transfer) is an architectural style for designing networked applications using stateless HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources identified by URLs.</p>
      </>
    ),
  },
  {
    id: 21002,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the HTTP methods used in REST?",
    answer: (
      <>
        <p>Common HTTP methods: <strong>GET</strong> (read), <strong>POST</strong> (create), <strong>PUT</strong> (replace), <strong>PATCH</strong> (partial update), <strong>DELETE</strong> (remove), <strong>HEAD</strong> (headers only), and <strong>OPTIONS</strong> (discover allowed methods).</p>
      </>
    ),
  },
  {
    id: 21003,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is a RESTful web service?",
    answer: (
      <>
        <p>A web service that follows REST architectural constraints — stateless communication, client-server separation, uniform interface, layered system, and optionally cacheable responses and code on demand.</p>
      </>
    ),
  },
  {
    id: 21004,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is statelessness in REST?",
    answer: (
      <>
        <p>Each HTTP request from client to server must contain all necessary information to understand and process the request. The server stores no client session state between requests.</p>
      </>
    ),
  },
  {
    id: 21005,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the difference between REST and SOAP?",
    answer: (
      <>
        <ul><li><strong>REST:</strong> Lightweight, uses HTTP verbs, supports JSON/XML, stateless, faster.</li><li><strong>SOAP:</strong> Protocol with strict XML message format, supports WS-Security, more overhead, better for enterprise transactions.</li></ul>
      </>
    ),
  },
  {
    id: 21006,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is an HTTP status code? List common ones.",
    answer: (
      <>
        <p>Numeric codes indicating HTTP response status. Common: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.</p>
      </>
    ),
  },
  {
    id: 21007,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is a URI in REST?",
    answer: (
      <>
        <p>A Uniform Resource Identifier uniquely identifies a resource on the server (e.g., <code>/api/users/123</code>). URIs should be nouns, hierarchical, and predictable.</p>
      </>
    ),
  },
  {
    id: 21008,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is JSON?",
    answer: (
      <>
        <p>JavaScript Object Notation — a lightweight, human-readable data interchange format used commonly in REST APIs to represent request and response bodies as key-value pairs.</p>
      </>
    ),
  },
  {
    id: 21009,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the six constraints of REST?",
    answer: (
      <>
        <p>1. Client-Server separation, 2. Statelessness, 3. Cacheability, 4. Layered System, 5. Uniform Interface, 6. Code on Demand (optional).</p>
      </>
    ),
  },
  {
    id: 21010,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the difference between PUT and POST?",
    answer: (
      <>
        <ul><li><strong>POST:</strong> Creates a new resource. Not idempotent — multiple calls create multiple resources.</li><li><strong>PUT:</strong> Creates or replaces a resource at a specific URI. Idempotent — multiple identical calls yield the same result.</li></ul>
      </>
    ),
  },
  {
    id: 21011,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is content negotiation in REST?",
    answer: (
      <>
        <p>The mechanism by which the client and server agree on the format of response data using HTTP headers: <code>Accept</code> (client preference) and <code>Content-Type</code> (actual format sent).</p>
      </>
    ),
  },
  {
    id: 21012,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is CRUD?",
    answer: (
      <>
        <p>CRUD stands for Create (POST), Read (GET), Update (PUT/PATCH), and Delete (DELETE) — the four basic operations performed on REST resources.</p>
      </>
    ),
  },
  {
    id: 21013,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is an API endpoint?",
    answer: (
      <>
        <p>A specific URL where a REST API can be accessed by a client, representing a particular resource or action (e.g., <code>GET /api/users</code> retrieves all users).</p>
      </>
    ),
  },
  {
    id: 21014,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is authentication vs authorization in REST?",
    answer: (
      <>
        <ul><li><strong>Authentication:</strong> Verifying who the user is (e.g., API key, JWT token).</li><li><strong>Authorization:</strong> Verifying what the authenticated user is allowed to do (permissions/roles).</li></ul>
      </>
    ),
  },
  {
    id: 21015,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is HTTPS and why is it important for REST APIs?",
    answer: (
      <>
        <p>HTTP Secure uses TLS/SSL encryption to protect data in transit. Essential for REST APIs to prevent man-in-the-middle attacks, eavesdropping, and data tampering.</p>
      </>
    ),
  },
  {
    id: 21016,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is an HTTP Header?",
    answer: (
      <>
        <p>Key-value metadata sent with HTTP requests/responses providing additional context like content type, authorization tokens, caching rules, and encoding formats.</p>
      </>
    ),
  },
  {
    id: 21017,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the difference between GET and POST?",
    answer: (
      <>
        <ul><li><strong>GET:</strong> Retrieves data, parameters in URL, idempotent, cacheable, bookmarkable.</li><li><strong>POST:</strong> Sends data in request body to create resources, not idempotent, not cached by default.</li></ul>
      </>
    ),
  },
  {
    id: 21018,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is a Resource in REST?",
    answer: (
      <>
        <p>Any information that can be named and addressed by a URI — documents, images, user records, or services. Resources are the core abstractions of REST architecture.</p>
      </>
    ),
  },
  {
    id: 21019,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is idempotency?",
    answer: (
      <>
        <p>An operation is idempotent if performing it multiple times has the same effect as performing it once. GET, PUT, DELETE are idempotent; POST is not.</p>
      </>
    ),
  },
  {
    id: 21020,
    category: 'REST API',
    difficulty: 'easy',
    question: "What tools are commonly used to test REST APIs?",
    answer: (
      <>
        <p>Tools: Postman, Insomnia, cURL, Swagger UI, REST Assured (Java), HTTPie, and browser developer tools (Network tab).</p>
      </>
    ),
  },
  {
    id: 21021,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is API versioning?",
    answer: (
      <>
        <p>Managing changes to APIs without breaking existing clients. Common strategies: URI versioning (<code>/api/v1/users</code>), query parameter (<code>?version=1</code>), and Accept header versioning.</p>
      </>
    ),
  },
  {
    id: 21022,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the benefits of statelessness in the RESTful webservices?",
    answer: (
      <>
        <p>Benefits: easier horizontal scaling (any server can handle any request), simplified server logic (no session management), better reliability, and improved visibility for monitoring/debugging.</p>
      </>
    ),
  },
  {
    id: 21023,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the disadvantage of statelessness in RESTful Webservices?",
    answer: (
      <>
        <p>Disadvantage: each request must carry complete context information (authentication tokens, etc.), increasing request payload size and potentially reducing network efficiency for repeated data.</p>
      </>
    ),
  },
  {
    id: 21024,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is an idempotent operation?",
    answer: (
      <>
        <p>An operation that produces the same result regardless of how many times it is executed. REST idempotent methods: GET, PUT, DELETE, HEAD, and OPTIONS. POST is non-idempotent.</p>
      </>
    ),
  },
  {
    id: 21025,
    category: 'REST API',
    difficulty: 'easy',
    question: "What do you mean by caching?",
    answer: (
      <>
        <p>Storing responses temporarily to serve future identical requests faster without re-querying the server, improving performance and reducing server load. Controlled via Cache-Control HTTP headers.</p>
      </>
    ),
  },
  {
    id: 21026,
    category: 'REST API',
    difficulty: 'easy',
    question: "Explain how a web service works?",
    answer: (
      <>
        <p>A client sends an HTTP request to a server endpoint URL. The server processes the request (database query, computation), then returns an HTTP response with a status code and data payload (JSON/XML).</p>
      </>
    ),
  },
  {
    id: 21027,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the perks of web services?",
    answer: (
      <>
        <p>Perks: language and platform independence, reusability, loose coupling between systems, standardized communication protocols, and easy integration across distributed applications.</p>
      </>
    ),
  },
  {
    id: 21028,
    category: 'REST API',
    difficulty: 'medium',
    question: "Explain the different types of web services?",
    answer: (
      <>
        <ul><li><strong>SOAP:</strong> Protocol-based, XML messaging, WS-Security support, strict contracts.</li><li><strong>REST:</strong> Architectural style, lightweight, JSON/XML, stateless HTTP-based.</li><li><strong>XML-RPC:</strong> Remote procedure calls using XML over HTTP.</li></ul>
      </>
    ),
  },
  {
    id: 21029,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is a Web Services Description Language?",
    answer: (
      <>
        <p><strong>WSDL</strong> (Web Services Description Language) is an XML-based document describing SOAP web service interfaces — operations, input/output message formats, and endpoint URLs.</p>
      </>
    ),
  },
  {
    id: 21030,
    category: 'REST API',
    difficulty: 'medium',
    question: "What do you mean by UDDI?",
    answer: (
      <>
        <p><strong>UDDI</strong> (Universal Description, Discovery and Integration) is a directory service for registering and discovering web services, allowing businesses to publish and find available web services programmatically.</p>
      </>
    ),
  },
  {
    id: 21031,
    category: 'REST API',
    difficulty: 'easy',
    question: "Name the tools used to test web services.",
    answer: (
      <>
        <p>Tools: Postman, SoapUI (for SOAP), cURL, Insomnia, REST Assured (Java), JMeter (load testing), Swagger UI, and Karate DSL.</p>
      </>
    ),
  },
  {
    id: 21032,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the meaning of Interoperability in Web services?",
    answer: (
      <>
        <p>The ability of web services built on different platforms, languages, or frameworks to communicate and exchange data seamlessly using standard protocols (HTTP, XML, JSON).</p>
      </>
    ),
  },
  {
    id: 21033,
    category: 'REST API',
    difficulty: 'medium',
    question: "Define synchronicity?",
    answer: (
      <>
        <ul><li><strong>Synchronous:</strong> Client waits for the server response before continuing (blocking).</li><li><strong>Asynchronous:</strong> Client sends request and continues without waiting; callback or polling retrieves the response later.</li></ul>
      </>
    ),
  },
  {
    id: 21034,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the use of a Service Transport Layer in the web service protocol stack?",
    answer: (
      <>
        <p>The Service Transport Layer (HTTP/HTTPS, JMS, SMTP) is responsible for transporting messages between applications over the network, forming the foundation of the web service protocol stack.</p>
      </>
    ),
  },
  {
    id: 21035,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is RPC or Remote Procedure Call?",
    answer: (
      <>
        <p>A protocol allowing a program to execute procedures on a remote server as if they were local calls, abstracting network communication. XML-RPC and JSON-RPC are common implementations.</p>
      </>
    ),
  },
  {
    id: 21036,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is a SOAP message?",
    answer: (
      <>
        <p>An XML-formatted message used in SOAP web services consisting of: Envelope (root element), Header (optional metadata), Body (actual request/response data), and Fault (error information).</p>
      </>
    ),
  },
  {
    id: 21037,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is a web service architecture?",
    answer: (
      <>
        <p>A framework defining how web service components (Service Provider, Service Requester, Service Registry) interact using standard protocols (WSDL, UDDI, SOAP/HTTP) to expose and consume services.</p>
      </>
    ),
  },
  {
    id: 21038,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the role of a Web Service requestor/ consumer?",
    answer: (
      <>
        <p>The application that invokes a web service by locating it (via UDDI), reading its description (WSDL), and sending requests to consume the functionality provided by the service provider.</p>
      </>
    ),
  },
  {
    id: 21039,
    category: 'REST API',
    difficulty: 'easy',
    question: "Name the protocol used by RESTful web services.",
    answer: (
      <>
        <p>RESTful web services primarily use <strong>HTTP/HTTPS</strong> as the transport protocol, leveraging its methods (GET, POST, PUT, DELETE) to perform operations on resources.</p>
      </>
    ),
  },
  {
    id: 21040,
    category: 'REST API',
    difficulty: 'easy',
    question: "List the key features of RESTful web services.",
    answer: (
      <>
        <p>Features: stateless communication, resource-based URLs, standard HTTP methods, multiple representation formats (JSON/XML), cacheable responses, and layered system architecture.</p>
      </>
    ),
  },
  {
    id: 21041,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is Statelessness in RESTful web service?",
    answer: (
      <>
        <p>The server does not retain any client session information between requests. Each request is fully self-contained with all required data (credentials, context) included in the request itself.</p>
      </>
    ),
  },
  {
    id: 21042,
    category: 'REST API',
    difficulty: 'medium',
    question: "List some important constraints for RESTful web services.",
    answer: (
      <>
        <p>Constraints: Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, and Code on Demand. The Uniform Interface constraint (resource identification, manipulation via representations) is the most fundamental.</p>
      </>
    ),
  },
  {
    id: 21043,
    category: 'REST API',
    difficulty: 'easy',
    question: "What do you mean by 'Resource'?",
    answer: (
      <>
        <p>Any data or content accessible through a URI — users, products, orders, images. Resources are manipulated via their representations (JSON/XML) using standard HTTP methods.</p>
      </>
    ),
  },
  {
    id: 21044,
    category: 'REST API',
    difficulty: 'medium',
    question: "Explain the Cache-control header.",
    answer: (
      <>
        <p>An HTTP header directive controlling caching behavior. Common values: <code>no-cache</code> (validate before use), <code>no-store</code> (never cache), <code>max-age=3600</code> (cache for 1 hour), <code>public</code>/<code>private</code> (shared vs user-specific cache).</p>
      </>
    ),
  },
  {
    id: 21045,
    category: 'REST API',
    difficulty: 'easy',
    question: "Define Payload?",
    answer: (
      <>
        <p>The data body carried in an HTTP request or response, typically JSON or XML formatted, containing the actual resource data being sent or received (excluding headers).</p>
      </>
    ),
  },
  {
    id: 21046,
    category: 'REST API',
    difficulty: 'medium',
    question: "What do you understand by JAX-RS?",
    answer: (
      <>
        <p><strong>JAX-RS</strong> (Java API for RESTful Web Services) is a Java specification defining annotations and interfaces for building REST web services in Java (e.g., <code>@GET</code>, <code>@Path</code>, <code>@Produces</code>).</p>
      </>
    ),
  },
  {
    id: 21047,
    category: 'REST API',
    difficulty: 'easy',
    question: "List a few HTTP status codes.",
    answer: (
      <>
        <ul><li>200 OK, 201 Created, 204 No Content</li><li>301 Moved Permanently, 304 Not Modified</li><li>400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity</li><li>500 Internal Server Error, 503 Service Unavailable</li></ul>
      </>
    ),
  },
  {
    id: 21048,
    category: 'REST API',
    difficulty: 'medium',
    question: "Mention the different components of WSDL.",
    answer: (
      <>
        <p>WSDL components: &lt;types&gt; (data type definitions), &lt;message&gt; (abstract message definitions), &lt;portType&gt; (operations), &lt;binding&gt; (protocol and format), and &lt;service&gt; (endpoint addresses).</p>
      </>
    ),
  },
  {
    id: 21049,
    category: 'REST API',
    difficulty: 'easy',
    question: "Explain a Resource in Restful web services?",
    answer: (
      <>
        <p>A resource is any addressable unit of information — a document, record, or service — uniquely identified by a URI and manipulated through its representations using HTTP methods.</p>
      </>
    ),
  },
  {
    id: 21050,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the purpose of Accept & Content-Type Headers in the HTTP Request?",
    answer: (
      <>
        <ul><li><strong>Accept:</strong> Tells the server which response formats the client can handle (e.g., <code>application/json</code>).</li><li><strong>Content-Type:</strong> Tells the server the format of the request body being sent (e.g., <code>application/json</code>).</li></ul>
      </>
    ),
  },
  {
    id: 21051,
    category: 'REST API',
    difficulty: 'medium',
    question: "How to choose between SOAP & REST web services?",
    answer: (
      <>
        <p>Choose <strong>SOAP</strong> for enterprise transactions requiring ACID compliance, formal contracts, and WS-Security. Choose <strong>REST</strong> for lightweight, public-facing APIs, mobile clients, and when simplicity and performance matter.</p>
      </>
    ),
  },
  {
    id: 21052,
    category: 'REST API',
    difficulty: 'medium',
    question: "Define JAX-WS API?",
    answer: (
      <>
        <p><strong>JAX-WS</strong> (Java API for XML Web Services) is the Java specification for building SOAP-based web services, using annotations like <code>@WebService</code> and <code>@WebMethod</code> to expose Java classes as SOAP endpoints.</p>
      </>
    ),
  },
  {
    id: 21053,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is a sun-jaxws.xml file?",
    answer: (
      <>
        <p>A deployment descriptor file for JAX-WS web services in a servlet container (Tomcat), mapping endpoint implementation classes to URL patterns for SOAP service deployment.</p>
      </>
    ),
  },
  {
    id: 21054,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is JAX-RS API?",
    answer: (
      <>
        <p>A Java EE specification providing annotations to simplify development of REST web services. Implementations include Jersey, RESTEasy, and Apache CXF.</p>
      </>
    ),
  },
  {
    id: 21055,
    category: 'REST API',
    difficulty: 'hard',
    question: "What do you mean by wsimport utility?",
    answer: (
      <>
        <p>A JAX-WS tool that generates Java client stub classes from a WSDL document, allowing Java programs to call SOAP web services without manually constructing XML messages.</p>
      </>
    ),
  },
  {
    id: 21056,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is the objective of @XmlRootElement annotation?",
    answer: (
      <>
        <p>A JAXB annotation marking a Java class as the root XML element during marshaling/unmarshaling, enabling automatic conversion between Java objects and XML representations in web services.</p>
      </>
    ),
  },
  {
    id: 21057,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are some security issues of a web service?",
    answer: (
      <>
        <p>Issues: SQL injection, XML injection, man-in-the-middle attacks, denial of service (DoS), broken authentication, sensitive data exposure, and insecure direct object references.</p>
      </>
    ),
  },
  {
    id: 21058,
    category: 'REST API',
    difficulty: 'medium',
    question: "What do you understand by safe REST operations?",
    answer: (
      <>
        <p>Safe operations do not modify server state — GET, HEAD, and OPTIONS are safe. They can be cached and bookmarked without side effects. Safe operations are also idempotent.</p>
      </>
    ),
  },
  {
    id: 21059,
    category: 'REST API',
    difficulty: 'medium',
    question: "Is REST scalable or/and interoperable?",
    answer: (
      <>
        <p>Yes to both. REST is highly scalable (stateless design enables horizontal scaling) and interoperable (uses standard HTTP and data formats like JSON/XML that any language or platform understands).</p>
      </>
    ),
  },
  {
    id: 21060,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the benefits of RestTemplate?",
    answer: (
      <>
        <p>Spring's RestTemplate provides a simple, synchronous HTTP client for consuming REST APIs in Java — supporting automatic JSON/XML marshaling, error handling, and all HTTP methods with fluent API.</p>
      </>
    ),
  },
  {
    id: 21061,
    category: 'REST API',
    difficulty: 'medium',
    question: "Define the concept of 'Addressing' in the context of RESTful web services.",
    answer: (
      <>
        <p>Addressing refers to locating resources using unique URIs. Good REST addressing uses hierarchical, noun-based paths (<code>/api/users/123/orders</code>) rather than verb-based paths.</p>
      </>
    ),
  },
  {
    id: 21062,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the fundamental elements of an HTTP request and an HTTP response?",
    answer: (
      <>
        <ul><li><strong>HTTP Request:</strong> Method, URI, HTTP version, Headers, Body (optional).</li><li><strong>HTTP Response:</strong> Status line (version + status code + reason), Headers, Body (optional).</li></ul>
      </>
    ),
  },
  {
    id: 21063,
    category: 'REST API',
    difficulty: 'medium',
    question: "List some significant constraints for RESTful web services.",
    answer: (
      <>
        <p>Constraints: Uniform Interface (consistent resource manipulation), Stateless (no server-side session), Cacheable (responses declare cacheability), Layered System (intermediary transparency), Client-Server separation.</p>
      </>
    ),
  },
  {
    id: 21064,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the significance of a proper representation of a resource?",
    answer: (
      <>
        <p>Resource representations (JSON, XML, HTML) allow clients to read and manipulate resources without knowing server internals. Multiple representations of the same resource enable broader client compatibility.</p>
      </>
    ),
  },
  {
    id: 21065,
    category: 'REST API',
    difficulty: 'medium',
    question: "Enumerate important considerations when designing resource representations for RESTful web services.",
    answer: (
      <>
        <p>Considerations: use JSON as default, maintain consistent property naming (camelCase), include hypermedia links (HATEOAS), version representations, avoid exposing internal IDs or implementation details.</p>
      </>
    ),
  },
  {
    id: 21066,
    category: 'REST API',
    difficulty: 'medium',
    question: "Explain the purpose of the Cache-control header.",
    answer: (
      <>
        <p>Cache-Control directives instruct browsers and proxies how to cache responses. Directives like <code>max-age</code>, <code>no-cache</code>, <code>no-store</code>, and <code>must-revalidate</code> control caching lifetime and validation behavior.</p>
      </>
    ),
  },
  {
    id: 21067,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the recommended practices to follow when designing RESTful web services?",
    answer: (
      <>
        <p>Best practices: use nouns for URIs, proper HTTP methods, return appropriate status codes, version APIs, implement pagination, use HTTPS, document with OpenAPI/Swagger, and follow HATEOAS principles.</p>
      </>
    ),
  },
  {
    id: 21068,
    category: 'REST API',
    difficulty: 'medium',
    question: "What distinguishes the PUT method from the POST method in HTTP?",
    answer: (
      <>
        <ul><li><strong>PUT:</strong> Idempotent — replaces the entire resource at a known URI. Client specifies the resource location.</li><li><strong>POST:</strong> Non-idempotent — creates a new resource, server determines its URI.</li></ul>
      </>
    ),
  },
  {
    id: 21069,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the advantages of SOAP web services?",
    answer: (
      <>
        <p>Advantages: built-in error handling (SOAP Fault), WS-Security support, ACID transaction compliance, language-neutral WSDL contracts, and reliable messaging standards.</p>
      </>
    ),
  },
  {
    id: 21070,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the disadvantages of SOAP web services?",
    answer: (
      <>
        <p>Disadvantages: verbose XML payloads, complex specifications, slower than REST, tightly coupled via WSDL contracts, harder to debug, and requires more bandwidth.</p>
      </>
    ),
  },
  {
    id: 21071,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the key features of SOAP?",
    answer: (
      <>
        <p>Features: XML-based messaging, platform and language independence, extensibility via SOAP headers, WS-Security, built-in error reporting (SOAP Fault), and support for HTTP/SMTP/TCP transports.</p>
      </>
    ),
  },
  {
    id: 21072,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is WSDL?",
    answer: (
      <>
        <p><strong>WSDL</strong> (Web Services Description Language) is an XML document describing a SOAP web service's interface — what operations it exposes, what parameters they accept, and where the service endpoint is located.</p>
      </>
    ),
  },
  {
    id: 21073,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the advantages of RESTful web services?",
    answer: (
      <>
        <p>Advantages: lightweight (JSON payloads), easy to consume by any client, stateless scalability, browser-compatible, wide framework support, and simple to learn and use.</p>
      </>
    ),
  },
  {
    id: 21074,
    category: 'REST API',
    difficulty: 'medium',
    question: "What does SOA (Service Oriented Architecture) refer to?",
    answer: (
      <>
        <p>An architectural pattern organizing software as a collection of interoperable, loosely coupled services communicating over a network, each providing specific business functionality independently.</p>
      </>
    ),
  },
  {
    id: 21075,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the advantages of using XML in web services?",
    answer: (
      <>
        <p>Advantages: platform-independent, self-describing, widely supported, extensible, supports complex data structures, and enables schema validation via XSD.</p>
      </>
    ),
  },
  {
    id: 21076,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the purpose of WSDL in a web service?",
    answer: (
      <>
        <p>WSDL acts as a contract between SOAP service provider and consumer, describing available operations, message formats, data types, and endpoint URLs needed for client integration.</p>
      </>
    ),
  },
  {
    id: 21077,
    category: 'REST API',
    difficulty: 'medium',
    question: "Explain the concept of loosely coupled architecture in web services.",
    answer: (
      <>
        <p>Services interact through well-defined interfaces without knowledge of each other's internal implementation, allowing independent development, deployment, and change with minimal impact on other services.</p>
      </>
    ),
  },
  {
    id: 21078,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the advantages of XML-based web services?",
    answer: (
      <>
        <p>Advantages: language-neutral data exchange, schema validation, namespace support, human-readable format, transformation via XSLT, and mature tooling ecosystem.</p>
      </>
    ),
  },
  {
    id: 21079,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the role of the Service Description layer in the Web Service Protocol Stack?",
    answer: (
      <>
        <p>The Service Description layer (WSDL) provides a standard machine-readable contract describing the web service interface, enabling automatic code generation and client configuration.</p>
      </>
    ),
  },
  {
    id: 21080,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the purpose of the Service Discovery layer in the Web Service Protocol Stack?",
    answer: (
      <>
        <p>The Service Discovery layer (UDDI) enables publishing and discovering web services in a registry, allowing consumers to find available services and their access details dynamically.</p>
      </>
    ),
  },
  {
    id: 21081,
    category: 'REST API',
    difficulty: 'medium',
    question: "Why is the Envelope element used in a SOAP document?",
    answer: (
      <>
        <p>The SOAP Envelope is the mandatory root element that identifies the XML document as a SOAP message, containing the Header (optional metadata) and Body (required message data) child elements.</p>
      </>
    ),
  },
  {
    id: 21082,
    category: 'REST API',
    difficulty: 'medium',
    question: "Explain the layers of the web service protocol stack.",
    answer: (
      <>
        <p>Four layers: Service Transport (HTTP/SMTP), XML Messaging (SOAP/XML-RPC), Service Description (WSDL), and Service Discovery (UDDI). Each layer builds on the previous to enable full web service communication.</p>
      </>
    ),
  },
  {
    id: 21083,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is XML-RPC?",
    answer: (
      <>
        <p>A remote procedure call protocol using XML to encode calls and HTTP as the transport. Predecessor to SOAP, XML-RPC allows programs to call functions on remote systems using simple XML messages.</p>
      </>
    ),
  },
  {
    id: 21084,
    category: 'REST API',
    difficulty: 'hard',
    question: "Explain BEEP.",
    answer: (
      <>
        <p><strong>BEEP</strong> (Blocks Extensible Exchange Protocol) is a general-purpose application layer protocol framework designed for creating new protocols, supporting authentication, encryption, and multiple channels over a single connection.</p>
      </>
    ),
  },
  {
    id: 21085,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the requirements to access a web service?",
    answer: (
      <>
        <p>Requirements: network access to the service endpoint, knowledge of the service interface (WSDL/OpenAPI docs), authentication credentials (API key, token), and a compatible HTTP client.</p>
      </>
    ),
  },
  {
    id: 21086,
    category: 'REST API',
    difficulty: 'easy',
    question: "Which language does UDDI use?",
    answer: (
      <>
        <p>UDDI uses <strong>XML</strong> for all data structures and <strong>SOAP</strong> for communication with the registry. The UDDI registry itself is accessible as a SOAP web service.</p>
      </>
    ),
  },
  {
    id: 21087,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the steps involved in accessing a web service?",
    answer: (
      <>
        <p>Steps: 1. Discover the service (UDDI/docs), 2. Obtain the service description (WSDL/OpenAPI), 3. Generate/configure client, 4. Authenticate (API key/OAuth), 5. Send request, 6. Process response.</p>
      </>
    ),
  },
  {
    id: 21088,
    category: 'REST API',
    difficulty: 'medium',
    question: "How many communication protocols can be used to implement a SOAP message? Is SOAP messages tied to any specific protocol?",
    answer: (
      <>
        <p>SOAP is not tied to any specific protocol. It can be transported over HTTP, HTTPS, SMTP, TCP, JMS, and more. HTTP is the most common, but SOAP's protocol independence is a key feature.</p>
      </>
    ),
  },
  {
    id: 21089,
    category: 'REST API',
    difficulty: 'medium',
    question: "How are the terms 'Platform independent' and 'Diverse Application' related to each other in the context of XML-RPC?",
    answer: (
      <>
        <p>XML-RPC's platform independence (XML over HTTP) enables diverse applications on different OS, languages, and platforms to call each other's procedures seamlessly without shared runtime environments.</p>
      </>
    ),
  },
  {
    id: 21090,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the role of a web service provider or publisher?",
    answer: (
      <>
        <p>The service provider creates, hosts, and publishes the web service — deploying the implementation, registering it in UDDI (optional), and providing access documentation for consumers.</p>
      </>
    ),
  },
  {
    id: 21091,
    category: 'REST API',
    difficulty: 'easy',
    question: "How does a web service provider or publisher differ from a web service requestor or consumer?",
    answer: (
      <>
        <ul><li><strong>Provider:</strong> Creates and exposes the service functionality.</li><li><strong>Consumer:</strong> Discovers, invokes, and uses the service by sending requests and processing responses.</li></ul>
      </>
    ),
  },
  {
    id: 21092,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is HATEOAS and how is it used in RESTful web services?",
    answer: (
      <>
        <p><strong>HATEOAS</strong> (Hypermedia As The Engine Of Application State) means REST responses include links to related actions/resources, allowing clients to navigate the API dynamically without hardcoded URLs.</p>
      </>
    ),
  },
  {
    id: 21093,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is the difference between URI and URL?",
    answer: (
      <>
        <ul><li><strong>URI (Uniform Resource Identifier):</strong> Identifies a resource (broader concept) — can be a URL or URN.</li><li><strong>URL (Uniform Resource Locator):</strong> A URI subtype that specifies both identification AND how to locate the resource (includes protocol + address).</li></ul>
      </>
    ),
  },
  {
    id: 21094,
    category: 'REST API',
    difficulty: 'medium',
    question: "How do you handle errors in RESTful web services?",
    answer: (
      <>
        <p>Return appropriate HTTP status codes (400, 404, 500), include a structured error response body with error code, message, and detail fields, and log errors server-side for debugging.</p>
      </>
    ),
  },
  {
    id: 21095,
    category: 'REST API',
    difficulty: 'medium',
    question: "Can you explain the concept of versioning in RESTful web services?",
    answer: (
      <>
        <p>API versioning allows evolving APIs without breaking existing clients. Strategies: URI path versioning (<code>/v1/users</code>), query parameter (<code>?v=1</code>), custom HTTP header, or Accept header versioning.</p>
      </>
    ),
  },
  {
    id: 21096,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the difference between versioning through URI and through headers?",
    answer: (
      <>
        <ul><li><strong>URI versioning:</strong> Version in URL (<code>/api/v2/users</code>) — visible, cacheable, easy to test.</li><li><strong>Header versioning:</strong> Version in Accept header — cleaner URIs, harder to test in browsers, less cacheable.</li></ul>
      </>
    ),
  },
  {
    id: 21097,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is content negotiation in RESTful web services?",
    answer: (
      <>
        <p>The process where client and server agree on the best response format via <code>Accept</code> (client) and <code>Content-Type</code> (server) headers, supporting multiple representations of the same resource.</p>
      </>
    ),
  },
  {
    id: 21098,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the different media types used in content negotiation?",
    answer: (
      <>
        <p>Common media types: <code>application/json</code>, <code>application/xml</code>, <code>text/html</code>, <code>text/plain</code>, <code>application/x-www-form-urlencoded</code>, and <code>multipart/form-data</code>.</p>
      </>
    ),
  },
  {
    id: 21099,
    category: 'REST API',
    difficulty: 'medium',
    question: "How do you implement caching in RESTful web services?",
    answer: (
      <>
        <p>Set Cache-Control response headers (<code>max-age</code>, <code>ETag</code>, <code>Last-Modified</code>). Clients send conditional requests (<code>If-None-Match</code>, <code>If-Modified-Since</code>) to validate cached responses.</p>
      </>
    ),
  },
  {
    id: 21100,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is the principle behind conditional requests in RESTful web services?",
    answer: (
      <>
        <p>Clients include validators (<code>ETag</code> or <code>Last-Modified</code>) in request headers. The server returns 304 Not Modified if the resource hasn't changed, saving bandwidth and processing time.</p>
      </>
    ),
  },
  {
    id: 21101,
    category: 'REST API',
    difficulty: 'easy',
    question: "Could you highlight the distinctions between a GET request and a POST request in REST API?",
    answer: (
      <>
        <ul><li><strong>GET:</strong> Retrieves data, idempotent, parameters in URL, cacheable, no body.</li><li><strong>POST:</strong> Submits data to create resources, not idempotent, data in request body, not cached by default.</li></ul>
      </>
    ),
  },
  {
    id: 21102,
    category: 'REST API',
    difficulty: 'medium',
    question: "What measures are involved in ensuring the security of a RESTful API?",
    answer: (
      <>
        <p>Measures: HTTPS encryption, authentication (JWT/OAuth2), authorization (RBAC), input validation, rate limiting, CORS policies, API gateway enforcement, and regular security audits.</p>
      </>
    ),
  },
  {
    id: 21103,
    category: 'REST API',
    difficulty: 'medium',
    question: "Can you elucidate the various types of authentication methods used in RESTful web services?",
    answer: (
      <>
        <p>Authentication methods: Basic Auth (Base64 credentials), API Key (in header/query), Bearer Token (JWT), OAuth 2.0 (token delegation), and Mutual TLS (certificate-based).</p>
      </>
    ),
  },
  {
    id: 21104,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the concept behind token-based authentication?",
    answer: (
      <>
        <p>The client authenticates once (username/password), receives a signed token (JWT), and includes it in subsequent request Authorization headers. The server validates the token without storing session state.</p>
      </>
    ),
  },
  {
    id: 21105,
    category: 'REST API',
    difficulty: 'medium',
    question: "How do you address CORS issues in RESTful web services?",
    answer: (
      <>
        <p>Configure the server to include CORS headers: <code>Access-Control-Allow-Origin</code>, <code>Access-Control-Allow-Methods</code>, and <code>Access-Control-Allow-Headers</code> in responses to allow specified cross-origin requests.</p>
      </>
    ),
  },
  {
    id: 21106,
    category: 'REST API',
    difficulty: 'medium',
    question: "In REST API, what distinguishes a PUT request from a PATCH request?",
    answer: (
      <>
        <ul><li><strong>PUT:</strong> Replaces the entire resource with the provided representation.</li><li><strong>PATCH:</strong> Applies partial modifications to a resource — only the fields provided in the request body are updated.</li></ul>
      </>
    ),
  },
  {
    id: 21107,
    category: 'REST API',
    difficulty: 'medium',
    question: "Could you elucidate the concept of rate limiting in RESTful web services?",
    answer: (
      <>
        <p>Rate limiting restricts the number of API requests a client can make within a time window (e.g., 1000 requests/hour), preventing abuse, DoS attacks, and ensuring fair resource distribution.</p>
      </>
    ),
  },
  {
    id: 21108,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can rate limiting be implemented in RESTful web services?",
    answer: (
      <>
        <p>Implement at API gateway or middleware level using token bucket or sliding window algorithms. Return 429 Too Many Requests with <code>Retry-After</code> and <code>X-RateLimit-*</code> headers when limits are exceeded.</p>
      </>
    ),
  },
  {
    id: 21109,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is API throttling, and how is it employed in RESTful web services?",
    answer: (
      <>
        <p>Throttling controls request rates to prevent server overload. It differs from rate limiting by gradually degrading service (slowing responses) rather than hard-blocking, providing a smoother degradation experience.</p>
      </>
    ),
  },
  {
    id: 21110,
    category: 'REST API',
    difficulty: 'hard',
    question: "Can you clarify the concept of load balancing in RESTful web services?",
    answer: (
      <>
        <p>Distributing incoming API requests across multiple server instances to prevent overload, improve availability, and enable horizontal scaling. Stateless REST design makes load balancing seamless.</p>
      </>
    ),
  },
  {
    id: 21111,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can load balancing be implemented within RESTful web services?",
    answer: (
      <>
        <p>Using load balancers (Nginx, AWS ALB, HAProxy) configured with algorithms (round-robin, least connections, IP hash) routing requests to healthy backend instances based on health check results.</p>
      </>
    ),
  },
  {
    id: 21112,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is the role of service discovery, and how is it applied in RESTful web services?",
    answer: (
      <>
        <p>Service discovery enables clients to dynamically find service instances (Consul, Eureka, Kubernetes DNS) without hardcoded addresses, supporting dynamic scaling and failover in microservice architectures.</p>
      </>
    ),
  },
  {
    id: 21113,
    category: 'REST API',
    difficulty: 'hard',
    question: "Could you elaborate on the concept of an API gateway and its role in RESTful web services?",
    answer: (
      <>
        <p>An API gateway is a single entry point for all client requests, handling cross-cutting concerns: routing, authentication, rate limiting, SSL termination, request transformation, and response aggregation.</p>
      </>
    ),
  },
  {
    id: 21114,
    category: 'REST API',
    difficulty: 'medium',
    question: "How does a DELETE request differ from a HEAD request in REST API?",
    answer: (
      <>
        <ul><li><strong>DELETE:</strong> Removes the specified resource from the server. Idempotent.</li><li><strong>HEAD:</strong> Retrieves response headers only (no body) — useful for checking resource existence and metadata without downloading content.</li></ul>
      </>
    ),
  },
  {
    id: 21115,
    category: 'REST API',
    difficulty: 'hard',
    question: "What sets an API gateway apart from a reverse proxy?",
    answer: (
      <>
        <ul><li><strong>Reverse Proxy:</strong> Routes requests to backend servers, handles SSL and basic load balancing.</li><li><strong>API Gateway:</strong> Adds API-specific features — authentication, rate limiting, request/response transformation, API composition, and analytics.</li></ul>
      </>
    ),
  },
  {
    id: 21116,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can token-based authentication be implemented in RESTful web services?",
    answer: (
      <>
        <p>Client logs in &rarr; server returns signed JWT &rarr; client stores token &rarr; includes it as <code>Authorization: Bearer &lt;token&gt;</code> header in requests &rarr; server validates signature and expiry on each request.</p>
      </>
    ),
  },
  {
    id: 21117,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the role of JWT (JSON Web Token) in RESTful web services?",
    answer: (
      <>
        <p>JWT provides stateless authentication by encoding user claims in a cryptographically signed token (header.payload.signature), eliminating the need for server-side session storage.</p>
      </>
    ),
  },
  {
    id: 21118,
    category: 'REST API',
    difficulty: 'medium',
    question: "Can you provide an explanation of OAuth and its relevance in RESTful web services?",
    answer: (
      <>
        <p>OAuth 2.0 is an authorization framework enabling third-party applications to access user resources on behalf of the user without exposing credentials. Common in REST APIs for delegated authorization flows.</p>
      </>
    ),
  },
  {
    id: 21119,
    category: 'REST API',
    difficulty: 'easy',
    question: "What distinguishes a query parameter from a path parameter in REST API?",
    answer: (
      <>
        <ul><li><strong>Path parameter:</strong> Part of the URI path identifying a specific resource: <code>/users/123</code></li><li><strong>Query parameter:</strong> Appended after ? for filtering/sorting: <code>/users?role=admin&amp;page=2</code></li></ul>
      </>
    ),
  },
  {
    id: 21120,
    category: 'REST API',
    difficulty: 'medium',
    question: "How are authentication and authorization typically managed in a REST API?",
    answer: (
      <>
        <p>Authentication via JWT/OAuth tokens in Authorization header. Authorization via middleware checking user roles/permissions against the requested resource and action before processing the request.</p>
      </>
    ),
  },
  {
    id: 21121,
    category: 'REST API',
    difficulty: 'medium',
    question: "What methods can be used to handle versioning changes in a RESTful API?",
    answer: (
      <>
        <p>Methods: URI versioning (<code>/v2/</code>), request header versioning, Accept header versioning, query parameter versioning. Use semantic versioning, deprecation notices, and maintain backward compatibility during transitions.</p>
      </>
    ),
  },
  {
    id: 21122,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the benefits of using RESTful web services?",
    answer: (
      <>
        <p>Benefits: lightweight JSON payloads, stateless scalability, easy client integration, broad language/platform support, browser compatibility, caching support, and simple debugging with standard HTTP tools.</p>
      </>
    ),
  },
  {
    id: 21123,
    category: 'REST API',
    difficulty: 'easy',
    question: "How do HTTP status codes differ between successful and failed requests in REST API?",
    answer: (
      <>
        <ul><li><strong>Success (2xx):</strong> 200 OK, 201 Created, 204 No Content.</li><li><strong>Client Error (4xx):</strong> 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found.</li><li><strong>Server Error (5xx):</strong> 500 Internal Server Error, 503 Service Unavailable.</li></ul>
      </>
    ),
  },
  {
    id: 21124,
    category: 'REST API',
    difficulty: 'medium',
    question: "Can you explain the concept of pagination in RESTful web services?",
    answer: (
      <>
        <p>Pagination splits large result sets into manageable pages using parameters like <code>page</code> and <code>size</code> (or cursor-based pagination). Responses include total count, next/prev page links.</p>
      </>
    ),
  },
  {
    id: 21125,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the distinction between CORS and CSRF?",
    answer: (
      <>
        <ul><li><strong>CORS (Cross-Origin Resource Sharing):</strong> Browser mechanism controlling which cross-origin requests are allowed.</li><li><strong>CSRF (Cross-Site Request Forgery):</strong> Attack where malicious sites trick authenticated users into unintended actions. Mitigated with CSRF tokens.</li></ul>
      </>
    ),
  },
  {
    id: 21126,
    category: 'REST API',
    difficulty: 'medium',
    question: "How do DELETE and TRUNCATE methods differ in database operations?",
    answer: (
      <>
        <ul><li><strong>DELETE:</strong> DML, row-by-row removal, transactional (rollback possible), fires triggers.</li><li><strong>TRUNCATE:</strong> DDL, removes all rows instantly, non-transactional in most DBs, faster, does not fire row triggers.</li></ul>
      </>
    ),
  },
  {
    id: 21127,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can logging be implemented in RESTful web services?",
    answer: (
      <>
        <p>Use middleware/interceptors to log request method, URI, headers, response status, and latency. Tools: Log4j, SLF4J, ELK stack (Elasticsearch/Logstash/Kibana), or cloud logging (AWS CloudWatch, Datadog).</p>
      </>
    ),
  },
  {
    id: 21128,
    category: 'REST API',
    difficulty: 'easy',
    question: "What distinguishes a stateless API from a stateful API in REST API?",
    answer: (
      <>
        <ul><li><strong>Stateless:</strong> Server stores no client session data — each request is self-contained. Easier to scale.</li><li><strong>Stateful:</strong> Server maintains client session state between requests. Harder to scale horizontally.</li></ul>
      </>
    ),
  },
  {
    id: 21129,
    category: 'REST API',
    difficulty: 'hard',
    question: "What is the concept of tracing in RESTful web services?",
    answer: (
      <>
        <p>Distributed tracing tracks request flow across multiple services by propagating a unique trace ID through request headers, visualizing the end-to-end call chain and identifying latency bottlenecks.</p>
      </>
    ),
  },
  {
    id: 21130,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can tracing be implemented within RESTful web services?",
    answer: (
      <>
        <p>Implement using OpenTelemetry or Zipkin — inject trace/span IDs in request headers (<code>X-B3-TraceId</code>), propagate across service calls, and visualize traces in Jaeger, Zipkin, or Datadog APM.</p>
      </>
    ),
  },
  {
    id: 21131,
    category: 'REST API',
    difficulty: 'hard',
    question: "Could you provide an explanation of the concept of observability in the context of RESTful web services?",
    answer: (
      <>
        <p>Observability is the ability to understand a system's internal state from its external outputs using three pillars: Logs (events), Metrics (quantitative measurements), and Traces (request flows across services).</p>
      </>
    ),
  },
  {
    id: 21132,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can observability be effectively integrated into RESTful web services?",
    answer: (
      <>
        <p>Integrate structured logging (JSON logs), expose Prometheus metrics via <code>/metrics</code> endpoint, implement distributed tracing with OpenTelemetry, and use dashboards (Grafana) for visualization and alerting.</p>
      </>
    ),
  },
  {
    id: 21133,
    category: 'REST API',
    difficulty: 'medium',
    question: "What distinguishes synchronous from asynchronous communication within RESTful web services?",
    answer: (
      <>
        <ul><li><strong>Synchronous:</strong> Client waits for response before proceeding (standard REST request/response).</li><li><strong>Asynchronous:</strong> Server returns 202 Accepted immediately; client polls or receives webhook notification when processing completes.</li></ul>
      </>
    ),
  },
  {
    id: 21134,
    category: 'REST API',
    difficulty: 'medium',
    question: "What is the contrast between versioning an API via URI and via media type in REST API?",
    answer: (
      <>
        <ul><li><strong>URI versioning:</strong> <code>/api/v2/</code> — simple, cacheable, widely adopted.</li><li><strong>Media type versioning:</strong> <code>Accept: application/vnd.myapi.v2+json</code> — RESTful purist approach, cleaner URIs, harder to consume.</li></ul>
      </>
    ),
  },
  {
    id: 21135,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can asynchronous communication be implemented within RESTful web services?",
    answer: (
      <>
        <p>Patterns: return 202 Accepted with a polling URL, use message queues (RabbitMQ, Kafka) for background processing, or implement webhooks where server POSTs results to a client-registered callback URL.</p>
      </>
    ),
  },
  {
    id: 21136,
    category: 'REST API',
    difficulty: 'easy',
    question: "What are the diverse message formats commonly employed in RESTful web services?",
    answer: (
      <>
        <p>Formats: JSON (most common), XML, YAML, Protocol Buffers (binary/gRPC), MessagePack (binary JSON), CSV (for tabular data), and Multipart (file uploads).</p>
      </>
    ),
  },
  {
    id: 21137,
    category: 'REST API',
    difficulty: 'hard',
    question: "Could you elucidate the concept of message brokers and their role within RESTful web services?",
    answer: (
      <>
        <p>Message brokers (RabbitMQ, Apache Kafka) decouple REST services by routing asynchronous messages between producers and consumers, enabling event-driven architectures and reliable background processing.</p>
      </>
    ),
  },
  {
    id: 21138,
    category: 'REST API',
    difficulty: 'medium',
    question: "How do RESTful web services differ from microservices in terms of their architectural approach?",
    answer: (
      <>
        <ul><li><strong>REST:</strong> An API communication style defining how services expose resources over HTTP.</li><li><strong>Microservices:</strong> An architectural pattern decomposing applications into small independent services — they often use REST APIs to communicate with each other.</li></ul>
      </>
    ),
  },
  {
    id: 21139,
    category: 'REST API',
    difficulty: 'medium',
    question: "Can you explain the concept of containerization and how it is used in RESTful web services?",
    answer: (
      <>
        <p>Containerization (Docker) packages REST service code with dependencies into portable containers, ensuring consistent deployment across environments. Kubernetes orchestrates containers for scaling and self-healing.</p>
      </>
    ),
  },
  {
    id: 21140,
    category: 'REST API',
    difficulty: 'medium',
    question: "What distinguishes RESTful web services from GraphQL?",
    answer: (
      <>
        <ul><li><strong>REST:</strong> Multiple endpoints, server-defined response shape, can over/under-fetch data.</li><li><strong>GraphQL:</strong> Single endpoint, client-defined query shape, always returns exactly requested fields — eliminates over/under-fetching.</li></ul>
      </>
    ),
  },
  {
    id: 21141,
    category: 'REST API',
    difficulty: 'hard',
    question: "Can you elucidate the concept of webhooks and their utilization in RESTful web services?",
    answer: (
      <>
        <p>Webhooks are user-defined HTTP callbacks — when an event occurs on the server, it POSTs a payload to a client-registered URL, enabling real-time event notifications without polling.</p>
      </>
    ),
  },
  {
    id: 21142,
    category: 'REST API',
    difficulty: 'medium',
    question: "What distinguishes the usage of caching between client-side and server-side caches in REST API?",
    answer: (
      <>
        <ul><li><strong>Client-side:</strong> Browser/app caches responses locally using Cache-Control headers, reducing repeat network requests.</li><li><strong>Server-side:</strong> Redis/Memcached caches database query results server-side, reducing backend load.</li></ul>
      </>
    ),
  },
  {
    id: 21143,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can webhooks be implemented within RESTful web services?",
    answer: (
      <>
        <p>Allow clients to register callback URLs. On events, asynchronously POST JSON payloads to those URLs, include HMAC signatures for verification, implement retry logic with exponential backoff for failed deliveries.</p>
      </>
    ),
  },
  {
    id: 21144,
    category: 'REST API',
    difficulty: 'medium',
    question: "What distinguishes Swagger from OpenAPI?",
    answer: (
      <>
        <ul><li><strong>Swagger:</strong> Original toolset (UI, Codegen, Editor) for API design. Became the OpenAPI Specification at version 3.0.</li><li><strong>OpenAPI:</strong> The language-agnostic specification standard (formerly Swagger Spec) for describing REST APIs.</li></ul>
      </>
    ),
  },
  {
    id: 21145,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can input parameter validation be implemented in a RESTful API?",
    answer: (
      <>
        <p>Validate at the API gateway and application layers using JSON Schema validation, framework validators (Bean Validation in Java), or middleware. Return 400 Bad Request with descriptive error messages on failures.</p>
      </>
    ),
  },
  {
    id: 21146,
    category: 'REST API',
    difficulty: 'medium',
    question: "What steps are involved in implementing pagination in a REST API?",
    answer: (
      <>
        <p>Steps: accept <code>page</code> and <code>size</code> (or <code>cursor</code>) parameters, query database with LIMIT/OFFSET (or cursor), return results with metadata (total, nextPage, prevPage links in response).</p>
      </>
    ),
  },
  {
    id: 21147,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the diverse techniques employed for searching within RESTful web services?",
    answer: (
      <>
        <p>Techniques: query parameters (<code>?q=term</code>), dedicated search endpoints (<code>/search</code>), full-text search via Elasticsearch, OData query syntax, and GraphQL queries for complex filtering.</p>
      </>
    ),
  },
  {
    id: 21148,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can search functionality be effectively implemented within RESTful web services?",
    answer: (
      <>
        <p>Implement via GET query parameters for simple filters, integrate with Elasticsearch for full-text search, apply database indexes on searchable fields, and return paginated results with relevance scoring.</p>
      </>
    ),
  },
  {
    id: 21149,
    category: 'REST API',
    difficulty: 'medium',
    question: "How does monolithic architecture differ from microservice architecture?",
    answer: (
      <>
        <ul><li><strong>Monolithic:</strong> Single deployable unit containing all components. Simpler initially, harder to scale independently.</li><li><strong>Microservices:</strong> Independent services per business domain. Independently deployable, scalable, but operationally complex.</li></ul>
      </>
    ),
  },
  {
    id: 21150,
    category: 'REST API',
    difficulty: 'hard',
    question: "What's the process for migrating a monolithic application to a microservices architecture?",
    answer: (
      <>
        <p>Use the Strangler Fig pattern: identify bounded contexts, extract services incrementally starting from high-value domains, implement API gateway routing, establish service-to-service communication, and decommission monolith sections progressively.</p>
      </>
    ),
  },
  {
    id: 21151,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are the various testing strategies for a RESTful API?",
    answer: (
      <>
        <p>Strategies: Unit tests (service logic), Integration tests (database interactions), Contract tests (Pact), End-to-end tests (Postman/Newman), Load tests (JMeter/k6), and Security tests (OWASP ZAP).</p>
      </>
    ),
  },
  {
    id: 21152,
    category: 'REST API',
    difficulty: 'hard',
    question: "How can backward compatibility be handled in RESTful web services?",
    answer: (
      <>
        <p>Techniques: additive changes only (new optional fields), version APIs for breaking changes, use deprecation headers (<code>Deprecation</code>, <code>Sunset</code>), maintain old versions in parallel, and communicate migration timelines.</p>
      </>
    ),
  },
  {
    id: 21153,
    category: 'REST API',
    difficulty: 'medium',
    question: "What role does API documentation play in a RESTful web service?",
    answer: (
      <>
        <p>Documentation (OpenAPI/Swagger) enables developers to understand and integrate the API quickly, reducing support overhead, enabling client code generation, and serving as a contract between teams.</p>
      </>
    ),
  },
  {
    id: 21154,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are best practices for securing a RESTful API?",
    answer: (
      <>
        <p>Best practices: enforce HTTPS, use OAuth2/JWT, validate all inputs, implement rate limiting, use parameterized queries, apply principle of least privilege, log security events, and regularly scan for vulnerabilities.</p>
      </>
    ),
  },
  {
    id: 21155,
    category: 'REST API',
    difficulty: 'medium',
    question: "How can validation be implemented for output parameters in a RESTful API?",
    answer: (
      <>
        <p>Validate response schemas using JSON Schema or API contract testing (Pact/Spring Cloud Contract). Filter sensitive fields before serialization and use response DTOs to control what gets exposed.</p>
      </>
    ),
  },
  {
    id: 21156,
    category: 'REST API',
    difficulty: 'medium',
    question: "Is it possible to send a payload in the GET and DELETE methods?",
    answer: (
      <>
        <p>Technically possible per HTTP spec, but strongly discouraged. GET and DELETE are semantically intended for retrieval/deletion using URI identification. Many servers/proxies ignore or reject bodies on GET/DELETE requests.</p>
      </>
    ),
  },
  {
    id: 21157,
    category: 'REST API',
    difficulty: 'easy',
    question: "What is Postman, and why is it used?",
    answer: (
      <>
        <p>Postman is a popular API testing and development tool that allows developers to send HTTP requests, inspect responses, organize collections, automate tests, generate documentation, and mock APIs.</p>
      </>
    ),
  },
  {
    id: 21158,
    category: 'REST API',
    difficulty: 'medium',
    question: "What are some major security issues faced by web services?",
    answer: (
      <>
        <p>Issues: broken authentication, sensitive data exposure, XML/JSON injection, SQL injection, insufficient logging, denial of service attacks, MITM attacks, insecure deserialization, and broken access control.</p>
      </>
    ),
  },
  {
    id: 21159,
    category: 'REST API',
    difficulty: 'easy',
    question: "What does the 'Options' HTTP method do in REST APIs?",
    answer: (
      <>
        <p>OPTIONS returns the allowed HTTP methods and headers for a given resource URL, used by browsers for CORS preflight requests to check if the actual request is safe to send cross-origin.</p>
      </>
    ),
  },
];

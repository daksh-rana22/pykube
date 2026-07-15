import React from 'react';

export const SOAP_QUESTIONS = [
  {
    id: 26001,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is SOAP or SOAP Web Services?",
    answer: (
      <>
        <p><strong>SOAP (Simple Object Access Protocol)</strong> is an XML-based messaging protocol specification for exchanging structured information in the implementation of web services across computer networks. It allows processes running on disparate operating systems (such as Windows, Linux, and macOS) to communicate seamlessly using XML.</p>
        <p>Key traits of SOAP web services include:</p>
        <ul>
          <li><strong>Protocol-based:</strong> Unlike REST, which is an architectural style, SOAP is a highly structured protocol with strict standards and specifications.</li>
          <li><strong>XML Payload:</strong> All requests and responses are strictly formatted in XML.</li>
          <li><strong>Transport Independence:</strong> SOAP can operate over various transport protocols, including HTTP, HTTPS, SMTP, JMS, and TCP.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26002,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain how SOAP works?",
    answer: (
      <>
        <p>SOAP functions as a communication framework using XML documents to exchange messages between a client and a service provider. The typical workflow is as follows:</p>
        <ol>
          <li><strong>WSDL Retrieval:</strong> The client reads the WSDL (Web Services Description Language) file of the SOAP service to understand the available methods, data structures, and endpoints.</li>
          <li><strong>Proxy Generation:</strong> The client generates a local stub/proxy based on the WSDL to call methods locally as if they were native objects.</li>
          <li><strong>Message Packaging:</strong> When a method is called, the stub serializes the input parameters into a SOAP XML envelope.</li>
          <li><strong>Transmission:</strong> The SOAP message is sent over a transport protocol (usually HTTP POST) to the server endpoint.</li>
          <li><strong>Processing & Response:</strong> The server's SOAP engine parses the XML request, executes the method, packages the return value (or exception details as a <code>Fault</code>) into a SOAP XML envelope, and sends it back to the client.</li>
        </ol>
      </>
    ),
  },
  {
    id: 26003,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "When are the uses of SOAP API?",
    answer: (
      <>
        <p>Although REST has become highly popular for general web integration, SOAP APIs remain critical in enterprise ecosystems. SOAP is used in scenarios that require:</p>
        <ul>
          <li><strong>Strict Contract Compliance:</strong> When client and server need to agree on a formal, machine-readable contract (defined via WSDL) that strictly validates data payloads.</li>
          <li><strong>High Security:</strong> Enterprise applications requiring message-level encryption, digital signatures, and security token propagation using <strong>WS-Security</strong>.</li>
          <li><strong>Distributed Transactions:</strong> Transactions spanning multiple database nodes that require ACID compliance via standards like <strong>WS-AtomicTransaction</strong>.</li>
          <li><strong>Reliable Messaging:</strong> Systems that cannot afford message loss or duplicates, utilizing <strong>WS-ReliableMessaging</strong>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26004,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "How can users deploy the facilities provided by SOAP?",
    answer: (
      <>
        <p>Developers deploy SOAP services by creating service implementations and exposing them via an application container. The general lifecycle involves:</p>
        <ul>
          <li><strong>Writing the Service:</strong> Designing the interfaces and implementation classes in frameworks like JAX-WS (Java), Apache CXF (Java), or WCF (.NET).</li>
          <li><strong>Generating the WSDL:</strong> Generating the service contract either using code annotations (Code-First) or writing the XML schemas directly (Contract-First).</li>
          <li><strong>Hosting:</strong> Deploying the compiled service archive to an application server (e.g., Tomcat, GlassFish, WildFly, or IIS).</li>
          <li><strong>Exposing the Endpoint:</strong> Publishing the endpoint URL where clients can query the WSDL (e.g., <code>http://host/service?wsdl</code>) and send SOAP requests.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26005,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are some major obstacles that users face when using SOAP?",
    answer: (
      <>
        <p>While SOAP is highly robust, it comes with several challenges and obstacles:</p>
        <ul>
          <li><strong>Performance Overhead:</strong> Parsing and serialization of XML documents are highly CPU and memory intensive compared to lightweight JSON.</li>
          <li><strong>Payload Verbosity:</strong> The SOAP Envelope and namespaces add substantial size to requests/responses, resulting in high bandwidth consumption.</li>
          <li><strong>Complexity:</strong> The WS-* standards ecosystem (WS-Security, WS-Reliability, etc.) is difficult to configure and debug.</li>
          <li><strong>Rigid Contracts:</strong> Any change in the data structures or methods requires rebuilding the WSDL contract and regenerating the client-side stubs.</li>
          <li><strong>Browser Support:</strong> Direct integration with browser-based JavaScript applications is complex compared to REST.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26006,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Mention different approaches for developing SOAP-based web services?",
    answer: (
      <>
        <p>There are two primary development methodologies for implementing SOAP web services:</p>
        <ul>
          <li><strong>Top-Down (Contract-First) Approach:</strong> You start by defining the WSDL file and XML schema (XSD) to specify the interface. Then, you generate Java/C# stubs and implementation classes from this WSDL using tools like <code>wsimport</code>. This keeps the service contract decoupled from implementation.</li>
          <li><strong>Bottom-Up (Code-First) Approach:</strong> You start by writing the Java/C# classes and marking them with annotations (like <code>@WebService</code>). The development tools then auto-generate the WSDL and XSD from the compiled source code. This is faster but code changes can easily break clients.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26007,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are the key elements of the SOAP message structure?",
    answer: (
      <>
        <p>A SOAP message is structured as a standard XML document and consists of the following elements:</p>
        <ul>
          <li><strong>Envelope:</strong> The mandatory root element that identifies the XML document as a SOAP message.</li>
          <li><strong>Header:</strong> An optional element containing metadata such as security credentials, transaction IDs, routing info, and routing priorities.</li>
          <li><strong>Body:</strong> The mandatory element containing the actual application request or response data (payload).</li>
          <li><strong>Fault:</strong> An optional element located inside the SOAP Body used to report errors and exception messages from the server.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26008,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Define the syntax rules for the SOAP message?",
    answer: (
      <>
        <p>For an XML document to be processed as a valid SOAP message, it must conform to these syntax rules:</p>
        <ul>
          <li>The message must be encoded using <strong>XML (Extensible Markup Language)</strong>.</li>
          <li>It must use the mandatory SOAP Envelope namespace (e.g., <code>http://schemas.xmlsoap.org/soap/envelope/</code> for SOAP 1.1).</li>
          <li>It **must not** contain any Document Type Definition (DTD) references.</li>
          <li>It **must not** contain XML Processing Instructions.</li>
          <li>Elements must follow the exact structure: Envelope contains optional Header, followed by mandatory Body.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26009,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What do you mean by the transport method in SOAP?",
    answer: (
      <>
        <p>The <strong>transport method</strong> is the underlying network layer protocol used to transmit the SOAP XML payload between the requestor and provider. While REST relies almost exclusively on HTTP, SOAP is transport-independent.</p>
        <p>Common transport protocols include:</p>
        <ul>
          <li><strong>HTTP/HTTPS:</strong> Most common, making SOAP firewall-friendly as port 80/443 are generally open.</li>
          <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> Used for asynchronous/queue-based email messaging.</li>
          <li><strong>JMS (Java Message Service):</strong> Used inside enterprise systems for transactional and queue-based communications.</li>
          <li><strong>TCP:</strong> Used for high-speed, direct network socket communication.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26010,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What are some main characteristics of the SOAP envelope element?",
    answer: (
      <>
        <p>The <code>&lt;Envelope&gt;</code> is the foundational element of any SOAP document. Its key characteristics include:</p>
        <ul>
          <li>It acts as the root container element of the SOAP XML message.</li>
          <li>It defines the SOAP namespace prefix and schema version boundaries.</li>
          <li>If the envelope uses an incorrect namespace URL, the receiver will reject the message and raise a <code>VersionMismatch</code> SOAP Fault.</li>
          <li>It encapsulates the metadata headers and the body payload.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26011,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What are the major functionalities of the SOAP protocol class?",
    answer: (
      <>
        <p>In runtime engines (such as Apache CXF, Metro, or JAX-WS libraries), the SOAP protocol classes manage low-level details of communication:</p>
        <ul>
          <li><strong>Marshalling/Serialization:</strong> Converting programming language objects into SOAP XML streams.</li>
          <li><strong>Unmarshalling/Deserialization:</strong> Parsing the incoming SOAP XML payload back into language-specific structures/objects.</li>
          <li><strong>Handler Processing:</strong> Executing interceptors (handlers) defined for headers, authorization, logging, and security.</li>
          <li><strong>Error translation:</strong> Intercepting exceptions thrown during method execution and packaging them into standard XML <code>&lt;soapenv:Fault&gt;</code> blocks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26012,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "Enlist the web relation functionalities offered by the SOAP protocol?",
    answer: (
      <>
        <p>The SOAP protocol family includes standard specifications (WS-* specifications) that handle various enterprise network situations:</p>
        <ul>
          <li><strong>Addressing (WS-Addressing):</strong> Embeds routing information in SOAP Headers, allowing transport-neutral endpoint addressing.</li>
          <li><strong>Security (WS-Security):</strong> Direct digital signing and encryption of specific portions of the SOAP envelope.</li>
          <li><strong>Reliability (WS-ReliableMessaging):</strong> Ensures end-to-end message delivery with duplicate protection over unreliable connections.</li>
          <li><strong>Policy (WS-Policy):</strong> Enables services to publish security constraints and interface rules in a machine-readable format.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26013,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are the benefits of SOAP?",
    answer: (
      <>
        <p>The primary benefits of using SOAP web services include:</p>
        <ul>
          <li><strong>Interoperability:</strong> Enables diverse applications (e.g., a .NET web app and a Java backend) to interact without platform-specific dependencies.</li>
          <li><strong>Standardized Security:</strong> Built-in support for <strong>WS-Security</strong>, allowing message-level signatures and encryption.</li>
          <li><strong>Reliability:</strong> Incorporates <strong>WS-ReliableMessaging</strong> for guaranteed delivery.</li>
          <li><strong>Formal Contract (WSDL):</strong> Provides a clear specification of methods, making integration predictable and verifiable.</li>
          <li><strong>Stateful Operations:</strong> Support for stateful operations through header metadata, unlike REST which is strictly stateless.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26014,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Mention some disadvantages of SOAP?",
    answer: (
      <>
        <p>SOAP has several trade-offs that make it less suitable for some applications:</p>
        <ul>
          <li><strong>Slow Performance:</strong> XML parsing and DOM traversal take significantly longer and consume more CPU cycles than JSON.</li>
          <li><strong>Large Message Size:</strong> The SOAP structure and verbose namespace declarations increase the payload size, raising bandwidth consumption.</li>
          <li><strong>Rigid Structure:</strong> Strict validation schemas make updates and changes to API endpoints complex and less flexible.</li>
          <li><strong>Complex Standards:</strong> WS-* standards require heavy configuration and support from advanced tooling.</li>
          <li><strong>No Native Caching:</strong> HTTP requests are always POST, which cannot be cached by default at the HTTP proxy level.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26015,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Comparison between REST & SOAP?",
    answer: (
      <>
        <p>Key differences between REST and SOAP include:</p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>SOAP</th>
              <th>REST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nature</strong></td>
              <td>Protocol with strict specifications</td>
              <td>Architectural style based on guidelines</td>
            </tr>
            <tr>
              <td><strong>Data Format</strong></td>
              <td>XML only</td>
              <td>JSON, XML, Plain Text, HTML, etc.</td>
            </tr>
            <tr>
              <td><strong>Contract</strong></td>
              <td>WSDL defines methods and schemas</td>
              <td>OpenAPI/Swagger (Optional documentation)</td>
            </tr>
            <tr>
              <td><strong>Security</strong></td>
              <td>WS-Security (message level)</td>
              <td>HTTPS/TLS, OAuth2, JWT (transport level)</td>
            </tr>
            <tr>
              <td><strong>Caching</strong></td>
              <td>Cannot be cached (uses POST)</td>
              <td>Highly cacheable (uses GET, HEAD)</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 26016,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is the difference between the Bottom-Up & Top-Down approach in SOAP?",
    answer: (
      <>
        <p>The approaches differ in where the development flow begins:</p>
        <ul>
          <li><strong>Top-Down (Contract-First):</strong>
            <ul>
              <li>Starts with the creation of the WSDL and XML schema (XSD).</li>
              <li>Java/C# classes are generated from the WSDL.</li>
              <li>Keeps the contract strictly independent of the code, preventing developers from breaking compatibility during code edits.</li>
            </ul>
          </li>
          <li><strong>Bottom-Up (Code-First):</strong>
            <ul>
              <li>Starts by writing the application code (e.g., Java class with annotations).</li>
              <li>The WSDL contract is generated automatically from the code.</li>
              <li>Faster and easier to implement, but changes in Java classes can silently change the generated WSDL, breaking existing client configurations.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 26017,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Mention a few frameworks in Java to implement the SOAP web services?",
    answer: (
      <>
        <p>Several frameworks simplify developing SOAP-based web services in Java:</p>
        <ul>
          <li><strong>JAX-WS (Jakarta/Java API for XML Web Services):</strong> The standard API integrated into the Java platform. It uses annotations to configure services.</li>
          <li><strong>Apache CXF:</strong> A popular open-source services framework combining Axis and XFire. It supports JAX-WS and has robust WS-* support.</li>
          <li><strong>Spring Web Services (Spring WS):</strong> Focused on Contract-First SOAP service development. It uses Spring bean configurations to handle XML processing.</li>
          <li><strong>Apache Axis2:</strong> A robust, high-performance messaging engine for SOAP and web services.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26018,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What is the difference between Document Style & RPC Style SOAP web Services?",
    answer: (
      <>
        <p>These specify how the SOAP message is structured and bound in the WSDL:</p>
        <ul>
          <li><strong>RPC Style:</strong>
            <ul>
              <li>The SOAP Body contains XML that mimics a remote procedure call (method name, parameter elements).</li>
              <li>Less flexible, tightly coupled to programming code, and validation against a schema is difficult.</li>
              <li>Uses WSDL element: <code>style="rpc"</code>.</li>
            </ul>
          </li>
          <li><strong>Document Style:</strong>
            <ul>
              <li>The SOAP Body contains a clean, well-formed XML document conforming to a specific XSD schema.</li>
              <li>Highly flexible, loosely coupled, and easily validated against schema. It is the modern enterprise standard.</li>
              <li>Uses WSDL element: <code>style="document"</code>.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 26019,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are the key features of SOAP?",
    answer: (
      <>
        <p>The core features that define SOAP include:</p>
        <ul>
          <li><strong>Extensibility:</strong> Supported by the WS-* standards (security, transactions, routing).</li>
          <li><strong>Neutrality:</strong> Able to operate over any programming language, operating system, and network transport (HTTP, SMTP, TCP).</li>
          <li><strong>Structured Envelope:</strong> Separates business payload (Body) from message infrastructure metadata (Header).</li>
          <li><strong>Error Handling:</strong> Standardized <code>Fault</code> format for returning explicit runtime exception messages to clients.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26020,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a SOAP message?",
    answer: (
      <>
        <p>A <strong>SOAP message</strong> is an XML document designed for network transmission. It consists of the following elements:</p>
        <div className="qa-code-block">{`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <!-- Optional: security tokens, transaction IDs -->
  </soapenv:Header>
  <soapenv:Body>
    <!-- Mandatory: method request/response parameters -->
    <soapenv:Fault>
      <!-- Optional: error status messages -->
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>`}</div>
      </>
    ),
  },
  {
    id: 26021,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Why do you need the element in a SOAP document?",
    answer: (
      <>
        <p>A SOAP document requires structured XML elements because XML is the universal syntax that allows applications on different systems to parse the payload correctly. Specifically:</p>
        <ul>
          <li><strong>Envelope Element:</strong> Declares the XML document namespace as a SOAP message and bounds the parsing scope.</li>
          <li><strong>Header Element:</strong> Essential for processing non-application metadata (like authentication, routing, and session tokens) before reading the main payload.</li>
          <li><strong>Body Element:</strong> Essential as it holds the actual arguments or return objects for the service. Without these elements, a SOAP parser would not be able to identify, validate, or unpack the data.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26022,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Highlight the differences between the SOAP webservices & other remote access techniques?",
    answer: (
      <>
        <p>Comparing SOAP to RMI, CORBA, or DCOM highlights key advances in web integration:</p>
        <ul>
          <li><strong>Firewall Compatibility:</strong> SOAP travels over HTTP (ports 80/443), while binary protocols (RMI/CORBA) use custom ports that firewalls block.</li>
          <li><strong>Language Neutrality:</strong> RMI is restricted to Java. SOAP integrates Java, C#, C++, Python, PHP, and other systems.</li>
          <li><strong>Loose Coupling:</strong> DCOM/CORBA require binary stubs and tight dependency matching. SOAP clients only need a WSDL definition.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26023,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Differentiate between JSON & SOAP?",
    answer: (
      <>
        <p>Comparison between JSON and SOAP:</p>
        <ul>
          <li><strong>Type:</strong> JSON is a lightweight text-based data serialization format (key-value). SOAP is a complete messaging protocol based on XML.</li>
          <li><strong>Syntax:</strong> JSON is minimal and highly readable; SOAP is verbose and surrounded by envelopes, tags, and namespaces.</li>
          <li><strong>Validation:</strong> JSON uses JSON Schema (optional); SOAP enforces strict, mandatory XML validation against XSD schemas defined in the WSDL.</li>
          <li><strong>Use Cases:</strong> JSON is standard for web/mobile apps and REST; SOAP is utilized for B2B integration, transactions, and secure enterprise messaging.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26024,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What are the key differences between SOAP web service & RESTful web service?",
    answer: (
      <>
        <p>Main differences between SOAP and RESTful web services include:</p>
        <ul>
          <li><strong>Architecture:</strong> SOAP is a protocol; REST is an architectural style based on HTTP principles.</li>
          <li><strong>Formats:</strong> SOAP supports XML; REST supports JSON, XML, HTML, and text.</li>
          <li><strong>Contract:</strong> SOAP requires WSDL; REST uses swagger/OpenAPI or plain documentation.</li>
          <li><strong>Bandwidth:</strong> SOAP requires more bandwidth due to XML payload sizes; REST is lightweight.</li>
          <li><strong>Statefulness:</strong> SOAP can be stateful (via headers); REST is strictly stateless.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26025,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are the main components of a SOAP web service?",
    answer: (
      <>
        <p>A SOAP web service architecture consists of three main components:</p>
        <ul>
          <li><strong>SOAP Protocol:</strong> The XML messaging standard used to exchange packets between the sender and receiver.</li>
          <li><strong>WSDL (Web Services Description Language):</strong> The XML document describing the interface, parameters, and endpoints.</li>
          <li><strong>UDDI (Universal Description, Discovery, and Integration):</strong> The catalog/directory service where companies register and locate services.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26026,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What do you mean by MTOM?",
    answer: (
      <>
        <p><strong>MTOM (Message Transmission Optimization Mechanism)</strong> is a W3C recommendation for optimizing how binary data (like images, PDFs, zip files) is transmitted inside a SOAP message.</p>
        <p>Normally, binary data must be encoded in Base64 strings to be placed inside XML, which increases the payload size by approximately 33% and places heavy CPU load on encoders. MTOM solves this by extracting the binary content and sending it outside the SOAP envelope in raw binary format inside a MIME multipart attachment, using a reference element inside the SOAP XML to link to it.</p>
      </>
    ),
  },
  {
    id: 26027,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What is an XOP?",
    answer: (
      <>
        <p><strong>XOP (XML-binary Optimized Packaging)</strong> is the XML standard used by MTOM to optimize binary packaging. XOP defines a way to serialize an XML Infoset containing binary data by placing the binary parts into one or more package attachments (like MIME parts).</p>
        <p>Inside the SOAP XML, the binary content is replaced with a special <code>&lt;xop:Include&gt;</code> element that points to the attachment's Content-ID:</p>
        <div className="qa-code-block">{`<xop:Include href="cid:filePart1" xmlns:xop="http://www.w3.org/2004/08/xop/include"/>`}</div>
      </>
    ),
  },
  {
    id: 26028,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is JAXB?",
    answer: (
      <>
        <p><strong>JAXB (Java Architecture for XML Binding)</strong> is a framework that provides an easy way to convert Java classes into XML (Marshalling) and XML documents into Java classes (Unmarshalling).</p>
        <p>It uses annotations like <code>@XmlRootElement</code>, <code>@XmlElement</code>, and <code>@XmlType</code> on plain Java objects (POJOs) to establish mappings. JAX-WS uses JAXB internally to map Java method parameters to SOAP XML messages.</p>
      </>
    ),
  },
  {
    id: 26029,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What does a SOAP encodingStyle attribute define?",
    answer: (
      <>
        <p>The <code>encodingStyle</code> attribute is used to declare serialization rules within a SOAP message. It contains a URI pointing to the encoding rules used for the elements (e.g., <code>http://schemas.xmlsoap.org/soap/encoding/</code> for SOAP Section 5 encoding).</p>
        <p>This tells the SOAP parser how to represent arrays, objects, structs, and primitive types in XML. In modern document-style services, this attribute is often omitted because validation is handled by explicit XSD schemas.</p>
      </>
    ),
  },
  {
    id: 26030,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "How web services differ from CORBA & DCOM?",
    answer: (
      <>
        <p>Web services solve interoperability issues that restricted CORBA and DCOM:</p>
        <ul>
          <li><strong>Standards:</strong> Web services use open internet standards (XML, HTTP, SOAP), whereas CORBA uses IIOP and DCOM uses RPC.</li>
          <li><strong>Platform:</strong> DCOM is proprietary to Microsoft Windows; web services run on any system.</li>
          <li><strong>Firewalls:</strong> Web services run over port 80/443 (HTTP), which is firewall-friendly. CORBA/DCOM require custom port ranges, making them difficult to host over public networks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26031,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is a wsgen tool?",
    answer: (
      <>
        <p><code>wsgen</code> is a JAX-WS command-line utility. In Bottom-Up (Code-First) development, it processes a compiled Java service implementation class (SIB) and generates the required artifacts for deployment:</p>
        <ul>
          <li>JAX-WS request/response wrapper classes.</li>
          <li>XML Schema (XSD) documents.</li>
          <li>A complete WSDL file representing the annotated Java interface.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26032,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is UDDI?",
    answer: (
      <>
        <p><strong>UDDI (Universal Description, Discovery, and Integration)</strong> is an XML-based registry standard for listing and locating web services on the internet. It operates like a business directory (Yellow Pages):</p>
        <ul>
          <li><strong>White Pages:</strong> Business contact information.</li>
          <li><strong>Yellow Pages:</strong> Service classifications.</li>
          <li><strong>Green Pages:</strong> Technical details of the web services (WSDL links and endpoints).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26033,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain the term \"binding\" in the context of SOAP.",
    answer: (
      <>
        <p>In web services (WSDL), a <strong>binding</strong> defines how a portType (interface) is bound to a concrete physical protocol and data style. It specifies:</p>
        <ul>
          <li>The transport protocol used (e.g., HTTP transport, SMTP).</li>
          <li>The style of message binding (e.g., <code>style="document"</code> or <code>style="rpc"</code>).</li>
          <li>The encoding rules used (e.g., <code>use="literal"</code> or <code>use="encoded"</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26034,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Can SOAP be used over protocols other than HTTP?",
    answer: (
      <>
        <p><strong>Yes</strong>, SOAP is designed to be transport-independent. While HTTP is the most common protocol, SOAP envelopes can be routed using other protocols:</p>
        <ul>
          <li><strong>SMTP:</strong> Using mail systems to pass messages asynchronously.</li>
          <li><strong>JMS:</strong> Passing SOAP envelopes over message queues (ActiveMQ, IBM MQ) for transaction support and queue buffering.</li>
          <li><strong>FTP:</strong> Exchanging SOAP requests via file transfer.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26035,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "How do you handle versioning in SOAP web services?",
    answer: (
      <>
        <p>Versioning is critical to prevent breaking existing clients. Common strategies include:</p>
        <ul>
          <li><strong>XML Namespaces:</strong> Changing the schema namespace to represent a version change, e.g., mapping <code>xmlns:v1="http://example.com/schema/v1"</code> to <code>xmlns:v2="http://example.com/schema/v2"</code>.</li>
          <li><strong>Endpoint URL Routing:</strong> Hosting different service instances at separate URLs: <code>/services/v1/UserService</code> and <code>/services/v2/UserService</code>.</li>
          <li><strong>Backward Compatibility:</strong> Structuring the XML schemas so new parameters are marked as optional, allowing old stubs to continue interacting without failing validation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26036,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What is the concept of SOAP fault and how it is handled in SOAP web services?",
    answer: (
      <>
        <p>A <strong>SOAP Fault</strong> is an XML element placed within the SOAP Body to report errors from the web service to the client. It standardizes the error contract.</p>
        <p>A SOAP Fault contains:</p>
        <ul>
          <li><code>faultcode</code>: Standard codes (e.g., <code>VersionMismatch</code>, <code>MustUnderstand</code>, <code>Client</code>, <code>Server</code>).</li>
          <li><code>faultstring</code>: Human-readable error description.</li>
          <li><code>detail</code>: Custom application-specific error elements.</li>
        </ul>
        <p>When an error occurs, the server responds with an HTTP status code 500 containing the SOAP Fault payload, which client frameworks intercept and throw as local exceptions.</p>
      </>
    ),
  },
  {
    id: 26037,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What is WS-Security and why is it important in SOAP web services?",
    answer: (
      <>
        <p><strong>WS-Security</strong> (Web Services Security) is a set of specifications for securing SOAP messages at the message level. Rather than relying solely on transport-level security (HTTPS), WS-Security secures the XML payload itself.</p>
        <p>It is important because it provides:</p>
        <ul>
          <li><strong>End-to-End Security:</strong> Secured data remains encrypted even as the message travels through intermediate routers and gateways.</li>
          <li><strong>Message Integrity:</strong> Uses XML Digital Signatures to verify that the message content was not tampered with.</li>
          <li><strong>Confidentiality:</strong> Uses XML Encryption to encrypt sensitive elements within the SOAP envelope.</li>
          <li><strong>Identity Propagation:</strong> Supports security tokens (SAML, UsernameToken, X.509 certificates).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26038,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What are SOAP headers? How are they different from the body of the message?",
    answer: (
      <>
        <p>SOAP headers and body serve distinct purposes in a SOAP message:</p>
        <ul>
          <li><strong>SOAP Header:</strong> Contains non-application metadata. It is used to pass infrastructure information like security tokens, transaction details, or routing instructions. Intermediaries (such as gateways) can read and process headers.</li>
          <li><strong>SOAP Body:</strong> Contains the actual business data (payload) intended for the final recipient endpoint (e.g., method name and parameters).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26039,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Highlight the difference between web services and API?",
    answer: (
      <>
        <p>The differences between APIs and Web Services are:</p>
        <ul>
          <li><strong>Scope:</strong> All web services are APIs, but not all APIs are web services.</li>
          <li><strong>Connectivity:</strong> Web services always require a network connection to communicate. APIs can be local (like JARs, DLLs, or system libraries) without using a network.</li>
          <li><strong>Protocols:</strong> Web services use open web protocols (HTTP, SOAP, XML, REST) to exchange data. APIs can use any messaging model, function calls, or file systems.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26040,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is SOAP HTTP Binding?",
    answer: (
      <>
        <p><strong>SOAP HTTP Binding</strong> defines how SOAP messages are mapped into HTTP requests and responses. It configures:</p>
        <ul>
          <li><strong>Request Method:</strong> Maps SOAP requests to HTTP POST requests.</li>
          <li><strong>Headers:</strong> The request must specify HTTP headers like <code>Content-Type: text/xml</code> (for SOAP 1.1) or <code>application/soap+xml</code> (for SOAP 1.2), along with a <code>SOAPAction</code> header.</li>
          <li><strong>Response Codes:</strong> Successful executions map to HTTP 200 OK. Server errors or validation failures return HTTP 500 Internal Server Error with a SOAP Fault payload.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26041,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the end point in web services?",
    answer: (
      <>
        <p>An <strong>endpoint</strong> is a web address (URL) where a web service can be accessed by client applications. It represents the physical entry point to the web service, e.g., <code>https://api.company.com/soap/v1/PaymentService</code>.</p>
      </>
    ),
  },
  {
    id: 26042,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a SOAP envelope element?",
    answer: (
      <>
        <p>The <code>&lt;Envelope&gt;</code> is the mandatory root element of every SOAP message. It marks the start and end of the message, defines the SOAP namespace, and wraps the Header and Body elements.</p>
      </>
    ),
  },
  {
    id: 26043,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Difference between a web service and SOA?",
    answer: (
      <>
        <p>Key differences include:</p>
        <ul>
          <li><strong>SOA (Service-Oriented Architecture):</strong> An architectural pattern and design methodology where application components are built as reusable, loosely coupled services. It is a concept.</li>
          <li><strong>Web Service:</strong> A technical implementation (using SOAP, REST, XML, WSDL) that can be used to realize and build an SOA-compliant system.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26044,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the use of Accept and Content-Type Headers in HTTP Request?",
    answer: (
      <>
        <p>These headers manage media formats in HTTP interactions:</p>
        <ul>
          <li><strong>Accept:</strong> A request header sent by the client to indicate the format(s) it expects the server to send back (e.g., <code>application/json</code> or <code>application/xml</code>).</li>
          <li><strong>Content-Type:</strong> Indicates the media format of the payload currently sent in the body of the HTTP request or response (e.g., <code>text/xml; charset=utf-8</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26045,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Mention some popular annotations used in JAX-WS API?",
    answer: (
      <>
        <p>Key annotations used in JAX-WS include:</p>
        <ul>
          <li><code>@WebService</code>: Marks a Java class or interface as a web service.</li>
          <li><code>@WebMethod</code>: Exposes a specific method as an operation.</li>
          <li><code>@WebParam</code>: Binds a method parameter to an XML element.</li>
          <li><code>@WebResult</code>: Configures the return value's XML tag.</li>
          <li><code>@SOAPBinding</code>: Configures the style and encoding of the service (RPC or Document).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26046,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is JAX-RS API?",
    answer: (
      <>
        <p><strong>JAX-RS (Java API for RESTful Web Services)</strong> is a Java specification that provides annotations (like <code>@Path</code>, <code>@GET</code>, <code>@POST</code>, <code>@Produces</code>) to simplify the development of RESTful web services. It contrasts with JAX-WS, which is for SOAP.</p>
      </>
    ),
  },
  {
    id: 26047,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is the use of @XmlRootElement annotation?",
    answer: (
      <>
        <p><code>@XmlRootElement</code> is a JAXB annotation. When placed on a Java class, it tells JAXB that this class can be mapped to a top-level XML element, enabling objects of this type to be marshalled to or unmarshalled from XML documents.</p>
      </>
    ),
  },
  {
    id: 26048,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What tools are used to test web services?",
    answer: (
      <>
        <p>Common tools for testing web services include:</p>
        <ul>
          <li><strong>SoapUI:</strong> A popular tool specifically designed to test SOAP APIs, inspect WSDLs, mock services, and perform assertions.</li>
          <li><strong>Postman:</strong> Commonly used for REST services, but also supports raw SOAP XML requests.</li>
          <li><strong>Apache JMeter:</strong> Used for performance and load testing.</li>
          <li><strong>cURL:</strong> A command-line utility for executing raw HTTP requests.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26049,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is synchronicity?",
    answer: (
      <>
        <p>Synchronicity refers to the execution timing model between the sender and receiver:</p>
        <ul>
          <li><strong>Synchronous:</strong> The client sends a request and blocks execution, waiting for the server to process and return a response.</li>
          <li><strong>Asynchronous:</strong> The client sends a request and continues executing other tasks. The response is handled later using callbacks, polling, or message queues.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26050,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a remote procedure call (RPC)?",
    answer: (
      <>
        <p>A <strong>Remote Procedure Call (RPC)</strong> is a protocol/mechanism that allows a program to execute a function on a remote server as if it were a local function call, abstracting away the low-level network details from the developer.</p>
      </>
    ),
  },
  {
    id: 26051,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is a web service architecture?",
    answer: (
      <>
        <p>The web service architecture describes how different roles interact:</p>
        <ul>
          <li><strong>Service Provider:</strong> The server that implements and hosts the web service.</li>
          <li><strong>Service Registry:</strong> A central directory (like UDDI) where providers publish service details and contracts.</li>
          <li><strong>Service Requestor:</strong> The client application that searches the registry, retrieves the WSDL, and binds to the provider to call methods.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26052,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What is BEEP?",
    answer: (
      <>
        <p><strong>BEEP (Blocks Extensible Exchange Protocol)</strong> is a generic application protocol framework designed to build two-way, multiplexed, connection-oriented application protocols. It can be used as an alternative transport layer for SOAP messages, providing features TCP/IP lacks without the overhead of HTTP.</p>
      </>
    ),
  },
  {
    id: 26053,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Name the different HTTP methods that RESTful web services support?",
    answer: (
      <>
        <p>RESTful APIs leverage HTTP verbs to perform actions on resources:</p>
        <ul>
          <li><code>GET</code>: Read resource.</li>
          <li><code>POST</code>: Create resource.</li>
          <li><code>PUT</code>: Update/replace resource.</li>
          <li><code>DELETE</code>: Delete resource.</li>
          <li><code>PATCH</code>: Apply partial updates.</li>
          <li><code>HEAD</code>: Retrieve headers only.</li>
          <li><code>OPTIONS</code>: Discover allowed HTTP methods.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26054,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the role of web service provider?",
    answer: (
      <>
        <p>The web service provider implements the business logic of the service, generates the technical contract (WSDL), deploys the service, registers it in directories (if needed), and processes incoming SOAP requests to return responses.</p>
      </>
    ),
  },
  {
    id: 26055,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain the difference between document-style and RPC-style SOAP web services.",
    answer: (
      <>
        <p>Comparison between Styles:</p>
        <ul>
          <li><strong>RPC-Style:</strong> The SOAP body conforms to a structure resembling a method call with parameters. It is highly coupled and does not validate easily against schemas.</li>
          <li><strong>Document-Style:</strong> The SOAP body contains an XML document defined by an XSD schema. It allows loose coupling, can be validated, and is the standard for modern integration.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26056,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the role of an endpoint in SOAP Web Services?",
    answer: (
      <>
        <p>The endpoint is the network address (URL) where the SOAP container listens for SOAP XML messages. It routes incoming XML packets to the corresponding service implementation bean.</p>
      </>
    ),
  },
  {
    id: 26057,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What are the foundational security services?",
    answer: (
      <>
        <p>The five core principles of data security in network environments include:</p>
        <ul>
          <li><strong>Authentication:</strong> Confirming the identity of the user/client.</li>
          <li><strong>Authorization:</strong> Confirming that the authenticated user has permissions to run the operation.</li>
          <li><strong>Confidentiality:</strong> Preventing eavesdropping by encrypting data.</li>
          <li><strong>Integrity:</strong> Verifying that data has not been modified in transit.</li>
          <li><strong>Non-repudiation:</strong> Ensuring that a sender cannot deny having sent a message.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26058,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Define an Entrust Identification Service?",
    answer: (
      <>
        <p>The <strong>Entrust Identification Service</strong> is a security service within the Entrust IdentityGuard platform. It provides authentication, digital certificates, and validation capabilities to authenticate users, devices, and web services securely.</p>
      </>
    ),
  },
  {
    id: 26059,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What do you mean by Entrust Privacy Service?",
    answer: (
      <>
        <p>The <strong>Entrust Privacy Service</strong> is a data protection service that secures files, messages, and email traffic. It uses XML encryption and digital signatures to secure sensitive web service messages, ensuring data remains private during transmission.</p>
      </>
    ),
  },
  {
    id: 26060,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain different elements of WSDL documents?",
    answer: (
      <>
        <p>A WSDL (Web Services Description Language) document describes a service using these main XML elements:</p>
        <ul>
          <li><code>&lt;types&gt;</code>: Defines the data types used in messages (typically using XML Schema/XSD).</li>
          <li><code>&lt;message&gt;</code>: Defines the parameters and output structures.</li>
          <li><code>&lt;portType&gt;</code>: Defines the operations (methods) and their associated input/output messages.</li>
          <li><code>&lt;binding&gt;</code>: Specifies the physical protocol (e.g., SOAP over HTTP) and format for a portType.</li>
          <li><code>&lt;service&gt;</code>: Defines the physical addresses (endpoint URLs) where ports are hosted.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26061,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What are the operation type responses used in WSDL?",
    answer: (
      <>
        <p>WSDL supports four transmission primitives (operations):</p>
        <ul>
          <li><strong>One-way:</strong> The service endpoint receives a message but does not send a response.</li>
          <li><strong>Request-response:</strong> The service receives a request and returns a response (most common).</li>
          <li><strong>Solicit-response:</strong> The service endpoint sends a message and waits for a response from the client.</li>
          <li><strong>Notification:</strong> The service sends a message but does not wait for a response.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26062,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain the two attributes of a < Port > element?",
    answer: (
      <>
        <p>The <code>&lt;port&gt;</code> element inside WSDL associates a binding with an address. Its two key attributes are:</p>
        <ul>
          <li><strong>name:</strong> A unique name to identify the port within the service (e.g., <code>UserServicePort</code>).</li>
          <li><strong>binding:</strong> A reference to the binding description to be used (e.g., <code>tns:UserServiceSoapBinding</code>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26063,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What important things should be considered by ports while binding?",
    answer: (
      <>
        <p>When associating a port with a binding, developers must consider:</p>
        <ul>
          <li><strong>Protocol Match:</strong> The port address URL schema (like <code>http://</code> or <code>jms://</code>) must match the transport specified in the binding.</li>
          <li><strong>Style Coherence:</strong> The binding style (document vs RPC) must be supported by the endpoint container.</li>
          <li><strong>URL Security:</strong> Staging vs production environments must configure secure URLs (HTTPS) for production ports.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26064,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain what are the different layers of the web service protocol stack?",
    answer: (
      <>
        <p>The web service protocol stack organizes technologies into four layers:</p>
        <ul>
          <li><strong>Service Transport Layer:</strong> Responsible for transporting messages (HTTP, SMTP, JMS).</li>
          <li><strong>XML Messaging Layer:</strong> Responsible for formatting messages in a standardized XML structure (SOAP, XML-RPC).</li>
          <li><strong>Service Description Layer:</strong> Describes the technical interface (WSDL).</li>
          <li><strong>Service Discovery Layer:</strong> Publishes and discovers services in directories (UDDI).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26065,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is statelessness in RESTful web Services?",
    answer: (
      <>
        <p><strong>Statelessness</strong> means the server does not store client session state between requests. Every request from a client must contain all metadata and parameters required to parse and authorize the request, allowing horizontal scaling of servers.</p>
      </>
    ),
  },
  {
    id: 26066,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What are the key elements of the SOAP Document or message?",
    answer: (
      <>
        <p>The key elements are:</p>
        <ul>
          <li><code>&lt;soap:Envelope&gt;</code>: Root tag.</li>
          <li><code>&lt;soap:Header&gt;</code>: Metadata and security info (optional).</li>
          <li><code>&lt;soap:Body&gt;</code>: Method payload.</li>
          <li><code>&lt;soap:Fault&gt;</code>: Error information (optional, inside Body).</li>
        </ul>
      </>
    ),
  },
  {
    id: 26067,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is the difference between .NET Web services and .NET Remoting?",
    answer: (
      <>
        <p>Key differences between .NET Web Services and Remoting include:</p>
        <ul>
          <li><strong>.NET Web Services:</strong> Use SOAP over HTTP. They are platform-independent, firewall-friendly, and stateless.</li>
          <li><strong>.NET Remoting:</strong> Uses binary formats over TCP. It is faster but limited to .NET-to-.NET communication, supporting stateful objects and custom channels.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26068,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "What are the three different packages in JAXB binding framework?",
    answer: (
      <>
        <p>The core parts of JAXB are organized in these standard Java packages:</p>
        <ul>
          <li><code>jakarta.xml.bind</code> (previously <code>javax.xml.bind</code>): Contains interfaces/classes for Marshallers, Unmarshallers, and Contexts.</li>
          <li><code>jakarta.xml.bind.annotation</code>: Contains annotations like <code>@XmlRootElement</code> used to configure mappings.</li>
          <li><code>jakarta.xml.bind.helpers</code>: Provides utility implementation classes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26069,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Difference between Web services and CORBA or DCOM?",
    answer: (
      <>
        <p>Web services run over open XML standards and HTTP, enabling cross-platform communication over firewalls. CORBA and DCOM are binary, proprietary frameworks that run over custom ports, making them difficult to scale across separate corporate networks.</p>
      </>
    ),
  },
  {
    id: 26070,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "How is security achieved in SOAP web services?",
    answer: (
      <>
        <p>Security is implemented using a multi-layer strategy:</p>
        <ul>
          <li><strong>Transport Layer Security:</strong> Hosting the endpoint over HTTPS (SSL/TLS) to encrypt the transmission line.</li>
          <li><strong>Message-Level Security:</strong> Implementing WS-Security. This encrypts and signs parts of the XML payload itself, ensuring the data remains protected even if intermediate proxies read the message.</li>
          <li><strong>Credentials:</strong> Passing tokens (SAML, UsernameToken) in the SOAP Header.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26071,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is JAX-RPC?",
    answer: (
      <>
        <p><strong>JAX-RPC (Java API for XML-based RPC)</strong> is the legacy Java API for SOAP. It supported RPC-style services. JAX-RPC has been deprecated and replaced by JAX-WS, which fully supports modern document-style services, MTOM, and is aligned with JAXB.</p>
      </>
    ),
  },
  {
    id: 26072,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Difference between RMI and Web Services?",
    answer: (
      <>
        <p>Comparison:</p>
        <ul>
          <li><strong>RMI:</strong> Java-only, requires both client and server to run JVMs. Fast binary communication over custom TCP sockets.</li>
          <li><strong>Web Services:</strong> Platform-neutral. A Python client can invoke a Java-based SOAP service using standard XML text over HTTP.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26073,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is gRPC?",
    answer: (
      <>
        <p><strong>gRPC (Google Remote Procedure Call)</strong> is a high-performance, open-source RPC framework. It uses <strong>Protocol Buffers</strong> (binary serialization) instead of XML/JSON and runs over <strong>HTTP/2</strong>, supporting multiplexing, bidirectional streaming, and low latency.</p>
      </>
    ),
  },
  {
    id: 26074,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the difference between Microservice and REST?",
    answer: (
      <>
        <p><strong>REST</strong> is an API architectural style for resource communication. <strong>Microservices</strong> is a system architecture pattern where a large application is decomposed into small, independent services. Microservices often communicate with each other using REST.</p>
      </>
    ),
  },
  {
    id: 26075,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the difference between REST and GraphQL?",
    answer: (
      <>
        <p>In REST, endpoints return fixed payloads. In GraphQL, clients write queries specifying exactly the fields they need, reducing the problem of fetching too much or too little data.</p>
      </>
    ),
  },
  {
    id: 26076,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a wsimport tool?",
    answer: (
      <>
        <p><code>wsimport</code> is a JAX-WS command-line tool. It reads a WSDL file and generates the corresponding client-side stubs (Java class files) and service endpoints, allowing Java applications to invoke SOAP services using normal method calls.</p>
      </>
    ),
  },
  {
    id: 26077,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a resource in REST?",
    answer: (
      <>
        <p>In REST, a <strong>resource</strong> is any object or entity (e.g., a User, an Order, a File) that is exposed by the API. Resources are identified and accessed via unique URIs (such as <code>/api/v1/orders/45</code>).</p>
      </>
    ),
  },
  {
    id: 26078,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Difference between PUT and POST?",
    answer: (
      <>
        <p>Differences include:</p>
        <ul>
          <li><strong>PUT:</strong> Idempotent. Replaces or creates the target resource at the exact URL. Multiple calls produce the same state.</li>
          <li><strong>POST:</strong> Non-idempotent. Submits data to be processed, often creating a new resource with a server-generated ID. Multiple calls create duplicate entries.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26079,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is WADL?",
    answer: (
      <>
        <p><strong>WADL (Web Application Description Language)</strong> is an XML-based description of RESTful web services. It describes the available resource paths, HTTP methods, and representations, acting as the REST equivalent of WSDL.</p>
      </>
    ),
  },
  {
    id: 26080,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Name the frameworks available to implement REST Web Services?",
    answer: (
      <>
        <p>Popular frameworks for building REST APIs in Java include:</p>
        <ul>
          <li>Spring Boot (Spring MVC)</li>
          <li>Jersey (Reference implementation of JAX-RS)</li>
          <li>RESTEasy</li>
          <li>Apache CXF</li>
          <li>Restlet</li>
        </ul>
      </>
    ),
  },
  {
    id: 26081,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is a RESTlet framework?",
    answer: (
      <>
        <p><strong>Restlet</strong> is a lightweight, open-source Java framework that supports building REST APIs. It provides a client and server API, enabling developers to build, test, and consume REST services.</p>
      </>
    ),
  },
  {
    id: 26082,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Define RESTeasy framework?",
    answer: (
      <>
        <p><strong>RESTEasy</strong> is a JBoss project providing a certified JAX-RS implementation for building RESTful web services. It integrates with Java EE environments (like WildFly) and supports client frameworks.</p>
      </>
    ),
  },
  {
    id: 26083,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Difference between REST and AJAX?",
    answer: (
      <>
        <p>Differences include:</p>
        <ul>
          <li><strong>REST:</strong> A backend architectural style for design of web service APIs.</li>
          <li><strong>AJAX (Asynchronous JavaScript and XML):</strong> A client-side web technology used to execute asynchronous requests from the browser to fetch data without page reloads.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26084,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "How to choose between REST and SOAP web services?",
    answer: (
      <>
        <p>Choose based on your system constraints:</p>
        <ul>
          <li><strong>Choose SOAP:</strong> When security is paramount (WS-Security), transactions are distributed (WS-AtomicTransaction), or there is an absolute need for strict contract compliance.</li>
          <li><strong>Choose REST:</strong> When building public APIs, mobile integrations, performance-sensitive systems, or web front-ends needing JSON.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26085,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "How does MTOM improves SOAP web service performance?",
    answer: (
      <>
        <p>MTOM optimizes binary transfers. By packaging binary objects outside the XML envelope as MIME attachments, it eliminates Base64 parsing overhead. This reduces message sizes by 33% and improves performance on the server and client.</p>
      </>
    ),
  },
  {
    id: 26086,
    category: 'SOAP Web Services',
    difficulty: 'hard',
    question: "Explain the difference between SOAP over SMTP.",
    answer: (
      <>
        <p>SOAP over SMTP is an asynchronous, queuing integration style. Unlike SOAP over HTTP (where the client blocks waiting for a server response), SMTP carries the message as an email. It goes through mail relays and can be delivered later if the recipient server is offline, making it reliable for batch/fire-and-forget patterns.</p>
      </>
    ),
  },
  {
    id: 26087,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Explain the role of the SOAP Fault element.",
    answer: (
      <>
        <p>The SOAP <code>Fault</code> element standardizes error reporting. It sits inside the SOAP Body and returns structured codes and descriptions when an error occurs, helping clients handle exceptions uniformly.</p>
      </>
    ),
  },
  {
    id: 26088,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is web service function?",
    answer: (
      <>
        <p>A web service function (operation) is a specific method exposed by a web service. It accepts input XML payloads, processes business logic, and returns output XML payloads.</p>
      </>
    ),
  },
  {
    id: 26089,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "Mention the different types of web services.",
    answer: (
      <>
        <p>Web service architectures include:</p>
        <ul>
          <li>SOAP Web Services</li>
          <li>RESTful Web Services</li>
          <li>XML-RPC</li>
          <li>JSON-RPC</li>
          <li>gRPC</li>
        </ul>
      </>
    ),
  },
  {
    id: 26090,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "How do web services provide interoperability among different platforms and systems?",
    answer: (
      <>
        <p>They establish a uniform interface using open standards (XML, HTTP, JSON). Because every operating system and language has parsers for XML and JSON, applications can exchange data regardless of their internal implementation languages.</p>
      </>
    ),
  },
  {
    id: 26091,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "How is UDDI used in web services?",
    answer: (
      <>
        <p>UDDI acts as a registration directory. A provider registers their web service technical info (such as the WSDL file link) in UDDI, and clients search the directory to locate and bind to the service.</p>
      </>
    ),
  },
  {
    id: 26092,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is an operation in web services?",
    answer: (
      <>
        <p>An operation is an abstract description of a method supported by a web service, detailing its inputs and outputs. It is defined inside the WSDL's <code>portType</code> element.</p>
      </>
    ),
  },
  {
    id: 26093,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is web service registry?",
    answer: (
      <>
        <p>A web service registry is a database or directory (e.g., UDDI) where service providers publish technical specifications and endpoints, enabling clients to search and integrate them.</p>
      </>
    ),
  },
  {
    id: 26094,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is a Web Service Provider?",
    answer: (
      <>
        <p>A web service provider is the platform or application server that implements the web service logic, exposes the endpoints, and processes requests from client applications.</p>
      </>
    ),
  },
  {
    id: 26095,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "Mention the primary security issues with web services?",
    answer: (
      <>
        <p>Primary security risks include:</p>
        <ul>
          <li><strong>Eavesdropping:</strong> Unencrypted traffic being read.</li>
          <li><strong>Injection Attacks:</strong> XML injection or SQL injection inside payloads.</li>
          <li><strong>Denial of Service (DoS):</strong> Large, recursive XML structures (XML bombs) exhausting server resources.</li>
          <li><strong>Spoofing:</strong> Attackers sending modified XML messages.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26096,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the role of Service Requestor in Web Service architecture?",
    answer: (
      <>
        <p>The Service Requestor (Client) queries registries to discover services, downloads WSDL definitions, generates stubs, formats parameters into XML, and calls the provider endpoints.</p>
      </>
    ),
  },
  {
    id: 26097,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What are the best factors that should be followed for designing a secure RESTful web service?",
    answer: (
      <>
        <p>Key security factors for RESTful APIs include:</p>
        <ul>
          <li>Enforce HTTPS/TLS connections.</li>
          <li>Use robust authentication (OAuth2, JWT).</li>
          <li>Perform input validation and sanitize request parameters.</li>
          <li>Implement rate limiting to prevent DDoS.</li>
          <li>Configure CORS policies strictly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 26098,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is web service protocol stack?",
    answer: (
      <>
        <p>The web service protocol stack is a conceptual model organizing the protocols used in web services: transport (HTTP/TCP), messaging (SOAP/XML), description (WSDL), and discovery (UDDI).</p>
      </>
    ),
  },
  {
    id: 26099,
    category: 'SOAP Web Services',
    difficulty: 'medium',
    question: "What is WebService attribute in web services?",
    answer: (
      <>
        <p>In Java (JAX-WS) and C# (.NET WCF), the <code>@WebService</code> annotation or attribute is placed on a class to declare it as a web service, prompting the compiler/runtime to build its SOAP WSDL interface.</p>
      </>
    ),
  },
  {
    id: 26100,
    category: 'SOAP Web Services',
    difficulty: 'easy',
    question: "What is the purpose of HTTP in web services?",
    answer: (
      <>
        <p>HTTP acts as the primary transport protocol, enabling SOAP XML or REST JSON payloads to travel over standard web ports (80/443), facilitating communication across firewalls.</p>
      </>
    ),
  }
];

import React from 'react';

export const DOCKER_QUESTIONS = [
  {
    id: 4001,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Define the term, Docker?",
    answer: (
      <>
        <p><strong>Docker</strong> is an open-source platform designed to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.</p>
      </>
    ),
  },
  {
    id: 4002,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What are the key benefits of using a Docker container?",
    answer: (
      <>
        <p>Key benefits of Docker containers include:</p>
                <ul>
                  <li><strong>Consistency & Portability:</strong> Runs exactly the same in development, staging, and production environments.</li>
                  <li><strong>Resource Efficiency:</strong> Share the host OS kernel, making them much lighter than traditional VMs.</li>
                  <li><strong>Isolation:</strong> Processes inside containers do not interfere with each other or the host system.</li>
                  <li><strong>Rapid Deployment:</strong> Containers spin up or down in seconds.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4003,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are the salient features of Docker?",
    answer: (
      <>
        <p>Salient features of Docker include:</p>
                <ul>
                  <li><strong>Containerization:</strong> Packaging applications with dependencies.</li>
                  <li><strong>Easy Configuration:</strong> Simplifies infrastructure setup via Dockerfiles.</li>
                  <li><strong>Security Management:</strong> Isolated running environments with secure namespace configurations.</li>
                  <li><strong>Docker Swarm:</strong> Native clustering and orchestration capability for container scalability.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4004,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Mention some drawbacks of Docker?",
    answer: (
      <>
        <p>Drawbacks of Docker include:</p>
                <ul>
                  <li><strong>Persistent Storage:</strong> Managing state and volumes can be complex compared to stateless workloads.</li>
                  <li><strong>No GUI:</strong> Docker is primarily designed for command-line backend services; running GUI apps is difficult.</li>
                  <li><strong>Security Overhead:</strong> Since containers share the host kernel, a kernel vulnerability could affect the host.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4005,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is a Docker image? How does it help?",
    answer: (
      <>
        <p>A <strong>Docker Image</strong> is a read-only template used to create containers. It contains the application code, runtime libraries, environment variables, and configuration files.</p>
                <p>It helps by acting as a reusable blueprint, ensuring that anyone launching a container from that image gets a identical, ready-to-run environment.</p>
      </>
    ),
  },
  {
    id: 4006,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What do you mean by the Docker Engine?",
    answer: (
      <>
        <p>The <strong>Docker Engine</strong> is the core client-server application that builds, runs, and manages Docker containers. It consists of:</p>
                <ul>
                  <li><strong>Docker Daemon (dockerd):</strong> The background service managing containers, images, and networks.</li>
                  <li><strong>REST API:</strong> The interface that programs use to talk to the daemon.</li>
                  <li><strong>Docker CLI:</strong> The command line client (e.g. `docker run`) used to interact with the daemon.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4007,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is Docker Registry?",
    answer: (
      <>
        <p>A <strong>Docker Registry</strong> is a storage and distribution system for named Docker images. It allows you to push local images to a central server and pull them to other hosts. Examples include Docker Hub (public) and Amazon ECR or Docker Trusted Registry (private).</p>
      </>
    ),
  },
  {
    id: 4008,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "What is the meaning of the memory-swap flag?",
    answer: (
      <>
        <p>The <code>--memory-swap</code> flag is a modifier flag that determines the total amount of memory (RAM + swap disk) a container is allowed to use.</p>
                <p>For example, if you set <code>--memory="300m"</code> and <code>--memory-swap="1g"</code>, the container can use 300MB of RAM and 700MB of swap space.</p>
      </>
    ),
  },
  {
    id: 4009,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain what Docker Swarm is?",
    answer: (
      <>
        <p><strong>Docker Swarm</strong> is Docker's native clustering and container orchestration tool. It turns a group of Docker hosts into a single, virtual Docker host, enabling users to scale containers across multiple servers, manage networking, and perform rolling updates.</p>
      </>
    ),
  },
  {
    id: 4010,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Mention the important states of the Docker container?",
    answer: (
      <>
        <p>A Docker container can exist in the following lifecycle states:</p>
                <ul>
                  <li>Created</li>
                  <li>Running</li>
                  <li>Paused</li>
                  <li>Restarting</li>
                  <li>Exited</li>
                  <li>Dead</li>
                </ul>
      </>
    ),
  },
  {
    id: 4011,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What do you mean by the Docker Hub?",
    answer: (
      <>
        <p><strong>Docker Hub</strong> is the official, cloud-based registry service provided by Docker for finding, sharing, and storing Docker container images. It hosts thousands of official public images for popular software like Node, MySQL, and Nginx.</p>
      </>
    ),
  },
  {
    id: 4012,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Define Virtualization?",
    answer: (
      <>
        <p><strong>Virtualization</strong> is the process of creating a virtual version of something, such as operating systems, servers, storage devices, or network resources, using software called a Hypervisor to split a single physical computer into multiple virtual machines.</p>
      </>
    ),
  },
  {
    id: 4013,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain the meaning of Hypervisor?",
    answer: (
      <>
        <p>A <strong>Hypervisor</strong> (or Virtual Machine Monitor) is software, firmware, or hardware that creates and runs Virtual Machines (VMs). It sits between the physical hardware and the guest OS, allocating compute resources to each VM.</p>
      </>
    ),
  },
  {
    id: 4014,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are Docker object labels?",
    answer: (
      <>
        <p><strong>Labels</strong> are key-value pairs stored as metadata attached to Docker objects (like images, containers, volumes, and networks). They are useful for organizing, filtering, and managing objects in large environments (e.g. <code>environment=production</code>).</p>
      </>
    ),
  },
  {
    id: 4015,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Elaborate on CNM.",
    answer: (
      <>
        <p><strong>CNM (Container Network Model)</strong> is a design specification for container networking used by Docker. It defines the interface for creating sandboxed container environments and connecting them to networks using three main objects: <strong>Sandboxes</strong>, <strong>Endpoints</strong>, and <strong>Networks</strong>.</p>
      </>
    ),
  },
  {
    id: 4016,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Does Docker support IPV6?",
    answer: (
      <>
        <p>Yes, Docker supports IPv6 networking. You must enable IPv6 support in the Docker daemon configuration file (<code>daemon.json</code>) by setting <code>"ipv6": true</code> and specifying a subnet range before launching IPv6 containers.</p>
      </>
    ),
  },
  {
    id: 4017,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is a Docker Trusted Registry?",
    answer: (
      <>
        <p><strong>Docker Trusted Registry (DTR)</strong> is a private image registry service that lets companies securely host and manage their container images behind their own corporate firewalls, integrating LDAP and role-based access control (RBAC).</p>
      </>
    ),
  },
  {
    id: 4018,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is a Docker Namespace?",
    answer: (
      <>
        <p><strong>Namespaces</strong> are a Linux kernel feature that Docker uses to provide isolated workspaces for containers. When you run a container, Docker creates a set of namespaces for it, isolating its process trees, networks, mount paths, and user tables from the host OS.</p>
      </>
    ),
  },
  {
    id: 4019,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What do you mean by Containerization?",
    answer: (
      <>
        <p><strong>Containerization</strong> is a form of virtualization where applications are run in isolated user spaces called containers, sharing the host OS kernel instead of virtualizing the hardware. It is lighter and faster than traditional virtualization.</p>
      </>
    ),
  },
  {
    id: 4020,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Highlight the difference between Containerization & Virtualization.",
    answer: (
      <>
        <p>Core differences include:</p>
                <ul>
                  <li><strong>Virtualization:</strong> Uses a Hypervisor to create separate virtual hardware environments, each requiring a full guest Operating System. Heavyweight and slow to boot.</li>
                  <li><strong>Containerization:</strong> Containers share the single host OS kernel, isolating only the application code and user spaces. Lightweight, boots instantly, and uses less RAM.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4021,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Explain a Docker Container?",
    answer: (
      <>
        <p>A <strong>Docker Container</strong> is a running instance of a Docker image. It represents an isolated, lightweight application environment containing the code and all its dependencies, executing as an isolated process on the host OS.</p>
      </>
    ),
  },
  {
    id: 4022,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is a Docker Architecture?",
    answer: (
      <>
        <p>Docker uses a **client-server architecture**. The Docker client communicates with the Docker daemon (dockerd), which does the heavy lifting of building, running, and distributing your Docker containers. They communicate via REST APIs over UNIX sockets or network interfaces.</p>
      </>
    ),
  },
  {
    id: 4023,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Explain the meaning of Dockerfile?",
    answer: (
      <>
        <p>A <strong>Dockerfile</strong> is a text document containing all the commands a user could call on the command line to assemble a Docker image. Docker builds the image automatically by reading the instructions in the Dockerfile sequentially.</p>
      </>
    ),
  },
  {
    id: 4024,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is a Docker Compose?",
    answer: (
      <>
        <p><strong>Docker Compose</strong> is a tool for defining and running multi-container Docker applications. You define your application's services, networks, and volumes in a single YAML file (<code>docker-compose.yml</code>), and then launch everything with a single command: <code>docker-compose up</code>.</p>
      </>
    ),
  },
  {
    id: 4025,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain the lifecycle of the Docker Container?",
    answer: (
      <>
        <p>A container passes through several stages:</p>
                <ol>
                  <li><strong>Create:</strong> The container is created from an image but not started.</li>
                  <li><strong>Start:</strong> Starts the container process.</li>
                  <li><strong>Run:</strong> The container is running active processes.</li>
                  <li><strong>Pause:</strong> Suspends container execution temporarily.</li>
                  <li><strong>Stop:</strong> Halts the container processes gracefully.</li>
                  <li><strong>Kill:</strong> Terminates container processes immediately.</li>
                  <li><strong>Destroy/Remove:</strong> Deletes the container instance.</li>
                </ol>
      </>
    ),
  },
  {
    id: 4026,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is a Docker Machine?",
    answer: (
      <>
        <p><strong>Docker Machine</strong> is a legacy tool that allows you to install Docker Engine on virtual hosts (like VirtualBox, AWS, or DigitalOcean) and manage them using local Docker client commands.</p>
      </>
    ),
  },
  {
    id: 4027,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How is a Docker Container different from other Containerization Methods?",
    answer: (
      <>
        <p>Docker revolutionized containerization by creating a unified, high-level toolset to package, version, and share container layers easily. Unlike bare Linux containers (LXC) which focus on system virtualization, Docker centers on single-application deployments.</p>
      </>
    ),
  },
  {
    id: 4028,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Docker runs on which platform?",
    answer: (
      <>
        <p>Docker runs natively on Linux (since it relies on Linux cgroups and namespaces). It also runs on macOS and Windows via <strong>Docker Desktop</strong>, which utilizes lightweight virtual machines (WSL2 on Windows, HyperKit on macOS) to run the Linux kernel.</p>
      </>
    ),
  },
  {
    id: 4029,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Will Cloud overtake the Containerization?",
    answer: (
      <>
        <p>No. Cloud computing and Containerization are complementary technologies. Cloud providers offer the underlying hardware and virtual networks, while containers provide the portable application packages that run on top of those cloud instances.</p>
      </>
    ),
  },
  {
    id: 4030,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How many Docker containers can run per host?",
    answer: (
      <>
        <p>There is no fixed limit. The maximum number of containers depends entirely on the host server's CPU, RAM, disk space, and open network socket limitations, as containers are extremely lightweight processes.</p>
      </>
    ),
  },
  {
    id: 4031,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What are the key components of Docker Architecture?",
    answer: (
      <>
        <p>The core components include:</p>
                <ul>
                  <li><strong>Docker Daemon (dockerd):</strong> Background daemon managing Docker objects.</li>
                  <li><strong>Docker Client:</strong> Command-line CLI tool.</li>
                  <li><strong>Docker Registries:</strong> Image storage centers (e.g. Docker Hub).</li>
                  <li><strong>Docker Objects:</strong> Images, Containers, Networks, and Volumes.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4032,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Name some essential Docker commands.",
    answer: (
      <>
        <p>Common commands include:</p>
                <ul>
                  <li><code>docker build</code> - Build an image from a Dockerfile.</li>
                  <li><code>docker run</code> - Run a container from an image.</li>
                  <li><code>docker ps</code> - List running containers.</li>
                  <li><code>docker stop</code> - Stop a running container.</li>
                  <li><code>docker rm</code> - Delete a container.</li>
                  <li><code>docker rmi</code> - Delete an image.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4033,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "State the applications & functionalities of Docker.",
    answer: (
      <>
        <p>Applications include: Microservices deployments, continuous integration (CI/CD) testing pipelines, scaling web servers, isolating database environments, and standardizing development setups.</p>
      </>
    ),
  },
  {
    id: 4034,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Which one is more suitable for a Docker Container, Stateful, or Stateless application?",
    answer: (
      <>
        <p><strong>Stateless applications</strong> are highly suitable for Docker containers because they can be scaled, updated, and terminated instantly without risk of data loss. While stateful applications (like databases) can run in Docker, they require mounting external volumes to persist data.</p>
      </>
    ),
  },
  {
    id: 4035,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Which networks are available by default in Docker?",
    answer: (
      <>
        <p>Docker comes with three networks preconfigured:</p>
                <ul>
                  <li><strong>Bridge:</strong> The default network. Containers can talk to each other if they are on the same bridge.</li>
                  <li><strong>Host:</strong> Bypasses isolation, mapping container ports directly to host ports.</li>
                  <li><strong>None:</strong> Disables all networking interfaces for maximum security.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4036,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "How is Docker different from other containers?",
    answer: (
      <>
        <p>Docker created a unified developer standard for packaging containers. While containers existed previously (e.g. OpenVZ, Solaris Zones, LXC), Docker introduced union file systems, layered image sharing, and a central hub registry, making containers easy to use.</p>
      </>
    ),
  },
  {
    id: 4037,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "If you exit the Docker Container, will you lose your data too?",
    answer: (
      <>
        <p>No. When a container exits or stops, its filesystem state is preserved. However, if you delete/remove the container (<code>docker rm</code>), all data in its writable layer is lost unless it was written to a **Volume** or **Bind Mount**.</p>
      </>
    ),
  },
  {
    id: 4038,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How is Docker monitored in the production?",
    answer: (
      <>
        <p>Docker can be monitored using native commands like <code>docker stats</code> or tools like Prometheus, Grafana, Datadog, cAdvisor, and ELK stack log collectors.</p>
      </>
    ),
  },
  {
    id: 4039,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain the difference between the commands \u2018Docker creates\u2019 & \u2018Docker run.\u2019",
    answer: (
      <>
        <p>Differences in container launching:</p>
                <ul>
                  <li><code>docker create</code>: Sets up the container filesystem write layer from the image but does not start it.</li>
                  <li><code>docker run</code>: Creates the container AND starts its main execution process immediately (equivalent to calling <code>docker create</code> followed by <code>docker start</code>).</li>
                </ul>
      </>
    ),
  },
  {
    id: 4040,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is the key difference between a Docker Repository & a Dockery Registry?",
    answer: (
      <>
        <p>Key definitions:</p>
                <ul>
                  <li><strong>Docker Registry:</strong> A service or server that hosts and distributes images (e.g., Docker Hub).</li>
                  <li><strong>Docker Repository:</strong> A collection of different versions (tags) of a single specific Docker image stored inside a Registry (e.g., the `mysql` repository).</li>
                </ul>
      </>
    ),
  },
  {
    id: 4041,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Can you use JSON rather than YAML for a compose file in Docker? If yes, how?",
    answer: (
      <>
        <p>Yes. Since JSON is a subset of YAML, Docker Compose natively parses JSON files. You simply rename your compose file to <code>docker-compose.json</code> and write standard JSON syntax.</p>
      </>
    ),
  },
  {
    id: 4042,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Explain what ENTRYPOINT & CMD is in a Dockerfile?",
    answer: (
      <>
        <p>Instructions controlling container execution:</p>
                <ul>
                  <li><strong>ENTRYPOINT:</strong> Sets the main command executable that will run when the container starts. It cannot be easily overridden by command-line arguments.</li>
                  <li><strong>CMD:</strong> Sets default arguments passed to the ENTRYPOINT, or a default command. Can be easily overridden by adding arguments to the <code>docker run</code> command.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4043,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Is it possible for a Docker container to restart by itself?",
    answer: (
      <>
        <p>Yes. You can configure restart policies when running a container, such as <code>--restart=always</code> or <code>--restart=on-failure</code>, instructing the Docker daemon to automatically restart the container if it crashes or the host reboot.</p>
      </>
    ),
  },
  {
    id: 4044,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain the term container orchestration and what are the benefits of using it?",
    answer: (
      <>
        <p><strong>Container Orchestration</strong> is the automation of container lifecycles, management, scaling, and networking across clusters of hosts (e.g. Kubernetes, Docker Swarm).</p>
                <p>Benefits include: Auto-scaling, load balancing, high availability, health checks, and declarative service deployments.</p>
      </>
    ),
  },
  {
    id: 4045,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Where are Docker volumes stored?",
    answer: (
      <>
        <p>Docker volumes are stored in a part of the host filesystem managed directly by Docker. On Linux, this is typically located inside the directory <code>/var/lib/docker/volumes/</code>.</p>
      </>
    ),
  },
  {
    id: 4046,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Name some important Docker Advanced Commands?",
    answer: (
      <>
        <p>Advanced commands include:</p>
                <ul>
                  <li><code>docker inspect</code> - Returns low-level information on Docker objects in JSON format.</li>
                  <li><code>docker exec</code> - Runs a command inside a running container.</li>
                  <li><code>docker logs</code> - Retrieves logs of a container.</li>
                  <li><code>docker prune</code> - Deletes unused data (containers, images, networks, volumes).</li>
                </ul>
      </>
    ),
  },
  {
    id: 4047,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Explain the different types of mount available in the Docker?",
    answer: (
      <>
        <p>The three main mount types are:</p>
                <ul>
                  <li><strong>Volumes:</strong> Stored in host folders managed exclusively by Docker. Recommended.</li>
                  <li><strong>Bind Mounts:</strong> Maps any folder on the host filesystem directly to a container folder.</li>
                  <li><strong>tmpfs Mount:</strong> Stored only in host memory (RAM), never written to disk.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4048,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Can you run multiple copies of a Compose file on the same host? Explain How?",
    answer: (
      <>
        <p>Yes. You can isolate multiple stacks on the same host by running Compose with a unique project name using the <code>-p</code> flag: <code>docker-compose -p project_name up</code>. This isolates networks and container naming prefixes.</p>
      </>
    ),
  },
  {
    id: 4049,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How is Docker different from the standard virtualization using VMs?",
    answer: (
      <>
        <p>VMs virtualize the underlying hardware, requiring a full hypervisor layer and separate guest OS filesystems. Docker shares the host OS kernel and isolates only processes, using far less RAM and storage.</p>
      </>
    ),
  },
  {
    id: 4050,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "When do you need to use the .dockerignore file?",
    answer: (
      <>
        <p>You use the <code>.dockerignore</code> file to exclude files and folders (e.g. <code>node_modules/</code> or local build folders) from being sent as build context to the Docker daemon, speeding up image creation and reducing final image size.</p>
      </>
    ),
  },
  {
    id: 4051,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is the basic Docker usage workflow?",
    answer: (
      <>
        <p>The standard developer workflow is:</p>
                <ol>
                  <li>Write a <code>Dockerfile</code> defining application dependencies.</li>
                  <li>Build the image: <code>docker build -t app:v1 .</code></li>
                  <li>Run the container: <code>docker run -d -p 80:80 app:v1</code></li>
                  <li>Push the image to Docker Hub for remote deployments.</li>
                </ol>
      </>
    ),
  },
  {
    id: 4052,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Docker is not like a Virtual Machine, but they share some similarities, explain?",
    answer: (
      <>
        <p>Similarities include: Both provide execution environments isolated from the host OS, allow port mapping, manage volumes, and can run separate operating system environments (like Alpine inside Ubuntu).</p>
      </>
    ),
  },
  {
    id: 4053,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Does Docker run on macOS, Windows, & Linux?",
    answer: (
      <>
        <p>Yes. Runs natively on Linux. On macOS and Windows, it runs via Docker Desktop, utilizing a lightweight hypervisor virtual machine to execute the Linux daemon components.</p>
      </>
    ),
  },
  {
    id: 4054,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is the difference between a Dockerfile & a Docker Compose?",
    answer: (
      <>
        <p>Differences in scope:</p>
                <ul>
                  <li><strong>Dockerfile:</strong> A text recipe to build a single, custom Docker image.</li>
                  <li><strong>Docker Compose:</strong> A tool that coordinates and runs a network of multiple containers simultaneously.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4055,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are the ways to configure Docker daemon?",
    answer: (
      <>
        <p>The primary way to configure the Docker daemon is by editing the central configuration file <code>/etc/docker/daemon.json</code> on Linux, or passing start flags to the <code>dockerd</code> binary execution command.</p>
      </>
    ),
  },
  {
    id: 4056,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Why do my services take 10 seconds to stop or recreate?",
    answer: (
      <>
        <p>This happens because the container's main process is not receiving or handling the graceful <code>SIGTERM</code> signal sent by Docker. After a 10-second timeout, the Docker daemon forcefully shuts down the process with <code>SIGKILL</code>.</p>
      </>
    ),
  },
  {
    id: 4057,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Mention the difference between run, up, and start under Docker Compose?",
    answer: (
      <>
        <p>Docker Compose operations:</p>
                <ul>
                  <li><code>docker-compose start</code>: Restarts stopped container services without rebuilding them.</li>
                  <li><code>docker-compose run</code>: Runs a one-off command against a specific service defined in the compose file.</li>
                  <li><code>docker-compose up</code>: Creates, starts, and attaches to all container services defined in the YAML file.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4058,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "What is the difference between Hyper-V Containers & Windows Containers?",
    answer: (
      <>
        <p>Windows container technologies:</p>
                <ul>
                  <li><strong>Windows Server Containers:</strong> Share the host kernel. Offers fast start times but less isolation.</li>
                  <li><strong>Hyper-V Isolated Containers:</strong> Run containers inside highly optimized Hyper-V virtual machines. Provides maximum isolation at the cost of slower startup speeds.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4059,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is Docker daemon?",
    answer: (
      <>
        <p>The <strong>Docker Daemon</strong> (<code>dockerd</code>) is the persistent background process that listens for Docker API requests and manages Docker objects, such as images, containers, networks, and storage volumes.</p>
      </>
    ),
  },
  {
    id: 4060,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are the differences between a docker Layer & an Image?",
    answer: (
      <>
        <p>An **Image** is a complete, ready-to-run read-only template built from a sequence of stacked **Layers**. Each instruction in a Dockerfile (e.g. <code>RUN</code>, <code>COPY</code>) creates a new read-only layer in the stack.</p>
      </>
    ),
  },
  {
    id: 4061,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is the function of the docker info command?",
    answer: (
      <>
        <p>The <code>docker info</code> command displays system-wide information regarding the Docker installation, including running container counts, active storage drivers, kernel versions, and hardware resource allocations.</p>
      </>
    ),
  },
  {
    id: 4062,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What are the most commonly used instructions in a Dockerfile?",
    answer: (
      <>
        <p>Common instructions include:</p>
                <ul>
                  <li><code>FROM</code> - Sets the base image.</li>
                  <li><code>RUN</code> - Executes commands in a new layer during build.</li>
                  <li><code>COPY</code> / <code>ADD</code> - Copies files from host to container.</li>
                  <li><code>WORKDIR</code> - Sets the active directory path.</li>
                  <li><code>EXPOSE</code> - Documents target container ports.</li>
                  <li><code>ENV</code> - Sets environment variables.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4063,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Differentiate between Container Logging & Daemon Logging?",
    answer: (
      <>
        <p>Logging differences:</p>
                <ul>
                  <li><strong>Container Logging:</strong> Captures standard output (stdout) and standard error (stderr) streams produced by the running application process.</li>
                  <li><strong>Daemon Logging:</strong> Captures logs produced by the background `dockerd` service, documenting API requests and system errors.</li>
                </ul>
      </>
    ),
  },
  {
    id: 4064,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What are the benefits of ''Dockerizing''?",
    answer: (
      <>
        <p>Dockerizing eliminates the "works on my machine" problem, speeds up local environment onboarding, ensures clean clean build pipelines, and allows higher deployment density compared to VMs.</p>
      </>
    ),
  },
  {
    id: 4065,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are the main features of Docker Compose?",
    answer: (
      <>
        <p>Features include single-command stack launches, isolated environment creation, automatic preservation of volume data, and scaling individual services independently.</p>
      </>
    ),
  },
  {
    id: 4066,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Elaborate on the Storage drivers in Docker.",
    answer: (
      <>
        <p>Storage drivers manage container write layers using copy-on-write (CoW) filesystems. Common drivers include <strong>overlay2</strong> (default and highly optimized for Linux), devicemapper, btrfs, and zfs.</p>
      </>
    ),
  },
  {
    id: 4067,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What do you understand by Docker Cloud?",
    answer: (
      <>
        <p><strong>Docker Cloud</strong> was a legacy hosted service provided by Docker that allowed developers to build, test, and deploy container images directly to cloud hosting providers.</p>
      </>
    ),
  },
  {
    id: 4068,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "How do you scale Docker containers?",
    answer: (
      <>
        <p>Containers can be scaled using Docker Compose via the <code>--scale</code> flag (e.g. <code>docker-compose up --scale web=5</code>) or using cluster orchestrators like Kubernetes or Docker Swarm services.</p>
      </>
    ),
  },
  {
    id: 4069,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How can you link containers together?",
    answer: (
      <>
        <p>The modern way to link containers is by placing them on the same **User-Defined Bridge Network**. Containers on the same network can automatically resolve each other's IP addresses using container names via Docker's internal DNS.</p>
      </>
    ),
  },
  {
    id: 4070,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "How do you create a Docker image?",
    answer: (
      <>
        <p>You can create an image by executing the <code>docker build</code> command on a folder containing a <code>Dockerfile</code>, or by committing changes from a modified running container using <code>docker commit</code>.</p>
      </>
    ),
  },
  {
    id: 4071,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is ship the application part of Docker?",
    answer: (
      <>
        <p>"Ship the application" refers to Docker's capability to export complete applications as standard container images that can be loaded and executed on any other machine running Docker without code changes.</p>
      </>
    ),
  },
  {
    id: 4072,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Does the docker user have a root-level access?",
    answer: (
      <>
        <p>Yes. The Docker daemon runs as root on Linux. Adding a user to the <code>docker</code> group gives them equivalent control permissions, enabling them to launch root-privileged containers and access the host filesystem.</p>
      </>
    ),
  },
  {
    id: 4073,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What is the best way to assign a database password to a container?",
    answer: (
      <>
        <p>The best way is using **Docker Secrets** or passing environment variables through an external file (e.g. <code>--env-file</code>), keeping secrets out of Dockerfiles or shell history logs.</p>
      </>
    ),
  },
  {
    id: 4074,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "When should developers utilize bind mount in Docker?",
    answer: (
      <>
        <p>Developers use bind mounts during local development to map source code directories directly into the container. This enables hot-reloading: changes made to files on the host are instantly reflected inside the running container.</p>
      </>
    ),
  },
  {
    id: 4075,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "How to terminate a detached container?",
    answer: (
      <>
        <p>You terminate a detached container by calling <code>docker stop &lt;container_id&gt;</code>, or <code>docker kill &lt;container_id&gt;</code> to stop it immediately.</p>
      </>
    ),
  },
  {
    id: 4076,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Is it possible that two docker images share layers?",
    answer: (
      <>
        <p>Yes. Since Docker images are built from read-only layers, if two different images are built from the same base image (e.g. <code>ubuntu:20.04</code>), they share those base layers on the host disk, reducing storage footprint.</p>
      </>
    ),
  },
  {
    id: 4077,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "What is the use of scratch image in Docker?",
    answer: (
      <>
        <p>The <strong>scratch</strong> image is an empty, zero-byte image used as the base layer in multi-stage builds. It is ideal for compiling static binaries (e.g., in Go or Rust), producing extremely small, secure final images.</p>
      </>
    ),
  },
  {
    id: 4078,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How to integrate docker containers in your network?",
    answer: (
      <>
        <p>Integrate containers by placing them on custom bridge networks, setting static IP configurations, or using overlay drivers to span containers across separate physical network interfaces.</p>
      </>
    ),
  },
  {
    id: 4079,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What are the different types of registries used in Docker?",
    answer: (
      <>
        <p>The main types are public registries (Docker Hub), third-party cloud registries (AWS ECR, Google Artifact Registry), and self-hosted private registries.</p>
      </>
    ),
  },
  {
    id: 4080,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How does Docker Daemon and Docker client communicate?",
    answer: (
      <>
        <p>They communicate via REST API requests. On a local host, this happens over a UNIX socket (<code>/var/run/docker.sock</code>). Across hosts, it happens over secured TCP sockets using TLS client certs.</p>
      </>
    ),
  },
  {
    id: 4081,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How to identify a self-hosted namespace image?",
    answer: (
      <>
        <p>A self-hosted registry image is identified by its prefix namespace prefix in the image name, which contains the domain or registry port (e.g. <code>myregistry.corp.com:5000/app:latest</code>).</p>
      </>
    ),
  },
  {
    id: 4082,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Name the different types of virtualization?",
    answer: (
      <>
        <p>Types include hardware-assisted virtualization (hypervisors/VMs), operating system-level virtualization (containers), network virtualization, and storage virtualization.</p>
      </>
    ),
  },
  {
    id: 4083,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "How can you achieve multi-host networking in Docker?",
    answer: (
      <>
        <p>Multi-host networking is achieved using the <strong>overlay</strong> network driver, which creates a virtual vxlan network spanning all hosts in a Docker Swarm or Kubernetes cluster.</p>
      </>
    ),
  },
  {
    id: 4084,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "Name the drivers available in pre R1.9 Release of Docker Engine?",
    answer: (
      <>
        <p>Legacy network configurations relied on host, bridge, and none drivers, before the Container Network Model (CNM) introduced modular network plugins in Docker 1.9.</p>
      </>
    ),
  },
  {
    id: 4085,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Briefly explain what is null network driver?",
    answer: (
      <>
        <p>The <strong>null</strong> network driver (activated using <code>--network=none</code>) isolates the container, disabling all network interfaces and connection capabilities for security reasons.</p>
      </>
    ),
  },
  {
    id: 4086,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "In which order does the docker system prune deletes all dangling data?",
    answer: (
      <>
        <p>When running `docker system prune`, objects are deleted in this order:</p>
                <ol>
                  <li>Stopped containers.</li>
                  <li>Dangling networks.</li>
                  <li>Dangling build cache.</li>
                  <li>Dangling images.</li>
                </ol>
      </>
    ),
  },
  {
    id: 4087,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "What is the main use of docker volumes?",
    answer: (
      <>
        <p>The primary use of volumes is to persist data generated or modified by containers, keeping it safe even if containers are deleted or replaced.</p>
      </>
    ),
  },
  {
    id: 4088,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How to debug inside a container?",
    answer: (
      <>
        <p>You can debug inside a container by running an interactive shell using <code>docker exec -it &lt;container_id&gt; /bin/sh</code> or reviewing container metrics using <code>docker logs</code>.</p>
      </>
    ),
  },
  {
    id: 4089,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Do volumes exist independently of docker containers?",
    answer: (
      <>
        <p>Yes. Volumes are stored separately on the host machine and are not deleted when you delete containers that reference them, unless you explicitly request volume removal.</p>
      </>
    ),
  },
  {
    id: 4090,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Which command is used to delete all dangling data in Docker?",
    answer: (
      <>
        <p>The command to clean up all dangling container resources is <code>docker system prune</code>.</p>
      </>
    ),
  },
  {
    id: 4091,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Why Docker is known as the best container platform?",
    answer: (
      <>
        <p>Docker is widely adopted because it provides a complete developer ecosystem, standard image structure, layered filesystem performance, and massive community registry support.</p>
      </>
    ),
  },
  {
    id: 4092,
    category: 'DOCKER',
    difficulty: 'hard',
    question: "How to parse the output of docker inspect to deduce conclusions?",
    answer: (
      <>
        <p>You can parse `docker inspect` outputs using the <code>--format</code> flag which supports Go template formatting. For example, to get a container's IP address: <br/>
                <code>docker inspect --format '{"{{ .NetworkSettings.IPAddress }}"}' &lt;container_id&gt;</code></p>
      </>
    ),
  },
  {
    id: 4093,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Specify the native security features in Docker?",
    answer: (
      <>
        <p>Native security protections include namespaces (isolation), cgroups (resource limits), AppArmor/SELinux profiles, and Docker Content Trust (DCT) for signing images.</p>
      </>
    ),
  },
  {
    id: 4094,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "How to override the ENTRYPOINT at runtime?",
    answer: (
      <>
        <p>You override the ENTRYPOINT instructions at runtime by using the <code>--entrypoint</code> flag: <br/>
                <code>docker run --entrypoint /bin/sh my_image</code></p>
      </>
    ),
  },
  {
    id: 4095,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "When you should not use image tags in Docker?",
    answer: (
      <>
        <p>You should not rely on mutable tags like <code>:latest</code> in production, because if a new version is pushed with the same tag, it can cause inconsistent deployments. Instead, use specific version tags or image SHA digests.</p>
      </>
    ),
  },
  {
    id: 4096,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Can you compare Docker with Chef?",
    answer: (
      <>
        <p>Chef is a configuration management tool used to set up physical or virtual OS environments. Docker is a container platform that deploys pre-configured image templates. Developers often use Chef to set up Docker hosts, and use Docker to deploy the actual applications.</p>
      </>
    ),
  },
  {
    id: 4097,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Specify the two ways to create a new image?",
    answer: (
      <>
        <p>The two ways are:</p>
                <ol>
                  <li>Executing a <code>docker build</code> using a <code>Dockerfile</code>.</li>
                  <li>Committing active state changes from a running container using <code>docker commit</code>.</li>
                </ol>
      </>
    ),
  },
  {
    id: 4098,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "What do you mean by Container Networking Model or CNM?",
    answer: (
      <>
        <p>CNM is the networking model design specifying how plugins interface with the Docker engine to assign IP addresses, resolve names, and isolate networks.</p>
      </>
    ),
  },
  {
    id: 4099,
    category: 'DOCKER',
    difficulty: 'easy',
    question: "Why is it important to map ports in Docker to access web services?",
    answer: (
      <>
        <p>By default, ports exposed by containers are isolated and only accessible inside the virtual Docker network. You must map these ports to the host machine (e.g. <code>-p 8080:80</code>) to allow external web browsers to reach the containerized service.</p>
      </>
    ),
  },
  {
    id: 4100,
    category: 'DOCKER',
    difficulty: 'medium',
    question: "Why a stateful application is more suitable for Docker Container than stateless?",
    answer: (
      <>
        <p>Wait, the question is likely asking why a stateless application is *more* suitable, or how stateful applications compare. Stateless applications are easier to scale and update without losing data. For stateful applications, Docker containers require mounting external data volumes to keep database state safe.</p>
      </>
    ),
  },
];

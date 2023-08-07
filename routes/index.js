var express = require("express");
var router = express.Router();

const glossary = [
  // Demo Item
  { Term: "a", Description: "a", References: [] },
  // Only items below this are printed
  {
    Term: "Docker",
    Description:
      "Docker is a technology that allows users to package applications in self-contained containers. These containers hold the application code along with any other application dependencies which makes Docker containers platform independent. ",
    References: [
      "Opensource.com. (2019). What is Docker? [online] Available at: https://opensource.com/resources/what-docker.",
    ],
  },
  {
    Term: "DevOps",
    Description:
      "DevOps is a set of principles and practices that define the collaboration tools between application developers and operations teams. Thereby helping the overall IT department to improve its efficieny. Generally DevOps engineers have the knowledge and backgroung in both coding and system administration.",
    References: [
      "Atlassian (2016). What is DevOps? | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/devops.",
      "Alvarenga, G. (2022). DevOps vs DevSecOps: Understanding the Difference | CrowdStrike. [online] crowdstrike.com. Available at: https://www.crowdstrike.com/cybersecurity-101/cloud-security/devops-vs-devsecops/",
    ],
  },
  {
    Term: "DevSecOps",
    Description:
      "DevSecOps is the process of integrating security in each step of the software development lifecycle.",
    References: [
      "Alvarenga, G. (2022). DevOps vs DevSecOps: Understanding the Difference | CrowdStrike. [online] crowdstrike.com. Available at: https://www.crowdstrike.com/cybersecurity-101/cloud-security/devops-vs-devsecops/",
      "Vmware “What Is DevSecOps? | DevSecOps vs. DevOps” VMware, 10 Apr. 2023, www.vmware.com/au/topics/glossary/content/devsecops.html.",
    ],
  },
  {
    Term: "Cloud computing",
    Description:
      "Cloud computing is the process of delivering IT services including Infrastructure (IaaS | like AWS EC2), Software (SaaS | like AWS Athena) or Platforms (Plaform as a Service | like AWS Elastic Beanstalk), to customers virtually over the internet.",
    References: [
      "Ranger, Steve. “What Is Cloud Computing? Everything You Need to Know about the Cloud Explained.” ZDNet, 25 Feb. 2022, www.zdnet.com/article/what-is-cloud-computing-everything-you-need-to-know-about-the-cloud/.",
    ],
  },
  {
    Term: "SDLC: Waterfall Model",
    Description:
      "The Waterfall Model is a traditional software development lifecycle model.",
    References: [],
  },
  {
    Term: "Cyber Security",
    Description:
      "Cybersecurity is the practice of protecting computer systems, networks and applications from security breaches and attacks.",
    References: [
      "Kaspersky. “What Is Cyber Security?” Kaspersky.com, 2019, www.kaspersky.com/resource-center/definitions/what-is-cyber-security.",
    ],
  },
  {
    Term: "Microservice application",
    Description:
      "Microservices is an application architectural style where different components of an application are designed as loosely coupled services. These loose coupled services are independent from each other and collectively form the applciation.",
    References: [
      "Gnatyk, Romana. “Microservices vs Monolith: Which Architecture Is the Best Choice for Your Business?” Www.n-Ix.com, 3 Oct. 2018, www.n-ix.com/microservices-vs-monolith-which-architecture-best-choice-your-business/.",
    ],
  },
  {
    Term: "Monolith application",
    Description:
      "Monolith arcitecture is the traditional way of development where an application no matter how large is developed in a single unit.",
    References: [
      "Gnatyk, Romana. “Microservices vs Monolith: Which Architecture Is the Best Choice for Your Business?” Www.n-Ix.com, 3 Oct. 2018, www.n-ix.com/microservices-vs-monolith-which-architecture-best-choice-your-business/.",
    ],
  },
  {
    Term: "Kubernetes",
    Description:
      "Kubernetes is an open-source container orchestration platform that allows users to easily automate the deployment, scaling, and management of their containerized applications.",
    References: [
      "Casey, Kevin. “How to Explain Kubernetes in Plain English.” Enterprisersproject.com, 17 Sept. 2020, enterprisersproject.com/article/2017/10/how-explain-kubernetes-plain-english.",
    ],
  },
  {
    Term: "Terraform",
    Description:
      "Terraform is an infrastructure-as-code tool used for building, changing, and versioning infrastructure safely and efficiently.",
    References: [
      "Gillis, Alexander S. “What Is Terraform?” SearchITOperations, Feb. 2021, www.techtarget.com/searchitoperations/definition/Terraform.",
    ],
  },
  {
    Term: "Continuous Integration (CI)",
    Description:
      "Continuous Integration is the process of regularly updating the code developed by each team member in teh main code base. During these merges, the pushed code should go through test and build stages before being merged to the main code.",
    References: [
      "docs.aws.amazon.com. (n.d.). Continuous delivery and continuous integration - AWS CodePipeline. [online] Available at: https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-continuous-delivery-integration.html.",
    ],
  },
  {
    Term: "Continuous Delivery (CD)",
    Description:
      "Continous Delivery is the process of using version control systems, to manage deliverable code and to process the codew through various build, testing stages before its release.",
    References: [
      "docs.aws.amazon.com. (n.d.). Continuous delivery and continuous integration - AWS CodePipeline. [online] Available at: https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-continuous-delivery-integration.html.",
    ],
  },
  {
    Term: "Version Control System (VCS)",
    Description:
      "Version Control, aka source control is a software tool used for tracking and managing changes made to aplication codes. Git is a VCS that allows multiple developers to collaborate on a project.",
    References: [
      "Atlassian (2019). What is version control. [online] Atlassian. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control.",
    ],
  },
  {
    Term: "UAT Testing",
    Description:
      "UAT testing is the software testing phase where the software is tested by its intended audience, i.e. end users of the software. During this phase the software is made available to a few members of the public  before its official release to see if any features have been overlooked or if it contains any issues.",
    References: [
      "Gillis, A. (n.d.). What is User Acceptance Testing (UAT)? [online] SearchSoftwareQuality. Available at: https://www.techtarget.com/searchsoftwarequality/definition/user-acceptance-testing-UAT.",
    ],
  },
  {
    Term: "Agile Development",
    Description:
      "Agile is broad term software developmnent. It includes any project management methodology that involves iterative and flexible approach. ",
    References: [
      "Atlassian (n.d.). Kanban vs Scrum. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
    ],
  },
  {
    Term: "SCRUM Development",
    Description:
      "SCRUM is an agile project management framework that can be used by treams that prefer agile developements. Scrum prescribes for teams to break work into goals to be completed within time-limited iterations, called sprints. Each sprint is can be as long as one month and commonly lasts two weeks. ",
    References: [
      "Atlassian (n.d.). Kanban vs Scrum. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
      "Planview. (n.d.). Kanban vs. Scrum: What are the Differences? [online] Available at: https://www.planview.com/resources/guide/introduction-to-kanban/kanban-vs-scrum/.",
    ],
  },
  {
    Term: "Kanban Development",
    Description:
      "Kanban is an agile development framework that uses visual aid (a board) that can be seen by all team members to depict various stages of progress. It aims to identify bottlenecks and solve problems quickly.",
    References: [
      "Planview. (n.d.). Kanban vs. Scrum: What are the Differences? [online] Available at: https://www.planview.com/resources/guide/introduction-to-kanban/kanban-vs-scrum/.",
      "Atlassian (n.d.). Kanban vs Scrum. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
    ],
  },
  {
    Term: "Continuous Testing",
    Description:
      "Continuous Testing is a softwaree development practtice in which applications are tested regularly throughout the entire software development lifecycle.",
    References: [
      "www.synopsys.com. (n.d.). What is Continuous Testing and How Does it Work? | Synopsys. [online] Available at: https://www.synopsys.com/glossary/what-is-continuous-testing.html",
    ],
  },
  {
    Term: "Build Automation Tools",
    Description:
      "A set of software tools that automatically manage and govern the CI/CD pipelines. Popular tools include Jenkins, CircleCi, Jules etc.",
    References: [
      "AltexSoft. (n.d.). Build Automation: How it Works and Which Tools to Use. [online] Available at: https://www.altexsoft.com/blog/build-automation/",
    ],
  },
  {
    Term: "Serverless",
    Description:
      "Serverless computing allows developers to run code without managing the underlying infrastructure, charging them based on actual computation usage rather than pre-allocated server space. Despite its name, physical servers are involved in serverless computing, but they're abstracted away from the developers.",
    References: [
      "Cloudflare. (n.d.)  What is serverless computing? | Serverless definition, https://www.cloudflare.com/en-in/learning/serverless/what-is-serverless/",
    ],
  },
  {
    Term: "Load Balancing",
    Description:
      "Load balancing is the process of evenly distributing incoming internet traffic across multiple servers to ensure no single server gets overwhelmed and to enhance the performance and reliability of applications.",
    References: [
      "AWS (n.d.) “What Is Load Balancing?” AWS ELB Documenatation, https://aws.amazon.com/what-is/load-balancing/",
    ],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 Glossary", glossary });
});

module.exports = router;

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
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 Glossary", glossary });
});

module.exports = router;

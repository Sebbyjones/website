import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sebastian LaTempa",
  title: "Hello, I'm Sebastian",
  subTitle: emoji(
    "Senior DevOps Engineer with 15+ years architecting scalable, secure cloud infrastructures and CI/CD pipelines on AWS, Terraform, and more - delivering platforms handling 4.8B+ interactions annually while slashing costs by 30% and contiously boosting efficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J9sIaPz834YgM6u-43gu7NYccvcH0IE4/view?usp=sharing",
  avatar: require("./assets/images/personalpicture.png"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Sebbyjones",
  linkedin: "https://www.linkedin.com/in/SebastianLaTempa",
  gmail: "SebastianLaTempa@gmail.com",
  gitlab: "https://gitlab.com/Sebbyjones",
  stackoverflow: "https://stackoverflow.com/users/10422806/Sebastian-LaTempa",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "SENIOR DEVOPS ENGINEER ARCHITECTING SCALABLE, SECURE CLOUD INFRASTRUCTURE AND AUTOMATED PIPELINES",
  skills: [
    emoji(
      "⚡ Design and maintain enterprise-scale event-driven platforms on AWS, handling billions of interactions annually with services like Lambda, ECS, DynamoDB, API Gateway, and Athena"
    ),
    emoji(
      "⚡ Automate infrastructure provisioning using Terraform and IaC principles, integrating with tools like SCALR/TFE for state management and multi-service deployments to reduce errors by up to 80%"
    ),
    emoji(
      "⚡ Build robust CI/CD pipelines with Git/GitHub/GitLab, incorporating comprehensive testing (unit, integration, chaos, load) and achieving 100% code coverage while enhancing system resilience"
    ),
    emoji(
      "⚡ Leverage generative AI (AWS Bedrock/SageMaker) for data insights and implement security best practices with IAM, KMS, WAF, and Zero Trust models to ensure compliance and reliability"
    ),
    emoji(
      "⚡ Optimize monitoring and networking with Splunk, Datadog, Dynatrace, and CloudWatch, alongside protocols like TCP/IP, DNS, and SSL/TLS for high-availability environments"
    ),
    emoji(
      "⚡ Lead cross-functional teams in Agile/SRE methodologies to deliver cost-efficient solutions, slashing expenses by 30% and accelerating feature onboarding"
    )
  ],

softwareSkills: [
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fas fa-cogs" // Generic for IaC/tools; no official Terraform icon in FA
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Bash",
    fontAwesomeClassname: "fas fa-terminal" // For shell scripting
  },
  {
    skillName: "SQL Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Splunk",
    fontAwesomeClassname: "fab fa-searchengin" // Generic for monitoring; no official Splunk in FA
  },
  {
    skillName: "Datadog",
    fontAwesomeClassname: "fas fa-chart-line" // Generic for monitoring
  },
  {
    skillName: "Spring Framework",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Vert.x Framework",
    fontAwesomeClassname: "fas fa-server" // Generic server icon, as no official Vert.x in FA
  },
  {
    skillName: "DynamoDB",
    fontAwesomeClassname: "fas fa-database" // Generic database icon, or use "fab fa-aws" if preferred
  },
  {
    skillName: "Bedrock",
    fontAwesomeClassname: "fas fa-robot" // Generic AI/robot icon for AWS Bedrock
  },
  {
    skillName: "YAML/JSON",
    fontAwesomeClassname: "fas fa-file-code" // Generic code/file icon for config languages
  },
  {
    skillName: "Containerization",
    fontAwesomeClassname: "fas fa-boxes" // Generic boxes icon for containerization (e.g., ECS); no official in FA
  },
  {
    skillName: "CUCM",
    fontAwesomeClassname: "fas fa-phone" // Telephone icon for Cisco Unified Communications Manager (CUCM)
  },
  {
    skillName: "Windows Server",
    fontAwesomeClassname: "fab fa-windows" // Windows logo for Microsoft Windows Server
  },
  {
    skillName: "Active Directory",
    fontAwesomeClassname: "fas fa-users-cog" // User administration icon for Active Directory
  },
  {
    skillName: "Azure",
    fontAwesomeClassname: "fab fa-microsoft" // Microsoft icon for Azure (as it's Microsoft Azure)
  }
],
display: true
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Cloud Infrastructure & AWS (EC2, S3, Lambda, ECS, DynamoDB, API Gateway, Athena, SageMaker, Bedrock, etc.)",
      progressPercentage: "95%"
    },
    {
      Stack: "Infrastructure as Code (Terraform, CloudFormation, SCALR, TFE)",
      progressPercentage: "90%"
    },
    {
      Stack: "Automation & CI/CD (Git, GitHub, GitLab, Docker, Containerization, Jenkins)",
      progressPercentage: "93%"
    },
    {
      Stack: "Programming Languages & Frameworks (Python, Java, JavaScript, Bash, C#, Shell, YAML/JSON, Vert.x, Spring Framework)",
      progressPercentage: "91%"
    },
    {
      Stack: "Security & Networking (IAM, KMS, WAF, TCP/IP, DNS, Zero Trust, SSL/TLS, VPN)",
      progressPercentage: "89%"
    },
    {
      Stack: "Monitoring & Observability (Splunk, Datadog, Dynatrace, CloudWatch)",
      progressPercentage: "95%"
    },
    {
      Stack: "Methodologies (Agile, Scrum, SRE, TDD, CI/CD)",
      progressPercentage: "93%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Lead Software Engineer",
      company: "State Farm",
      companylogo: require("./assets/images/statefarmlogo.png"),
      date: "2016 – Present",
      desc: "Architected and maintained enterprise-wide event-driven API platform supporting 45+ business units, processing 4.8B+ customer interactions yearly.",
      descBullets: [
        "Integrated proprietary Enterprise Identifier (EIID) for real-time journey visibility using AWS Lambda, ECS, S3, DynamoDB, Athena, API Gateway, IAM, Secrets Manager, and CloudWatch.",
        "Automated infrastructure provisioning with Terraform, YAML, and SCALR for state management.",
        "Enabled multi-AWS service deployments that reduced manual errors by 80% and accelerated onboarding for new features.",
        "Pioneered patent-pending CI/CD pipeline paradigm revolutionizing testing at State Farm.",
        "Achieved 100% code coverage across unit, integration, mutation, chaos, and load tests with custom scripts for Jacoco, PIT, Chaos Monkey, and Snyk.",
        "Enhanced system resilience, reduced deployment risks, and set new enterprise standards.",
        "Designed and deployed GUI using CloudFormation for 4.8B+ interaction platform, visualizing per-customer communications to avert over-communication.",
        "Harnessed generative AI (AWS Bedrock/SageMaker) for interaction summaries, delivering actionable insights that optimized analyst-driven engagement strategies.",
        "Led end-to-end development of customer data aggregation API consolidating multiple enterprise sources.",
        "Enabled State Farm’s first personalized welcome email program for new policyholders, improving onboarding retention through tailored communications."
      ]
    },
    {
      role: "System Administrator",
      company: "Origami Owl",
      companylogo: require("./assets/images/origamiOwlLogo.png"),
      date: "2014 – 2016",
      desc: "Automated departmental workflows using PowerShell scripts, WDS, and MDT to create comprehensive Windows images with pre-installed software and default profiles.",
      descBullets: [
        "Reduced onboarding time by 70% and minimized waste while boosting overall efficiency.",
        "Conducted wireless scans with TamoGraph to optimize enterprise access points, enhancing range and achieving 99.9% telephony uptime.",
        "Managed CUCM, CCE, and UCCE systems as a full administrator, configuring softphones, skill groups, mobility extensions, call recordings, and ICM scripting for dynamic prompts and flows.",
        "Troubleshot telephony issues.",
        "Administered Active Directory to create user accounts, security groups, and department-specific GPOs for precise permissions.",
        "Oversaw Barracuda and Nagios backup solutions, and generated SQL reports to support operational reliability.",
        "Created custom images for over 500 workstations using WDS and MDT, streamlining deployment with pre-installed applications and default user profiles."
      ]
    },
    {
      role: "Desktop Support",
      company: "Stream Global Services",
      companylogo: require("./assets/images/streamGlobalLogo.jpg"),
      date: "2009 – 2014",
      desc: "Provided on-site assistance for over 1,400 workstations across two locations–the only team member entrusted with dual-site responsibility.",
      descBullets: [
        "Consulted on client applications, implemented software/hardware updates to enhance functionality, and installed, configured, and maintained servers to meet customer needs.",
        "Developed and deployed automation scripts that slashed ticket volume by 60% and boosted efficiency.",
        "Responsible for product ramp in which I configured, imaged, and deployed 300 computers.",
        "Reduced ticket volume by 60% through development and deployment of automation scripts, significantly enhancing operational efficiency."
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Key projects section
const bigProjects = {
  title: "Key Projects",
  subtitle: "KEY ENTERPRISE PROJECTS DEMONSTRATING SCALABLE DEVOPS AND AI INTEGRATIONS",
  projects: [
    {
      image: require("./assets/images/statefarmlogo.png"),
      projectName: "Patent-Pending CI/CD Pipeline",
      projectDesc: "Pioneered revolutionary testing paradigm achieving 100% code coverage (unit, integration, mutation, chaos, load) with custom scripts for Jacoco, PIT, Chaos Monkey, and Snyk—reducing deployment risks and setting enterprise standards. Completely redesigned pipeline output to generate clear color coded report for developers per pipeline stage.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.statefarm.com/"
        }
      ]
    },
    {
      image: require("./assets/images/statefarmlogo.png"),
      projectName: "Generative AI Interaction Summarizer",
      projectDesc: "Designed GUI via CloudFormation and harnessed AWS Bedrock/SageMaker for summarizing 4.8B+ interactions, providing actionable insights to optimize customer engagement and avert over-communication.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.statefarm.com/"
        }
      ]
    },
    {
      image: require("./assets/images/statefarmlogo.png"),
      projectName: "Personalized Welcome Email Program",
      projectDesc: "Led development of customer data aggregation API and State Farm’s first tailored onboarding emails, improving retention through consolidated enterprise data sources.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.statefarm.com/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/statefarmlogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/statefarmlogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/statefarmlogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Sebastianpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Talks I have had the privilege to give at various conferences and meetups."
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Sebastianpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Where I discuss my IT experience and tech trends",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Sebastian-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Contact information for any colaborations and work opportunities.",
  number: "480-382-3062",
  email_address: "SebastianLaTempa@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Education Section
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Desert Mountain High School",
      logo: require("./assets/images/statefarmlogo.png"),
      subHeader: "Diploma",
      duration: "September 2001 - April 2005",
      desc: "Student",
      descBullets: [
        "Graduated with Honors"
      ]
    }
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

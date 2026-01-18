/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sebastian LaTempa",
  title: "Hello, I'm Sebastian",
  subTitle: emoji(
    "Senior DevOps Engineer with 15+ years architecting scalable, secure cloud infrastructures and CI/CD pipelines on AWS, Terraform, and more—delivering platforms handling 4.8B+ interactions annually while slashing costs by 30% and boosting efficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J9sIaPz834YgM6u-43gu7NYccvcH0IE4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sebbyjones",
  linkedin: "https://www.linkedin.com/in/SebastianLaTempa",
  gmail: "SebastianLaTempa@gmail.com",
  gitlab: "https://gitlab.com/Sebbyjones",
  stackoverflow: "https://stackoverflow.com/users/10422806/Sebastian-LaTempa",
  display: true // Set true to display this section, defaults to false
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  }
],
display: true // Set false to hide this section, defaults to true
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure & AWS (EC2, S3, Lambda, ECS, DynamoDB, API Gateway, Athena, SageMaker, Bedrock, etc.)",
      progressPercentage: "95%" // High proficiency from architecting enterprise platforms at State Farm
    },
    {
      Stack: "Infrastructure as Code (Terraform, CloudFormation, SCALR, TFE)",
      progressPercentage: "90%" // Core tool for automation and provisioning in your roles
    },
    {
      Stack: "Automation & CI/CD (Git, GitHub, GitLab, Docker, Containerization with ECS)",
      progressPercentage: "90%" // Demonstrated in patent-pending pipelines and error reduction
    },
    {
      Stack: "Programming Languages & Frameworks (Python, Java, JavaScript, Bash, C#, Shell, YAML/JSON, Vert.x, Spring Framework)",
      progressPercentage: "91%" // Used across scripting, APIs, and backend development
    },
    {
      Stack: "Security & Networking (IAM, KMS, WAF, TCP/IP, DNS, Zero Trust, SSL/TLS, VPN)",
      progressPercentage: "88%" // Integrated in secure platforms and telephony management
    },
    {
      Stack: "Monitoring & Observability (Splunk, Datadog, Dynatrace, CloudWatch)",
      progressPercentage: "95%" // Applied in resilience testing and operational reliability
    },
    {
      Stack: "Methodologies (Agile, Scrum, SRE, TDD, CI/CD)",
      progressPercentage: "93%" // Proven leadership in cross-functional teams and standards-setting
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Lead Software Engineer",
      company: "State Farm",
      companylogo: require("./assets/images/state-farm-logo.jpg"),
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
        "Oversaw Barracuda and Nagios backup solutions, and generated SQL reports to support operational reliability."
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
        "Developed and deployed automation scripts that slashed ticket volume by 60% and boosted efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
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
      image: require("./assets/images/googleAssistantLogo.webp"),
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
      image: require("./assets/images/pwaLogo.webp"),
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
  display: true // Set false to hide this section, defaults to true
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
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Sebastianpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Sebastian-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
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
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Desert Mountain High School",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Diploma",
      duration: "September 2001 - April 2005",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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

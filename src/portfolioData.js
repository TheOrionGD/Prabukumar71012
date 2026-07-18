export const portfolioData = {
  personalInfo: {
    name: "Prabukumar V",
    role: "Cloud & AI Enthusiast",
    tagline: "Bridging the gap between software development and intelligent cloud solutions — specializing in AI, Cloud Computing, and Data Science.",
    email: "prabukumarv.prof@gmail.com",
    linkedin: "", // None provided in profile
    github: "https://github.com/Prabukumar710",
    resumeUrl: "/resume.pdf", // Static path in public folder
  },
  about: {
    bio: "I am a highly motivated Information Technology student passionate about Artificial Intelligence, Cloud Computing, and Data Science. I specialize in building and optimizing intelligent applications using Microsoft Azure, Python, and Java. Beyond technology, I am an active NSS Volunteer and Event Coordinator who loves managing team-driven activities and technology symposia.",
    location: "Tamil Nadu, India",
    majorLabel: "IT Student",
    milestoneLabel: "Azure Certified",
    education: {
      degree: "Information Technology Student",
      institution: "Anna University Affiliated College",
      period: "2023–2027 (Expected)",
      cgpa: "NPTEL Certified"
    }
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Cloud & AI",
      items: ["Microsoft Azure", "Azure AI", "Azure Fundamentals", "Machine Learning Pipelines"]
    },
    {
      category: "Methodologies & Tools",
      items: ["Data Science", "Data Analytics", "Statistical Algorithms", "Git", "GitHub"]
    }
  ],
  projects: [
    {
      id: "aegis",
      title: "Azure ML Pipeline — Enterprise Document Intelligence & QA",
      stack: ["Python", "Azure AI", "LangChain"],
      bullets: [
        "Developed an end-to-end intelligent document processing pipeline using Azure AI Document Intelligence and Azure OpenAI.",
        "Implemented a retrieval-augmented generation (RAG) system with hybrid search on Azure AI Search to query large-scale enterprise documents."
      ]
    },
    {
      id: "argorithm",
      title: "Data Science Platform — Predictive Analytics Dashboard",
      stack: ["Python", "Pandas", "Scikit-Learn", "Azure"],
      bullets: [
        "Built a predictive modeling dashboard analyzing industrial IoT telemetry data, optimizing training pipelines for high-accuracy forecasts.",
        "Deployed machine learning inference models to Azure App Services using a FastAPI backend for real-time predictions."
      ]
    },
    {
      id: "faceshield",
      title: "Cloud Backend — Distributed Task Management System",
      stack: ["Java", "Spring Boot", "Microsoft Azure", "SQL"],
      bullets: [
        "Designed a scalable, asynchronous REST API for coordinating multi-user workloads using Java and Azure Queue Storage.",
        "Integrated Azure Active Directory for secure role-based access control and JWT-based authentication token handling."
      ]
    }
  ],
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Azure AI Solutions (Virtual/Remote)",
      period: "Jun–Jul 2026",
      description: "Hands-on development of AI models and machine learning pipelines. Leveraged Azure AI solutions to deploy predictive models and design interactive data tools."
    }
  ],
  achievements: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
      description: "Credential validating expertise in building, managing, and deploying AI solutions on Azure, Simplilearn (Feb 2025)."
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      description: "Credential validating foundational cloud concepts and Azure services, Simplilearn (Jan 2026)."
    },
    {
      title: "NPTEL Domain Master — Python for Data Science",
      description: "Earned domain mastery certificate for Python data science applications (2025)."
    },
    {
      title: "NPTEL Programming in Java & Patent Drafting",
      description: "Completed courses in Java Programming (2026) and Patent Drafting for Beginners (2025)."
    },
    {
      title: "IT Department Event Coordinator — Festronix '24",
      description: "Coordinated administrative and technical tracks, ensuring smooth execution across student committees (Sept 2024)."
    },
    {
      title: "NSS Volunteer",
      description: "Active participant in community development programs and social welfare camps."
    }
  ]
};

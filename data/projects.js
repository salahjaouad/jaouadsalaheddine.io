// Projects data for the portfolio website

window.projectsData = [
    {
        id: 1,
        title: "CyberThreatClassifier",
        subtitle: "Advanced Network Threat Detection System",
        image: "assets/images/projects/CyberThreatClassifier.png",
        description: "Advanced network threat detection system using machine learning algorithms to classify DoS, DDoS, and web attacks with 95% accuracy.",
        technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Cybersecurity"],
        githubUrl: "https://github.com/SieGer05/CyberThreatClassifier",
        category: "Machine Learning",
        status: "Completed",
        duration: "3 months",
        teamSize: "Individual Project",
        detailed: {
            overview: "Developed an intelligent threat classification system capable of identifying and categorizing various types of cyber attacks including DoS (Denial of Service), DDoS (Distributed Denial of Service), and web-based attacks. The system processes network traffic data in real-time, analyzes packet patterns, connection behaviors, and traffic anomalies to automatically classify potential security threats.",
            challenges: [
                "Processing large volumes of network traffic data in real-time",
                "Achieving high accuracy while minimizing false positives",
                "Feature engineering from complex network patterns",
                "Balancing model complexity with performance requirements"
            ],
            solutions: [
                "Implemented efficient data preprocessing pipelines",
                "Used ensemble methods combining multiple ML algorithms",
                "Applied advanced feature selection techniques",
                "Optimized model parameters through extensive testing"
            ],
            outcomes: [
                "Achieved over 95% accuracy in threat classification",
                "Reduced false positive rates by 40% compared to traditional methods",
                "Enabled real-time threat response capabilities",
                "Created scalable solution suitable for enterprise deployment"
            ],
            technicalDetails: {
                dataProcessing: "Comprehensive feature engineering from network traffic patterns",
                algorithms: "Ensemble methods combining decision trees, random forests, and support vector machines",
                performance: "Real-time processing with sub-second response times",
                scalability: "Designed for horizontal scaling across multiple nodes"
            }
        }
    },
    {
        id: 2,
        title: "Enterprise Intrusion Detection System",
        subtitle: "SOC-Level Security Monitoring with Wazuh",
        image: "assets/images/projects/Enterprise Intrusion Detection System.png",
        description: "Comprehensive IDS implementation with real-time alerting, SOC-level monitoring, and comprehensive threat analysis capabilities.",
        technologies: ["Wazuh", "Linux", "SIEM", "Kali Linux", "Metasploit", "Security Monitoring"],
        githubUrl: "https://github.com/jaouad4/Wazuh-AI",
        category: "Security Operations",
        status: "Completed",
        duration: "2 months",
        teamSize: "Individual Project",
        detailed: {
            overview: "Designed and implemented a comprehensive intrusion detection system using Wazuh on a Debian Linux environment. The project involved setting up real-time security monitoring, configuring automated alert systems, and establishing SOC (Security Operations Center) level monitoring capabilities for enterprise network infrastructure.",
            challenges: [
                "Configuring complex rule sets for accurate threat detection",
                "Minimizing false positives while maintaining high sensitivity",
                "Integrating with existing network infrastructure",
                "Ensuring system performance under high load conditions"
            ],
            solutions: [
                "Developed custom correlation rules for specific threat patterns",
                "Implemented machine learning-based anomaly detection",
                "Created automated response mechanisms for common threats",
                "Optimized system configuration for enterprise-scale deployment"
            ],
            outcomes: [
                "Achieved 99.8% system uptime with minimal false positives",
                "Successfully detected and responded to various security incidents",
                "Implemented comprehensive security event correlation",
                "Established automated incident response workflows"
            ],
            technicalDetails: {
                platform: "Wazuh SIEM deployed on hardened Debian Linux",
                monitoring: "File integrity, log analysis, rootkit detection, active response",
                testing: "Comprehensive penetration testing using Kali Linux and Metasploit",
                integration: "Seamless integration with existing network security infrastructure"
            }
        }
    },
    {
        id: 3,
        title: "Secure VoIP Infrastructure",
        subtitle: "Enterprise Communication System with Advanced Security",
        image: "assets/images/projects/Secure VoIP Infrastructure.png",
        description: "Complete VoIP communication system with advanced security features, encryption protocols, and fraud prevention mechanisms.",
        technologies: ["FreePBX", "SIP", "VoIP Security", "TLS", "SRTP", "Network Architecture"],
        category: "Network Security",
        status: "Completed",
        duration: "6 weeks",
        teamSize: "Individual Project",
        detailed: {
            overview: "Developed and deployed a complete Voice over IP (VoIP) communication infrastructure using FreePBX, focusing on secure communications and robust call routing capabilities. The project encompassed the entire VoIP ecosystem including SIP trunk configuration, Interactive Voice Response (IVR) system setup, extension management, and comprehensive security implementation.",
            challenges: [
                "Implementing end-to-end encryption for voice communications",
                "Preventing VoIP-specific fraud and security attacks",
                "Ensuring quality of service across different network conditions",
                "Integrating with existing enterprise infrastructure"
            ],
            solutions: [
                "Deployed TLS encryption for signaling and SRTP for media streams",
                "Implemented comprehensive fraud detection and prevention mechanisms",
                "Configured QoS policies and network optimization",
                "Created seamless integration with corporate directory services"
            ],
            outcomes: [
                "Achieved 99.9% system availability with load balancing",
                "Zero security incidents during entire deployment period",
                "Successfully handled multiple concurrent calls with excellent quality",
                "Implemented advanced features including call recording and conferencing"
            ],
            technicalDetails: {
                platform: "FreePBX (Asterisk-based) with custom security configurations",
                protocols: "SIP for signaling, RTP/SRTP for media transmission",
                security: "TLS encryption, SRTP secure media, access control lists",
                features: "IVR systems, call recording, conference bridges, mobile integration"
            }
        }
    },
    {
        id: 4,
        title: "Leave Management System",
        subtitle: "Enterprise HR Solution with Role-Based Access",
        image: "assets/images/projects/Leave Management System.jpg",
        description: "Enterprise HR solution with role-based access control, automated workflows, and comprehensive leave management capabilities.",
        technologies: ["Java", "JavaFX", "MySQL", "MVC Architecture", "Desktop Application"],
        githubUrl: "https://github.com/jaouad4/application-gestion-conges",
        category: "Software Development",
        status: "Completed",
        duration: "8 weeks",
        teamSize: "Individual Project",
        detailed: {
            overview: "Developed a comprehensive desktop application for human resources management focusing on employee leave request processing and approval workflows. The system implements a complete leave management lifecycle including request submission, supervisor approval chains, HR processing, and automated calendar integration.",
            challenges: [
                "Designing intuitive interfaces for different user roles",
                "Implementing complex approval workflows and business rules",
                "Ensuring data integrity and security for sensitive HR information",
                "Creating comprehensive reporting and analytics capabilities"
            ],
            solutions: [
                "Implemented role-based access control with distinct user interfaces",
                "Created flexible workflow engine supporting various approval processes",
                "Applied database normalization and encryption for data protection",
                "Developed comprehensive dashboard and reporting modules"
            ],
            outcomes: [
                "Reduced approval processing time by 70%",
                "Eliminated paper-based workflows entirely",
                "Improved user satisfaction and HR department efficiency",
                "Provided comprehensive audit trail and compliance reporting"
            ],
            technicalDetails: {
                architecture: "JavaFX application following MVC design pattern",
                database: "MySQL with normalized schema and optimized queries",
                security: "Role-based access control, data encryption, audit logging",
                features: "Leave balance tracking, automated notifications, calendar integration, reporting dashboards"
            }
        }
    }
];

// Additional project categories and filters
window.projectCategories = [
    "All",
    "Machine Learning",
    "Security Operations", 
    "Network Security",
    "Software Development"
];

window.projectTechnologies = [
    "Python",
    "Machine Learning",
    "Linux", 
    "Wazuh",
    "FreePBX",
    "Java",
    "JavaFX",
    "MySQL",
    "Cybersecurity",
    "SIEM",
    "VoIP Security",
    "Network Architecture"
];

// Project statistics
window.projectStats = {
    totalProjects: 4,
    completedProjects: 4,
    technologiesUsed: 12,
    totalDuration: "5.5 months",
    achievements: [
        "95% ML accuracy achieved",
        "99.8% system uptime",
        "70% process improvement",
        "Zero security incidents"
    ]
};

// Future projects roadmap
window.futureProjects = [
    {
        title: "Blockchain-Based Security Framework",
        description: "Developing a blockchain-based framework for enhanced cybersecurity in financial institutions",
        technologies: ["Blockchain", "Smart Contracts", "Ethereum", "Solidity"],
        status: "Planning",
        expectedDuration: "4 months"
    },
    {
        title: "AI-Powered Fraud Detection Platform",
        description: "Advanced AI system for real-time fraud detection in banking transactions",
        technologies: ["Deep Learning", "TensorFlow", "Real-time Processing", "Big Data"],
        status: "Research Phase",
        expectedDuration: "6 months"
    },
    {
        title: "Zero Trust Network Architecture",
        description: "Implementation of zero trust security model for enterprise environments",
        technologies: ["Zero Trust", "Identity Management", "Network Segmentation"],
        status: "Proposal Stage",
        expectedDuration: "3 months"
    }
];

// Export projects data
window.portfolioProjects = {
    projects: window.projectsData,
    categories: window.projectCategories,
    technologies: window.projectTechnologies,
    stats: window.projectStats,
    futureProjects: window.futureProjects
};

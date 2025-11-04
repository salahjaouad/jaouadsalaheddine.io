// Projects data for the portfolio website

window.projectsData = [
    {
        id: 1,
        title: "Endpoint Detection & Response",
    subtitle: "EDR Platform | Wazuh & YARA",
    image: "assets/images/projects/EDR.jpeg",
    description: "Wazuh-based EDR deployment across Windows and Linux endpoints with YARA detection, XDR correlations, and automated containment workflows.",
    technologies: ["Wazuh", "YARA", "Windows", "Linux", "XDR"],
        githubUrl: "", // Add if available
        category: "Cybersecurity",
        status: "Completed",
        duration: "2 months",
        teamSize: "Individual Project",
        detailed: {
            overview: "Implemented Wazuh as a centralized endpoint detection and response platform across three Windows and Linux endpoints, pairing custom YARA rules with automated response playbooks.",
            keyHighlights: [
                "Installed and managed Wazuh agents on heterogeneous endpoints from a unified console",
                "Authored YARA rules to surface malware and suspicious behavior patterns in real time",
                "Configured XDR correlations to reveal multi-stage attack activity across the estate",
                "Automated containment steps including endpoint isolation and malicious IP blocking"
            ],
            outcomes: [
                "Delivered continuous visibility into endpoint activity",
                "Reduced response time for emerging threats through automated workflows"
            ]
        }
    },
    {
        id: 2,
        title: "Intrusion Detection System",
    subtitle: "IDS with Real-Time Alerts | Debian & Kali",
    image: "assets/images/projects/IDS.jpeg",
    description: "Intrusion detection system on Debian hardened with real-time alerting, Metasploit attack validation, and SOC-style monitoring routines.",
    technologies: ["Debian", "Kali Linux", "Metasploit", "IDS", "Security Monitoring"],
        githubUrl: "", // Add if available
        category: "Cybersecurity",
        status: "Completed",
        duration: "2 months",
        teamSize: "Individual Project",
        detailed: {
            overview: "Installed a Debian-based intrusion detection stack with continuous monitoring and validation through offensive security tooling.",
            keyHighlights: [
                "Configured IDS policies and alert thresholds for on-premises infrastructure",
                "Executed Kali Linux and Metasploit attack simulations to verify detection fidelity",
                "Analyzed security logs, performed integrity checks, and tuned alert noise",
                "Documented SOC-style monitoring runbooks for ongoing operations"
            ],
            outcomes: [
                "Confirmed effective detection of simulated threats with actionable alerts",
                "Established repeatable monitoring procedures for security operations"
            ]
        }
    },
    {
        id: 3,
        title: "JWT Security Platform",
        subtitle: "API Security and Token Analysis System",
        image: "assets/images/projects/JWT.jpeg",
    description: "Spring Boot and React platform demonstrating JWT authentication with RS256 signing, refresh rotation, and secure API hardening.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "JWT"],
        githubUrl: "", // Add if available
        category: "Secure Development",
        status: "Completed",
        duration: "6 weeks",
        teamSize: "Individual Project",
        detailed: {
            overview: "Built a secure API reference implementation combining Spring Boot, Spring Security, and React with JWT-based authentication flows.",
            keyHighlights: [
                "Implemented RS256-signed access tokens with refresh token rotation and revocation",
                "Created React tooling to exercise login, token inspection, and protected route handling",
                "Hardened API endpoints with role-based access control and structured error responses"
            ],
            outcomes: [
                "Provided end-to-end example of modern JWT authentication patterns",
                "Improved developer experience for testing and debugging token workflows"
            ]
        }
    },
    {
        id: 4,
        title: "CyberThreatClassifier",
    subtitle: "ML-Based Network Threat Detection",
    image: "assets/images/projects/CyberThreatClassifier.jpg",
    description: "Machine learning classifiers for DoS, DDoS, and web attack detection with engineered features and rigorous evaluation.",
    technologies: ["Python", "Scikit-learn", "Machine Learning", "Pandas", "NumPy"],
        githubUrl: "", // Add if available
        category: "Machine Learning",
        status: "Completed",
        duration: "3 months",
        teamSize: "Individual Project",
        detailed: {
            overview: "Designed supervised machine learning models to classify malicious network traffic across multiple attack types.",
            keyHighlights: [
                "Engineered discriminative features from packet capture datasets",
                "Trained and tuned classifiers targeting DoS, DDoS, and web attack signatures",
                "Evaluated performance with cross-validation and detailed model metrics"
            ],
            outcomes: [
                "Delivered threat detection models exceeding 95% accuracy",
                "Established repeatable workflow for future security analytics experiments"
            ]
        }
    },
    {
        id: 5,
        title: "Network Traffic Analysis",
    subtitle: "Network Monitoring & Anomaly Detection",
    image: "assets/images/projects/Network-Analysis.jpeg",
    description: "Traffic capture and analysis workflow using Wireshark, Zeek, and Python scripting to surface anomalies in network activity.",
    technologies: ["Wireshark", "Zeek", "Python", "Network Analysis"],
        githubUrl: "", // Add if available
        category: "Cybersecurity",
        status: "Completed",
        duration: "6 weeks",
        teamSize: "Individual Project",
        detailed: {
            overview: "Built a network monitoring toolkit that combines packet capture with scripted analysis to highlight suspicious traffic patterns.",
            keyHighlights: [
                "Captured and inspected traffic flows with Wireshark and Zeek",
                "Wrote Python scripts to flag anomalies and summarize findings",
                "Documented repeatable workflow for ongoing monitoring"
            ],
            outcomes: [
                "Improved visibility into network behavior and potential threats",
                "Delivered actionable reports for security follow-up"
            ]
        }
    }
];

// Additional project categories and filters
window.projectCategories = [
    "All",
    "Cybersecurity",
    "Machine Learning",
    "Secure Development"
];

window.projectTechnologies = [
    "Wazuh",
    "YARA",
    "Windows",
    "Linux",
    "XDR",
    "Debian",
    "Kali Linux",
    "Metasploit",
    "IDS",
    "Security Monitoring",
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "JWT",
    "Python",
    "Scikit-learn",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "Wireshark",
    "Zeek",
    "Network Analysis"
];

// Project statistics
window.projectStats = {
    totalProjects: 5,
    completedProjects: 5,
    technologiesUsed: 23,
    totalDuration: "8 months",
    achievements: [
        "95% ML accuracy achieved",
        "Real-time threat detection",
        "Automated incident response",
        "Zero security breaches"
    ]
};

// Future projects roadmap
window.futureProjects = [
    {
        title: "Cloud Security Automation Platform",
        description: "Automated security monitoring and compliance for multi-cloud environments",
        technologies: ["AWS", "Azure", "Terraform", "Python", "Cloud Security"],
        status: "Planning",
        expectedDuration: "4 months"
    },
    {
        title: "AI-Powered SOC Assistant",
        description: "Machine learning-based security analyst assistant for threat hunting and incident response",
        technologies: ["Deep Learning", "NLP", "TensorFlow", "Security Analytics"],
        status: "Research Phase",
        expectedDuration: "5 months"
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
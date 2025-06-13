// Download functionality for resume and documents

// Main download function
function downloadResume(type) {
    const pdfPath = getPDFPath(type);
    const filename = getFilename(type);
    
    if (pdfPath && filename) {
        downloadPDFFile(pdfPath, filename);
        showNotification(`${getDisplayName(type)} downloaded successfully!`, 'success');
    } else {
        showNotification('Download failed. Please try again.', 'error');
    }
}

// Get PDF file path based on type
function getPDFPath(type) {
    const pathMap = {
        'ats': 'assets/documents/resumes/ATS Resume.pdf',
        'customized': 'assets/documents/resumes/Customized Resume - Cybersecurity Consultant Position.pdf',
        'cover': 'assets/documents/resumes/Cover Letter - Cybersecurity Consultant Position.pdf'
    };
    
    return pathMap[type] || null;
}

// Get filename based on type
function getFilename(type) {
    const filenameMap = {
        'ats': 'Salah-Eddine_JAOUAD_ATS_Resume.pdf',
        'customized': 'Salah-Eddine_JAOUAD_Customized_Resume.pdf',
        'cover': 'Salah-Eddine_JAOUAD_Cover_Letter.pdf'
    };
    
    return filenameMap[type] || null;
}

// Download PDF file
function downloadPDFFile(pdfPath, filename) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Get display name for notifications
function getDisplayName(type) {
    const displayMap = {
        'ats': 'ATS Resume',
        'customized': 'Customized Resume',
        'cover': 'Cover Letter'
    };
    
    return displayMap[type] || 'Document';
}

// Create and download file
function createAndDownloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
    }, 100);
}

// Generate ATS Resume content
function generateATSResumeText() {
    return `SALAH-EDDINE JAOUAD
Cybersecurity Engineer

CONTACT INFORMATION
Email: salahjd16@gmail.com
Phone: +212 697-714161
Address: 39, Med Kahouaji, Hay Al Mostakbal, Oujda, Morocco
LinkedIn: linkedin.com/in/jaouad.salaheddine
GitHub: github.com/jaouad4

PROFESSIONAL SUMMARY
Motivated and detail-oriented Cybersecurity Engineering student with hands-on experience in system administration, network security, and software development. Proficient in Linux, Java, Python, MySQL, and cloud platforms. Demonstrated ability to apply cybersecurity concepts including intrusion detection, VoIP implementation, and machine learning for threat classification. Strong communication and problem-solving skills developed through academic projects and industry certifications.

TECHNICAL SKILLS
• Operating Systems: Linux (RedHat, Debian), Windows Server
• Programming Languages: Python, Java, C, JavaScript, PHP
• Cybersecurity: Network Security, Risk Management, Intrusion Detection
• Database Systems: MySQL, MongoDB, Redis
• Networking: Cisco, VLANs, Routing, Switching
• Cloud & Virtualization: VMware, VirtualBox
• Web Development: HTML, CSS, Node.js, RESTful APIs

SOFT SKILLS
• Team Collaboration
• Technical Documentation
• Problem Solving
• Communication (French & English)
• Project Management

EDUCATION

Engineering Cycle in Cybersecurity & Digital Trust
Ecole Normale Supérieure de l'Enseignement Technique (ENSET), Mohammedia
2024 – Present

Diploma of University Technology (DUT) in Systems and Network Administration
Ecole Supérieure de Technologie (EST), Oujda
2021 – 2023

Mathematical Sciences Baccalaureate
Lycée Abdellah Guennoun, Oujda
2021

PROFESSIONAL EXPERIENCE

Cybersecurity Intern – IRS Research
Centre Hospitalier Universitaire Mohammed VI, Oujda
July 2024 – August 2024
• Conducted theoretical and practical research on Intelligent Reflecting Surfaces technology
• Explored electromagnetic modeling using CST Studio Suite
• Analyzed potential integration in hospital infrastructure

IT Intern – Windows Server Resource Management
Technologica SARL, Oujda
April 2023 – June 2023
• Managed IT infrastructure using Windows Server 2019
• Handled network administration and user access management
• Maintained file systems and server resources

IT Intern – Network Analysis and Digitalization
Moroccan Customs & Excise Administration (ADII), Oujda
June 2022 – July 2022
• Analyzed local network infrastructure of Prefectural Directorate
• Studied digitization processes and internal applications
• Evaluated network security and performance

CERTIFICATIONS

Cisco Certifications:
• Cisco Networking Essentials
• Cisco Introduction to IoT
• Cisco NDG Linux Essentials & Linux Unhatched
• Cisco CyberOps Associate
• Cisco English for IT (1 & 2)

Linux & Security:
• Huawei HCIA-Security V4.0
• RedHat Linux Fundamentals RH104
• RedHat System Administration I – RH124
• RedHat System Administration II – RH134

Blockchain:
• Linux Foundation LFS170: Blockchain for Business

KEY PROJECTS

CyberThreatClassifier – Network Threat Detection
• Designed machine learning classifiers for DoS, DDoS, and web attack detection
• Performed feature engineering and model evaluation
• Achieved over 95% accuracy in threat classification

Intrusion Detection System with Wazuh
• Implemented IDS setup on Debian with real-time alerting
• Conducted penetration testing using Kali Linux and Metasploit
• Achieved 99.8% uptime with minimal false positives

VoIP Solution with FreePBX
• Deployed complete VoIP infrastructure with SIP trunks and IVR
• Focused on secure communication protocols
• Implemented advanced security features and fraud prevention

Leave Management System
• Developed JavaFX desktop application with MySQL database
• Implemented role-based access control and automated workflows
• Reduced approval processing time by 70%

LANGUAGES
• French: Native
• English: Professional
• Arabic: Native`;
}

// Generate Customized Resume content
function generateCustomizedResumeText() {
    return `SALAH-EDDINE JAOUAD
Cybersecurity Consultant - Fraud Prevention Specialist

CONTACT INFORMATION
Email: salahjd16@gmail.com
Phone: +212 697-714161
Address: 39, Med Kahouaji, Hay Al Mostakbal, Oujda, Morocco
LinkedIn: linkedin.com/in/jaouad.salaheddine
GitHub: github.com/jaouad4

PROFESSIONAL SUMMARY
Cybersecurity Engineering student with specialized expertise in fraud detection, risk assessment, and threat analysis. Proven experience in developing security policies, conducting risk mapping, and implementing intrusion detection systems. Strong background in financial technology security with hands-on experience in threat classification and fraud prevention. Demonstrated ability to conduct training sessions and collaborate with cross-functional teams to enhance organizational security posture.

CORE COMPETENCIES

Fraud & Risk Management:
• Fraud Risk Assessment and Mapping
• Operational Risk Analysis
• Threat Detection and Classification
• Security Policy Development
• Compliance and Regulatory Frameworks

Cybersecurity Expertise:
• Intrusion Detection Systems (Wazuh)
• Network Security Monitoring
• Vulnerability Assessment
• Security Information and Event Management
• Incident Response and Analysis

Technical Skills:
• Risk Assessment Tools and Methodologies
• Security Monitoring Platforms
• Database Security (MySQL, MongoDB)
• Network Security Architecture
• Penetration Testing (Kali Linux, Metasploit)

Communication & Training:
• Staff Training and Awareness Programs
• Technical Documentation and Reporting
• Cross-departmental Collaboration
• Customer Education and Outreach
• Presentation and Public Speaking

EDUCATION

Engineering Cycle in Cybersecurity & Digital Trust
Ecole Normale Supérieure de l'Enseignement Technique (ENSET), Mohammedia
2024 – Present
Focus: Digital Trust, Risk Management, Security Frameworks

Diploma of University Technology in Systems and Network Administration
Ecole Supérieure de Technologie (EST), Oujda
2021 – 2023
Specialization: Network Security, System Administration

PROFESSIONAL EXPERIENCE

Cybersecurity Research Intern
Centre Hospitalier Universitaire Mohammed VI, Oujda
July 2024 – August 2024
• Conducted comprehensive risk assessment for healthcare infrastructure security
• Analyzed potential security vulnerabilities in hospital systems
• Developed recommendations for risk mitigation and security enhancement
• Collaborated with IT teams to implement security best practices

IT Security Intern
Technologica SARL, Oujda
April 2023 – June 2023
• Managed Windows Server 2019 security configurations and policies
• Monitored network access controls and user permission management
• Implemented security protocols for file and resource access
• Conducted security audits and compliance assessments

Network Security Analyst Intern
Moroccan Customs & Excise Administration (ADII), Oujda
June 2022 – July 2022
• Performed comprehensive network security analysis for government entity
• Evaluated digitization processes for security compliance
• Assessed internal applications for potential vulnerabilities
• Prepared security assessment reports and recommendations

KEY SECURITY PROJECTS

CyberThreatClassifier – Advanced Fraud Detection System
• Developed machine learning algorithms for real-time fraud detection
• Implemented DoS, DDoS, and web attack classification models
• Performed extensive data preprocessing and feature engineering
• Achieved high accuracy in threat pattern recognition and classification

Enterprise Intrusion Detection System
• Deployed Wazuh IDS on Debian for comprehensive security monitoring
• Configured real-time alerting and incident response protocols
• Conducted penetration testing to validate system effectiveness
• Implemented SOC-level monitoring and log analysis capabilities

Secure VoIP Infrastructure Deployment
• Designed and implemented secure communication systems using FreePBX
• Configured SIP trunks with advanced security protocols
• Developed IVR systems with fraud prevention mechanisms
• Ensured compliance with telecommunications security standards

PROFESSIONAL CERTIFICATIONS

Cybersecurity Specializations:
• Cisco CyberOps Associate (SOC Operations & Threat Analysis)
• Huawei HCIA-Security V4.0 (Enterprise Security Solutions)
• Linux Foundation Blockchain for Business (Financial Technology Security)

Infrastructure & Systems:
• RedHat System Administration I & II (Enterprise Security Management)
• Cisco Networking Essentials (Network Security Fundamentals)
• Cisco Introduction to IoT (Connected Device Security)

TRAINING & AWARENESS EXPERIENCE

Student Representative & Trainer
ENSET Mohammedia Academic Outreach Program
• Conducted information sessions on cybersecurity career paths
• Developed and delivered presentations to diverse audiences
• Collaborated with faculty and external organizations for program coordination
• Led preparation of educational materials and communication strategies

Industry Engagement
GITEX Africa 2025, Marrakech
• Participated in cybersecurity and digital transformation panels
• Engaged with industry professionals on emerging fraud trends
• Enhanced knowledge of current market security challenges
• Built professional network within cybersecurity community

LANGUAGES & COMMUNICATION
• Arabic: Native (Professional Documentation)
• French: Native (Business Communication)
• English: Professional (Technical Documentation & International Standards)

ADDITIONAL QUALIFICATIONS
• Strong analytical and synthesis capabilities for complex fraud patterns
• Proven ability to handle sensitive and confidential information
• Experience in cross-departmental collaboration and team coordination
• Demonstrated proactive approach to emerging security threats
• Rigorous methodology in risk assessment and documentation`;
}

// Generate Cover Letter content
function generateCoverLetterText() {
    return `SALAH-EDDINE JAOUAD
39, Med Kahouaji, Hay Al Mostakbal
Oujda, Morocco
Email: salahjd16@gmail.com
Phone: +212 697-714161

---

CIH Bank
Human Resources Department
Casablanca, Morocco

Subject: Application for Cybersecurity Consultant Position (Fraud Entity)

Dear Hiring Manager,

I am writing to express my strong interest in the Cybersecurity Consultant position within the Fraud Entity at CIH Bank. As a dedicated Cybersecurity Engineering student with specialized experience in threat detection, risk assessment, and fraud prevention systems, I am excited about the opportunity to contribute to CIH Bank's commitment to maintaining the highest standards of financial security and fraud prevention.

My academic background in Cybersecurity & Digital Trust at ENSET Mohammedia, combined with my practical experience in developing fraud detection systems, aligns perfectly with the requirements of this position. During my recent internship at Centre Hospitalier Universitaire Mohammed VI, I conducted comprehensive security risk assessments and developed mitigation strategies for critical infrastructure – experience that directly translates to identifying and mapping fraud risks in banking environments. Additionally, my work on the CyberThreatClassifier project involved creating machine learning algorithms specifically designed to detect and classify various types of cyber threats, including those commonly associated with financial fraud.

What particularly draws me to CIH Bank is your reputation as a leading financial institution that prioritizes innovation and security. Your commitment to digital transformation while maintaining robust fraud prevention measures resonates with my professional values and career aspirations. I am especially excited about the opportunity to contribute to policy development and staff training initiatives, as my experience as a student representative has equipped me with strong communication and presentation skills essential for conducting awareness sessions and collaborating with cross-functional teams.

My technical certifications, including Cisco CyberOps Associate and Huawei HCIA-Security, demonstrate my commitment to staying current with industry best practices in cybersecurity and fraud prevention. Furthermore, my hands-on experience with intrusion detection systems, penetration testing, and security monitoring provides me with the analytical skills necessary to identify emerging fraud patterns and develop comprehensive risk mapping strategies. I am confident that my proactive approach, combined with my ability to handle sensitive information with the utmost discretion, makes me an ideal candidate for this role.

I would welcome the opportunity to discuss how my technical expertise, analytical capabilities, and passion for cybersecurity can contribute to strengthening CIH Bank's fraud prevention initiatives. I am available for an interview at your convenience and look forward to the possibility of joining your team in Casablanca.

Thank you for considering my application. I look forward to hearing from you soon.

Respectfully yours,

Salah-Eddine JAOUAD`;
}

// Download project portfolio as PDF (placeholder for future PDF generation)
function downloadPortfolio() {
    const portfolioContent = generatePortfolioContent();
    const filename = 'Salah-Eddine_JAOUAD_Portfolio.txt';
    
    createAndDownloadFile(portfolioContent, filename, 'text/plain');
    showNotification('Portfolio downloaded successfully!', 'success');
}

// Generate portfolio content
function generatePortfolioContent() {
    return `DIGITAL PORTFOLIO
SALAH-EDDINE JAOUAD
Cybersecurity Engineer

CONTACT INFORMATION
Email: salahjd16@gmail.com
Phone: +212 697-714161
LinkedIn: linkedin.com/in/jaouad.salaheddine
GitHub: github.com/jaouad4

PROJECT PORTFOLIO

1. CYBERTHREATCLASSIFIER - ADVANCED THREAT DETECTION
Technologies: Python, Machine Learning, Scikit-learn, Pandas, NumPy
Description: Developed an intelligent threat classification system capable of identifying DoS, DDoS, and web-based attacks with over 95% accuracy.
Key Achievements:
• Real-time network traffic analysis and pattern recognition
• Advanced feature engineering and model optimization
• Ensemble methods combining multiple ML algorithms
• Scalable architecture suitable for enterprise deployment

2. ENTERPRISE INTRUSION DETECTION SYSTEM
Technologies: Wazuh SIEM, Linux, Kali Linux, Metasploit
Description: Comprehensive IDS implementation with SOC-level monitoring and automated incident response capabilities.
Key Achievements:
• 99.8% system uptime with minimal false positives
• Real-time threat detection and automated response
• Comprehensive security event correlation
• Penetration testing validation and system hardening

3. SECURE VOIP INFRASTRUCTURE
Technologies: FreePBX, SIP, VoIP Security, Network Architecture
Description: Complete VoIP communication system with advanced security features and fraud prevention mechanisms.
Key Achievements:
• 99.9% system availability with load balancing
• Zero security incidents during deployment
• Advanced encryption and secure communication protocols
• Scalable architecture supporting multiple concurrent calls

4. LEAVE MANAGEMENT SYSTEM
Technologies: Java, JavaFX, MySQL, MVC Architecture
Description: Enterprise HR solution with role-based access control and automated workflows.
Key Achievements:
• 70% reduction in approval processing time
• Complete elimination of paper-based workflows
• Intuitive user interface with role-based functionality
• Comprehensive audit trail and reporting capabilities

CERTIFICATIONS
• Cisco CyberOps Associate
• Huawei HCIA-Security V4.0
• RedHat System Administration I & II
• Linux Foundation Blockchain for Business

EDUCATION
• Engineering Cycle in Cybersecurity & Digital Trust - ENSET Mohammedia (2024-Present)
• DUT in Systems and Network Administration - EST Oujda (2021-2023)

This portfolio demonstrates comprehensive technical skills, practical implementation experience, and a strong foundation in cybersecurity principles and practices.`;
}

// Initialize download functionality
document.addEventListener('DOMContentLoaded', function() {
    // Store resume content globally for modal access
    window.resumeContent = {
        ats: generateATSResumeText(),
        customized: generateCustomizedResumeText(),
        cover: generateCoverLetterText()
    };
});

// Export functions for global use
window.downloadUtils = {
    downloadResume,
    downloadPortfolio,
    createAndDownloadFile
};

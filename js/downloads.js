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
        'resume-en': 'assets/documents/resumes/Resume.pdf',
        'resume-fr': 'assets/documents/resumes/Resume (French Version).pdf'
    };

    return pathMap[type] || null;
}

// Get filename based on type
function getFilename(type) {
    const filenameMap = {
        'resume-en': 'Salah-Eddine_JAOUAD_Resume_EN.pdf',
        'resume-fr': 'Salah-Eddine_JAOUAD_CV_FR.pdf'
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
        'resume-en': 'Resume (English)',
        'resume-fr': 'CV (Français)'
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

// Generate English resume plain text (for future exports)
function generateEnglishResumeText() {
    return `SALAH-EDDINE JAOUAD
Cybersecurity Engineer

CONTACT INFORMATION
Email: salahjd16@gmail.com
Phone: +212 697-714161
Address: 39, Med Kahouaji, Hay Al Mostakbal, Oujda, Morocco
LinkedIn: linkedin.com/in/salah-eddine-jaouad
GitHub: github.com/jaouad4

PROFESSIONAL SUMMARY
Motivated and detail-oriented Cybersecurity Engineering student with hands-on experience in system administration, network security, and software development. Proficient in Linux, Java, Python, MySQL, and cloud platforms. Demonstrated ability to apply cybersecurity concepts including intrusion detection, secure API development, and machine learning for threat classification. Strong communication and problem-solving skills developed through academic projects and industry certifications.

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

EDR Platform – Endpoint Detection & Response
• Deployed Wazuh as centralized EDR on three Windows/Linux endpoints
• Integrated custom YARA rules to detect malware and suspicious behaviors
• Configured XDR correlations to expose multi-stage attacks
• Automated response actions including endpoint isolation and IP blocking

Intrusion Detection System – Real-Time Alerts
• Installed an IDS stack on Debian with hardened configurations
• Performed attack simulations via Kali Linux and Metasploit to validate alerts
• Analyzed logs, integrity checks, and SOC-style monitoring routines

JWT Security Platform – API Security
• Developed Spring Boot REST APIs secured with Spring Security and JWT
• Implemented RS256 token generation, refresh rotation, and revocation controls
• Built a React interface to test authenticated client interactions

Cyber Threat Classifier – Machine Learning
• Designed classifiers for DoS, DDoS, and web attack detection
• Implemented feature engineering and rigorous model evaluation

Network Traffic Analysis – Monitoring & Anomaly Detection
• Captured and analyzed network traffic using Wireshark and Zeek
• Developed Python scripts to surface anomalies and summarize findings

LANGUAGES
• French: Native
• English: Professional
• Arabic: Native`;
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
LinkedIn: linkedin.com/in/salah-eddine-jaouad
GitHub: github.com/jaouad4

PROJECT PORTFOLIO

1. EDR PLATFORM - ENDPOINT DETECTION & RESPONSE
Technologies: Wazuh, YARA, Windows, Linux, XDR
Description: Deployed Wazuh as centralized EDR across heterogeneous endpoints with custom YARA detections and automated containment.
Key Achievements:
• Installed agents on three Windows/Linux endpoints with unified management
• Authored YARA rules surfacing malware and suspicious behaviors
• Configured XDR correlations to expose multi-stage attacks
• Automated endpoint isolation and malicious IP blocking playbooks

2. INTRUSION DETECTION SYSTEM - REAL-TIME ALERTS
Technologies: Debian, Kali Linux, Metasploit, IDS
Description: Hardened Debian IDS with real-time alerting validated by offensive security simulations.
Key Achievements:
• Installed and tuned IDS policies for on-premises infrastructure
• Ran Kali Linux and Metasploit simulations to confirm detection coverage
• Conducted log analysis and integrity checks to calibrate alerts

3. JWT SECURITY PLATFORM - API SECURITY
Technologies: Java, Spring Boot, Spring Security, React, JWT
Description: Secure API platform demonstrating JWT authentication with RS256 signing and refresh rotation.
Key Achievements:
• Built Spring Boot REST APIs secured with JWT filters
• Implemented RS256 token generation, rotation, and revocation workflows
• Developed React tooling for login, token inspection, and protected routes

4. CYBER THREAT CLASSIFIER - MACHINE LEARNING
Technologies: Python, Scikit-learn, Pandas, NumPy
Description: Machine learning classifiers for detecting DoS, DDoS, and web attacks using engineered features.
Key Achievements:
• Designed feature engineering pipeline for network traffic datasets
• Trained models targeting multiple attack classes with rigorous evaluation
• Achieved over 95% detection accuracy across scenarios

5. NETWORK TRAFFIC ANALYSIS - MONITORING & ANOMALY DETECTION
Technologies: Wireshark, Zeek, Python
Description: Traffic capture and scripting workflow to identify anomalies in network activity.
Key Achievements:
• Captured and inspected traffic flows with Wireshark and Zeek
• Built Python scripts to detect and report suspicious behavior
• Produced actionable monitoring summaries for security follow-up

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

// Generate placeholder French resume text (PDF contains full details)
function generateFrenchResumeText() {
    return `SALAH-EDDINE JAOUAD
Ingénieur en cybersécurité & confiance numérique

Consultez le CV PDF pour la version complète en français couvrant le résumé professionnel, les compétences, l'expérience et la formation.`;
}

// Initialize download functionality
document.addEventListener('DOMContentLoaded', function() {
    // Store resume content globally for modal access
    window.resumeContent = {
        english: generateEnglishResumeText(),
        french: generateFrenchResumeText()
    };
});

// Export functions for global use
window.downloadUtils = {
    downloadResume,
    downloadPortfolio,
    createAndDownloadFile
};

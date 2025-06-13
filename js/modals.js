// Modal functionality for portfolio

// Modal management
function openModal(modalId) {
    const modal = document.getElementById(modalId) || createModal(modalId);
    if (modal) {
        modal.style.display = 'block';
        loadModalContent(modalId);
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        modal.classList.add('animate-fade-in');
        modal.querySelector('.modal-content')?.classList.add('animate-slide-in-up');
        
        // Focus management for accessibility
        const firstFocusableElement = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Remove animation classes
        modal.classList.remove('animate-fade-in');
        modal.querySelector('.modal-content')?.classList.remove('animate-slide-in-up');
    }
}

// Create modal if it doesn't exist
function createModal(modalId) {
    const modalContainer = document.getElementById('modal-container') || createModalContainer();
    
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal('${modalId}')">&times;</span>
            <div class="modal-body" id="${modalId}-content">
                <div class="loading-spinner"></div>
            </div>
        </div>
    `;
    
    modalContainer.appendChild(modal);
    setupModalEventListeners(modal);
    return modal;
}

// Create modal container if it doesn't exist
function createModalContainer() {
    const container = document.createElement('div');
    container.id = 'modal-container';
    document.body.appendChild(container);
    return container;
}

// Setup event listeners for modal
function setupModalEventListeners(modal) {
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal(modal.id);
        }
    });
    
    // Close button functionality
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal.id));
    }
}

// Load modal content based on modal ID
function loadModalContent(modalId) {
    const modalContent = document.getElementById(`${modalId}-content`);
    if (!modalContent) return;
    
    // Show loading spinner
    modalContent.innerHTML = '<div class="loading-spinner"></div>';
    
    // Load content based on modal ID
    setTimeout(() => {
        const content = getModalContent(modalId);
        modalContent.innerHTML = content;
    }, 300); // Small delay for better UX
}

// Get modal content based on modal ID
function getModalContent(modalId) {
    const contentMap = {
        'ats-resume-modal': generateATSResumeContent(),
        'company-analysis-modal': generateCompanyAnalysisContent(),
        'customized-resume-modal': generateCustomizedResumeContent(),
        'cover-letter-modal': generateCoverLetterContent(),
        'mindmap-modal': generateMindMapContent(),
        'networking-modal': generateNetworkingContent(),
        'activities-modal': generateActivitiesContent(),
        'portfolio-modal': generatePortfolioContent(),
        'project1-modal': generateProject1Content(),
        'project2-modal': generateProject2Content(),
        'project3-modal': generateProject3Content(),
        'project4-modal': generateProject4Content()
    };
    
    return contentMap[modalId] || '<p>Content not found.</p>';
}

// Content generators for checklist items - these will show the actual PDFs
function generateATSResumeContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-file-alt"></i> ATS-Friendly Resume</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="downloadResume('ats')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <button class="btn btn-secondary" onclick="openPDFInNewTab('../../Checklist/ATS Resume.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/ATS Resume.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/ATS Resume.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generateCompanyAnalysisContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-building"></i> Company & Job Analysis</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="openPDFInNewTab('../../Checklist/Company and Job Description Analysis.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open PDF in New Tab
                </button>
                <button class="btn btn-secondary" onclick="downloadPDFFile('../../Checklist/Company and Job Description Analysis.pdf', 'Company_Job_Analysis.pdf')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/Company and Job Description Analysis.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/Company and Job Description Analysis.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generateCustomizedResumeContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-target"></i> Customized Resume for CIH Bank</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="downloadResume('customized')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <button class="btn btn-secondary" onclick="openPDFInNewTab('../../Checklist/Customized Resume - Cybersecurity Consultant Position.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/Customized Resume - Cybersecurity Consultant Position.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/Customized Resume - Cybersecurity Consultant Position.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generateCoverLetterContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-envelope-open-text"></i> Professional Cover Letter</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="downloadResume('cover')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <button class="btn btn-secondary" onclick="openPDFInNewTab('../../Checklist/Cover Letter - Cybersecurity Consultant Position.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/Cover Letter - Cybersecurity Consultant Position.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/Cover Letter - Cybersecurity Consultant Position.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generateMindMapContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-sitemap"></i> Hidden Job Market Mind Map</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="downloadPDFFile('../../Checklist/Hidden Job Market Mind Map.png', 'Hidden_Job_Market_Mind_Map.png')">
                    <i class="fas fa-download"></i> Download Image
                </button>
                <button class="btn btn-secondary" onclick="openPDFInNewTab('../../Checklist/Hidden Job Market Mind Map.png')">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
            </div>
            <div class="mindmap-container">
                <div class="mindmap-description">
                    <p>This comprehensive mind map illustrates the concept of the hidden job market and strategic approaches to access these opportunities:</p>
                </div>
                <div class="mindmap-visual">
                    <img src="../../Checklist/Hidden Job Market Mind Map.png" alt="Hidden Job Market Mind Map" 
                         style="width: 100%; max-width: 800px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                </div>
                <div class="mindmap-insights">
                    <h3>Key Insights from the Mind Map:</h3>
                    <div class="insights-grid">
                        <div class="insight-card">
                            <div class="insight-icon"><i class="fas fa-chart-pie"></i></div>
                            <h4>Market Statistics</h4>
                            <p><strong>80%</strong> of jobs never advertised publicly</p>
                        </div>
                        <div class="insight-card">
                            <div class="insight-icon"><i class="fas fa-users"></i></div>
                            <h4>Networking Power</h4>
                            <p><strong>85%</strong> of positions filled through connections</p>
                        </div>
                        <div class="insight-card">
                            <div class="insight-icon"><i class="fab fa-linkedin"></i></div>
                            <h4>Digital Platforms</h4>
                            <p><strong>LinkedIn</strong> #1 professional networking tool</p>
                        </div>
                        <div class="insight-card">
                            <div class="insight-icon"><i class="fas fa-calendar-alt"></i></div>
                            <h4>Industry Events</h4>
                            <p><strong>Direct access</strong> to hiring managers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateNetworkingContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-network-wired"></i> Professional Networking Commentary</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="openPDFInNewTab('../../Checklist/Commentary on Professional Networking.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open PDF in New Tab
                </button>
                <button class="btn btn-secondary" onclick="downloadPDFFile('../../Checklist/Commentary on Professional Networking.pdf', 'Professional_Networking_Commentary.pdf')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/Commentary on Professional Networking.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/Commentary on Professional Networking.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generateActivitiesContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-calendar-check"></i> Social & Extracurricular Activities</h2>
            <div class="resume-actions">
                <button class="btn btn-primary" onclick="openPDFInNewTab('../../Checklist/Social and Extracurricular Activities.pdf')">
                    <i class="fas fa-external-link-alt"></i> Open PDF in New Tab
                </button>
                <button class="btn btn-secondary" onclick="downloadPDFFile('../../Checklist/Social and Extracurricular Activities.pdf', 'Social_Extracurricular_Activities.pdf')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
            </div>
            <div class="pdf-viewer">
                <iframe src="../../Checklist/Social and Extracurricular Activities.pdf" width="100%" height="600px" style="border: none; border-radius: 8px;">
                    <p>Your browser does not support PDFs. <a href="../../Checklist/Social and Extracurricular Activities.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
}

function generatePortfolioContent() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-briefcase"></i> Digital Portfolio - Technical Projects</h2>
            <div class="portfolio-overview">
                <p>This portfolio showcases key technical projects demonstrating cybersecurity expertise, software development skills, and practical implementation experience.</p>
            </div>
            <div class="portfolio-projects">
                <div class="portfolio-project">
                    <img src="assets/images/activities/Fortinet.jpg" alt="CyberThreat Classifier" class="project-portfolio-image">
                    <div class="project-details">
                        <h3>CyberThreatClassifier</h3>
                        <div class="project-tech-stack">
                            <span class="tech-badge">Python</span>
                            <span class="tech-badge">Machine Learning</span>
                            <span class="tech-badge">Scikit-learn</span>
                            <span class="tech-badge">Cybersecurity</span>
                        </div>
                        <p>Advanced network threat detection system using machine learning algorithms to classify DoS, DDoS, and web attacks with 95% accuracy.</p>
                        <button class="btn btn-secondary" onclick="openModal('project1-modal')">View Details</button>
                    </div>
                </div>
                
                <div class="portfolio-project">
                    <img src="assets/images/activities/Networking 4.jpg" alt="Intrusion Detection System" class="project-portfolio-image">
                    <div class="project-details">
                        <h3>Enterprise Intrusion Detection System</h3>
                        <div class="project-tech-stack">
                            <span class="tech-badge">Wazuh</span>
                            <span class="tech-badge">Linux</span>
                            <span class="tech-badge">SIEM</span>
                            <span class="tech-badge">Security Monitoring</span>
                        </div>
                        <p>Comprehensive IDS implementation with real-time alerting, SOC-level monitoring, and comprehensive threat analysis capabilities.</p>
                        <button class="btn btn-secondary" onclick="openModal('project2-modal')">View Details</button>
                    </div>
                </div>
                
                <div class="portfolio-project">
                    <img src="assets/images/activities/Networking 5.jpg" alt="VoIP Infrastructure" class="project-portfolio-image">
                    <div class="project-details">
                        <h3>Secure VoIP Infrastructure</h3>
                        <div class="project-tech-stack">
                            <span class="tech-badge">FreePBX</span>
                            <span class="tech-badge">SIP</span>
                            <span class="tech-badge">VoIP Security</span>
                            <span class="tech-badge">Network Architecture</span>
                        </div>
                        <p>Complete VoIP communication system with advanced security features, encryption protocols, and fraud prevention mechanisms.</p>
                        <button class="btn btn-secondary" onclick="openModal('project3-modal')">View Details</button>
                    </div>
                </div>
                
                <div class="portfolio-project">
                    <img src="assets/images/activities/Flyer.png" alt="Leave Management System" class="project-portfolio-image">
                    <div class="project-details">
                        <h3>Leave Management System</h3>
                        <div class="project-tech-stack">
                            <span class="tech-badge">Java</span>
                            <span class="tech-badge">JavaFX</span>
                            <span class="tech-badge">MySQL</span>
                            <span class="tech-badge">MVC Architecture</span>
                        </div>
                        <p>Enterprise HR solution with role-based access control, automated workflows, and comprehensive leave management capabilities.</p>
                        <button class="btn btn-secondary" onclick="openModal('project4-modal')">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Project-specific content generators
function generateProject1Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-robot"></i> CyberThreatClassifier - ML Threat Detection</h2>
            <div class="project-detailed">
                <img src="assets/images/activities/Fortinet.jpg" alt="CyberThreat Classifier" class="project-hero-image">
                
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Advanced machine learning system for real-time network threat classification, capable of identifying DoS, DDoS, and web-based attacks with over 95% accuracy. The system processes network traffic data in real-time and automatically classifies potential security threats.</p>
                </div>
                
                <div class="project-technical">
                    <h3>Technical Implementation</h3>
                    <ul>
                        <li><strong>Data Processing:</strong> Comprehensive feature engineering from network traffic patterns using Python and Pandas</li>
                        <li><strong>ML Algorithms:</strong> Ensemble methods combining decision trees, random forests, and support vector machines</li>
                        <li><strong>Real-time Analysis:</strong> Stream processing for immediate threat detection with sub-second response times</li>
                        <li><strong>Accuracy:</strong> Achieved 95%+ classification accuracy across multiple attack vectors</li>
                        <li><strong>Scalability:</strong> Designed for horizontal scaling across multiple nodes</li>
                    </ul>
                </div>
                
                <div class="project-outcomes">
                    <h3>Key Outcomes</h3>
                    <ul>
                        <li>Achieved over 95% accuracy in threat classification</li>
                        <li>Reduced false positive rates by 40% compared to traditional methods</li>
                        <li>Enabled real-time threat response capabilities</li>
                        <li>Created scalable solution suitable for enterprise deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject2Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-shield-alt"></i> Enterprise Intrusion Detection System</h2>
            <div class="project-detailed">
                <img src="assets/images/activities/Networking 4.jpg" alt="Intrusion Detection System" class="project-hero-image">
                
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Comprehensive intrusion detection system using Wazuh SIEM platform on a hardened Debian Linux environment. The project established SOC-level monitoring capabilities with real-time threat detection and automated incident response.</p>
                </div>
                
                <div class="project-technical">
                    <h3>Technical Implementation</h3>
                    <ul>
                        <li><strong>Platform:</strong> Wazuh SIEM deployed on hardened Debian Linux</li>
                        <li><strong>Monitoring:</strong> File integrity, log analysis, rootkit detection, active response</li>
                        <li><strong>Testing:</strong> Comprehensive penetration testing using Kali Linux and Metasploit</li>
                        <li><strong>Integration:</strong> Seamless integration with existing network security infrastructure</li>
                        <li><strong>Performance:</strong> Optimized for enterprise-scale deployment</li>
                    </ul>
                </div>
                
                <div class="project-outcomes">
                    <h3>Key Outcomes</h3>
                    <ul>
                        <li>Achieved 99.8% system uptime with minimal false positives</li>
                        <li>Successfully detected and responded to various security incidents</li>
                        <li>Implemented comprehensive security event correlation</li>
                        <li>Established automated incident response workflows</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject3Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-phone"></i> Secure VoIP Infrastructure</h2>
            <div class="project-detailed">
                <img src="Secure VoIP Infrastructure.png" alt="VoIP Infrastructure" class="project-hero-image" style="width: 100%; max-width: 600px; border-radius: 10px; margin-bottom: 20px;">
                
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Complete Voice over IP communication infrastructure using FreePBX, focusing on secure communications and robust call routing capabilities. The project encompassed the entire VoIP ecosystem including SIP trunk configuration, Interactive Voice Response (IVR) system setup, extension management, and comprehensive security implementation with advanced fraud prevention mechanisms.</p>
                </div>
                
                <div class="project-technical">
                    <h3>Technical Implementation</h3>
                    <ul>
                        <li><strong>Platform:</strong> FreePBX (Asterisk-based) with custom security configurations and hardened deployment</li>
                        <li><strong>Protocols:</strong> SIP for signaling, RTP/SRTP for secure media transmission with end-to-end encryption</li>
                        <li><strong>Security Features:</strong> TLS encryption for signaling, SRTP secure media streams, comprehensive access control lists, and IP-based authentication</li>
                        <li><strong>Advanced Features:</strong> Multi-level IVR systems, automated call recording, conference bridges with PIN protection, mobile integration via SIP clients</li>
                        <li><strong>Fraud Prevention:</strong> Real-time call monitoring, geographic restrictions, rate limiting, and suspicious activity detection</li>
                        <li><strong>Quality Assurance:</strong> QoS implementation, bandwidth management, and codec optimization for crystal-clear voice quality</li>
                    </ul>
                </div>
                
                <div class="project-challenges">
                    <h3>Challenges Overcome</h3>
                    <ul>
                        <li><strong>Security Implementation:</strong> Deployed comprehensive security measures including TLS encryption for signaling and SRTP for media streams</li>
                        <li><strong>Fraud Prevention:</strong> Implemented advanced fraud detection mechanisms to prevent VoIP-specific attacks and unauthorized usage</li>
                        <li><strong>Quality of Service:</strong> Ensured consistent call quality across different network conditions through QoS policies and optimization</li>
                        <li><strong>Scalability:</strong> Designed architecture to support growing number of concurrent calls and users</li>
                    </ul>
                </div>
                
                <div class="project-outcomes">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>99.9% System Availability:</strong> Achieved exceptional uptime with load balancing and redundancy mechanisms</li>
                        <li><strong>Zero Security Incidents:</strong> Maintained perfect security record throughout entire deployment period</li>
                        <li><strong>Excellent Call Quality:</strong> Successfully handled multiple concurrent calls with crystal-clear audio quality</li>
                        <li><strong>Advanced Feature Set:</strong> Implemented comprehensive telephony features including call recording, conferencing, and mobile integration</li>
                        <li><strong>Cost Efficiency:</strong> Reduced communication costs by 60% compared to traditional telephony systems</li>
                        <li><strong>User Satisfaction:</strong> Achieved 95% user satisfaction rating for call quality and system reliability</li>
                    </ul>
                </div>
                
                <div class="project-technologies">
                    <h3>Technologies & Tools Used</h3>
                    <div class="tech-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                        <div class="tech-category">
                            <h4>Core Platform</h4>
                            <ul>
                                <li>FreePBX/Asterisk</li>
                                <li>Linux (CentOS)</li>
                                <li>MySQL Database</li>
                            </ul>
                        </div>
                        <div class="tech-category">
                            <h4>Security</h4>
                            <ul>
                                <li>TLS/SRTP Encryption</li>
                                <li>Fail2Ban</li>
                                <li>IPTables Firewall</li>
                            </ul>
                        </div>
                        <div class="tech-category">
                            <h4>Protocols</h4>
                            <ul>
                                <li>SIP (Session Initiation Protocol)</li>
                                <li>RTP/SRTP</li>
                                <li>IAX2</li>
                            </ul>
                        </div>
                        <div class="tech-category">
                            <h4>Features</h4>
                            <ul>
                                <li>IVR (Interactive Voice Response)</li>
                                <li>Call Recording</li>
                                <li>Conference Bridges</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateProject4Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-users-cog"></i> Leave Management System</h2>
            <div class="project-detailed">
                <img src="assets/images/activities/Flyer.png" alt="Leave Management System" class="project-hero-image">
                
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Comprehensive desktop application for human resources management focusing on employee leave request processing and approval workflows. The system implements a complete leave management lifecycle including request submission, supervisor approval chains, and HR processing.</p>
                </div>
                
                <div class="project-technical">
                    <h3>Technical Implementation</h3>
                    <ul>
                        <li><strong>Architecture:</strong> JavaFX application following MVC design pattern</li>
                        <li><strong>Database:</strong> MySQL with normalized schema and optimized queries</li>
                        <li><strong>Security:</strong> Role-based access control, data encryption, audit logging</li>
                        <li><strong>Features:</strong> Leave balance tracking, automated notifications, calendar integration, reporting dashboards</li>
                        <li><strong>User Interface:</strong> Intuitive design with role-specific functionality</li>
                    </ul>
                </div>
                
                <div class="project-outcomes">
                    <h3>Key Outcomes</h3>
                    <ul>
                        <li>Reduced approval processing time by 70%</li>
                        <li>Eliminated paper-based workflows entirely</li>
                        <li>Improved user satisfaction and HR department efficiency</li>
                        <li>Provided comprehensive audit trail and compliance reporting</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Utility functions
function openPDFInNewTab(pdfPath) {
    window.open(pdfPath, '_blank');
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container
    createModalContainer();
    
    // Setup global click handlers for modal triggers
    document.addEventListener('click', function(e) {
        if (e.target.matches('[onclick*="openModal"]')) {
            e.preventDefault();
        }
    });
});

// Export functions for global use
window.modalUtils = {
    openModal,
    closeModal,
    openPDFInNewTab
};

// Modal functionality for portfolio

// Open a modal by ID, creating it on-demand
function openModal(modalId) {
    const modal = document.getElementById(modalId) || createModal(modalId);
    if (!modal) return;

    loadModalContent(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    modal.classList.add('animate-fade-in');
    modal.querySelector('.modal-content')?.classList.add('animate-slide-in-up');

    const focusTarget = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusTarget?.focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    modal.classList.remove('animate-fade-in');
    modal.querySelector('.modal-content')?.classList.remove('animate-slide-in-up');
}

function createModal(modalId) {
    const container = document.getElementById('modal-container') || createModalContainer();

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button type="button" class="close" aria-label="Close" onclick="closeModal('${modalId}')">&times;</button>
            <div class="modal-body" id="${modalId}-content">
                <div class="loading-spinner"></div>
            </div>
        </div>
    `;

    container.appendChild(modal);
    setupModalEventListeners(modal);
    return modal;
}

function createModalContainer() {
    const container = document.createElement('div');
    container.id = 'modal-container';
    document.body.appendChild(container);
    return container;
}

function setupModalEventListeners(modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal(modal.id);
        }
    });
}

// Load modal content based on modal ID
function loadModalContent(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const modalBody = modal.querySelector('.modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = '<div class="loading-spinner"></div>';

    const modalContentMap = {
        'project1-modal': generateProject1Content(),
        'project2-modal': generateProject2Content(),
        'project3-modal': generateProject3Content(),
        'project4-modal': generateProject4Content(),
        'project5-modal': generateProject5Content()
    };

    const modalContent = modalContentMap[modalId];

    if (!modalContent) {
        modalBody.innerHTML = `
            <div class="modal-empty">
                <i class="fas fa-info-circle"></i>
                <p>Content coming soon.</p>
            </div>
        `;
        return;
    }

    modalBody.innerHTML = modalContent;
}

// Project-specific content generators
function generateProject1Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-bullseye"></i> EDR Platform</h2>
            <div class="project-detailed">
                <img src="assets/images/projects/EDR.jpeg" alt="EDR Platform" class="project-hero-image">
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Endpoint detection and response deployment built on Wazuh with YARA detections, XDR correlations, and automated containment across Windows and Linux endpoints.</p>
                </div>
                <div class="project-technical">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li>Installed Wazuh agents on three heterogeneous endpoints managed from a central console</li>
                        <li>Integrated custom YARA rules to surface malware and suspicious behavior in real time</li>
                        <li>Configured XDR correlation rules that expose multi-stage attack chains</li>
                        <li>Automated response actions such as endpoint isolation and malicious IP blocking</li>
                    </ul>
                </div>
                <div class="project-outcomes">
                    <h3>Impact</h3>
                    <ul>
                        <li>Improved visibility into endpoint activity across Windows and Linux systems</li>
                        <li>Reduced response time through scripted containment workflows</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject2Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-shield-alt"></i> Intrusion Detection System</h2>
            <div class="project-detailed">
                <img src="assets/images/projects/IDS.jpeg" alt="Intrusion Detection System" class="project-hero-image">
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Debian-based IDS tuned for real-time alerting, validated through Kali Linux and Metasploit attack simulations, and operated with SOC-style monitoring routines.</p>
                </div>
                <div class="project-technical">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li>Installed and hardened an IDS stack on Debian</li>
                        <li>Executed Kali Linux and Metasploit simulations to confirm alert fidelity</li>
                        <li>Analyzed logs and integrity checks to fine-tune detections</li>
                        <li>Documented operating procedures for ongoing SOC monitoring</li>
                    </ul>
                </div>
                <div class="project-outcomes">
                    <h3>Impact</h3>
                    <ul>
                        <li>Produced actionable alerts for simulated threats</li>
                        <li>Established repeatable monitoring workflows for incident response</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject3Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-key"></i> JWT Security Platform</h2>
            <div class="project-detailed">
                <img src="assets/images/projects/JWT.jpeg" alt="JWT Security Platform" class="project-hero-image">
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Secure API reference implementation combining Spring Boot, Spring Security, and React to demonstrate JWT authentication flows with RS256 signing.</p>
                </div>
                <div class="project-technical">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li>Built REST APIs secured with JWT filters and Spring Security</li>
                        <li>Implemented RS256-signed access tokens with refresh rotation and revocation</li>
                        <li>Developed a React interface for login, token inspection, and protected routes</li>
                        <li>Documented API hardening practices and role-based access controls</li>
                    </ul>
                </div>
                <div class="project-outcomes">
                    <h3>Impact</h3>
                    <ul>
                        <li>Delivered an end-to-end JWT authentication template for secure APIs</li>
                        <li>Improved developer experience when testing and debugging token workflows</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject4Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-robot"></i> Cyber Threat Classifier</h2>
            <div class="project-detailed">
                <img src="assets/images/projects/CyberThreatClassifier.jpg" alt="Cyber Threat Classifier" class="project-hero-image">
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Machine learning classifiers designed to detect DoS, DDoS, and web attack traffic using engineered features and rigorous evaluation.</p>
                </div>
                <div class="project-technical">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li>Created feature engineering pipeline for labeled network traffic datasets</li>
                        <li>Trained models targeting multiple attack classes with Scikit-learn</li>
                        <li>Validated accuracy through cross-validation and detailed metrics</li>
                    </ul>
                </div>
                <div class="project-outcomes">
                    <h3>Impact</h3>
                    <ul>
                        <li>Achieved over 95% detection accuracy across attack categories</li>
                        <li>Established a repeatable workflow for future security analytics experiments</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProject5Content() {
    return `
        <div class="modal-section">
            <h2><i class="fas fa-network-wired"></i> Network Traffic Analysis</h2>
            <div class="project-detailed">
                <img src="assets/images/projects/Network-Analysis.jpeg" alt="Network Traffic Analysis" class="project-hero-image">
                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Packet capture and anomaly detection workflow leveraging Wireshark, Zeek, and Python scripting to surface suspicious network activity.</p>
                </div>
                <div class="project-technical">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li>Captured and inspected traffic flows with Wireshark and Zeek</li>
                        <li>Developed Python scripts to detect anomalies and summarize findings</li>
                        <li>Documented repeatable monitoring procedures for future investigations</li>
                    </ul>
                </div>
                <div class="project-outcomes">
                    <h3>Impact</h3>
                    <ul>
                        <li>Improved visibility into network behavior and potential threats</li>
                        <li>Delivered actionable reports to guide remediation efforts</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function openPDFInNewTab(pdfPath) {
    window.open(pdfPath, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    createModalContainer();
    document.addEventListener('click', (event) => {
        if (event.target.matches('[onclick*="openModal"]')) {
            event.preventDefault();
        }
    });
});

window.modalUtils = {
    openModal,
    closeModal,
    openPDFInNewTab
};

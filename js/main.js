// Main JavaScript file for portfolio functionality

document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    setupSmoothScrolling();
    setupScrollIndicator();
    setupScrollRevealAnimations();
    populateChecklistItems();
    populateProjects();
    setupIntersectionObserver();
    addParticleEffect();
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = 80;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                updateActiveNavigation(this.getAttribute('href'));
            }
        });
    });
}

// Update active navigation item
function updateActiveNavigation(targetHref) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${targetHref}"]`)?.classList.add('active');
}

// Scroll indicator functionality
function setupScrollIndicator() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-indicator').style.width = scrollPercent + '%';
        
        // Update active section based on scroll position
        updateActiveSectionOnScroll();
    });
}

// Update active section based on scroll position
function updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = 80;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const correspondingNavLink = document.querySelector(`a[href="#${section.id}"]`);
            if (correspondingNavLink) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                correspondingNavLink.classList.add('active');
            }
        }
    });
}

// Scroll reveal animations
function setupScrollRevealAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.resume-card, .project-card, .checklist-item, .contact-link'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

// Populate checklist items
function populateChecklistItems() {
    const checklistContainer = document.getElementById('checklist-container');
    if (!checklistContainer || !window.checklistData) return;

    checklistContainer.innerHTML = window.checklistData.map(item => `
        <div class="checklist-item">
            <div class="checklist-icon">
                <i class="fas fa-check"></i>
            </div>
            <div class="checklist-content">
                <div class="checklist-title">${item.title}</div>
                <div class="checklist-description">${item.description}</div>
            </div>
            <a href="#" class="view-btn" onclick="openModal('${item.modalId}')">View</a>
        </div>
    `).join('');
}

// Populate projects
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !window.projectsData) return;

    projectsGrid.innerHTML = window.projectsData.map((project, index) => {
        const modalId = `project${project.id}-modal`;
        const viewButton = project.githubUrl 
            ? `<a href="${project.githubUrl}" target="_blank" class="view-btn">
                <i class="fab fa-github"></i> View on GitHub
               </a>`
            : `<a href="#" class="view-btn" onclick="openModal('${modalId}')">View Details</a>`;
        
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image" 
                     onerror="this.style.display='none'">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <p class="project-description">${project.description}</p>
                ${viewButton}
            </div>
        `;
    }).join('');
}

// Intersection Observer for performance
function setupIntersectionObserver() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add particle effect
function addParticleEffect() {
    const particleContainer = document.querySelector('.bg-animation');
    if (!particleContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Portfolio loaded in:', loadTime + 'ms');
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="closeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification.querySelector('.notification-close'));
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Copy to clipboard functionality
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const text = element.textContent || element.innerText;
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Content copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy content', 'error');
        });
    }
}

// Export functions for use in other modules
window.portfolioUtils = {
    debounce,
    throttle,
    updateActiveNavigation,
    showNotification,
    copyToClipboard
};

// ========== Consent Overlay - 3 second delay, shows every visit ==========
document.addEventListener('DOMContentLoaded', function() {
    const consentOverlay = document.getElementById('consentOverlay');
    const consentAgreeBtn = document.getElementById('consentAgreeBtn');
    
    if (consentOverlay) {
        // Hide initially, show after 3 seconds
        consentOverlay.classList.add('hidden');
        
        setTimeout(function() {
            consentOverlay.classList.remove('hidden');
        }, 3000);
        
        // Handle agree button click
        if (consentAgreeBtn) {
            consentAgreeBtn.addEventListener('click', function() {
                consentOverlay.classList.add('hidden');
            });
        }
    }
});

// ========== Header Scroll Effect ==========
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== Mobile Menu ==========
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
});

// ========== Form Validation (for contact page) ==========
function validateContactForm(form) {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const smsConsent = form.querySelector('#smsConsent');
    
    let isValid = true;
    
    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    
    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate SMS consent if phone is provided
    if (phone.value.trim() && !smsConsent.checked) {
        showError(smsConsent.parentElement, 'Please agree to receive SMS messages to proceed');
        isValid = false;
    }
    
    return isValid;
}

function showError(element, message) {
    element.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    element.parentNode.appendChild(errorDiv);
}

// ========== Smooth Scroll for Anchor Links ==========
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

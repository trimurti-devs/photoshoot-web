// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  
  navMenu.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
}

// Portfolio filter functionality
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filterCategory = btn.getAttribute('data-category');
      
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          item.classList.remove('filtered-out');
          item.style.display = 'block';
        } else {
          item.classList.add('filtered-out');
          setTimeout(() => {
            if (item.classList.contains('filtered-out')) {
              item.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

// Contact form handling
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Basic validation
      if (!data.name || !data.email || !data.phone) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Here you would normally send the data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      this.reset();
    });
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Add animation class to elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    '.service-card, .feature-card, .portfolio-item, .contact-item, .about-stat'
  );
  
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// Active navigation link highlighting
function initActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  function highlightActiveNavLink() {
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightActiveNavLink);
}

// Header background on scroll
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  function handleScroll() {
    if (window.scrollY > 100) {
      header.style.background = 'hsl(var(--background), 0.98)';
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = 'hsl(var(--background), 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    }
  }
  
  window.addEventListener('scroll', handleScroll);
}

// Parallax effect for hero section
function initParallaxEffect() {
  const heroImage = document.querySelector('.hero-image');
  
  function handleParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroImage) {
      heroImage.style.transform = `translateY(${rate}px)`;
    }
  }
  
  window.addEventListener('scroll', handleParallax);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      if (navMenu && navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });
  
  // Footer navigation links
  const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  
  // Initialize all modules
  initPortfolioFilter();
  initContactForm();
  initScrollAnimations();
  initActiveNavigation();
  initHeaderScroll();
  initParallaxEffect();
});

// Handle window resize
window.addEventListener('resize', function() {
  // Close mobile menu on resize
  const navMenu = document.getElementById('navMenu');
  if (navMenu && navMenu.classList.contains('active') && window.innerWidth > 767) {
    toggleMobileMenu();
  }
});

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  function smoothScrollTo(element, duration) {
    const targetPosition = element.offsetTop - document.querySelector('.header').offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
  
  // Override the scrollToSection function for browsers without smooth scroll support
  window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScrollTo(element, 1000);
    }
  };
}


    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
    // Form submissions
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.getElementById('close-modal');

    function showModal() {
      successModal.classList.remove('hidden');
    }

    function hideModal() {
      successModal.classList.add('hidden');
    }
    closeModal.addEventListener('click', hideModal);
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal();
      bookingForm.reset();
    });
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal();
      contactForm.reset();
    });
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal();
      newsletterForm.reset();
    });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  

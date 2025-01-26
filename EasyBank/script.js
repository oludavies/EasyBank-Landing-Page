document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Toggle menu icon animation
      mobileMenu.classList.toggle('active');
    });
  
    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  });
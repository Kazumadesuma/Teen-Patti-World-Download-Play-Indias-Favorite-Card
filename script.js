document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  
    // Handle CTA button clicks
    downloadBtn.addEventListener('click', () => {
      window.location.href = 'https://teenpattistars.io/';
    });
  
    ctaBtn.addEventListener('click', () => {
      window.location.href = 'https://teenpattistars.io/';
    });
  
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Responsive carousel touch support
    const carousel = document.querySelector('.review-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });
  
    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('touchend', () => {
      isDown = false;
    });
  
    carousel.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
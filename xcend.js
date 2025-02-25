const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    function toggleMenu() {
      hamburger.classList.toggle('toggle');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
    }
    
    hamburger.addEventListener('click', toggleMenu);
    
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleMenu();
      }
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hamburger') && !e.target.closest('.mobile-menu')) {
        hamburger.classList.remove('toggle');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
        if (window.innerWidth <= 768) toggleMenu();
      });
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { 
        entry.target.classList.toggle('visible', entry.isIntersecting); 
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

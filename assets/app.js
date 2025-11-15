 // Mobile menu toggle
<<<<<<< HEAD
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');

 mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });

 // Section navigation
 const navLinks = document.querySelectorAll('.nav-link');
 const sections = ['home', 'projects', 'contact'];

 function showSection(sectionId) {
     sections.forEach(section => {
         const element = document.getElementById(section);
         if (section === sectionId) {
             element.classList.remove('hidden');
         } else {
             element.classList.add('hidden');
         }
     });

     // Close mobile menu
     mobileMenu.classList.add('hidden');
 }

 navLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const targetSection = link.getAttribute('href').substring(1);
         showSection(targetSection);

         // Update active nav link
         navLinks.forEach(navLink => navLink.classList.remove('text-primary', 'font-semibold'));
         link.classList.add('text-primary', 'font-semibold');
     });
 });

 // Smooth scrolling for internal links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href').substring(1);
         showSection(targetId);
     });
 });

 // Form submission feedback
 const contactForm = document.querySelector('form');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         const submitBtn = this.querySelector('button[type="submit"]');
         submitBtn.textContent = 'Sending...';
         submitBtn.disabled = true;

         setTimeout(() => {
             submitBtn.textContent = 'Send Message';
             submitBtn.disabled = false;
         }, 2000);
     });
 }

 // Initialize with home section
 showSection('home');
=======
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Section navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = ['home', 'projects', 'contact'];
        
        function showSection(sectionId) {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (section === sectionId) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
            });
            
            // Close mobile menu
            mobileMenu.classList.add('hidden');
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('href').substring(1);
                showSection(targetSection);
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('text-primary', 'font-semibold'));
                link.classList.add('text-primary', 'font-semibold');
            });
        });
        
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                showSection(targetId);
            });
        });
        
        // Form submission feedback
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                }, 2000);
            });
        }
        
        // Initialize with home section
        showSection('home');
>>>>>>> fe91e2e643b0b39fe30383cc9f6e5caff00fe6e6

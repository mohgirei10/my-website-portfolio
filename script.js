 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu
                if (window.innerWidth <= 640) {
                    document.getElementById('mobile-menu').classList.remove('active');
                }
            });
        });

        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
            // Dynamically add navigation links to mobile menu
            if (!mobileMenu.innerHTML) {
                mobileMenu.innerHTML = `
                    <a href="#home" class="block py-2 text-gray-300 hover:text-white">Home</a>
                    <a href="#projects" class="block py-2 text-gray-300 hover:text-white">Projects</a>
                    <a href="#contact" class="block py-2 text-gray-300 hover:text-white">Contact Us</a>
                    <a href="#tools" class="block py-2 text-gray-300 hover:text-white">Tools</a>
                `;
            }
        });
const sidebar = document.querySelector('.sidebar');
        const btn = document.querySelector('..hamburgerMemu');
        
        openToggle = () => {
        	sidebar.classList.toggle('active');
        }
        
        /*
        function openToggle() {
        	sidebar.classList.toggle('active');
        }
        */
        
        btn.addEventListener('click', openToggle);
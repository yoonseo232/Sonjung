const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    hamburgerMenu.addEventListener('click', openSidebar);

    function openSidebar() {
      sidebar.classList.add('open');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      
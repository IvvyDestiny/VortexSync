document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');

    if (menuContainer) {
        menuContainer.addEventListener('wheel', (event) => {
            event.preventDefault();
            menuContainer.scrollLeft += event.deltaY;
        });
    }
});

function closeBanner() {
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

function toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
        body.classList.toggle('dark-neon');
    }
}

function toggleIdiomaDropdown(event) {
    event.preventDefault();
    const topMenu = document.querySelector('.top-menu');
    if (topMenu) {
        topMenu.classList.toggle('show-dropdown');
    }
}

function traduzir(lang, event) {
    event.preventDefault();
    window.location.href = '?lang=' + lang;
}
document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('language-button');
    const languageMenu = document.getElementById('language-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    languageButton.addEventListener('click', function() {
        languageMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('magic-in');
        } else {
            mobileMenu.classList.remove('magic-in');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('language-button');
    const languageMenu = document.getElementById('language-menu');

    languageButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        languageMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });

    // Activate language buttons
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang === 'en') {
                console.log('English selected');
            } else if (selectedLang === 'ar') {
                console.log('Arabic selected');
            }
            languageMenu.classList.add('hidden'); // Hide the language menu after selection
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('language-button');
    const languageMenu = document.getElementById('language-menu');

    languageButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        languageMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });

    // Activate language buttons
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang === 'en') {
                console.log('English selected');
            } else if (selectedLang === 'ar') {
                console.log('Arabic selected');
            }
            languageMenu.classList.add('hidden'); // Hide the language menu after selection
        });
    });
});
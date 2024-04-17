'use strict'
// GPT prompt: How to have a drop down menu that applies correct ARIA applications.
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('js-enabled');
    var menuToggle = document.getElementById('menu-toggle');
    var dropdownMenu = document.getElementById('dropdown-menu');
    var closeButton = document.getElementById('close-button');
    var dropdownLinks = dropdownMenu.querySelectorAll('a');

    // Initially hide the dropdown menu when JavaScript is enabled
    dropdownMenu.classList.add('hidden');

    // Update ARIA attributes and manage focus
    function updateMenuState(isOpen) {
        menuToggle.setAttribute('aria-expanded', isOpen);
        dropdownMenu.setAttribute('aria-hidden', !isOpen);
        if (isOpen) {
            dropdownLinks[0].focus(); // Move focus to the first link in the dropdown
        }
    }

    // Function to close the dropdown menu
    function closeDropdown() {
        dropdownMenu.classList.add('hidden');
        updateMenuState(false);
        menuToggle.focus();
    }

    // Toggle dropdown
    menuToggle.addEventListener('click', function () {
        var isHidden = dropdownMenu.classList.contains('hidden');
        dropdownMenu.classList.toggle('hidden', !isHidden);
        updateMenuState(!isHidden);
    });

    // Close button event listener
    closeButton.addEventListener('click', function () {
        closeDropdown();
    });

    // Clicking on a dropdown link closes the menu
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeDropdown();
        });
    });

    // Clicking outside the dropdown closes it
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            closeDropdown();
        }
    });

    // Close the dropdown menu when the Escape key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeDropdown();
        }
    });

    // Initialize
    updateMenuState(false);
});
// Function to toggle language
function toggleLanguage(language) {
    // Hide all language-specific elements
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang-ml').forEach(el => el.style.display = 'none');

    // Show the selected language elements
    if (language === 'en') {
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
    } else if (language === 'ml') {
        document.querySelectorAll('.lang-ml').forEach(el => el.style.display = 'block');
    }
}

// Event listeners for language buttons
document.getElementById('btn-en').addEventListener('click', () => toggleLanguage('en'));
document.getElementById('btn-ml').addEventListener('click', () => toggleLanguage('ml'));

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    toggleLanguage('en'); // Default to English
});

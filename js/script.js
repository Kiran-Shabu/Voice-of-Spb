
document.addEventListener('DOMContentLoaded', function() {
// Function to fetch JSON data
async function fetchData(participant_instructions,registration_details) {
    const response = await fetch(participant_instructions,registration_details);
    return response.json();
  }
  
  // Function to generate HTML content for cards
  function generateCardHTML(data, language) {
    return data.map(point => `<li class="mb-3">${point[language]}</li>`).join('');
  }
  
  // Function to toggle between languages
  function toggleLanguage(language) {
    // Generate HTML for participant instructions card
    fetchData('participant_instructions.json').then(data => {
      const participantInstructionsHTML = generateCardHTML(data, language);
      document.getElementById('participant-instructions').innerHTML = participantInstructionsHTML;
    });
  
    // Generate HTML for registration details card
    fetchData('registration_details.json').then(data => {
      const registrationDetailsHTML = generateCardHTML(data, language);
      document.getElementById('registration-details').innerHTML = registrationDetailsHTML;
    });
  }
  
  // Event listener for language toggle button
  document.getElementById('language-toggle').addEventListener('click', function() {
    const language = this.textContent === 'Switch Language' ? 'ml' : 'en';
    toggleLanguage(language);
  });
  
  // Initial load with default language
  toggleLanguage('en');
  
});
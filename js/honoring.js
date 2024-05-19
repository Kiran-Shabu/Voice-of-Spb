document.addEventListener('DOMContentLoaded', function() {
    fetch('honoring.json')
        .then(response => response.json())
        .then(data => {
            const honoringContainer = document.getElementById('honoring-container');
            data.forEach(honoring => {
                const honoringDiv = document.createElement('div');
                honoringDiv.className = 'col-lg-2 col-md-3 col-sm-6 col-6 text-center mb-4';
                honoringDiv.innerHTML = `
                <div class="honoring-thumb">
                <div class="honoring-image-wrap mb-2"> <!-- Added mb-2 for spacing -->
                    <img src="${honoring.imagePath}" class="honoring-image img-fluid">
                </div>
                <h6 class="text-white">${honoring.name}</h6> <!-- Changed to h5 for consistent styling -->
            </div>
                `;
                honoringContainer.appendChild(honoringDiv);
            });
        })
        .catch(error => console.error('Error loading guest data:', error));
});


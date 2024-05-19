
    document.addEventListener('DOMContentLoaded', function() {
        fetch('guests.json')
            .then(response => response.json())
            .then(data => {
                const guestContainer = document.getElementById('guest-container');
                data.forEach(guest => {
                    const guestDiv = document.createElement('div');
                    guestDiv.className = 'col-lg-4 col-12';
                    guestDiv.innerHTML = `
                        <div class="artists-thumb">
                            <div class="artists-image-wrap">
                                <img src="${guest.image}" class="artists-image img-fluid">
                            </div>
                            <div class="artists-hover">
                                <p>
                                    <strong>${guest.name}</strong>     
                                    ${guest.role}
                                </p>
                            </div>
                        </div>
                    `;
                    guestContainer.appendChild(guestDiv);
                });
            })
            .catch(error => console.error('Error loading guest data:', error));
    });


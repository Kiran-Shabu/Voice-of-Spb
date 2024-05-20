// Function to fetch JSON data
async function fetchOfficeBarriersData() {
    try {
        const response = await fetch('officebarriers.json');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

// Function to display office barriers
function displayOfficeBarriers() {
    // Select the container div
    const officeBarriersList = document.getElementById('office-barriers-list');

    // Fetch office barriers data
    fetchOfficeBarriersData().then(data => {
        // Check if data is not undefined and is an array
        if (data && Array.isArray(data)) {
            // Loop through each item in the JSON data
            data.forEach(item => {
                // Create container div for each item
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('office-barrier-item');

                const imgdiv = document.createElement('div')
                imgdiv.classList.add('office-barrier-image-container')

                // Create image element
                const img = document.createElement('img');
                img.src = item.imagePath;
                img.alt = item.name;
                img.classList.add('office-barrier-image');

                // Create text container for name and role
                const textDiv = document.createElement('div');
                textDiv.classList.add('office-barrier-text');

                // Create div for name
                const nameDiv = document.createElement('div');
                nameDiv.textContent = item.name;
                nameDiv.classList.add('name'); // Add class for styling

                // Create div for role
                const roleDiv = document.createElement('div');
                roleDiv.textContent = item.role;
                roleDiv.classList.add('role'); // Add class for styling

                // Append name and role divs to text container
                textDiv.appendChild(nameDiv);
                textDiv.appendChild(roleDiv);

                imgdiv.appendChild(img);


                // Append image and text to item div
                // itemDiv.appendChild(img);
                itemDiv.appendChild(imgdiv);
                itemDiv.appendChild(textDiv);

                // Append item div to the container
                officeBarriersList.appendChild(itemDiv);
            });
        } else {
            console.error('Invalid data format or data is undefined');
        }
    });
}


// Call the function to display office barriers after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayOfficeBarriers();
});

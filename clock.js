// clock.js

// Function to display time in specified time zones
function displayTime() {
    const timeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.color = '#4CAF50'; // Runner theme color

    timeZones.forEach(zone => {
        const timeElement = document.createElement('div');
        timeElement.style.margin = '10px';
        timeElement.style.fontSize = '20px';
        timeElement.style.border = '2px solid #4CAF50'; // Runner theme border
        timeElement.style.padding = '10px';
        timeElement.style.borderRadius = '5px';
        timeElement.style.width = '200px';
        container.appendChild(timeElement);

        function updateTime() {
            const now = new Date().toLocaleString("en-US", {timeZone: zone});
            timeElement.innerText = `${zone}: ${now}`;
        }

        updateTime();
        setInterval(updateTime, 1000); // Update every second
    });

    document.body.appendChild(container);
}

// Call the function to display time
displayTime();

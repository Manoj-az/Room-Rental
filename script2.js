function filterRooms() {
    const locationFilter = document.getElementById('location').value;
    const priceFilter = document.getElementById('price').value;
    
    // Get selected amenities
    const wifiFilter = document.getElementById('wifi').checked;
    const acFilter = document.getElementById('ac').checked;
    const parkingFilter = document.getElementById('parking').checked;

    const rooms = document.querySelectorAll('.room');

    rooms.forEach(room => {
        const roomLocation = room.getAttribute('data-location');
        const roomPrice = room.getAttribute('data-price');
        const roomAmenities = room.getAttribute('data-amenities').split(',');

        let locationMatch = (locationFilter === 'all' || locationFilter === roomLocation);
        let priceMatch = (priceFilter === 'all' || priceFilter === roomPrice);

        // Check if the room has all selected amenities
        let amenitiesMatch = true;
        if (wifiFilter && !roomAmenities.includes('wifi')) amenitiesMatch = false;
        if (acFilter && !roomAmenities.includes('ac')) amenitiesMatch = false;
        if (parkingFilter && !roomAmenities.includes('parking')) amenitiesMatch = false;

        // Display the room only if it matches all criteria
        if (locationMatch && priceMatch && amenitiesMatch) {
            room.style.display = 'block';
        } else {
            room.style.display = 'none';
        }
    });
}

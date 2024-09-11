// script.js

// Function to handle room search based on filters
function searchRooms() {
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('price').value;
    const amenities = document.getElementById('amenities').value;
  
    alert(`Searching for rooms in ${location} with price range ${priceRange} and amenities: ${amenities}.`);
    
    // You can add logic here to filter and display the room listings
  }
  
  // Function to simulate secure payment
  function initiatePayments() {
    alert("Redirecting to secure payment gateway (PayU or Razorpay).");
    
    // You can integrate actual payment logic with Razorpay or PayU here
  }
  
  // Function to load verified room listings dynamically (you can replace with actual data)
  function loadListings() {
    /*const listings = [
      { title: "Spacious Room in City Center", price: "₹8000", verified: true },
      { title: "Affordable Room with WiFi", price: "₹5000", verified: true },
      { title: "Luxury Room with Parking", price: "₹15000", verified: true },
    ];*/
  
    const listingsContainer = document.getElementById('listings');
    
    listings.forEach(listing => {
      const roomDiv = document.createElement('div');
      roomDiv.innerHTML = `<h3>${listing.title}</h3><p>Price: ${listing.price}</p><p>Verified: ${listing.verified ? 'Yes' : 'No'}</p>`;
      listingsContainer.appendChild(roomDiv);
    });
  }
  
  // Call loadListings when the page loads
  window.onload = loadListings;
  

  function buy()
  {
    alert("Redirects to Payments");
  }
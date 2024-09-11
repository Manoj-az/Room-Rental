// Function to display reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';

    // Retrieve reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Sort reviews by rating (descending order)
    storedReviews.sort((a, b) => b.rating - a.rating);

    // Display each review
    storedReviews.forEach(review => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="review-rating">Rating: ${review.rating}/5</div>
            <div class="review-author">By: ${review.name}</div>
            <div class="review-content">${review.content}</div>
        `;
        reviewsList.appendChild(li);
    });
}

// Show the review form when the button is clicked
document.getElementById('openReviewForm').addEventListener('click', function() {
    document.getElementById('reviewFormContainer').classList.remove('hidden');
    document.getElementById('openReviewForm').classList.add('hidden');
});

// Function to handle review submission
document.getElementById('submitReview').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const userReview = document.getElementById('userReview').value;
    const userRating = document.getElementById('userRating').value;

    // Validate input
    if (userName && userReview && userRating) {
        // Retrieve current reviews from localStorage
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Add the new review to the reviews array
        reviews.push({
            name: userName,
            content: userReview,
            rating: parseInt(userRating)
        });

        // Save the updated reviews array to localStorage
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Clear the form
        document.getElementById('userName').value = '';
        document.getElementById('userReview').value = '';
        document.getElementById('userRating').value = '5';

        // Hide the form and show the button again
        document.getElementById('reviewFormContainer').classList.add('hidden');
        document.getElementById('openReviewForm').classList.remove('hidden');

        // Display updated reviews
        displayReviews();
    } else {
        alert('Please fill out all fields.');
    }
});

// Load reviews on page load
window.onload = function() {
    displayReviews();
};

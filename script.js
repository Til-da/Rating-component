// Get all rating buttons and the container where we'll show the rating
const ratingButtons = document.querySelectorAll('.rating-button');
const ratingText = document.querySelector('.thank-you-rating-text');
let selectedRating = 4; // default selected rating

// Let user select a different rating
ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // remove 'selected' class from all
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    // add 'selected' to clicked one
    button.classList.add('selected');
    // update selectedRating
    selectedRating = button.innerText;
  });
});

// Handle submit click
document.getElementById("submit-btn").addEventListener("click", function () {
  // Hide rating card
  document.getElementById("rating-card").style.display = "none";
  // Show thank-you card
  const thankYouCard = document.getElementById("thank-you-card-container");
  thankYouCard.style.display = "block";
  // Update thank-you message with selected rating
  ratingText.innerHTML = `You selected ${selectedRating} out of 5`;
});

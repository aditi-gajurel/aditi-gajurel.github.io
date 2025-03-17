console.log("Script loaded!"); // Add this at the top of script.js

let serviceScrollInterval;
let galleryScrollInterval;

function scrollServices(direction) {
    console.log("Scrolling services"); // Debugging
    const container = document.querySelector(".services-container");
    if (!container) {
        console.error("Services container not found!"); // Debugging
        return;
    }

    const scrollAmount = 320; // Adjust based on service block width + gap
    const maxScroll = container.scrollWidth - container.clientWidth; // Maximum scroll position

    // Scroll the container
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
    });

    // If we're scrolling right and reach the end, reset to start immediately
    if (direction === 1 && container.scrollLeft >= maxScroll) {
        setTimeout(() => {
            container.scrollLeft = 0; // Immediately reset scroll position to the start
        }, 300); // Adding a small delay for smooth transition
    }

    // If we're scrolling left and reach the beginning, reset to end immediately
    if (direction === -1 && container.scrollLeft === 0) {
        setTimeout(() => {
            container.scrollLeft = maxScroll; // Immediately jump to the end
        }, 300); // Adding a small delay for smooth transition
    }
}

function scrollGallery() {
    console.log("Scrolling gallery"); // Debugging
    const container = document.querySelector(".gallery-container");
    if (!container) {
        console.error("Gallery container not found!"); // Debugging
        return;
    }

    const scrollAmount = 320; // Adjust based on image width + gap
    const maxScroll = container.scrollWidth - container.clientWidth; // Maximum scroll position

    // Scroll the container to the right
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
    });

    // If we've reached the last item, jump to the first one immediately
    if (container.scrollLeft >= maxScroll) {
        setTimeout(() => {
            container.scrollLeft = 0; // Reset to the beginning smoothly
        }, 300); // Adding a small delay for smooth transition
    }
}

// Auto-scroll for the Services section (every 3 seconds)
serviceScrollInterval = setInterval(function () {
    console.log("Auto-scrolling services section"); // Debugging
    scrollServices(1); // Scroll right every 3 seconds
}, 3000);

// Auto-scroll for the Gallery section (every 3 seconds)
galleryScrollInterval = setInterval(function () {
    console.log("Auto-scrolling gallery section"); // Debugging
    scrollGallery(); // Auto-scroll gallery every 3 seconds
}, 3000);
// Initialize Flatpickr for date and time in one input
flatpickr("#datetime", {
    enableTime: true, // Enable time selection
    noCalendar: false, // Allow calendar to be shown
    dateFormat: "Y-m-d H:i", // Date and time format
    minDate: "today", // Disable past dates
    time_24hr: true, // Use 24-hour format
});

// Handle review form submission
// Handle review form submission
// Handle review form submission
document.getElementById("review-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the selected rating
    const rating = document.querySelector('input[name="star"]:checked');
    const ratingValue = rating ? rating.value : null;

    // Get the review text (optional)
    const reviewText = document.getElementById("review-text").value;

    // Check if the rating is selected
    if (ratingValue === null) {
        alert("Please select a rating before submitting!");
        return; // Don't submit the form if no rating is selected
    }

    // For now, we will just log the review data
    console.log(`Rating: ${ratingValue} stars`);
    console.log(`Review Text: ${reviewText}`);

    // Display an alert to thank the user
    alert("Thank you for your review!");

    // Optionally, you can reset the form after submission
    document.getElementById("review-form").reset();
});


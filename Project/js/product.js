/* =====================================
   OFFBEAT PRODUCT DETAILS
===================================== */

// Read product ID from the URL
const urlParams = new URLSearchParams(window.location.search);

// Default to AM if no ID is provided
const productId = urlParams.get("id") || "1";

// Find the selected album
const selectedProduct = getProductById(productId);

// Check whether the album exists
if (selectedProduct) {

    // Update album cover
    const productImage = document.getElementById("product-image");

    productImage.src = selectedProduct.image;
    productImage.alt = selectedProduct.title + " album cover";

    // Update album information
    document.getElementById("product-title").textContent =
        selectedProduct.title;

    document.getElementById("product-artist").textContent =
        selectedProduct.artist;

    document.getElementById("product-genre").textContent =
        selectedProduct.genre.toUpperCase();

    document.getElementById("product-price").textContent =
        formatPrice(selectedProduct.price);

    // Update browser tab title
    document.title = selectedProduct.title + " | OFFBEAT";

    // =====================================
    // DYNAMIC ALBUM DESCRIPTION
    // =====================================

    const descriptionElement =
        document.getElementById("product-description");

    descriptionElement.textContent =
        selectedProduct.description ||
        "No description available for this album.";

    // =====================================
    // DYNAMIC ALBUM TRACKLIST
    // =====================================

    const tracklistElement =
        document.getElementById("product-tracks");

    // Remove the sample AM tracks from HTML
    tracklistElement.innerHTML = "";

    // Check if this album has a tracklist
    if (Array.isArray(selectedProduct.tracks) &&
        selectedProduct.tracks.length > 0) {

        // Create a list item for every song
        selectedProduct.tracks.forEach(function(track) {

            const listItem = document.createElement("li");

            listItem.textContent = track;

            tracklistElement.appendChild(listItem);

        });

    } else {

        // Display a message if no tracks are available
        const listItem = document.createElement("li");

        listItem.textContent = "Tracklist unavailable.";

        tracklistElement.appendChild(listItem);
    }

} else {

    // Handle an invalid product ID
    document.querySelector(".product-detail-info").innerHTML =
        "<h2>PRODUCT NOT FOUND.</h2>" +
        "<p>Please return to the shop.</p>";

    document.querySelector(".product-description").hidden = true;
    document.querySelector(".product-tracklist").hidden = true;
    document.querySelector(".product-detail-image").hidden = true;
}



/* =====================================
   QUANTITY SELECTOR & ADD TO CART
===================================== */

// Get the buttons and quantity display
const decreaseBtn = document.getElementById("decrease-qty");
const increaseBtn = document.getElementById("increase-qty");
const quantityDisplay = document.getElementById("quantity");
const addToCartBtn = document.getElementById("add-to-cart");

// Starting quantity
let quantity = 1;

// Increase quantity
increaseBtn.addEventListener("click", function() {
    quantity++;
    quantityDisplay.textContent = quantity;
});

// Decrease quantity (minimum 1)
decreaseBtn.addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

// Add the selected product to the cart
addToCartBtn.addEventListener("click", function() {

    // Make sure the selected album exists
    if (!selectedProduct) {
        return;
    }

    // Load the existing cart or create an empty one
    const cart = JSON.parse(localStorage.getItem("offbeatCart") || "[]");

    // Find out if the album is already in the cart
    const existingItem = cart.find(function(item) {
        return item.id === selectedProduct.id;
    });

    if (existingItem) {

        // Increase quantity instead of adding a duplicate
        existingItem.quantity += quantity;

    } else {

        // Add a new album to the cart
        cart.push({
            id: selectedProduct.id,
            quantity: quantity
        });
    }

    // Save updated cart
    localStorage.setItem("offbeatCart", JSON.stringify(cart));

    // Show confirmation
    addToCartBtn.textContent = "ADDED TO CART!";

    // Reset quantity
    quantity = 1;
    quantityDisplay.textContent = quantity;
});

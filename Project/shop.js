
/* =====================================
   OFFBEAT SHOP SEARCH, FILTER & SORT
===================================== */

// Get the shop elements
const searchInput = document.getElementById("search-input");
const sortOptions = document.getElementById("sort-options");
const genreButtons = document.querySelectorAll(".shop-genres button");
const productGrid = document.querySelector(".shop-product-grid");
const recordCount = document.querySelector(".shop-heading p");

// Store the currently selected genre
let selectedGenre = "ALL";

// Get all 15 album cards
const albumCards = Array.from(
    document.querySelectorAll(".shop-product-card")
);

// Connect each existing card to products.js
const shopAlbums = albumCards.map(function(card, index) {

    const link = card.querySelector("a[href*='product.html?id=']");
    const productId = new URL(
        link.getAttribute("href"),
        window.location.href
    ).searchParams.get("id");

    return {
        card: card,
        product: getProductById(productId),
        originalOrder: index
    };
});

// Filter and sort albums
function updateShop() {

    // Get search text
    const searchText = searchInput.value.trim().toLowerCase();

    // Filter albums based on search and genre
    const filteredAlbums = shopAlbums.filter(function(album) {

        const product = album.product;

        if (!product) {
            return false;
        }

        // Search by album name or artist
        const matchesSearch =
            product.title.toLowerCase().includes(searchText) ||
            product.artist.toLowerCase().includes(searchText);

        // Filter by music genre
        const matchesGenre =
            selectedGenre === "ALL" ||
            product.genre.toUpperCase() === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    // Get the selected sorting option
    const sortValue = sortOptions.value;

    // Sort filtered albums
    filteredAlbums.sort(function(a, b) {

        if (sortValue === "price-low") {
            return a.product.price - b.product.price;
        }

        if (sortValue === "price-high") {
            return b.product.price - a.product.price;
        }

        if (sortValue === "name") {
            return a.product.title.localeCompare(b.product.title);
        }

        // Featured: original order
        return a.originalOrder - b.originalOrder;
    });

    // Hide all album cards first
    shopAlbums.forEach(function(album) {
        album.card.style.display = "none";
    });

    // Show matching cards in the correct order
    filteredAlbums.forEach(function(album) {
        album.card.style.display = "";
        productGrid.appendChild(album.card);
    });

    // Update number of displayed albums
    const count = filteredAlbums.length;

    recordCount.textContent =
        "Showing " + count +
        (count === 1 ? " record" : " records");
}

// Search automatically as the customer types
searchInput.addEventListener("input", updateShop);

// Sort when the selected option changes
sortOptions.addEventListener("change", updateShop);

// Genre filtering buttons
genreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Save selected genre
        selectedGenre = button.textContent.trim().toUpperCase();

        // Highlight selected button
        genreButtons.forEach(function(otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        // Update visible albums
        updateShop();
    });
});

// Select ALL by default
genreButtons[0].classList.add("active");

// Display albums when the page loads
updateShop();

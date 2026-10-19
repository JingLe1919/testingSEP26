
/* =====================================
   OFFBEAT DYNAMIC SHOPPING CART
===================================== */

const cartItemsContainer = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");

const checkoutButton = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutButton = document.getElementById("close-checkout");

// Read saved shopping cart
function loadCart() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("offbeatCart") || "[]"
        );

        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        return [];
    }
}

// Save shopping cart
function saveCart(cart) {
    localStorage.setItem("offbeatCart", JSON.stringify(cart));
}

// Display cart items
function renderCart() {

    const cart = loadCart();

    // Clear previously displayed items
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;
    let totalQuantity = 0;

    cart.forEach(function(item) {

        // Get album information using its ID
        const product = getProductById(item.id);

        if (!product || !Number.isInteger(item.quantity) ||
            item.quantity < 1) {
            return;
        }

        subtotal += product.price * item.quantity;
        totalQuantity += item.quantity;

        // Create a cart card
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        // Album artwork
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title + " album cover";
        image.className = "cart-item-image";

        // Album information container
        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h3");
        title.textContent = product.title;

        const artist = document.createElement("p");
        artist.className = "cart-item-artist";
        artist.textContent = product.artist;

        const price = document.createElement("p");
        price.className = "cart-item-price";
        price.textContent = formatPrice(product.price);

        // Quantity and removal controls
        const actions = document.createElement("div");
        actions.className = "cart-item-actions";

        const quantityControls = document.createElement("div");
        quantityControls.className = "cart-quantity";

        const minusButton = document.createElement("button");
        minusButton.type = "button";
        minusButton.textContent = "−";
        minusButton.setAttribute("aria-label", "Decrease quantity");

        const quantityText = document.createElement("span");
        quantityText.textContent = item.quantity;

        const plusButton = document.createElement("button");
        plusButton.type = "button";
        plusButton.textContent = "+";
        plusButton.setAttribute("aria-label", "Increase quantity");

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-item";
        removeButton.textContent = "🗑";
        removeButton.setAttribute(
            "aria-label", "Remove " + product.title
        );

        // Minus button functionality
        minusButton.addEventListener("click", function() {
            updateQuantity(product.id, -1);
        });

        // Plus button functionality
        plusButton.addEventListener("click", function() {
            updateQuantity(product.id, 1);
        });

        // Remove button functionality
        removeButton.addEventListener("click", function() {
            removeFromCart(product.id);
        });

        quantityControls.append(
            minusButton,
            quantityText,
            plusButton
        );

        actions.append(quantityControls, removeButton);
        info.append(title, artist, price, actions);
        cartItem.append(image, info);

        cartItemsContainer.appendChild(cartItem);
    });

    // Update item count
    cartCount.textContent =
        totalQuantity + (totalQuantity === 1 ?
        " record in your cart" : " records in your cart");

    // Update order summary
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTotal.textContent = formatPrice(subtotal);

    // Show or hide the empty cart message
    const isEmpty = totalQuantity === 0;

    emptyCartMessage.hidden = !isEmpty;
    cartItemsContainer.hidden = isEmpty;
    checkoutButton.disabled = isEmpty;
}

// Change quantity of a selected album
function updateQuantity(productId, change) {

    const cart = loadCart();

    const item = cart.find(function(cartItem) {
        return Number(cartItem.id) === productId;
    });

    if (!item) {
        return;
    }

    // Minimum quantity is 1
    item.quantity = Math.max(1, item.quantity + change);

    saveCart(cart);
    renderCart();
}

// Remove a selected album completely
function removeFromCart(productId) {

    const cart = loadCart().filter(function(item) {
        return Number(item.id) !== productId;
    });

    saveCart(cart);
    renderCart();
}

// Demonstration checkout popup
checkoutButton.addEventListener("click", function() {

    if (loadCart().length === 0) {
        return;
    }

    checkoutModal.hidden = false;
});

closeCheckoutButton.addEventListener("click", function() {
    checkoutModal.hidden = true;
});

// Close popup when clicking outside
checkoutModal.addEventListener("click", function(event) {
    if (event.target === checkoutModal) {
        checkoutModal.hidden = true;
    }
});

// Display saved items when the page opens
renderCart();

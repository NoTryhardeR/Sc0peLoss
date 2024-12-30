// Function to add product to the cart
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart, if so, increase its quantity
    let productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart icon
    updateCartIcon();
}

// Function to display the cart in the modal
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <h5>${item.name}</h5>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <hr>
                </div>
            `;
        });
    }
}

// Update cart icon to show total number of items
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Event listener for checkout
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (confirm("Proceed to checkout?")) {
        // Redirect to a checkout page or show checkout form
        window.location.href = 'checkout.html'; // Modify this as needed
    }
});

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let productName = this.closest('.card').querySelector('.card-title').textContent;
        let productPrice = parseFloat(this.closest('.card').querySelector('.card-text').textContent.replace('$', ''));
        addToCart(productName, productPrice);
    });
});

// Display the cart when the page loads
window.onload = function() {
    displayCart();
    updateCartIcon(); // Update cart icon on page load
};

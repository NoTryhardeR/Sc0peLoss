document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement.querySelector('.card-title').innerText;
            const price = button.parentElement.querySelector('.card-text').innerText;
            cart.push({ product, price });
            alert(`${product} added to cart!`);
            console.log(cart);
        });
    });
});

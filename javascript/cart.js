document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = this.getAttribute("data-price");
            let itemImg = this.getAttribute("data-img");

            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({ name: itemName, price: itemPrice, img: itemImg });

            localStorage.setItem("cart", JSON.stringify(cartItems));

            console.log("Updated Cart:", localStorage.getItem("cart")); // Debugging
            alert("Item added to cart!");
        });
    });
});


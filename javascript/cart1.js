document.addEventListener("DOMContentLoaded", function () {
    let cartContainer = document.getElementById("cart-items");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Cart Items from localStorage:", cartItems); // Debugging
    
    function displayCart() {
      document.getElementById('cart-count').innerHTML = cartItems.length;
      
        cartContainer.innerHTML = "";
        if (cartItems.length === 0) {

            document.getElementById('dis').style.display = 'none';
            cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
            return;
        }

        cartItems.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.classList.add("col-md-4", "col-sm-6", "col-12");
            cartItem.innerHTML = `
                <div class="card h-100">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center">
                       <a href="gifts.html">
 <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><strong>Price: ₹${item.price}</strong></p>
                       </a>
                        <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                cartItems.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartItems));
                displayCart(); // Refresh cart
            });
        });
    }

    displayCart();

    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("cart");
        cartItems = [];
        displayCart();
    });
});



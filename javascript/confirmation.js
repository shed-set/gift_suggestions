document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let orderDetails = document.getElementById("order-details");

    if (cartItems.length === 0) {
        orderDetails.innerHTML = "<p>Your cart is empty. Please add some items to your cart before proceeding.</p>";
        return;
    }

 let totalPrice = 0;
    let itemList = "<ul>";
    cartItems.forEach(item => {
        const itemPrice = parseFloat(item.price);  // Convert item.price to a number
        if (!isNaN(itemPrice)) {
            itemList += `<li>${item.name} - ₹${itemPrice}</li>`;
            totalPrice += itemPrice;  // Add the price to totalPrice
        }
    });
    itemList += "</ul>";
    orderDetails.innerHTML = itemList;
    orderDetails.innerHTML += `<p><strong>Total Price: ₹${totalPrice.toFixed(2)}</strong></p>`;  // Show total price with 2 decimals
});

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const orderSummary = document.getElementById("order-summary");
    const totalPriceElement = document.getElementById("total-price");

    let totalAmount = 0;

    cartItems.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("col-12");
        cartItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: ₹${item.price}</p>
                </div>
            </div>
        `;
        orderSummary.appendChild(cartItem);

        // Calculate total price
        totalAmount += parseInt(item.price);
    });

    totalPriceElement.textContent = totalAmount;

    // Form submission to confirm payment
    const paymentForm = document.getElementById("payment-form");
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;

        const orderDetails = {
            cartItems,
            totalAmount,
            paymentMethod,
            name,
            address,
            email,
            contact
        };

        // Here you can process the order (e.g., send the details to a backend or API)
        console.log("Order Details:", orderDetails);

        // Show order confirmation or redirect to a confirmation page
        alert("Payment successful! Your order is being processed.");
        localStorage.removeItem("cart"); // Clear cart after payment
        window.location.href = "order_confirmation.html"; // Redirect to confirmation page
    });
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (!selectedPaymentMethod) {
        alert("Please select a payment method.");
        event.preventDefault(); // Prevent form submission if no payment method is selected
    } else {
        alert(`You have selected ${selectedPaymentMethod.value} as your payment method.`);
    }
});


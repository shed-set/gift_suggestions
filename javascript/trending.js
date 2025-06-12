const giftItems = [
    { name: "Customized Mug", category: "Mugs", img: "../images/cup2.jpg" ,id:"customizedmug",price:"100"},
    { name: "Photo Mug", category: "Mugs", img: "../images/cup1.jpg",price:"150" },
    { name: "Magic Mug", category: "Mugs", img: "../images/cup3.jpg" },
    { name: "Name Necklace", category: "Jewelry", img: "../images/neck.jpg", id:"necklace" ,price:"200"},
    { name: "Customized Ring", category: "Jewelry", img: "../images/ring2.jpg",price:"200"},
    { name: "Bracelet", category: "Jewelry", img: "../images/brace.jpg" },
    { name: "Chocolate Basket", category: "Gift Baskets", img: "../images/chocolate.jpg",id:"basket",price:"150"},
    { name: "Healthy Snacks", category: "Gift Baskets", img: "../images/basket1.jpg",price:"200",price:"150" },
    { name: "Wine Basket", category: "Gift Baskets", img: "../images/wine.jpg",price:"100" },
    { name: "Smartwatch", category: "Smart Gadgets", img: "../images/watch.jpg", id:"watch",price:"200"},
    { name: "Wireless Earbuds", category: "Smart Gadgets", img: "../images/ear3.jpg",price:"150" },
    { name: "Bluetooth Speaker", category: "Smart Gadgets", img: "../images/blutooth.jpg",price:"100" }
];

const container = document.getElementById("gift-items");

giftItems.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4"); // Responsive grid system

    card.innerHTML = `
        <div class="card shadow-sm">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><strong>Category:</strong> ${item.category}</p>
                <p class="card-price"><strong>Price:</strong>${item.price}</p>

                <button class="btn btn-primary add-to-wishlist" data-item="${item.name}">Add to Wishlist</button>
                <button class="btn btn-outline-success add-to-cart" data-item="${item.name}">Add to Cart</button>
            </div>
        </div>
    `;
    container.appendChild(card);
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-wishlist")) {
        const itemName = event.target.getAttribute("data-item");
        const item = giftItems.find(g => g.name === itemName); // Find full object

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Avoid duplicate items based on the item's name
        if (!wishlist.some(g => g.name === item.name)) {
            wishlist.push(item); // Add full item object
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${item.name} added to wishlist!`);
        } else {
            alert(`${item.name} is already in your wishlist.`);
        }
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-wishlist")) {
        const itemName = event.target.getAttribute("data-item");
        const item = giftItems.find(g => g.name === itemName); // Find full object

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Avoid duplicate items
        if (!wishlist.some(g => g.name === item.name)) {
            wishlist.push(item);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${item.name} added to wishlist!`);
        } else {
            alert(`${item.name} is already in your wishlist.`);
        }
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const itemName = event.target.getAttribute("data-item");
        const item = giftItems.find(g => g.name === itemName); // Find full object

        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        // Add the item to the cart
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert(`${item.name} added to cart!`);
    }
});
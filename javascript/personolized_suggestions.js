// Gift Data
const giftDatabase = [
    {id:1, name: "Customized Mug", category: "Mugs", img: "../images/cup2.jpg", id: "customizedmug", price: 100 },
    {id:2, name: "Photo Mug", category: "Mugs", img: "../images/cup1.jpg", price: 150 },
    {id:3, name: "Magic Mug", category: "Mugs", img: "../images/cup3.jpg" },
    {id:4, name: "Name Necklace", category: "Jewelry", img: "../images/neck.jpg", id: "necklace", price: 200 },
    {id:5, name: "Customized Ring", category: "Jewelry", img: "../images/ring2.jpg", price: 200 },
    {id:6, name: "Bracelet", category: "Jewelry", img: "../images/brace.jpg" },
    {id:7, name: "Chocolate Basket", category: "Gift Baskets", img: "../images/chocolate.jpg", id: "basket", price: 150 },
    {id:8, name: "Healthy Snacks", category: "Gift Baskets", img: "../images/basket1.jpg", price: 150 },
    {id:9, name: "Wine Basket", category: "Gift Baskets", img: "../images/wine.jpg", price: 100 },
    {id:10, name: "Smartwatch", category: "Smart Gadgets", img: "../images/watch.jpg", id: "watch", price: 200 },
    {id:11, name: "Wireless Earbuds", category: "Smart Gadgets", img: "../images/ear3.jpg", price: 150 },
    {id:12, name: "Bluetooth Speaker", category: "Smart Gadgets", img: "../images/blutooth.jpg", price: 100 }
];

// Trending Gift Data
const giftItems = [
    {id:1, name: "Customized Mug", category: "Mugs", img: "../images/cup2.jpg", id: "customizedmug", price: 100 },
    {id:2, name: "Photo Mug", category: "Mugs", img: "../images/cup1.jpg", price: 150 },
    {id:3, name: "Magic Mug", category: "Mugs", img: "../images/cup3.jpg" },
    {id:4, name: "Name Necklace", category: "Jewelry", img: "../images/neck.jpg", id: "necklace", price: 200 },
    {id:5, name: "Customized Ring", category: "Jewelry", img: "../images/ring2.jpg", price: 200 },
    {id:6, name: "Bracelet", category: "Jewelry", img: "../images/brace.jpg" },
    {id:7, name: "Chocolate Basket", category: "Gift Baskets", img: "../images/chocolate.jpg", id: "basket", price: 150 },
    {id:8, name: "Healthy Snacks", category: "Gift Baskets", img: "../images/basket1.jpg", price: 150 },
    {id:9, name: "Wine Basket", category: "Gift Baskets", img: "../images/wine.jpg", price: 100 },
    {id:10, name: "Smartwatch", category: "Smart Gadgets", img: "../images/watch.jpg", id: "watch", price: 200 },
    {id:11, name: "Wireless Earbuds", category: "Smart Gadgets", img: "../images/ear3.jpg", price: 150 },
    {id:12, name: "Bluetooth Speaker", category: "Smart Gadgets", img: "../images/blutooth.jpg", price: 100 }
];

// DOM Elements
const form = document.getElementById("giftForm");
const suggestionsContainer = document.getElementById("suggestions");

// Event Listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect User Input
    const occasion = document.getElementById("occasion").value;
    const relationship = document.getElementById("relationship").value;
    const budget = parseFloat(document.getElementById("budget").value);

    // Filter Gifts from giftDatabase
    const recommendations = giftDatabase.filter((gift) =>
        gift.category === occasion &&
        gift.relationship === relationship &&
        gift.price <= budget
    );

    // Filter Trending Gifts based on budget
    const trendingRecommendations = giftItems.filter((item) =>
        item.price <= budget
    );

    // Combine and Display Recommendations
    displaySuggestions([...recommendations, ...trendingRecommendations]);
});

function displaySuggestions(recommendations) {
    suggestionsContainer.innerHTML = ""; // Clear previous results

    if (recommendations.length === 0) {
        suggestionsContainer.innerHTML = `<p class="text-center text-muted">No gifts match your criteria. Try increasing your budget or changing filters.</p>`;
        return;
    }

    recommendations.forEach((gift) => {
        const card = document.createElement("div");
        card.className = "col-md-4 col-sm-6 col-12";
        
        // Determine the target page for the link based on category or other criteria
        let pageLink = "gifts.html";  // Default page
        if (gift.category === "Trending") {
            pageLink = "trending_gifts.html";  // If trending, use trending gifts page
        }

        card.innerHTML = `
            <div class="card h-100">
                <img src="../images/${gift.image || gift.img}" class="card-img-top" alt="${gift.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${gift.name}</h5>
                    <p class="card-text">Price: ₹${gift.price}</p>

                </div>
            </div>
        `;
        suggestionsContainer.appendChild(card);
      
    });
     // Create and add the "Back to Home" button at the bottom
     const backToHomeBtn = document.createElement("button");
     backToHomeBtn.className = "btn btn-outline-primary mt-4";
     backToHomeBtn.innerText = "Back to Home";
     backToHomeBtn.addEventListener("click", function() {
         window.location.href = "home.html"; // Redirect to home page (index.html)
     });
 
     suggestionsContainer.appendChild(backToHomeBtn);
 
}



// Event listener for Add to Wishlist
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-wishlist")) {
        const item = event.target.getAttribute("data-item");
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${item} added to wishlist!`);
    }
});

// Event listener for Add to Cart
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
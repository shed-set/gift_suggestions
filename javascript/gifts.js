const gifts = [
    { name: "Customized Mug", img: "../images/gift1.jpg" },
    { name: "Photo Frame", img: "../images/gift2.jpg" },
    { name: "Customized T-Shirt", img: "../images/gift3.jpg" },
    { name: "Customized Jewelry", img: "../images/gift4.jpg" },
    { name: "Couple Watches", img: "../images/gift5.jpg" },
    { name: "Personalized Canvas", img: "../images/gift6.jpg" },
    { name: "Festive Hamper", img: "../images/gift7.jpg" },
    { name: "Holiday Lights", img: "../images/gift8.jpg" },
    { name: "Seasonal Candles", img: "../images/gift9.jpg" }
  ];
  
  // Function to get the current wishlist from localStorage
  function getWishlistFromStorage() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  }
  
  // Function to save the updated wishlist to localStorage
  function saveWishlistToStorage(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
  
  // Function to add a gift to the wishlist
  function addToWishlist(giftName, giftImg) {
    const wishlist = getWishlistFromStorage();
    const itemExists = wishlist.some(item => item.name === giftName);
  
    if (!itemExists) {
      wishlist.push({ name: giftName, img: giftImg });
      saveWishlistToStorage(wishlist);
      alert(`${giftName} has been added to your wishlist!`);
      displayWishlist();  // Update the wishlist display
    } else {
      alert("This item is already in your wishlist.");
    }
  }
  
  // Function to remove a gift from the wishlist
  function removeFromWishlist(giftName) {
    const wishlist = getWishlistFromStorage();
    const updatedWishlist = wishlist.filter(item => item.name !== giftName);
    saveWishlistToStorage(updatedWishlist);
    displayWishlist();  // Update the wishlist display after removal
  }
  
  // Function to display wishlist in the container
  function displayWishlist() {
    const wishlistContainer = document.getElementById('wishlist-container');
    const wishlistItems = document.getElementById('wishlist-items');
    const wishlist = getWishlistFromStorage();
  
    if (wishlistContainer && wishlistItems) {
      if (wishlist.length > 0) {
        wishlistContainer.style.display = 'block';
        wishlistItems.innerHTML = '';
        wishlist.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('wishlist-item');
          itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="wishlist-item-img" style="width: 50px; height: 50px; margin-right: 10px;">
            <span>${item.name}</span>
            <button class="btn btn-outline-danger btn-sm remove-from-wishlist" data-name="${item.name}">Remove</button>
          `;
          wishlistItems.appendChild(itemElement);
        });
      } else {
        wishlistContainer.style.display = 'none';
      }
    }
  }
  
  // Event listener for "Add to Wishlist" buttons
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-wishlist')) {
      const giftName = event.target.getAttribute('data-name');
      const giftImg = event.target.getAttribute('data-img');
      addToWishlist(giftName, giftImg);
    }
  
    // Event listener for "Remove" buttons
    if (event.target.classList.contains('remove-from-wishlist')) {
      const giftName = event.target.getAttribute('data-name');
      removeFromWishlist(giftName);
    }
  });
  
  // Display wishlist when the page loads
  window.onload = displayWishlist;

  
  
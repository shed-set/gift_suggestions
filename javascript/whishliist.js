  // Function to get the current wishlist from localStorage
  function getWishlistFromStorage() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  }

  // Function to save the updated wishlist to localStorage
  function saveWishlistToStorage(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  // Function to remove an item from the wishlist
  function removeFromWishlist(giftName) {
    const wishlist = getWishlistFromStorage();
    const updatedWishlist = wishlist.filter(item => item.name !== giftName);
    saveWishlistToStorage(updatedWishlist);
    displayWishlist(); // Re-render the wishlist
  }

  // Function to display the wishlist
  function displayWishlist() {
    const wishlist = getWishlistFromStorage();
    const wishlistContainer = document.getElementById("wishlist");
    wishlistContainer.innerHTML = ""; // Clear the current list

    wishlist.forEach(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `
      <a href="../html/gifts.html">
        <img src="${item.img}" alt="${item.name}" class="img-thumbnail" style="width: 50px; height: 50px;">
        <span>${item.name}</span></a>
        <button class="remove-btn btn btn-danger btn-sm" onclick="removeFromWishlist('${item.name}')">Remove</button>
      
        `;
      wishlistContainer.appendChild(listItem);
    });
  }

  // Clear local storage when the page reloads
  window.onbeforeunload = function() {
  // Clear local storage and display the wishlist when the page loads
    localStorage.removeItem('wishlist');
    displayWishlist();
  };
  // Display the wishlist when the page loads
  window.onload = displayWishlist;


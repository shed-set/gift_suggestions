document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".d-flex");
    const searchInput = searchForm.querySelector("input[type='search']");
    const searchResultsSection = document.getElementById("search-results");
    const searchResultsContainer = searchResultsSection.querySelector(".row");
    const searchResultsTitle = searchResultsSection.querySelector("h2");
    const allGiftItems = document.querySelectorAll(".category-card, .card");
    
    // Initially hide the search results section and title
    searchResultsSection.style.display = "none";
    searchResultsTitle.style.display = "none";
    
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        searchResultsContainer.innerHTML = "";
        searchResultsSection.style.display = "none";
        searchResultsTitle.style.display = "none";
        
        if (query === "") {
            alert("Please enter a search term");
            return;
        }
        
        let found = false;
        allGiftItems.forEach(item => {
            const titleElement = item.querySelector(".card-title") || item.querySelector("h5");
            if (titleElement && titleElement.textContent.toLowerCase().includes(query)) {
                const clonedItem = item.cloneNode(true);
                clonedItem.classList.add("col-md-4", "col-sm-6", "col-12", "mx-auto");
                searchResultsContainer.appendChild(clonedItem);
                found = true;
            }
        });
        
        if (found) {
            searchResultsSection.style.display = "block";
            searchResultsTitle.style.display = "block";
            setTimeout(() => {
                searchResultsSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            searchResultsContainer.innerHTML = "<p class='text-center'>No results found</p>";
            searchResultsSection.style.display = "block";
            searchResultsTitle.style.display = "block";
            setTimeout(() => {
                searchResultsSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const mainContent = document.querySelector("main"); // Adjust selector if needed
  
    navbarToggler.addEventListener("click", function () {
      setTimeout(() => {
        if (document.querySelector(".navbar-collapse").classList.contains("show")) {
          mainContent.classList.add("navbar-expanded");
        } else {
          mainContent.classList.remove("navbar-expanded");
        }
      }, 300); // Small delay to ensure class is added after animation
    });
  });


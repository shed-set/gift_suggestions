
const header = `
<div id="header">
   
   
<nav class="navbar navbar-expand-lg bg-light navbar-light customnavbar fixed-top">
  <div class="container-fluid">
      <!-- Logo Image -->
    <a class="navbar-brand" href="home.html">
      <img src="../images/logo.jpg" alt="Logo" style="height: 60px; width:60px; border-radius: 50%;">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ms-4">
          <a class="nav-link" href="home.html">Home</a>
        </li>
        <li class="nav-item ms-4">
          <a class="nav-link" href="personolized_suggestions.html">Personalized Suggestions</a>
        </li>
        <li class="nav-item ms-4">
          <a class="nav-link" href="wishlist_creation.html">Wishlist</a>
        </li>
         <li class="nav-item ms-4">
          <a class="nav-link" href="user_profiles.html">User Profiles</a>
        </li>
      
      
         <li class="nav-item ms-4">
          <a class="nav-link" href="notifications.html">Notifications</a>
        </li>
        <li class="nav-item ms-4">
          <a class="nav-link" href="settings.html">Settings</a>
        </li>
        <li class="nav-item ms-4">
            <a class="nav-link" href="shopping_cart.html">
             Cart
            </a>
            </li>
            <li class="nav-item ms-3">
          <a class="nav-link" href="logout.html">Logout</a>
        </li>
          </ul>
    </div>
  </div>
</nav>
</div>
`;

document.addEventListener('DOMContentLoaded', (event) => {
const homepage = document.querySelector('.header');
homepage.insertAdjacentHTML('afterbegin', header);
});



const footer = `

<div id="footer">

<footer class="footer bg-light mt-5  bottom-0 " id="footer" >
    <div class="container">
        <div class="row p-4 justify-content-between align-items-center">
    <div class="col-sm-12 col-md-8">
 <div class="copyright">
                    <p class="mb-0">© 2025 Art Gallery. All rights reserved.</p>
                </div>

    </div>
  <div class="col-sm-12 col-md-4 mt-3">
  <div class="social-icons">
                    <a href="https://www.facebook.com/" class="social-icon me-2" aria-label="Facebook" target="_blank">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" class="social-icon me-2" aria-label="Instagram" target="_blank">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a href="https://x.com/" class="social-icon me-2" aria-label="Twitter" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="https://youtube.com/" class="social-icon" aria-label="youtube" target="_blank">
                        <i class="fa fa-youtube"></i>
                    </a>
                </div>

    </div>

          
        </div>
    </div>
  </footer>
</div>
`;



document.addEventListener('DOMContentLoaded', (event) => {
  const footerblock = document.querySelector('.footer');
  footerblock.insertAdjacentHTML('afterbegin', footer);
  });
  


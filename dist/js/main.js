// Base navbar and footer classes...
class BaseNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar navbar-light navbar-expand-md">
            <!-- Main div of navbar -->
            <div class="container-fluid">
                <!-- Logo part -->
                <div>
                    <a href="../../index.html#" class="row logo">
                        <div>
                            <img src="../../img/osf-logo.png" alt="OSF Logo">
                        </div>
                        <div class="logo-text">
                            <p class="font-lato-bold">OSF</p>
                            <p class="font-lato">Academy</p>
                        </div>
                    </a>
                </div>
                <!-- /Logo part -->
                <!-- Nav items -->
                <div class="row">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active dropdown position-static">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SERVICES 
                        </a>
                                <div class="dropdown-menu w-100 text-center dropdown-bg">
                                    <div class="container-fluid dropdown-bg">
                                        <div class="row w-100">
                                            <div class="col p-0">
                                                <a class="dropdown-item underline-removebg dropdown-heading-style" href="#">PRODUCT CATEGORIES</a>
                                                <a class="dropdown-item underline-removebg" href="#">Accesories</a>
                                                <a class="dropdown-item underline-removebg" href="#">Alcohol</a>
                                                <a class="dropdown-item underline-removebg" href="#">Art</a>
                                                <a class="dropdown-item underline-removebg" href="#">Books</a>
                                                <a class="dropdown-item underline-removebg" href="#">Drink</a>
                                                <a class="dropdown-item underline-removebg" href="#">Electronics</a>
                                                <a class="dropdown-item underline-removebg" href="#">Flowers & Plants</a>
                                                <a class="dropdown-item underline-removebg" href="#">Food</a>
                                            </div>
                                            <div class="col">
                                                <div style="height: 2.5rem;"></div>
                                                <a class="dropdown-item underline-removebg" href="#">Gadgets</a>
                                                <a class="dropdown-item underline-removebg" href="#">Garden</a>
                                                <a class="dropdown-item underline-removebg" href="#">Grocery</a>
                                                <a class="dropdown-item underline-removebg" href="#">Home</a>
                                                <a class="dropdown-item underline-removebg" href="#">Jewelry</a>
                                                <a class="dropdown-item underline-removebg" href="#">Kids & Baby</a>
                                                <a class="dropdown-item underline-removebg" href="#">Men's Fashion</a>
                                                <a class="dropdown-item underline-removebg" href="#">Mobile</a>
                                            </div>
                                            <div class="col">
                                                <div style="height: 2.5rem;"></div>
                                                <a class="dropdown-item underline-removebg" href="#">Motorcycles</a>
                                                <a class="dropdown-item underline-removebg" href="#">Movies</a>
                                                <a class="dropdown-item underline-removebg" href="#">Music</a>
                                                <a class="dropdown-item underline-removebg" href="#">Office</a>
                                                <a class="dropdown-item underline-removebg" href="#">Pets</a>
                                                <a class="dropdown-item underline-removebg" href="#">Romantic</a>
                                                <a class="dropdown-item underline-removebg" href="#">Sport</a>
                                                <a class="dropdown-item underline-removebg" href="#">Toys</a>
                                            </div>
                                            <div class="col p-0">
                                                <a class="dropdown-item underline-removebg dropdown-heading-style" href="#">SALE</a>
                                                <a class="dropdown-item underline-removebg" href="#">Accesories</a>
                                                <a class="dropdown-item underline-removebg" href="#">Alcohol</a>
                                                <a class="dropdown-item underline-removebg" href="#">Art</a>
                                                <a class="dropdown-item underline-removebg" href="#">Books</a>
                                                <a class="dropdown-item underline-removebg" href="#">Drink</a>
                                                <a class="dropdown-item underline-removebg" href="#">Electronics</a>
                                                <a class="dropdown-item underline-removebg" href="#">Flowers & Plants</a>
                                                <a class="dropdown-item underline-removebg" href="#">Food</a>
                                            </div>
                                            <div class="col">
                                                <img src="../../img/dropdown-img.jpg" alt="Dropdown Img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">COMPANY</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">LIBRARY</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                        </a>
                                <div class="dropdown-menu dropdown-lang-cur">
                                    <a class="dropdown-item" href="#">TR</a>
                                    <a class="dropdown-item" href="#">FR</a>
                                    <a class="dropdown-item" href="#">DE</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            $US
                        </a>
                                <div class="dropdown-menu dropdown-lang-cur">
                                    <a class="dropdown-item" href="#">₺ TRY</a>
                                    <a class="dropdown-item" href="#">€ EUR</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Icons -->
                    <div class="header-icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <i><img src="../../img/icons/Search.png" alt="Search icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="../../img/icons/User-.svg" class="header-icons-filter" alt="User icon" data-toggle="modal" data-target="#loginModal"></i>
                                </a>
                                <form lang="en">
                                    <!-- Login Modal -->
                                    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header d-block">
                                                    <h3 class="modal-title text-center" id="loginModalLabel">Sign In</h3>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="text-center">
                                                        <p class="text-left input-heding"><label for="email">Email</label></p>
                                                        <input type="email" required class="input" name="email" id="email"><br>
                                                    </div>
                                                    <div style="height: 2rem;"></div>
                                                    <div class="text-center">
                                                        <div class="row">
                                                            <p class="text-left input-heding"><label>Password</label></p>
                                                            <p class="forgot-password"><label>forgot password</label></p>
                                                        </div>
                                                        <div class="row">
                                                            <input type="password" id="id_password" class="input input-password" name="password"><br>
                                                            <i class="far fa-eye input-password-toggle" id="togglePassword" style=" cursor: pointer;"></i>
                                                        </div>
                                                    </div>
                                                    <div style="height: 5rem;"></div>
                                                </div>
                                                <div class="modal-footer d-block">
                                                    <div class="text-center col">
                                                        <button type="submit" class="btn btn-login" id="login_btn">LOGIN</button>
                                                    </div>
                                                    <div class="text-center col" style="margin: 0;">
                                                        <a href="#" class="idh-account">I don't have an account</a>
                                                        <div style="height: 2rem;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Login modal -->
                                </form>
                            </li>
                            <li>
                                <a href="# ">
                                    <i><img src="../../img/icons/Fav-.svg " class="header-icons-filter " alt="Fav icon "></i>
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <i><img src="../../img/icons/shopping-bag-.svg " class="header-icons-filter " alt="Shopping-Cart icon "></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- /Icons -->
                </div>
                <!-- /Nav items -->
            </div>
            <!-- /Main div of navbar -->
        </nav>
    `
    }
}
customElements.define('base-navbar', BaseNavbar)

class BaseFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer -->
        <div>
            <section class="">
                <footer class="bg-white ">
                    <!-- Grid container -->
                    <div class="container footer-main-container">
                        <!-- Grid row -->
                        <div class="row w-100">
                            <!-- Grid column -->
                            <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                                <div class="pb-4 mb-3">
                                    &copy;Copyright
                                    <span id="copyrightYear">
                                <script>document.getElementById('copyrightYear').appendChild(document.createTextNode(new Date().getFullYear()))</script>
                            </span>.<br>All Rights Reserved.
                                </div>
                                <h6 class="text-uppercase font-weight-bold">Contact</h6>
                                <p>
                                    Headquarters:<br>5600, Blvd. des Galeries, Bur 530<br>Québec, Québec G2K 2H6
                                </p>
                                <p>
                                    <a class="contact-mail-tel" href="mailto:contact@osf-global.com">contact@osf-global.com</a>
                                </p>
                                <p>
                                    <a class="contact-mail-tel" href="tel:+1(888)548-4344">+1 (888) 548-4344</a>
                                </p>
                            </div>
                            <!-- /Grid column -->

                            <!-- Grid column -->
                            <div class="col-lg col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase pb-3">Categories</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Alcohol</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Art</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Books</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Drink</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Electronics</a>
                                    </li>

                                </ul>
                            </div>
                            <!-- /Grid column -->

                            <!-- Grid column -->
                            <div class="col-lg col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase pb-3 text-white"> - </h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Home</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Jewelry</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Kids & Baby</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Men's Fashion</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Mobile</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Motorcycles</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Movies</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Music</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- /Grid column -->

                            <!-- Grid column -->
                            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase pb-3 text-white"> - </h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Sport</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Toys</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Travel</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Woman's Fashion</a>
                                    </li>

                                </ul>
                            </div>
                            <!-- /Grid column -->

                            <!-- Grid column -->
                            <div class="col-lg col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase pb-3">About</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">About us</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Delivery</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Testimonials</a>
                                    </li>
                                    <li class="pb-3">
                                        <a href="#!" class="footer-categories">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- /Grid column -->

                            <!-- Grid column -->
                            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <ul class="list-unstyled row">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" class="footer-categories-icons"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/" target="_blank" class="footer-categories-icons"><i class="fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank" class="footer-categories-icons"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank" class="footer-categories-icons"><i class="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <!-- /Grid column -->
                        </div>
                        <!-- /Grid row -->
                    </div>
                    <!-- /Grid container -->
                </footer>
            </section>
        </div>
        <!-- /Footer -->
        `
    }
}
customElements.define('base-footer', BaseFooter)
    // /Base navbar and footer classes...





// Login pop-up js
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

document.getElementById("login_btn").addEventListener('click', function(e) {
    const passVal = password.value;
    if (/[A-Z]/.test(passVal) && /[0-9]/.test(passVal) && /[^A-Za-z0-9]/.test(passVal)) {
        console.log("password specify the rules...");
    } else {
        alert("Password must have one special character, one number, one uppercase character and at least 6 character...");
    }

});
// /Login pop-up js
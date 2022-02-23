// Base navbar and footer classes...
class BaseNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-light navbar-expand-md">
        <!-- Main div of navbar -->
        <div class="container-fluid">
            <!-- Logo part -->
            <div>
                <a href="/index.html#" class="row logo">
                    <div>
                        <img src="/img/osf-logo.png" alt="OSF Logo">
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
                                            <a class="dropdown-item underline-removebg dropdown-heading-style" href="/dist/pages/404page.html">PRODUCT CATEGORIES</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Accesories</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Alcohol</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Art</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Books</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Drink</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Electronics</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Flowers & Plants</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Food</a>
                                        </div>
                                        <div class="col">
                                            <div style="height: 2.5rem;"></div>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Gadgets</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Garden</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Grocery</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Home</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Jewelry</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Kids & Baby</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Men's Fashion</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Mobile</a>
                                        </div>
                                        <div class="col">
                                            <div style="height: 2.5rem;"></div>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Motorcycles</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Movies</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Music</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Office</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Pets</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Romantic</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Sport</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Toys</a>
                                        </div>
                                        <div class="col p-0">
                                            <a class="dropdown-item underline-removebg dropdown-heading-style" href="/dist/pages/404page.html">SALE</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Accesories</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Alcohol</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Art</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Books</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Drink</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Electronics</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Flowers & Plants</a>
                                            <a class="dropdown-item underline-removebg" href="/dist/pages/404page.html">Food</a>
                                        </div>
                                        <div class="col">
                                            <img src="/img/dropdown-img.jpg" alt="Dropdown Img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dist/pages/404page.html">COMPANY</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dist/pages/404page.html">LIBRARY</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dist/pages/404page.html">CONTACT US</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                EN
                            </a>
                            <div class="dropdown-menu dropdown-lang-cur">
                                <a class="dropdown-item" href="/dist/pages/404page.html">TR</a>
                                <a class="dropdown-item" href="/dist/pages/404page.html">FR</a>
                                <a class="dropdown-item" href="/dist/pages/404page.html">DE</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                $US
                            </a>
                            <div class="dropdown-menu dropdown-lang-cur">
                                <a class="dropdown-item" href="/dist/pages/404page.html">₺ TRY</a>
                                <a class="dropdown-item" href="/dist/pages/404page.html">€ EUR</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- Icons -->
                <div class="header-icons">
                    <ul>
                        <li>
                            <a href="/dist/pages/404page.html">
                                <i><img src="/img/icons/Search.png" alt="Search icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i><img src="/img/icons/User-.svg" class="header-icons-filter" alt="User icon" data-toggle="modal" data-target="#loginModal"></i>
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
                            <a href="/dist/pages/404page.html">
                                <div>
                                    <i><img src="/img/icons/Fav-.svg " class="header-icons-filter " alt="Fav icon "></i>
                                    <div class="fav_count"><span id="fav_span">1</span></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                                <div>
                                    <i><img src="/img/icons/shopping-bag-.svg " class="header-icons-filter " alt="Shopping-Cart icon "></i>
                                    <div class="cart_count"><span class="cart_product_count" id="cart_span">2</span></div>
                                </div>

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
        <section>
            <footer class="bg-white ">
                <!-- Grid container -->
                <div class="container text-center footer-main-container">
                    <!-- Grid row -->
                    <div class="row w-100 ">
                        <!-- Grid column -->
                        <div class="text-left col-lg-3 col-md-12 mb-4 mb-md-0">
                            <div class="pb-4 mb-3">
                                &copy;Copyright
                                <span>
                                    2022
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
                        <div class="text-left col-lg col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase pb-3">Categories</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Alcohol</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Art</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Books</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Drink</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Electronics</a>
                                </li>

                            </ul>
                        </div>
                        <!-- /Grid column -->

                        <!-- Grid column -->
                        <div class="text-left col-lg col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase pb-3 text-white"> - </h5>
                            <ul class="list-unstyled mb-0">
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Home</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Jewelry</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Kids & Baby</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Men's Fashion</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Mobile</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Motorcycles</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Movies</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Music</a>
                                </li>
                            </ul>
                        </div>
                        <!-- /Grid column -->

                        <!-- Grid column -->
                        <div class="text-left col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase pb-3 text-white"> - </h5>
                            <ul class="list-unstyled mb-0">
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Sport</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Toys</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Travel</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Woman's Fashion</a>
                                </li>

                            </ul>
                        </div>
                        <!-- /Grid column -->

                        <!-- Grid column -->
                        <div class="text-left col-lg col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase pb-3">About</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">About us</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Delivery</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Testimonials</a>
                                </li>
                                <li class="pb-3">
                                    <a href="/dist/pages/404page.html" class="footer-categories">Contact</a>
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


// Cookie-container JS

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-button");
const cookieCloseButton = document.querySelector(".btn-cookie-close");

cookieCloseButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
});

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerAccepted", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerAccepted")) {
        cookieContainer.classList.add("active");
    }
}, 10000);

// /Cookie-container JS


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

// Slider JS
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);
// /Slider JS



// add +1 to navbar counts(fav, cart) JS
const addItemToCartBtn = document.querySelectorAll(".addItemToCart");
for (let i = 0; i < addItemToCartBtn.length; i++) {
    console.log(addItemToCartBtn[i]);
    addItemToCartBtn[i].addEventListener("click", () => {
        var itemCount = parseInt($("#cart_span").text());
        document.getElementById("cart_span").innerHTML = itemCount + 1;
    });
}
const addItemToFavBtn = document.querySelectorAll(".addItemToFav");
for (let i = 0; i < addItemToFavBtn.length; i++) {
    addItemToFavBtn[i].addEventListener("click", () => {
        var itemCount = parseInt($("#fav_span").text());
        document.getElementById("fav_span").innerHTML = itemCount + 1;
    });
}

// Featured Products section JS
document.getElementById("left_arrow").addEventListener('click', function(e) {
    const item_card = document.getElementById("first_featured_item");
    if (getComputedStyle(item_card).marginLeft === "-240px") {
        item_card.style.marginLeft = "0px";
    } else if (getComputedStyle(item_card).marginLeft === "-480px") {
        item_card.style.marginLeft = "-240px";
    } else if (getComputedStyle(item_card).marginLeft === "-720px") {
        item_card.style.marginLeft = "-480px";
    } else if (getComputedStyle(item_card).marginLeft === "-960px") {
        item_card.style.marginLeft = "-720px";
    } else {
        item_card.style.marginLeft = "-960px";
    }
});
document.getElementById("right_arrow").addEventListener('click', function(e) {
    const item_card = document.getElementById("first_featured_item");
    if (getComputedStyle(item_card).marginLeft === "0px") {
        item_card.style.marginLeft = "-240px";
    } else if (getComputedStyle(item_card).marginLeft === "-240px") {
        item_card.style.marginLeft = "-480px";
    } else if (getComputedStyle(item_card).marginLeft === "-480px") {
        item_card.style.marginLeft = "-720px";
    } else if (getComputedStyle(item_card).marginLeft === "-720px") {
        item_card.style.marginLeft = "-960px";
    } else {
        item_card.style.marginLeft = "0px";
    }
});

function recursiveSlider() {
    setTimeout(() => {
        console.log("5sn gecti");
        const item_card = document.getElementById("first_featured_item");
        if (getComputedStyle(item_card).marginLeft === "0px") {
            item_card.style.marginLeft = "-480px";
        } else if (getComputedStyle(item_card).marginLeft === "-240px") {
            item_card.style.marginLeft = "-480px";
        } else if (getComputedStyle(item_card).marginLeft === "-480px") {
            item_card.style.marginLeft = "-960px";
        } else if (getComputedStyle(item_card).marginLeft === "-720px") {
            item_card.style.marginLeft = "-960px";
        } else {
            item_card.style.marginLeft = "0px";
        }
        recursiveSlider();
    }, 2500);
}
recursiveSlider();

//!!! Category Landing Page Featured Products NOT WORKS

// document.getElementById("services_left_arrow").addEventListener('click', function(e) {
//     const item_card_services = document.getElementById("services_first_featured_item");
//     if (getComputedStyle(item_card_services).marginLeft === "-240px") {
//         item_card_services.style.marginLeft = "0px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-480px") {
//         item_card_services.style.marginLeft = "-240px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-720px") {
//         item_card_services.style.marginLeft = "-480px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-960px") {
//         item_card_services.style.marginLeft = "-720px";
//     } else {
//         item_card_services.style.marginLeft = "-960px";
//     }
// });
// document.getElementById("services_right_arrow").addEventListener('click', function(e) {
//     const item_card_services = document.getElementById("services_first_featured_item");
//     if (getComputedStyle(item_card_services).marginLeft === "0px") {
//         item_card_services.style.marginLeft = "-240px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-240px") {
//         item_card_services.style.marginLeft = "-480px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-480px") {
//         item_card_services.style.marginLeft = "-720px";
//     } else if (getComputedStyle(item_card_services).marginLeft === "-720px") {
//         item_card_services.style.marginLeft = "-960px";
//     } else {
//         item_card_services.style.marginLeft = "0px";
//     }
// });

// function recursiveSliderServices() {
//     setTimeout(() => {
//         console.log("5sn gecti");
//         const item_card_services = document.getElementById("services_first_featured_item");
//         if (getComputedStyle(item_card_services).marginLeft === "0px") {
//             item_card_services.style.marginLeft = "-480px";
//         } else if (getComputedStyle(item_card_services).marginLeft === "-240px") {
//             item_card_services.style.marginLeft = "-480px";
//         } else if (getComputedStyle(item_card_services).marginLeft === "-480px") {
//             item_card_services.style.marginLeft = "-960px";
//         } else if (getComputedStyle(item_card_services).marginLeft === "-720px") {
//             item_card_services.style.marginLeft = "-960px";
//         } else {
//             item_card_services.style.marginLeft = "0px";
//         }
//         recursiveSliderServices();
//     }, 2500);
// }
// recursiveSliderServices();
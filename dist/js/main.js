// login pop-up js
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
// /login pop-up js
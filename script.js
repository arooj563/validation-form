

    //  Login / Register Toggle
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    function showRegister() {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
    }

    function showLogin() {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    }

    // Default: Login visible
    loginForm.classList.add("active");
  

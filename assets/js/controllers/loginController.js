(function () {

    let loginForm = document.getElementById('loginForm');
    let wrongCredentialsError = document.getElementById('loginError');

    let loginUsername = document.getElementById('loginUsername');
    let loginPassword = document.getElementById('loginPassword');

    // let loginBtn = document.getElementById("loginBtn");


    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // console.log(this.elements);
        const {
            loginUsername: {
                value: username
            },
            loginPassword: {
                value: password
            }
        } = this.elements;

        if (userManager.loginUser(username, password)) {

            //! закоментираните работи реално се управляват в рутера
            // logoutBtn.style.display = "inline";
            // registerBtn.style.display = "none";
            // loginBtn.style.display = "none";

            location.hash = '#home';

        } else {
            wrongCredentialsError.style.display = 'block';
        };

        this.reset();

    });


    loginForm.addEventListener('input', validateForm);

    function validateForm() {

        const loginUsernameValue = loginUsername.value;
        const loginPasswordValue = loginPassword.value;

        if (loginUsernameValue && loginPasswordValue) {
            loginBtn.removeAttribute('disabled');
        } else {
            loginBtn.setAttribute('disabled', true);
        }

    }

})()
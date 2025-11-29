document.addEventListener('DOMContentLoaded', () => {
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const formWrapper = document.querySelector('.form-wrapper');

    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            formWrapper.style.transform = 'rotateY(180deg)';
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            formWrapper.style.transform = 'rotateY(0deg)';
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
        });
    }

    // Add subtle glow effect on input focus
    const inputFields = document.querySelectorAll('.input-group input');
    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 15px var(--neon-blue), inset 0 0 5px var(--neon-blue)';
        });
        input.addEventListener('blur', () => {
            input.style.boxShadow = '0 0 5px rgba(0, 224, 255, 0.5)';
        });
    });
});

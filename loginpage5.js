const main = document.querySelector('main');
const regiter = document.querySelector('.register-link');
const login = document.querySelector('.login-link');

regiter.onclick = () => {
    main.classList.add('active');
}
login.onclick = () => {
    main.classList.remove('active');
}
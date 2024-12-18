const wrap = document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpop = document.querySelector('.login-btn');
const closed = document.getElementById('close');

registerlink.addEventListener('click', ()=> {
    wrap.classList.add('active');
});
loginlink.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});
btnpop.addEventListener('click', ()=> {
    wrap.classList.add('active-popup');
});
closed.addEventListener('click', ()=>{
    wrap.classList.remove('active-popup');
})
// document.getElementById('burger__btn').addEventListener('click', function(){
//     document.querySelector('.header').classList.toggle('open');
//     document.querySelector('.header').classList.remove('open');
// })

const btn = document.querySelector('.burger')
const header = document.querySelector('.header')

btn.addEventListener('click', () =>{
    header.classList.toggle('open')
})

new Swiper('.swiper', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    simulateTouch: false,
    loop: true,
})
document.addEventListener("DOMContentLoaded",function() {
const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0:{
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },

    slidesPerView: 1, direction: "horizontal",
  });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');


hamburger.addEventListener('click', handleHamburgerClick);
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', handleHamburgerClick);
})


function handleHamburgerClick(){
  if(hamburger.classList.contains('closed')){
    hamburger.classList.remove('closed');
    hamburger.classList.add('opened');
    navMenu.classList.add('open');
    hamburger.src = 'assets/hamburger-closed.svg';
  } else {
    hamburger.classList.remove('opened');
    hamburger.classList.add('closed');
    navMenu.classList.remove('open');
    hamburger.src = 'assets/hamburger.svg';
  }
}





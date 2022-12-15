const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
// const open = document.querySelector(".open");
// const cover = document.querySelector(".cover");
// open.addEventListener('click', function(){
//   cover.style.height = 650;
// })
open = document.querySelector(".open");
open.onclick = function(){
  cover = document.querySelector(".cover");
  cover.classList.togglr("active");
}

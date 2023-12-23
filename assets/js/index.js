$('.mobile-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

      }
    },
  ]
});
// menu 
let primaryLinks = document.querySelector('.primary-links');
let menuToggle = document.querySelectorAll('.menu-toggle');
menuToggle.forEach(el => {
  el.addEventListener('click', (e) => {
    console.log(123);
    primaryLinks.classList.toggle('active');
  })
})
import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// Transform social block ========================================================================================================================================================

  let socialBlock = document.querySelector('ul.social'),
      navHeader = document.querySelector('nav.nav'),
      socialWrap = document.querySelector('.header__social'),
      header = document.querySelector('.header');

    function transformSocialBlock() {
      if (document.documentElement.clientWidth <= 576) {
        navHeader.append(socialBlock);
      } else {
        socialWrap.append(socialBlock);
      }
    }

    function scrollHeader() {
      if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    }

  window.addEventListener('DOMContentLoaded', () => {
    transformSocialBlock();
  });

  window.addEventListener('resize', () => {
    transformSocialBlock();
  });

  window.addEventListener('scroll', () => {
    scrollHeader();
  });


// Main vertical swiper ========================================================================================================================================================

const swiperVertical = new Swiper(".main-slider", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,
});

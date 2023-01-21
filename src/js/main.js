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


const breakpoint = window.matchMedia('(max-width:1200px)');

    // keep track of swiper instances to destroy later
    let mainSwiper;
    const breakpointChecker = function () {

      // if larger viewport and multi-row layout needed
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available

        mainSwiper.destroy(true, true);

        // or/and do nothing
        // else if a small viewport and single column layout needed
      } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();

      }

    };
    const enableSwiper = function () {

        mainSwiper = new Swiper('.main-slider', {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        speed: 800,
        navigation: {
          nextEl: '.hero__click-down',
        },
      });
    }


    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();



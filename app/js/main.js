// WOW JS Конфликтует с оверфлоу хайден на бади или секций
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 500) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}

$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      // $('.menu__list-drop').addClass('active');
      $('.menu__list-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })

    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      // $('.menu__list-drop').removeClass('active');
      $('.menu__list-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })
    }


  }));

  $(function () {

    $('.questions__item').on('click', (function () {
      $(this).find('.questions__item-title--btn').addClass('active');
      $(this).siblings().find('.questions__item-title--btn').removeClass('active');

      $(this).find('.questions__item-text').show(500);
      $(this).siblings().find('.questions__item-text').hide(500);

    }));


    $('.reviews__inner').slick({
      prevArrow: $('.reviews__wrapper .slick-prev'),
      nextArrow: $('.reviews__wrapper .slick-next'),
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive: [{
        breakpoint: 1301,
        settings: {
          // dotsClass: 'slick-dots',
          slidesToShow: 1,
          // arrows: false,
        }
      },
      {
        breakpoint: 701,
        settings: {
          // dotsClass: 'slick-dots',
          slidesToShow: 1,
          arrows: false,
        }
      }
      ]
    });

  })























});
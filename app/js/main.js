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

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  function clossModel() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', clossModel);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      clossModel();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      clossModel();
    }
  });




  $('.product__item').each((index, wrapper) => {
    const navSlider = $(wrapper).find('.slider-nav');
    const forSlider = $(wrapper).find('.slider-for');
    $(forSlider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: navSlider
    });
    $(navSlider).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $(wrapper).find('.slick-prev'),
      nextArrow: $(wrapper).find('.slick-next'),
      asNavFor: forSlider,
      dots: true,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [{
        breakpoint: 1750,
        settings: {
          slidesToShow: 4,
          dots: true,
        }
      },
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 2,
          dots: true,
  
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      }
      ]
    });
  })






  lightGallery(document.querySelector('.photo-house'));
  lightGallery(document.querySelector('.facade'));
  lightGallery(document.querySelector('.floor'));
  lightGallery(document.querySelector('.interior'));








});
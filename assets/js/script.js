var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  /* BTN TOP */

  const btn = document.getElementById('btnTop')

  btn.addEventListener("click", function(){
    window.scrollTo(0,0)
  })

  document.addEventListener('scroll',ocultar)

  function ocultar(){
    if(window.scrollY > 100){
      btn.style.display = "flex"
    } else {
      btn.style.display = "none"
    }
  }

  ocultar()

  /* ---------------------//--------------------- */
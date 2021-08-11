$(document).ready(() => {
    $(window).scroll(() => {
      if (this.scrollY > 1) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(() => {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    //   toggle menu/navbar script
    $(".menu-btn").click(() => {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing animation script
    var typed = new Typed(".typing-3", {
      strings: [
        "Desarrollador",
        "Independiente",
        "Diseñador",
        "Blogger",
        "Master",
        "Gamer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    var typed = new Typed(".typing-4", {
      strings: [
        "Desarrollador",
        "Independiente",
        "Diseñador",
        "Blogger",
        "Master",
        "Gamer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  
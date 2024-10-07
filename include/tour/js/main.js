window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav-mainpage');
  const logoMain = document.querySelector('.logo img.logo-main');
  const logoHover = document.querySelector('.logo img.logo-hover');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    logoMain.style.display = 'none';
    logoHover.style.display = 'block';
  } else {
    nav.classList.remove('scrolled');
    logoMain.style.display = 'block';
    logoHover.style.display = 'none';
  }
});


$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    margin: 0,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    loop: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });

  function autoSlide() {
    var totalItems = $(".owl-item").length;
    var itemsPerPage = 3;
    var currentIndex = owl.find(".active").index();
    var totalPages = Math.ceil(totalItems / itemsPerPage);
    var currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

    if (currentPage < totalPages) {
      owl.trigger("next.owl.carousel");
    } else {
      owl.trigger("to.owl.carousel", [0, 300]);
    }
  }

  setInterval(autoSlide, 3000);

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
(() => {
  document.addEventListener("DOMContentLoaded", function() {
    const navMainpage = document.querySelector('.nav-mainpage, .navbar');
    const menuWraps = document.querySelectorAll('.menu-wrap');
    const navLinks = document.querySelectorAll('.nav-links-mainpage li, .nav-links-mainpage li');

    navMainpage.addEventListener('mouseleave', function() {
        menuWraps.forEach(menuWrap => {
            menuWrap.style.opacity = '0';
            menuWrap.style.pointerEvents = 'none';
        });
    });

    navMainpage.addEventListener('mouseenter', function() {
        const activeMenuWrap = navLinks.querySelector('.menu-wrap');
        if (activeMenuWrap) {
            activeMenuWrap.style.opacity = '1';
            activeMenuWrap.style.pointerEvents = 'all';
        }
    });

    link.addEventListener('mouseleave', function() {
      const activeMenuWrap = navLinks.querySelector('.menu-wrap');
      if (activeMenuWrap) {
        activeMenuWrap.style.opacity = '0';
        activeMenuWrap.style.pointerEvents = 'none';
      }
    });
  });

  const menuToggle = document.querySelector('.menu-toggle, menu-toggle-sup');
  const navLinksContainer = document.querySelector('.nav-links, .nav-links-mainpage');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", function () {
      navLinksContainer.classList.toggle("show-menu");
    });
  } else {
    console.error("Không tìm thấy phần tử .menu-toggle hoặc .nav-links.");
  }

})();

     var swiper1, swiper2;

function initializeSwipers() {
  swiper1 = new Swiper(".swiper1", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper1 .button-next",
      prevEl: ".swiper1 .button-prev",
    },
  });

  swiper2 = new Swiper(".swiper2", {
    watchSlidesProgress: true,
    slidesPerView: 6, // Display 8 slides at a time
    spaceBetween: 20,
    loop: false, // Loop is set to false for accurate progress calculation

    on: {
      init: function () {
        updateProgress();
      },
      slideChange: function () {
        updateProgress();
      },
    },
  });

  // Add click event listener to swiper2 slides
  document
    .querySelectorAll(".swiper2 .swiper-slide")
    .forEach((slide, index) => {
      slide.addEventListener("click", function () {
        swiper1.slideTo(index);
      });
    });
}

function updateProgress() {
  if (!swiper2 || !swiper2.params) return; // Ensure swiper2 and its params are defined

  var visibleSlides = swiper2.params.slidesPerView; // Number of visible slides
  var totalSlides = swiper2.slides.length; // Total number of slides
  var progressRatio = swiper2.activeIndex / (totalSlides - visibleSlides);

  var progressBar = document.querySelector(".swiper2-progress-fill");
  var containerWidth = document.querySelector(
    ".swiper2-progress-container"
  ).offsetWidth;
  var fillWidth = progressBar.offsetWidth;

  // Update the left position of the progress bar
  progressBar.style.left =
    progressRatio * (containerWidth - fillWidth) + "px";
}

document.addEventListener("DOMContentLoaded", function () {
  initializeSwipers();

  // Add drag functionality to the progress bar
  var progressContainer = document.querySelector(
    ".swiper2-progress-container"
  );
  var progressBar = document.querySelector(".swiper2-progress-fill");
  var isDragging = false;
  var startX = 0;
  var startLeft = 0;

  progressContainer.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.clientX;
    startLeft = parseInt(progressBar.style.left, 10) || 0;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      var deltaX = e.clientX - startX;
      var newLeft = startLeft + deltaX;
      var maxLeft =
        progressContainer.offsetWidth - progressBar.offsetWidth;

      if (newLeft < 0) newLeft = 0;
      if (newLeft > maxLeft) newLeft = maxLeft;

            progressBar.style.left = newLeft + "px";

            // Calculate the new Swiper index based on the progress bar position
            var newProgress = newLeft / maxLeft;
            var newIndex = Math.round(
              newProgress *
                (swiper2.slides.length - swiper2.params.slidesPerView)
            );
            swiper2.slideTo(newIndex);
          }
        });

        document.addEventListener("mouseup", function () {
          if (isDragging) {
            isDragging = false;
          }
        });

        // Prevent text selection while dragging
        progressContainer.addEventListener("dragstart", function (e) {
          e.preventDefault();
        });
      });


      const handleChangeTab = (index) => {
        const listTab =  document.querySelectorAll(".tab__item")
        listTab.forEach((item, i) => {
            if(i === index) {
                item.classList.add("active")
            } else {
                item.classList.remove("active")
            }
        })

      }
  /* course tabs */
      let listTabs = document.querySelectorAll('.course__tab__item')
      const handleChangeTabCourse = (index) => {
        listTabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('active')
                let spanText = document.querySelector('.timeline__left__h4')
              spanText.textContent = tab.textContent.trim()
            } else {
                tab.classList.remove('active')
            }
        })
      }



  /* course tabs */
    /* course tabs */
    let listTabsAddition = document.querySelectorAll('.addition__tabs__item')
    const handleChangeTabAddition = (index) => {
      listTabsAddition.forEach((tab, i) => {
          if (i === index) {
              tab.classList.add('active')
              
            } else {
              tab.classList.remove('active')
          }
      })
    }



/* course tabs */

  /* footer nav */
  const listNav = document.querySelectorAll('.nav__item')
const handleChangeNav = (index) => {
    listNav.forEach((nav, i) => {
        if (i+1 === index) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}
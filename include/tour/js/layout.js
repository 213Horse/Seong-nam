const navigationButtons = document.querySelectorAll(".navigation button");
const toggleButtons = document.querySelectorAll(".toggle-btn");
const btnMover = document.getElementById("btn");


navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigationButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


toggleButtons[0].classList.add("active");


toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {

    toggleButtons.forEach((btn) => btn.classList.remove("active"));


    button.classList.add("active");

    if (button.textContent.includes("성남 9경")) {
      btnMover.style.left = "0";
      btnMover.style.borderRadius = "30px 0 0 30px";
    } else {
      btnMover.style.left = "50%";
      btnMover.style.borderRadius = "0 30px 30px 0"; 
    }
  });
});
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    buttons.forEach((btn) => btn.classList.remove("active"));


    button.classList.add("active");

    if (button.textContent.includes("성남 9경")) {
      document.getElementById("btn").style.left = "0";
      document.getElementById("btn").style.right = "auto";
    } else {
      document.getElementById("btn").style.left = "auto";
      document.getElementById("btn").style.right = "0";
    }
  });
});

var tab1Images = [
  {
    src: "include/tour/img/main/Rectangle9.jpg",
    overlayIndex: 0,
  },
  {
    src: "include/tour/img/main/Rectangle11.jpg",
    overlayIndex: 1,
  },
  {
    src: "include/tour/img/main/Rectangle12.jpg",
    overlayIndex: 2,
  },
];

var tab2Images = [
  {
    src: "include/tour/img/main/Rectangle13.jpg",
    overlayIndex: 0,
  },
  {
    src: "include/tour/img/main/Rectangle14.jpg",
    overlayIndex: 1,
  },
  {
    src: "include/tour/img/main/Rectangle15.jpg",
    overlayIndex: 2,
  },
];

var currentTab = 1;
var currentIndex = 0;
var playInterval;

function changeMainImage(imageSrc, overlayIndex) {
  var mainImage = document.getElementById("main-display");
  mainImage.classList.add("fade-out");

  setTimeout(function () {
    mainImage.src = imageSrc;
    mainImage.classList.remove("fade-out");
  }, 1000);
}

function prevImage() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : getImages().length - 1;
  var images = getImages();
  changeMainImage(images[currentIndex].src, images[currentIndex].overlayIndex);
}

function nextImage() {
  currentIndex = currentIndex < getImages().length - 1 ? currentIndex + 1 : 0;
  var images = getImages();
  changeMainImage(images[currentIndex].src, images[currentIndex].overlayIndex);
}

function getImages() {
  return currentTab === 1 ? tab1Images : tab2Images;
}

function showTab(tabNumber) {
  currentTab = tabNumber;
  currentIndex = 0;

  document.getElementById("tab1").style.display =
    tabNumber === 1 ? "flex" : "none";
  document.getElementById("tab2").style.display =
    tabNumber === 2 ? "flex" : "none";

  var images = getImages();
  changeMainImage(images[0].src, images[0].overlayIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showTab(1);
});

function playImage() {
  if (!playInterval) {
    playInterval = setInterval(function () {
      nextImage();
    }, 5000);
    document.getElementById("play-button").style.display = "none";
    document.getElementById("stop-button").style.display = "inline-block";
  }
}

function stopPlay() {
  clearInterval(playInterval);
  playInterval = null;
  document.getElementById("play-button").style.display = "inline-block";
  document.getElementById("stop-button").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var mainImageSrc = document.getElementById("main-display").src;
  if (mainImageSrc) {
    var initialImage = images.find((image) => mainImageSrc.includes(image.src));

    if (initialImage) {
      document
        .querySelectorAll(".image-container")
        [initialImage.overlayIndex].classList.add("active-hover");
    }
  }
});

function getImages() {
  return currentTab === 1 ? tab1Images : tab2Images;
}

function showTab(tabNumber) {
  currentTab = tabNumber;
  currentIndex = 0;

  document.getElementById("tab1").style.display =
    tabNumber === 1 ? "flex" : "none";
  document.getElementById("tab2").style.display =
    tabNumber === 2 ? "flex" : "none";

  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[tabNumber - 1].classList.add("active");

  document.getElementById("btn").style.left = tabNumber === 1 ? "0" : "50%";

  var images = getImages();
  changeMainImage(images[0].src, images[0].overlayIndex);
}


document.addEventListener("DOMContentLoaded", function () {
  showTab(1);
});

function leftClick() {

  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[0].classList.add("active");
  document.getElementById("btn").style.left = "0";
}

function rightClick() {
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[1].classList.add("active");
  document.getElementById("btn").style.left = "50%";
}

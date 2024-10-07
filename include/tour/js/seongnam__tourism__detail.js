$('.seongnam__tourism__detail').owlCarousel({

    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var selector = $('.owl-carousel');

// Initialize the carousel
selector.owlCarousel({
  items: 1, // Assuming one item per slide, change this according to your setup
  loop: false // Ensure loop is false to manage disabling of buttons properly
});

// Function to check and update button states
function checkButtonState() {
  var carouselData = selector.data('owl.carousel');
  var currentIndex = carouselData.relative(carouselData.current());
  var itemCount = carouselData.items().length;
  if (currentIndex === 0) {
    $('.prev__button').addClass('disabled');
    document.querySelector('.seongnam__prev__post').innerHTML = ""
  } else {
   let prevText = carouselData.items()[currentIndex-1][0].innerHTML
   const match = prevText.match(/<h2>(.*?)<\/h2>/);

    document.querySelector('.seongnam__prev__post').innerHTML = match[1]

    $('.prev__button').removeClass('disabled');
  }

  if (currentIndex === itemCount - 1) {
    $('.next__button').addClass('disabled');
    document.querySelector('.seongnam__next__post').innerHTML = ""

  } else {
    let nextText = carouselData.items()[currentIndex+1][0].innerHTML
   const match = nextText.match(/<h2>(.*?)<\/h2>/);

    document.querySelector('.seongnam__next__post').innerHTML = match[1]
    $('.next__button').removeClass('disabled');
  }
}

// Initially check button state
checkButtonState();

// Listen for carousel events to update button states
selector.on('translated.owl.carousel', function() {
  checkButtonState();
});

// Triggering next and previous actions
$('.next__button').click(function() {
  if (!$(this).hasClass('disabled')) {
    selector.trigger('next.owl.carousel');
  }
});

$('.prev__button').click(function() {
  if (!$(this).hasClass('disabled')) {

    selector.trigger('prev.owl.carousel');
  }
});

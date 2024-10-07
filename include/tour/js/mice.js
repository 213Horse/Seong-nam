$(".introduction__mice").owlCarousel({
  items: 1, // Show only one item
//   loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$('.introduction__mice').on('changed.owl.carousel', function(event) {
    // Your custom logic here
    document.querySelector('.current__index').innerHTML = event.page.index + 1;
});
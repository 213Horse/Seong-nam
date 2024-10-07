$(".introduction__restaurant__carousel").owlCarousel({
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

document.querySelectorAll('.introduction__restaurant__wrapper .introduction__restaurant__carousel').forEach(carousel => {
  // Attach the event listener to each carousel
  $(carousel).on('changed.owl.carousel', function(event) {
      // Select the parent restaurant wrapper
      const parentWrapper = carousel.closest('.introduction__restaurant__wrapper');
      
      // Select all right info elements within the parent restaurant wrapper
      const listRightInfo = parentWrapper.querySelectorAll('.introduction__restaurant__right__info');
      
      // Log the selected elements to the console
      console.log(listRightInfo);
      
      // Iterate over the selected elements
      listRightInfo.forEach((item, ind) => {
          // If the index matches the event's page index, add the 'active' class
          if (ind == event.page.index) {
              item.classList.add('active');
          } else {
              // Otherwise, remove the 'active' class
              item.classList.remove('active');
          }
      });
      
      // Update the current index display within the parent wrapper
      parentWrapper.querySelector('.current__index').innerHTML = event.page.index + 1;
  });
});
const handleChangeRestaurantTabs = (index) => {
  const listTabs = document.querySelectorAll('.best__restaurant__tabs ul li')
  const listRestaurantWrapper = document.querySelectorAll('.introduction__restaurant__wrapper')
  listTabs.forEach((item,ind)=>{
    if(ind == index){
      item.classList.add('active')}
      else{
        item.classList.remove('active')
      }
  })
  listRestaurantWrapper.forEach((item,ind)=>{
    if(ind == index){
      item.classList.add('active')}
      else{
        item.classList.remove('active')
      }
  })
  document.querySelector('.introduction__restaurant__wrapper.active .total__slide').innerHTML = document.querySelectorAll('.introduction__restaurant__wrapper.active .introduction__restaurant__carousel .item').length
}

window.onload = () => {
  document.querySelector('.introduction__restaurant__wrapper.active .total__slide').innerHTML = document.querySelectorAll('.introduction__restaurant__wrapper.active .introduction__restaurant__carousel .item').length
}
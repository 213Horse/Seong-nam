const handleChangeTabAttraction = (index) => {
    const listTab =  document.querySelectorAll(".tab__item")
    listTab.forEach((item, i) => {
        if(i === index) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
    const listIntroductionWrapper = document.querySelectorAll('.introduction__item__wrapper')
    listIntroductionWrapper.forEach((item, i) => {
        if(i === index) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
  }
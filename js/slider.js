const width = window.innerWidth
const sliderItems = document.querySelectorAll('#slider-items')
const sliderPages = document.querySelectorAll('#slider-page')
const slider = document.getElementById('slider')
let currentSlide = 0

for (const el of sliderItems) {
  el.classList.toggle('slider-item')
  slider.classList.remove('slider')
}
for (const el of sliderPages) {
  el.classList.remove('slider__page')
  el.classList.remove('slider__page-active')
}

if (width > 768) {
  slider.classList.add('slider')
  sliderPages[0].classList.add('slider__page-active')
  for (const el of sliderItems) {
    el.classList.add('slider-item')
  }
  for (const el of sliderPages) {
    el.classList.add('slider__page')
  }
  sliderPages.forEach((el, i) => {
    el.addEventListener('click', () => {
      for (const el of sliderItems) {
        el.classList.remove('active-slider-item')
      }
      for (const el of sliderPages) {
        el.classList.remove('slider__page-active')
      }
      currentSlide = i
      sliderItems[currentSlide].classList.add('active-slider-item')
      sliderPages[currentSlide].classList.add('slider__page-active')
    })
  })

  setInterval(() => {
    for (const el of sliderItems) {
      el.classList.remove('active-slider-item')
    }
    for (const el of sliderPages) {
      el.classList.remove('slider__page-active')
    }
    sliderItems[currentSlide].classList.add('active-slider-item')
    sliderPages[currentSlide].classList.add('slider__page-active')
    if (currentSlide === 2) {
      currentSlide = 0
    } else {
      currentSlide++
    }
  }, 3000)
}

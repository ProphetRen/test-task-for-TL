let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
let sliderLine = document.querySelector('.slider-line')
let sliderItem = document.querySelectorAll('.slider-item').length
let slideIndex = 0

btnLeft.addEventListener('click', () => {
  changeSlide('left')
})

btnRight.addEventListener('click', () => {
  changeSlide('right')
})

function changeSlide(elem){
  if (elem === 'left'){
    if(slideIndex === 0){
      slideIndex = 2
    }else{
      slideIndex--
    }
  }else if(elem === 'right'){

    if(slideIndex === (sliderItem - 1)){
      slideIndex = 0
    }else{
      slideIndex++
    }
  }
  console.log(slideIndex)
  sliderLine.style.marginLeft = `-${slideIndex * 30+'vw'}`
}
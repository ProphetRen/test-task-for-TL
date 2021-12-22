let scrollBtns = document.querySelectorAll('.primary-btn')
let scrollTarget = document.querySelector('.sale-and-form')


let links = document.querySelectorAll('a')


for (let btn of scrollBtns){
  btn.addEventListener('click',()=>{
    const targetPos = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: targetPos,
      behavior: 'smooth'
    })
  })
}
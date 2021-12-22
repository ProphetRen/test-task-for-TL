const menuBtn = document.querySelector('.burger-menu')
const closeBtn = document.querySelector('.close')
const menuWrapper = document.querySelector('.menu-wrapper')


menuBtn.addEventListener('click',()=>{
  menuWrapper.style.top = '0'
  document.body.classList.add('lock')
})

closeBtn.addEventListener('click',()=>{
  menuWrapper.style.top = '-100vh'
  document.body.classList.remove('lock')
})
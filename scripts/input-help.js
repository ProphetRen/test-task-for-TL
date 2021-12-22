let nameInput = document.querySelector('.name-input')
let phoneInput = document.querySelector('.phone-input')
let nameHelpText = document.querySelector('.name-help')
let phoneHelpText = document.querySelector('.phone-help')
let form = document.querySelector('.form')

nameInput.addEventListener('focus', () => {
  nameHelpText.classList.add('active')
})

nameInput.addEventListener('focusout', () => {
  nameHelpText.classList.remove('active')
})

phoneInput.addEventListener('focus', () => {
  phoneHelpText.classList.add('active')
})

phoneInput.addEventListener('focusout', () => {
  phoneHelpText.classList.remove('active')
})
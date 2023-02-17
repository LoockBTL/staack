// BURGER
const body = document.getElementsByTagName('body')
const button = document.getElementById('menu_button')
const burgerMenu = document.getElementById('burger_menu')
const wrapper = document.getElementById('wrapper')
button.addEventListener('click', () => {
  activeMenu()
})
wrapper.addEventListener('click', () => {
  activeMenu()
})

function activeMenu() {
  burgerMenu.classList.toggle('nav__active-menu')
  wrapper.classList.toggle('wrapper__disabled')
}

var gear = document.querySelector('.fa-cog')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions() {
  console.log(event.target)
  options.classList.toggle('active')
  event.preventDefault();
}


var mainNav = document.querySelectorAll('.site-nav li')

mainNav.forEach(
  navItem => navItem.addEventListener('click', setActive)
)

function setActive() {
  mainNav.forEach(
    navItem => navItem.classList.remove('active')
  )
  this.classList.add('active')
  event.preventDefault()
}
var gear = document.querySelector('.fa-gear')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions(){
  options.classList.toggle('active')
}


var mainNav = document.querySelectorAll('.site-nav li')


Array.from(mainNav).forEach(function (navItem) {
  navItem.addEventListener('click', setActive)
})

function setActive() {
	console.log(this)
  Array.from(mainNav).forEach(function (navItem) {
    navItem.classList.remove('active')
  })
  this.classList.add('active')
  event.preventDefault()
}



// for ( var i = 0; i < mainNav.length; i++ ){
//   mainNav[i].addEventListener('click', setActive)
// }

// function setActive(){
//   for ( var i = 0; i < mainNav.length; i++){
//     mainNav[i].classList.remove('active')
//   }
//   this.classList.add('active')
//   event.preventDefault()
// }












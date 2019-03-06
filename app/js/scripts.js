var gear = document.querySelector('.fa-cog')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions() {
  options.classList.toggle('active')
  event.preventDefault()
}


var mainNav = document.querySelectorAll('.site-nav li')

var articleArea = document.querySelector('article')


mainNav.forEach(
  navItem => navItem.addEventListener('click', setActive)
)

function setActive() {
  mainNav.forEach(
    navItem => navItem.classList.remove('active')
  )
  event.target.parentElement.classList.add('active')
  console.log(event.target.href.includes('review'))
  // use includes string method to test for review
  // and set the HTML on the page
  if (event.target.href.includes('review')) {
    articleArea.innerHTML = `
    <p>Reviews</p>
    `
  } else {
    articleArea.innerHTML = ``
  }
  event.preventDefault()
}
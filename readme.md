# IV - Flexbox Menu

## Homework

* Work on your midterm assignment
* Assuming we get to [this part](https://github.com/front-end-foundations/4-flex-menu#dynamic-pages) of this exercise, go ahead and use a series if `if ... else` statements to dynamically insert content on the other pages.

## The Terminal

_"Real developers know how to use command line."_ – [Assholes](https://gomakethings.com/you-dont-need-to-know-command-line-to-be-a-good-developer/)

There are many good reasons to aquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

The Windows equivalent to Mac's Terminal app is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences. Many Windows users use the shell that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." 

I suggest using Git Bash if you are on Windows.

Some basic shell commands (note the use of '$' to indicate a prompt):

```sh
$ pwd
$ ls
$ ls -l 
```

```sh
$ cd
$ cd <path-to-folder>
$ cd ..
$ cd ~
```

Demo: tab completion, `..` and copy paste.

On a mac you can `cd` to a folder via drag and drop or by copying and pasting a folder into the terminal.

Native Windows examples for cd / ls:

```sh
$ dir C:\windows
$ chdir C:\windows
```

Again: on Windows: if you have Git installed you probably have `git-bash` on your computer. You can use that to run unix style commands (e.g. `ls` instead of `dir`).

If you have Node installed you will be able to run JavaScript on the command line.

```sh
$ node --version
$ npm --version
$ git --version
$ node
$ > 12+12
$ var el = document.querySelector('.anything') // this makes no sense in the node universe
$ > .exit // or control + c
$ clear // or command + k
```

<!-- Demo (Mac only unless you have installed Python on your PC): `cd` into today's folder and enter the following command into Terminal:

```sh
$ python -m SimpleHTTPServer 9001
```

Access `localhost:8000` in Chrome. Note the directory listing. `ctrl-c` to quit the process. -->

* Many of the commands below may be different on Windows or have alternatives. Use the Git Bash terminal for best results.

```
$ cd <PATH> // copy and paste the folder you want to go to
$ cd ~ // go to your home directory
$ cd Desk // tab completion
$ cd .. // go up one level
$ ls
$ ls -al  // flags expand the command
$ pwd
```

## Node Package Manager

In order to familiarize you with node packages we will attempt to initiate hot reloading without using VS Code's Go Live extension.

Note the presence of `package.json` in the project folder. Examine it in VS Code.

Use `cd` to navigate to this project's directory. Then:

```sh
$ npm install
$ npm run start
```

Make a change to the HTML and note the hot reloading. Note the addition of the `node_modules` folder.

## Initialize a GIT Repo

```sh
git init
git add .
git commit -m 'initial commit'
```

## Design with FlexBox

<img src="app/img/hero-1.png">

See this [done version](http://oit2.scps.nyu.edu/~devereld/session4/app/) for a demo.

Refer to this simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). (Good to keep open for reference.)

We will use [Font Awesome](https://fontawesome.com/start) for the icons in this exercise.

In `index.html`:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
```

For the logo:

```html
<a href="/" class="logo" title="Company logo">
  <span class="fa fa-bullseye fa-3x"></span>
</a>
```

Note the use of a title attribute to clarify the purpose of the image since there is no link text.

For the cog/gear:

```html
<a href="#0">
  <span class="fa fa-cog fa-lg"></span>
</a>
```

The end result looks like this:

```html
<header>

  <a href="#0" class="logo">
    <span class="fa fa-bullseye fa-3x"></span>
  </a>

  <nav class="site-nav">
    <ul>
      <li class="active"><a href="recipes.html">Recipes</a></li>
      <li><a href="reviews.html">Reviews</a></li>
      <li><a href="delivery.html">Delivery</a></li>
    </ul>
  </nav>

  <div class="account-actions">
    <div class="account-dropdown">
      <a href="#0">
        <span class="fa fa-cog fa-lg"></span>
      </a>
      <ul>
        <li>Your Account</li>
      </ul>
    </div>
    <a href="#0" class="sign-out-link">Sign Out</a>
  </div>

</header>
```

For the actual text we'll use a system font stack that ensures the [device's native default font](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/) will be used. 

We will also remove the default margins and padding:

```css
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Add some basic styles for the links and lists:

```css
ul {
  list-style: none;
}

a {
color: #fff;
text-decoration: none;
}
```

And the header:

```css
/* flex parent */
header {
  background: #111;
  color: #eee;
  padding:0.5rem;
}
```

Apply flexbox to the header so all three chilren lay out horizontally:

```css
/* flex parent */
header {
  ...
  display: flex;
  align-items: center;
}
```

Note the default behaviour once `flex` is applied and the effect of `align-items: center`:

The account features (preferences etc.) are going to be in a drop down menu so we'll hide them for now:

```css
.account-dropdown ul {
  display: none;
}
```

Format the logo:

```css
/* flex item one */
.logo {
  padding: 1rem;
}
```

Format the unordered list and links. Note the use of flex:

```css
.site-nav ul {
  display: flex;
}

.site-nav a {
  text-transform: uppercase;
  color: #CDD0D0;
  padding: 20px;
}
```

Set up an active state:

```css
.site-nav .active a {
  color: #62DEBE;
  background: #444;
  border-radius: 3px;
}
```

Note the `margin-left: auto` setting for the actions section:

```css
/* flex item three */
.account-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.sign-out-link {
  color: #62debe;
  font-size: 0.8rem;
  margin-left: 1rem;
  text-transform: uppercase;
}
```

## Responsive Design

Note [the viewport meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/) in the head of the HTML:

```html
<meta name="viewport" content="width=device-width">
```

Examine the layout using the inspector's Toggle Device tool.

In a media query, turn flex wrap on and set the order of the site nav to second place to improve the layout:

```css
@media (max-width: 600px) {
  /* flex parent */
  header {
    flex-wrap: wrap;
  }
  /* flex item two */
  .site-nav {
    order: 2;
    width: 100%;
  }
  .site-nav ul li {
    flex-grow: 1;
  }
}
```

The important properties above are wrapping - to allow the content to go on two lines - and order - which allows the navigation to appear after the sign out.

The site nav looks odd. Let's use inline block on the links.

```css
.site-nav  a {
  ...
  display: inline-block;
  /* display: flex; */
}
```

Looking at the layout in wide screen mode now - let's try another method of laying out the content.

Remove the margin auto from the third flex item:

```css
/* flex item three */
.account-actions {
  /* margin-left: auto; */ /* new */
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
```

Use justify content to spread out the flex children:

```css
/* flex parent */
header {
  background: #111;
  color: #eee;
  padding:0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* new */
}
```

And allow the sign out to grow:

```css
/* new */
/* flex item two */
.site-nav {
  flex-grow: 1; 
}
```

Check the small screen layout using the Toggle Device tool.

<!-- ```css
@media (max-width: 600px) {
  ...
  /* flex item three */
  .account-actions {
    margin-left: auto; 
  }
}
``` -->

### Interactivity

We want a menu of options (currently hidden via CSS) to display when the user clicks on the cog icon. We also want the active navigation item (Recipes Reviews Delivery) to change when we click on them.

See this [done version](http://oit2.scps.nyu.edu/~devereld/session4/app/) for a demo.

Link to `js/scripts.js` in the HTML:

```html
<script src="js/scripts.js"></script>
```

Part ONE - click the gear icon to expose the options

```js
// select the gear icon and the hidden drop down list
var gear = document.querySelector('.fa-cog')
var options = document.querySelector('.account-dropdown ul')

// attach an event listener to the gear icon
gear.addEventListener('click', showOptions)

// use classList to toggle an active class
function showOptions(){
  options.classList.toggle('active')
  event.preventDefault()
}
```

Check to ensure that the options `<ul>` is showing the purple flash when you click on the cog.

Use the toggle to display the options list:

```css
.account-dropdown ul.active {
  display: flex;
  flex-direction: column;
}
```

Add postion relative to the div so we can position its children absolutely:

```css
.account-dropdown {
  position: relative;
  display: flex;
}

.account-dropdown ul {
  padding: 4px;
  position: absolute;
  top: 20px; 
  right: 0;
  background: #eee;
  border-radius: 3px;
  min-width: 100px;
}

.account-dropdown ul a {
  color: #333;
  padding: 0.25rem;
  display: inline-block;
  font-size: 0.75rem;
}

.account-dropdown ul a:hover {
  color: #62DEBE;
}
```

Note: the options menu is not optimized for mobile use.

PART TWO: dynamically add an active class to the navigation (note `for` loops and `this`):

```js
var mainNav = document.querySelectorAll('.site-nav li')

for ( var i = 0; i < mainNav.length; i++){
  mainNav[i].addEventListener('click', setActive)
}

function setActive(){
  for ( var i = 0; i < mainNav.length; i++){
    mainNav[i].classList.remove('active')
  }
  this.classList.add('active')
  event.preventDefault()
}
```

Note the use of `this` to refer to the clicked item. 

### Refactor One (use forEach):

```js
var mainNav = document.querySelectorAll('.site-nav li')

mainNav.forEach(function (navItem) {
  navItem.addEventListener('click', setActive)
})

function setActive() {
  mainNav.forEach(function (navItem) {
    navItem.classList.remove('active')
  })
  this.classList.add('active')
  event.preventDefault()
}
```

What is `navItem`?

### Refactor Two (use arrow functions):

```js
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
```

### Notes on JavaScript

In our final revision we used the latest enhancements to JavaScript. These will be supported by most browsers but there are many enhancements that will have poor support.

Many people use a tool to translate modern JavaScript into more broadly compatible JavaScript. This include [Babel](https://babeljs.io). Try translating our final scripts using their Try it out link.

While there is a `NodeList.forEach()` method, it has [partial browser support](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility) at this time. You can use a polyfill to support Internet Explorer.

Or, you can convert NodeLists into Arrays with the `Array.from()` method and use `Array.forEach()` instead.

```js
Array.from(mainNav).forEach(function (navItem) {
  navItem.addEventListener('click', setActive)
})

function setActive() {
  Array.from(mainNav).forEach(function (navItem) {
    navItem.classList.remove('active')
  })
  this.classList.add('active')
  event.preventDefault()
}
```

Note the use of `this` to refer to the clicked item. Previously we used 'event.target'. Why does event.target not work here? Try using `console.log(event.target)` in the `setActive` function.

Try [DOM traversal]() with `console.log(event.target.parentNode)`. 

```js
function setActive() {
  mainNav.forEach(
    navItem => navItem.classList.remove('active')
  )
  console.log(event.target.parentNode)
  event.target.parentNode.classList.add('active')
  event.preventDefault()
}
```

## Dynamic Pages

Add the following after the head tag in the HTML:

```html
<article></article>
```

Add a variable with a reference to the new tag:

```js
var articleArea = document.querySelector('article')
```

We'll use [string.includes](https://www.w3schools.com/jsref/jsref_includes.asp) to test for the link:

```js
function setActive() {
  mainNav.forEach(
    navItem => navItem.classList.remove('active')
  )
  event.target.parentElement.classList.add('active')
  // use the 'includes' string method to log true or false
  console.log(event.target.href.includes('review'))
  event.preventDefault()
}
```

Use `includes` to test for 'review' and if it is found, use `innerHTML` to set some content:

```js
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
  }
  event.preventDefault()
}
```

## Notes

An implementation of the above that uses event delegation.

Step one:

```js
// ONE
document.addEventListener('click', letsDoThis)

function letsDoThis() {
  console.log('boo')
}
```

Step two:

```js
// TWO
document.addEventListener('click', letsDoThis)

function letsDoThis() {
  if (event.target.closest('.site-nav')) {
    var mainNav = document.querySelectorAll('.site-nav li')
    mainNav.forEach(
      navItem => navItem.classList.remove('active')
    )
    event.target.parentElement.classList.add('active')
    event.preventDefault()
  }
}
```

Uses [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest). `closest` lets you select the closest ancestor element that matches a selector. It is part of [DOM Traversal](https://zellwk.com/blog/dom-traversals/).

Step three:

```js
// THREE
document.addEventListener('click', letsDoThis)

function letsDoThis() {
  if (event.target.closest('.site-nav')) {
    var mainNav = document.querySelectorAll('.site-nav li')
    removeActive(mainNav)
    event.target.parentElement.classList.add('active')
  }
  else if (event.target.classList.contains('fa-cog')) {
    var options = document.querySelector('.account-dropdown ul')
    options.classList.toggle('active')
  }
  event.preventDefault()
}

function removeActive(foo) {
  foo.forEach(navItem => navItem.classList.remove('active'))
}
```

Uses [classList.contains](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
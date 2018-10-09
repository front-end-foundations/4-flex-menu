# IV - Flexbox Menu

<img src="app/img/hero-1.png">

Note the presence of `package.json` in the project folder. Examine it.

Recall the Terminal commands we practiced last class. 

* Note for Windows users: many of the commands below are different on Windows or have alternatives. Use the Git Bash terminal (installed along with Git) for best results.

```
$ cd <PATH> // copy and paste the folder you want to go to
$ cd ~ // go to your home directory
$ cd Desk // tab completion
$ cd .. // go up one level
$ ls
$ls -al  // flags expand the command
$ pwd
```

Note: tab completion, `..` and copy paste.

Use `cd` to navigate to this project's directory. Then:

```sh
$ npm install
$ npm run start
```

## FlexBox

* CSS Flexible Box Layout Module
* A simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Try https://www.w3schools.com/css/css3_flexbox.asp

We will use [Font Awesome](http://fontawesome.io/) for the icons in this exercise.

In `app/index.html`:

```html
<link rel="stylesheet" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
```

For the logo:

```html
<a href="#0" class="logo"><i class="fa fa-bullseye fa-3x"></i></a>
```

For the gear:

```html
<i class="fa fa-gear"></i>
```

Link to `styles.css`:

```html
<link rel="stylesheet" href="css/styles.css">
```

A font stack that ensures the [device's default font](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/) will be used (native font):

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

```css
a {
color: #fff;
text-decoration: none;
}

header {
  background: #111;
  color: #eee;
  display: flex;
  align-items: center;
  padding:0.5rem;
}
```

Note the default behaviour once `flex` is applied.

Hide the account dropdown:

```css
.account-dropdown ul {
  display: none;
}
```

Format the logo:

```css
.logo {
  padding: 10px;
}
```

Format the unordered list and links:

```css
.site-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.site-nav  a {
  text-transform: uppercase;
  color: #CDD0D0;
  padding: 20px;
}
```

Set up an active state:

```css
.site-nav .active a {
  font-weight: bold;
  color: #62DEBE;
  background: #444;
}
```

Note the `margin-left: auto` setting for the actions section:

```css
.account-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.sign-out-link {
  color: #62DEBE;
  font-size: 0.8rem;
  margin-left: 10px;
  text-transform: uppercase;
}
```

Add [the responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/):

```html
<meta name="viewport" content="width=device-width">
```

In a media query, turn wrapping on and set the order of the site nav to second place to improve the layout:

```css
@media (max-width: 600px) {
  header {
    flex-wrap: wrap;
  }
  .site-nav {
    order: 2;
    background: #333;
    width: 100%;
  }
}
```

```css
.site-nav  a {
  ...
  display: inline-block;
}
```

### Interactivity

See `index-done.html` for a demo.

Link to `js/scripts.js`.

Part ONE - get the gear icon to expose the options

```js

var gear = document.querySelector('.fa-gear')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions(){
  options.classList.toggle('active')
}
```

Note - requires corresponding CSS (see `index-done.html`)

```css
.active {
  display: flex !important;
}

.account-dropdown {
  position: relative;
  display: flex;
}

.account-dropdown ul {
  font-size: 0.75rem;
  padding: 4px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 20px; 
  left: 10px;
  color: #333;
  background: #eee;
  border-radius: 3px;
  cursor: pointer;
}
```

Dynamically add an active class to the navigation (note `for` loops and `this`):

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

Refactor One (use `forEach`):

```js
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

Refactor two (use arrow functions):

```js
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

While there is a `NodeList.forEach()` method, it has poor browser support at this time.

You can convert NodeLists into Arrays with the `Array.from()` method and use `Array.forEach()` instead.

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

## Notes

```js
{
  "name": "flex-nav",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "browser-sync start --server 'app' --files 'app'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browser-sync": "^2.26.0"
  }
}

```
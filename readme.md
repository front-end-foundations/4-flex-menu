# IV - Flexbox Menu

<img src="app/img/hero-1.png">

<!-- Note the presence of `package.json` in the project folder. Examine it.

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
``` -->

## FlexBox

Refer to this simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). (Good to keep open for reference.)

We will use [Font Awesome](http://fontawesome.io/) for the icons in this exercise.

In `index.html`:

```html
<!-- <link rel="stylesheet" href="css/font-awesome-4.6.3/css/font-awesome.min.css"> -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
```

Link to `styles.css`:

```html
<link rel="stylesheet" href="css/styles.css">
```

For the logo:

```html
<a href="#0" class="logo"><span class="fa fa-bullseye fa-3x"></span></a>
```

For the cog:

```html
<span class="fa fa-cog fa-5x"></span>
```

The end result looks like this:

```html
  <header>

    <a href="#0" class="logo"><span class="fa fa-bullseye fa-3x"></span></a>

    <nav class="site-nav">
      <ul>
        <li class="active"><a href="recipes.html">Recipes</a></li>
        <li><a href="reviews.html">Reviews</a></li>
        <li><a href="delivery.html">Delivery</a></li>
      </ul>
    </nav>

    <div class="account-actions">
      <div class="account-dropdown">
        <span class="fa fa-cog fa-lg"></span>
        <ul>
          <li>Your Account</li>
        </ul>
      </div>
      <a href="#0" class="sign-out-link">Sign Out</a>
    </div>

  </header>
```

We'll use a system font stack that ensures the [device's native default font](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/) will be used:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Add some basic styles for the links:

```css
a {
color: #fff;
text-decoration: none;
}
```

And the header:

```css
header {
  background: #111;
  color: #eee;
  padding:0.5rem;
}
```

Apply flexbox to the header so all three chilren lay out horizontally:

```css
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
.logo {
  padding: 1rem;
}
```

Format the unordered list and links. Note the use of flex:

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
  border-radius: 3px;
}
```

Note the `margin-left: auto` setting for the actions section:

```css
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

Add [the responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/):

```html
<meta name="viewport" content="width=device-width">
```

In a media query, turn wrapping on and set the order of the site nav to second place to improve the layout:

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

```css
.site-nav  a {
  ...
  /* display: inline-block; */
  display: flex;
}
```

Redrawing from the top. Focus on the header's use of flexbox.

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

```css
/* flex item one */
.logo {
  padding: 1rem;
}
```

```css
/* flex item two */
.site-nav {
  flex-grow: 1; /* new */
}
```

```css
/* flex item three */
.account-actions {
  /* margin-left: auto; */ /* new */
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
```

### Interactivity

See `index-done.html` for a demo.

Link to `js/scripts.js`.

Part ONE - get the gear icon to expose the options

```js

var gear = document.querySelector('.fa-cog')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions(){
  options.classList.toggle('active')
}
```

Note - requires corresponding CSS (see `index-done.html`)

```css
.account-dropdown ul.active {
  display: flex;
  flex-direction: column;
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
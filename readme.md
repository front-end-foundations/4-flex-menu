# IV - Flexbox Menu

<img src="app/img/hero-1.png">

## FlexBox

* CSS Flexible Box Layout Module
* A simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Try https://www.w3schools.com/css/css3_flexbox.asp

We will use [Font Awesome](http://fontawesome.io/) for the icons in this exercise.

In `app/index.html`:

```
<link rel="stylesheet" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
```

For the logo:

```html
<a href="#0" class="logo"><i class="fa fa-bullseye fa-3x"></i></a>
```

Gear:

```html
<i class="fa fa-gear"></i>
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
  background: #0D1313;
  color: #fff;
  display: flex;
  align-items: center;
  padding:0.5rem;
}
```

Hide the account dropdown:

```css
.account-dropdown ul {
    display: none;
}
```

Format the logo:

```css
.logo {
  text-decoration: none;
  color: white;
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
  text-decoration: none;
  color: #CDD0D0;
  padding: 20px;
  display: inline-block;
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

Note the margin left auto setting for the actions section:

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
  text-decoration: none;
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

<!-- Refactor CSS for `text-decoration`, `text-transform` ... -->

### Interactivity

See `index-done.html` for a demo.

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
  padding: 4px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 20px; 
  left: 10px;
  color: #333;
  background: #fff;
  font-size: 0.875rem;
}
```

Add an active class to the navigation.

Introduces for loops and 'this' 

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

## Notes

`"start": "browser-sync start  --server --watch"`
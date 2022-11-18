# React
- React is a UI Library made by facebook in 2011 and made open sourced in 2013.
- React can be compared to Angular that is made by google and vue.js that is already open sourced.
- Component based structre.

### Babel
Balel is the compiler for react.

## Why react

## JSX

## Components



---

# React Installation

#### React CDN
CDN link can be used to run react code for simple easy operations .
[React CDN](https://reactjs.org/docs/cdn-links.html)
```html

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
You also need to link babel cdn file. 
```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

---

#### React using NPX
use the command in cmd of specific folder.
```bash
 npx create-react-app your-app-name 
 cd your-app-name 
 npm start 
 ```
 Npm start is used to start the application in web browser with live preview.



# Angular React Differences

## Angular
-  JS Framework for crating complete frontend applications. 
- Forced to create single paged applications as multi pages are a bit hard.
- operates on real DOM.
- supports two way binding.

## React 
- JS Library to create UI(view).
- can be used for single page or multiple pages.
- operates on virtual DOM.
- only supports one way binding.



---

# Additonal
- Single Page application loads just one page ie index.html 
- other pages are made in components

### DOM
Document object model. It is the model created by browser when a page is loaded.
It is that tree like structre that can later be changed by using JS.


### Component
Component is a reusable piece of ui that icludes with design and fucntionallity.



---

# Folder Structre notes

* createroot defines the dom element to be changed by reactDOM.
*   <App /> is the main component to be used ie app.js
* index.css for global styling.
* App.css for styling app component
* all app information to be contained i  package.json
* public > index.html should have atleast one selector ie div tag with id
  

---

# Component

* Component should always start with capital, use pascal case.
# React
- React is a UI Library made by facebook in 2011 and made open sourced in 2013.
- React can be compared to Angular that is made by google and vue.js that is already open sourced.
- Component based structre.


### Babel
Balel is the compiler for react.

## Why react
* Large code can be converted into smaller components which can further be added to the app/webpage easily making the designing part much easier hence taking less time.
* React is Declarative(oly need to tell what to do) . Vanilla JS is imperative.(all steps need to be fed to computer/how to do it)
* great for SPA (*Single page Applications*)
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

You also need to add link for js file and use type as text/babel.
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


---
## JSX
Javascript XML.
* js but kinda like html.
* kinda like a function, when html element are passed to it it returns js object that can be used to create actual elements.
* Single parent element needed.
* wrap inside a div or react fragement to display multiple tags.
*  html tags can be stored in a variable


## Components
*Composable/Resuable elements*
Components are basically fucntions that can be added to render function. components can be defined using normal js function() and needs to be exported. Later they can be used for rendering. Components also need to be imported first from the specific file.
* Component should always start with capital, use pascal case.
* Component is a reusable piece of ui that icludes with design and fucntionallity.
* Instead of calling it by a normal funciton like `CallFunction()` , it has to be wrapped in HTML like structre, i.e. self closing tag ex. `<CallFunction />`

Import Examples. 
```javascript
import React from 'react';

import ReactDOM from 'react-dom/client';
```

creating and exporting exporting component

```javascript
function Header(){
return(
<h1> some html data</h1
)
}
export default Header;
```

We can also export components by adding `export default` before stating to write the component

```javascript
export default function Header()
```

```javascript
ReactDOM.createRoot(document.getElementById('dom-ID').render(<some HTML Tags>))
```
^ New createRoot method.

The `ReactDOM.createRoot(document.getElementById('dom-ID')` part can be added to a variable.

```javascript 
import Header from "./components/Header";
//CreateRoot method defined
const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering the root object
root.render(
<React.StrictMode>
<App />
<Header /> 
</React.StrictMode>
);
```
^ Method used in App.js or normal react file.

We can also use ReactDOM.render to render the component but it is an outdated method after react 18. use createRoot to render the component.
```javascript 
ReactDOM.render(

	<div >
		<App />
		<Header />
	</div>,

document.getElementById("root")

)
```
```javascript 
ReactDOM.render(<some html tag/data> , document.getElementById("DOM Id that component will change"))
```

---

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

## Organisation system
- Make new components in diffrent file only
- You can also import images using the `import` command. It helps in keeping the structre and file path save as it changes when building the project
	```javascript
	import logo from './logo_image.png'
```




---

# Folder Structre notes

* createroot defines the dom element to be changed by reactDOM.
*   <App /> is the main component to be used ie app.js
* index.css for global styling.
* App.css for styling app component
* all app information to be contained i  package.json
* public > index.html should have atleast one selector ie div tag with id

----

# Styling in React

To add a style element in React we can either use inline CSS or import an external file.
- The major difference is gonna be how you write classes, instead of using `class` , we are gonna use `className` (use camel case).
- The class needs to be imported.
	```javascript
	import "./Header.css";
	```
- For inline CSS we need to add the styles as a javascript object instead of what we used to do in normal HTML/CSS.
	```javascript
	<h1 style={{color:"red",someStyle:"property",and:"so on"}}>Some text here</h1>
	//the first {} tells react that we wanna insert javascript code here. the second { }
	// is  to create an object which will contain the css element in key:value form.
```
- We can add style Objects in a variable, 
	```javascript
	const styleElement = {
		display:"flex",
		fontSize:56,
		lineSpacing:5,
		//Notice how the properties with multiple words in name are converted into 
		//camelCase objects.
		color:"#ae2356",
		// The color code is also in double quotes as its a string.
		letterSpacing:18
	}

	<h1 style={styleElement}>This is some text here<h1>
	// again the { } starts to insert javascript code so that we can add the variable.
```

- arrow functions can be used to change the style/classes based on states(Will update later).

---
# State Management

State management is basically data and how we manage data.

-----

# FAQ/Questions

1. **Why do we need to `import React from "react"` in our files?**
*React is what defines JSX*

2. **If I were to console.log(page) in index.js, what would show up?**
*A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.**

3. **What's wrong with this code:**
```javascript
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
*We need our JSX to be nested under a single parent element*

4. **What does it mean for something to be "declarative" instead of "imperative"?**
*Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.**

5. **What does it mean for something to be "composable"?**
*We have small pieces that we can put together to make something
larger/greater than the individual pieces.*


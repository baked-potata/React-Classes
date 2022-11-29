# React

- React is a UI Library made by facebook in 2011 and made open sourced in 2013.
- React can be compared to Angular that is made by google and vue.js that is already open sourced.
- Component based structre.

### Babel

Balel is the compiler for react.

## Why react

- Large code can be converted into smaller components which can further be added to the app/webpage easily making the designing part much easier hence taking less time.
- React is Declarative(oly need to tell what to do) . Vanilla JS is imperative.(all steps need to be fed to computer/how to do it)
- great for SPA (_Single page Applications_)

---

# React Installation

#### React CDN

CDN link can be used to run react code for simple easy operations .
[React CDN](https://reactjs.org/docs/cdn-links.html)

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
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

- js but kinda like html.
- kinda like a function, when html element are passed to it it returns js object that can be used to create actual elements.
- Single parent element needed.
- wrap inside a div or react fragement to display multiple tags.
- html tags can be stored in a variable

## Components

_Composable/Resuable elements_
Components are basically fucntions that can be added to render function. components can be defined using normal js function() and needs to be exported. Later they can be used for rendering. Components also need to be imported first from the specific file.

- Component should always start with capital, use pascal case.
- Component is a reusable piece of ui that icludes with design and fucntionallity.
- Instead of calling it by a normal funciton like `CallFunction()` , it has to be wrapped in HTML like structre, i.e. self closing tag ex. `<CallFunction />`

Import Examples.

```javascript
import React from "react";

import ReactDOM from "react-dom/client";
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
const root = ReactDOM.createRoot(document.getElementById("root"));
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
  <div>
    <App />
    <Header />
  </div>,

  document.getElementById("root")
);
```

```javascript
ReactDOM.render(<some html tag/data> , document.getElementById("DOM Id that component will change"))
```

---

# Angular React Differences

## Angular

- JS Framework for crating complete frontend applications.
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
- Add `{require('path/to/file')}` to load images without importing

### DOM

Document object model. It is the model created by browser when a page is loaded.
It is that tree like structre that can later be changed by using JS.

## Organisation system

- Make new components in diffrent file only
- You can also import images using the `import` command. It helps in keeping the structre and file path save as it changes when building the project
  ```javascript
  import logo from "./logo_image.png";
  ```

## Folder Structre notes

- <App /> is the main component to be used ie app.js
- index.css for global styling.
- App.css for styling app component
- all app information to be contained in package.json
- public > index.html should have atleast one selector ie div tag with id

---

# Styling in React

To add a style element in React we can either use inline CSS or import an external file.

- The major difference is gonna be how you write classes, instead of using `class` , we are gonna use `className` (use camel case).
- The class needs to be imported.
  ```javascript
  import "./Header.css";
  ```
- For inline CSS we need to add the styles as a javascript object instead of what we used to do in normal HTML/CSS.
  ```javascript
  <h1 style={{ color: "red", someStyle: "property", and: "so on" }}>
    Some text here
  </h1>
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

"State" refers to values that are managed by the component, similar to variables declared inside a funciton. Anytime you have changing calues that should always be saved/displayed, you'll likely be using states.
State management is basically data and how we manage data.

## useState()

```javascript
import { useState } from "react";
const [students, setStudents] = useState(studentData);
// first variable is used to store data, second is method to update data. it will always be updated using this method.
//usestate can be used to pass data to first variable.

// The above method is destructred method, to import the useState function
//You can also use react.useState();
```

## counter example for useState

```javascript
import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const onIncrease = () => {
    counter < 10 ? setCounter(counter + 1) : setCounter(10);
  };
  return (
    <div style={{ textAlign: "center", padding: "18px" }}>
               <h2>Counter</h2>         <h3>{counter}</h3>         
      <button onClick={onIncrease}>increase</button>         
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
             {" "}
    </div>
  );
}
```

---

```javascript
const [count, setCount] = React.useState(0);
/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */
function add() {
  setCount((prevCount) => prevCount + 1);
}
```

## Arrays with States.

You can add values into an array but you cannot use any push or add method. You have to destructre the array, and then use a callback function to add the next item to the setState function.
eg.

```javascript
const [array, setArray] = useState(["item 1", "item 2"]);

function addItem() {
  setArray((prevArray) => [...prevArray, "new item/javascript variable"]);
  //set function is called when eventlistner calls addItem function. setFunction then proceeds to run a callback function, that has a parameter of our current state value. i.e. prevArray in this case. We then destructre the array, and add the next value inside it, hence updating the array. Destructring is done via spread operator. which is [...array]. it passes the value of one array to another object.
}
```
## Objects with States
 Just like arrays we can also play with objects store in UseState variable
 ```javascript 
 const [contact, setContact] = React.useState({
firstName: "John",
lastName: "Doe",
phone: "+1 (719) 555-1212",
email: "itsmyrealname@example.com",
isFavorite: false
})
 
 function toggleFavorite() {
setContact(prevContact => ({
...prevContact,
//...prevContact creates a copy/clone of the previous data 
//here the object is spread first and then the object key that needs to be updated is updated
isFavorite: !prevContact.isFavorite
}))
}
```
---

# Props

Props refers to the properties passed into a component in order for it to work correctly, similar to how a function recieves parameters : "from above". A component recieving props isnt allowed to modify these props.(i.e. they are "immutable")

- Props are basically parameters sent to a function.
- In React they are defined as properties, which later sends an object to the component.

```javascript
export default function Name(props){
  return <h1> {props.name} </h1>
}

<Name name="some text here">
```

- multiple props can be sent to a component. or we can also send data as object.
- Object recived in props will be called by `props.objectName.key`

## Props Destructuring

```javascript
const { img, name } = person;
console.log(name);
```

- Prop Destructring is basically making variables out of an object.
- `{props.object && <h3>{props.object}</h3>}` Use this to render the DOM element only when a value is available.

## Array.map() to display all data via component.

Array.map can be used on a state variable which later can be passed to a component, iether as an array or an object. Array.map() inserts data one by one inside the state variable and passes it to the component, repeating it till its done.
`check the travel app for example`

```javascript
import data from './Data'
function App() {
  const [travelData, setTravelData] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {travelData.map((item) => {
        //travelData is the state variable, carrying values from the 'data' object but when a state is loaded , only one value is passed.  .map allows us to cycle through all the items/object.
        // item is the parameter that takes the current value from the array.
          return <Main key={data.key} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;


function Main(props) {
  console.log(props);
  return (
    <>
    <h1> props.id </h1>
      </>
  );
}

export default Main;
```

## Object Spreading

- We can send object properties as own objects by spreading them.

```javascript
	const object = [{id:1,name:"abc"},{id:2,name:"xyz"}]
	//we can spread this object and pass it as a prop
	return(
		<SomeComponent key={someId}
		{...object}
		
	)
	//the component will recieve id and name directly, instead of recieving it via property
```

## Sending states through Props

You can send a variable of useState through a prop. `prop = someStateVariable`

## sending function through props

You can also send a complete function as a prop object to a child component, but ccause the function is still in parent component, we can change the state value from child. we have to use `handleClick` variable to send a funtion.

```javascript
const [variable, setVariableFunc] = useState(1);
function counter() {
  setVariableFunc(counter + 1);
}

return <SomeComp handleClick={counter} />;

//Component

function SomeComp(props) {
  return <button onClick={props.counter}>button appears </button>;
}
```

- data cant be shared between 2 sibling components directly. no data can be passed upwards either.


---
# Conditional rendering
use ternary operator to render the elements conditionally. 

```javascript
const item=true;

const conditonalRender = () =>
{
if (item)
return <h1>some div </h1>

}

{conditionalRender()}
```


---

# React Router
	React Router is a third party plugin that is commonly used in React. Normaly what React does, it changes the certain elements on pages when an interaction is made. On old wesites complete webpage had to be reloaded and all data was sent by server to make this happen. But with React, A reactApp is sent to the browser which handles the routes.
### React Router Features
- Conditionally render large parts of your page
- Declarative API ( SOme hooks and components will be used to display the UI)
- hooks
#### Primary Components
Routers
- ``<BrowserRouter>``
- ``<HashRouter>``
Route Matchers
- ``<Route>``
- ``<Switch>``
Navigation
- ``<Link>``
- ``<NavLink>``
- ``<Redirect>
#### Hooks
- `useHistory`
- `useLocation`
- `useParams`

## React Royter installation
```javascript
npm install react-router-dom
//verify in package.json for successfull installation
import { BrowserRouter , Routes , Route,  Link } from 'react-router-dom'
//these files are imported along with some others

<Link to="/">Home</Link>
<Link className="nav-link" to="/About">About</Link>
// anchor tag is changed by Link tag and href property is now changed to 'to'
// File to be linked is placed as a value inside to property    

<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>
    </BrowserRouter>

```

---
## JSON Server
to connect our frontend to our database, we need to have access to it via API's (Application programming interfaces). 
JSON Server is a fake API provider for learning how api's work.



```bash
sudo npm install -g json-server
```

---

# FAQ/Questions

1. **Why do we need to `import React from "react"` in our files?**\
   _React is what defines JSX_
1. **If I were to console.log(page) in index.js, what would show up?**\
   _A JavaScript object. React elements that describe what React should eventually add to the real DOM for us._
1. **What's wrong with this code:**
   `javascript const page = ( <h1>Hello</h1> <p>This is my website!</p> ) `\
   _We need our JSX to be nested under a single parent element_
1. **What does it mean for something to be "declarative" instead of "imperative"?**\
   _Declarative means I can tell the computer WHAT to do and expect it to handle the details. Imperative means I need to tell it HOW to do each step._
1. **What does it mean for something to be "composable"?**\
   _We have small pieces that we can put together to make something larger/greater than the individual pieces._
1. **What do props help us accomplish?**\
   _Make a component more reusable._
1. **How do you pass a prop into a component?**

   ```javascript
   <MyAwesomeHeader title="???" />
   ```

1. **Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. `<div blahblahblah={true}>`) Why or why not?**\
   _No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (Which doesn't include properties like `blahblahblah`)_
1. **How do I receive props in a component?**\

   ```javascript
   function Navbar(props) {
     console.log(props.blahblahblah);
     return <header>...</header>;
   }
   ```

1. **What data type is `props` when the component receives it?** \
   _An object!_

1. **What does the `.map()` array method do?**\
   _Returns a new array. Whatever gets returned from the callback function provided is placed at the same index in the new array. Usually we take the items from the original array and modify them in some way._

1. **What do we usually use `.map()` for in React?**\
   _Convert an array of raw data into an array of JSX elements that can be displayed on the page._

1. **Why is using `.map()` better than just creating the components manually by typing them out?**\
   _It makes our code more "self-sustaining" - not requiring additional changes whenever the data changes._

1. **How would you describe the concept of "state"?**\
   _A way for React to remember saved values from within a component.This is similar to declaring variables from within a component,with a few added bonuses (which we'll get to later)_

1. **When would you want to use props instead of state?**\
   _Anytime you want to pass data into a component so that component can determine what will get displayed on the screen._

1. **When would you want to use state instead of props?**\
   _Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component)._

1. **What does "immutable" mean? Are props immutable? Is state immutable?**\
   _Unchanging. Props are immutable. State is mutable._

1. **You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?**\

   _a. New value of state (setCount(42))_\
   _b. Callback function - whatever the callback function_\
   _returns === new value of state_\

1. **When would you want to pass the first option (from answer above) to the state setter function?**\
   _Whenever you don't need the previous value of state to determine what the new value of state should be._\

1. **When would you want to pass the second option (from answerabove) to the state setter function?**\
   _Whenever you DO need the previous value to determine the new value_

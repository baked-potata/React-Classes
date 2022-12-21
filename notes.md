# React

- React is a UI Library made by facebook in 2011 and made open sourced in 2013.
- React can be compared to Angular that is made by google and vue.js that is already open sourced.
- Component based structre.

### Babel

Babel is the compiler for react.

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

JavaScript XML.

- js but kinda like html.
- kinda like a function, when html element are passed to it it returns js object that can be used to create actual elements.
- Single parent element needed.
- wrap inside a div or react fragement to display multiple tags.
- html tags can be stored in a variable

## Components

_Composable/Reusable elements_
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

# Additional

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

## Folder Structure notes

- <App /> is the main component to be used ie app.js
- index.css for global styling.
- App.css for styling app component
- all app information to be contained in package.json
- public > index.html should have at least one selector i.e. div tag with id

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

"State" refers to values that are managed by the component, similar to variables declared inside a function. Anytime you have changing values that should always be saved/displayed, you'll likely be using states.
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

You can add values into an array but you cannot use any push or add method. You have to destructre the array, and then use a call-back function to add the next item to the setState function.
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
  isFavorite: false,
});

function toggleFavorite() {
  setContact((prevContact) => ({
    ...prevContact,
    //...prevContact creates a copy/clone of the previous data
    //here the object is spread first and then the object key that needs to be updated is updated
    isFavorite: !prevContact.isFavorite,
  }));
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

## Prop Drilling

Prop drilling, also known as prop passing or property tunneling, refers to the practice of passing data from a parent component to a child component through props (short for properties) in a React application. This is necessary when a component needs to access data that is not directly available to it, but is available to a higher-level component in the component hierarchy.

For example, imagine that you have a component `App` that needs to pass some data to a component `Child` that is nested several levels deep within the component hierarchy. In this case, you would need to pass the data through each intermediate component in the hierarchy by assigning it as a prop. This can quickly become unwieldy if you have a deep component hierarchy and need to pass multiple pieces of data through it.

There are a few ways to avoid prop drilling, such as using the context API or using a state management library like Redux. These approaches can make it easier to manage the flow of data through a complex component hierarchy.

Here is an example of prop drilling in a React application:
```javascript
import React from 'react';

// App is the top-level component
function App(props) {
  const data = {
    name: 'John',
    age: 30
  };

  return <Child data={data} />;
}

// Child is a nested component
function Child(props) {
  return <Grandchild data={props.data} />;
}

// Grandchild is a nested component
function Grandchild(props) {
  const { name, age } = props.data;

  return <div>{`My name is ${name} and I am ${age} years old.`}</div>;
}

```

In this example, the `App` component passes the `data` object to the `Child` component as a prop. The `Child` component then passes the `data` object to the `Grandchild` component as a prop. The `Grandchild` component uses the `data` object to display the name and age of the person.

Prop drilling can be useful in simple applications, but it can become cumbersome in larger applications with a deep component hierarchy and many pieces of data that need to be passed through it. In such cases, it may be useful to use the context API or a state management library to avoid having to pass props through multiple levels of the component hierarchy.


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

try to keep the state in app component or contexts.

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
  return <button onClick={props.handleClick}>button appears </button>;
  //make sure to use the name of prop that is sent, not the function name. we sent handleClick and toggle function inside it, so hanleCLick will b called by onCLick and not counter.
  // check the box app for details i guess
}
```

- data cant be shared between 2 sibling components directly. no data can be passed upwards either.

### Receiving data through props

- You can communicate between different child/parent props using functions
- the function need to have some parameters which the child prop will later return when calling the function.
- keep in mind to use the correct name from props.
- the browser also return some syntheticBaseEvent so we need to get rid of them too, kinda

```javascript
function App() {
  const [box, setBox] = useState(boxes);
  //state to get the initial boxes from json file/js file
  const toggle = (id) => {
    console.log(id);
    //arrow function where id is the parameter recieved from a child component.
    setBox((prev) => {
      //setBox with prev is used as holder for previous data, is a variable and any other variable name can be used
      return prev.map((prevBox) => {
        //returning changed values to setBox,
        //map function will loop and check our ternary codition. if found will update the array accordingly. if no match found, old array will be sent back as it is
        return prevBox.id === id ? { ...prevBox, on: !prevBox.on } : prevBox;
      });
    });
  };
  return (
    <div className="boxholder">
      {box.map((item) => {
        //item is the data from state, i.e. object in box state
        return <BoxC key={item.id} items={item} handleClick={toggle} />;
        //rendering the prop BoxC and sending props + toggle function
      })}
    </div>
  );
}

function BoxC(props) {
  const { id, on } = props.items;
  //prop destructuring to write code easily
  return (
    <div
      className="box"
      style={{ backgroundColor: on ? "red" : "blue" }}
      //some ternary for styling different elements
      onClick={() => props.handleClick(id)}
      //focus here how we used an arrow function to call another function.
      // As writtern above, an event is sent by browser, which is handled by () empty arrow function, and handleClick is called by it at the same time.Hence passing the id to parent component instead of event data.
    ></div>
  );
}
```

- `onClick={handleClick(id)}` cant be used as it will execute as soon as the component is rendered. KEEP THIS IN MIND.

---
# Context

Context can be used to avoid prop drilling and pass the data down to the children components.
- First create a folder to keep all our context files inside.
- Create a new Context.js file.
Context file uses a `createContext` function .

```javascript
import { createContext } from "react";
//importing the createContext function
const TodoContext = createContext();
//creating a new context variable to store the context data 
export default TodoContext;
```


### Context Provider
The data then will be sent to child components via a `contextProvider` .

We can either pass a Provider directly with our Routes.
```javascript 
 <Routes>

          <TodoContext.Provider>
          //context provider with routes
          <Route path="/" element={<Navigate replace to="/login" />}></Route>
          {/* using navigate replace to option to show login page */}
          <Route path="/" element={<Home />}>
            {/* adding child routes or login and register page */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
		 </TodoContext.Provider>
 </Routes>
```


Or we can create a new varaible inside the context file and then pass it through.
By using this method we can keep the data and fucntions in the same file without cluttering our other code.

```javascript
import { createContext } from "react"; 
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

return(
  <TodoContext.Provider value={{
  }}>
  
  {children}
  </TodoContext.Provider>;

}; 
)
export default TodoContext;

//app.js

import {TodoProvider} from './context/TodoContext'
export default App(){
return (
<TodoProvider>
<Components>
</TodoProvider>
)
}

```


## {children}
The `children` prop is a special prop in React that is used to pass the content of a component as a prop to another component. It is written as `{children}` and can be used to pass any valid JSX element as a prop.

```javascript

export default App(){
return(
		<Child data="some data to be sent by props">
			<p> Some tag or html data to be passed as a children to the child component</p>
		</Child>
)
}

export default Child(props){

return(
	<h1> {props.data} </h1> //data displayed via props
	<h1> {props.children} </h1> //children tags displayd from same props

)
}
```

## useContext

`useContext` is a hook in React that allows you to access the value of a context object within a functional component. It is a way to consume the value of a context without having to use the `Consumer` component, which can be verbose and difficult to use in certain situations.

To use the `useContext` hook, you first need to import it from the `react` module, and then call it with the context object that you want to access. The `useContext` hook returns the current value of the context object, which you can then use within your functional component.

```javascript

import { createContext } from "react"; 

const TodoContext = createContext(); 

export const TodoProvider = ({ children }) => {

  const registerUser = (formData) => {
    console.log(formData);

  };

  return (
    <TodoContext.Provider
      value={{
        registerUser,
      }}
    >
{children}
    </TodoContext.Provider>
  );
};

export default TodoContext;


import { useContext } from "react";
import TodoContext from "../context/TodoContext";
const { registerUser } = useContext(TodoContext);
registerUser("some data sent back")
// here the registerUser is afucntion defined in the context file which is imported by a child using the destructring method

//useContext is used here and TodoContext id provides as a parameter to useContext.

```



---

# Conditional rendering

use ternary operator to render the elements conditionally.

```javascript
const item = true;

const conditonalRender = () => {
  if (item) return <h1>some div </h1>;
};

{
  conditionalRender();
}

 <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
```

---

# React Forms

Forms in React are a bit different than regular forms. Regular forms in HTML usually have a default function/event/behaviour set to them, so whenever we submit HTML form it takes us to the action page, for ex

```html
<form action="action.php" method="POST"></form>
```

But in React we have to prevent this default behaviour as all the components are supposed to be loaded on a single page.

We can do this by adding a onSubmit function to the form submit button.

```javascript
const onSubmit = (e) => {
  //e is the parameter for event that is sent by the form
  e.preventDefault();
  //preventDefault() is a function used to stop the default
  //behaviour of form
  //we can add any function that we need to call here
  someFunctionToRun();
};

return (
  <form onSubmit={onSubmit}>
    <button className="btn btn-primary" onClick={onSubmit}>
      Register
    </button>
  </form>
);
```

In react we keep the form data in a state, which have to be up to date at the time of submission. For that create a `handleChange` function which runs on `<input onChange={handleChange}`.

So basically whenever a value or data is changed in the form, it updates to the state.

### Getting the data from form

To get the data from form, in React we have to use a function that takes complete event as a parameter.

```javascript
const [formData, setFormData] = useState();
//a state is created here to store the data sent by the form
const handleChange = (e) => {
  //e or event is the paramenter sent by browser to react whenever
  // there is any change in the form or where ever this function
  //is called. its an object that contains multiple items.
  console.log(e.target);
  //e.target is the dom element that inoked the handleChange function
  //in this case, complete dom input written below will be loaded here.
  console.log(e.target.value);
  //value entered in the input box
  console.log(e.target.name);
  //name of the dom element and so on

  //we can also do object destructring to load specific elements from the event object recieed here

  const { name, value } = e.target;
  //it will automatically load these key value pairs from the target dom
  setFormData((prev) => ({
    ...prev, //recieveing the value from old state,
    [name]: value, //sending the key value pair object to the state
    //ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object.JS computed properties
  }));
};

return (
  <form>
    <input type="text" name="name" onChange={handleChange} />
  </form>
);
```

### [Controlled Components](https://www.geeksforgeeks.org/what-are-controlled-components-in-reactjs/)

Basically Reacts wants the components to be controlled by state and not the other way around.

```javascript
<input
  type="text"
  placeholder="First Name"
  onChange={handleChange}
  name="firstName"
  value={formData.firstName}
/>
```

Just set the value of input to the value of state.

### Form elements

#### TextArea

Textarea is self closing in react and rest of the elements is same as a basic text input

```javascript
<textarea
  value={formData.comments}
  placeholder="Comments"
  onChange={handleChange}
  name="comments"
/>
```

#### Radio Buttons

Radio buttons should have same name so that only one can be selected at one time. along with that they need to have a `value` so that the value of button can be sent to react. but that might have issue with controlled component. Hence a checked property is used to controll the radio buttons.

Here we can see the checked property is being used to check whether the state matches the value or not. Hence controlling the element.

```javascript
const [formData, setFormData] = React.useState({
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
  isFriendly: true,
  employment: "",
});
console.log(formData.employment);

function handleChange(event) {
  const { name, value, type, checked } = event.target;
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    };
  });
}

return (
  <form>
    <fieldset>
      <legend>Current employment status</legend>

      <input
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}
      />
      <label htmlFor="unemployed">Unemployed</label>
      <br />

      <input
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
      />
      <label htmlFor="part-time">Part-time</label>
      <br />

      <input
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
      />
      <label htmlFor="full-time">Full-time</label>
      <br />
    </fieldset>
  </form>
);
```

#### CheckBoxes

A checked property is implemented in checkboxes which will later be sent to handleChange. type is compared in a ternary operator, if it is checkbox, the checked property is updated instead of value like in text inputs.

```javascript
const [formData, setFormData] = React.useState({
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
  isFriendly: true,
});

function handleChange(event) {
  const { name, value, type, checked } = event.target;
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    };
  });
}

return (
  <form>
    <input
      type="checkbox"
      id="isFriendly"
      checked={formData.isFriendly}
      onChange={handleChange}
      name="isFriendly"
    />
    <label htmlFor="isFriendly">Are you friendly?</label>
    //htmlFor is used here to point the label to checkbox with id mentioned here
    <br />
  </form>
);
```

#### Select and Options

same as anyother text input

```javascript
const [formData, setFormData] = React.useState(
        {
            favColor: ""
        }
    )
    console.log(formData.favColor)

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

return (
<form>
<label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
<form>
                    )
```

---

# Hooks

## useEffect( )







---



## API Calls

Data is mostly stored in servers which react don t have direct access to. To retrieve or edit that data, we need to make some API calls.





---







___

# React Router

React Router is a third party plugin that is commonly used in React. Normaly what React does, it changes the certain elements on pages when an interaction is made. On old wesites complete webpage had to be reloaded and all data was sent by server to make this happen. But with React, A reactApp is sent to the browser which handles the routes.

### React Router Features

- Conditionally render large parts of your page
- Declarative API ( SOme hooks and components will be used to display the UI)
- hooks

#### Primary Components

Routers

- `<BrowserRouter>`
- `<HashRouter>`
  Route Matchers
- `<Route>`
- `<Switch>`
  Navigation
- `<Link>`
- `<NavLink>`
- `<Redirect>`

#### Hooks

- `useHistory`
- `useLocation`
- `useParams`

## React Router installation

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

Start a new watch json-server to watch for changes made to json files.

```shell
cd /path/to/file

json-server --watch fileToWatch.json --port 3000
#port needs to be different from react app port
```

You will recieve the link to your json file object.

![[Pasted image 20221202093612.png]](https://github.com/baked-potata/React-Classes/blob/master/Pasted%20image%2020221202093612.png?raw=true)

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

1. **You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?**

   _a. New value of state (setCount(42))_\
   _b. Callback function - whatever the callback function_\
   _returns === new value of state_\

1. **When would you want to pass the first option (from answer above) to the state setter function?**\
   _Whenever you don't need the previous value of state to determine what the new value of state should be._

1. **When would you want to pass the second option (from answerabove) to the state setter function?**\
   _Whenever you DO need the previous value to determine the new value_
1. **What is "conditional rendering"?**\
   _When we want to only sometimes display something on the page based on a condition of some sort_

1. **When would you use &&?**\
   _When you want to either display something or NOT display it_
1. **When would you use a ternary?**\
   _When you need to decide which thing among 2 options to display_

1. **What if you need to decide between > 2 options on what to display?**\
   _Use an `if...else if... else` conditional or a `switch` statement_
1. **In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?**
   _Right before the form is submitted._

1. **In a React app, when do you gather all the data from the filled-out form?**
   _As the form is being filled out. The data is all held in local state._

1. **Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?**\
   `name` _property._

1. **What's different about saving the data from a checkbox element vs. other form elements?**\
   _A checkbox uses the `checked` property to determine what should
   be saved in state. Other form elements use the `value` property instead._

1. **How do you watch for a form submit? How can you trigger a form submit?**
   
   - _Can watch for the submit with an onSubmit handler on the `form` element._
   
   - _Can trigger the form submit with a button click._
     

1.





# token generation

# useNavigate for redirection

# register and login
# localstorage


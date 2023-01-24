React Router is a fully featured client and server side routing library for React.
It helps create and navigate between diffrent URL's used in the application.
It provides unique url's for different components.
Must have to build a medium to large app.

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

### React Router installation

```javascript
npm install react-router-dom
//verify in package.json for successfull installation
import { BrowserRouter , Routes , Route,  Link } from 'react-router-dom'
//these files are imported along with some others

<Link to="/">Home</Link>
<Link className="nav-link" to="/About">About</Link>
// anchor tag is changed by Link tag and href property is now changed to 'to'
// File to be linked is placed as a value inside to property   
//use navlink to get an active class

<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </BrowserRouter>

```

### Configuring Routes

- Wrap the complete app inside a `<BrowserRouter>`. You can do it by either wrapping the `<App /> ` Component in `Index.js` file. Or wrap the individual Routes in `App.js` .
- Wrap the different components inside a `<Routes>`
- Link the different components in the `<Route>` using a `to` parameter. The `element` parameter defines the component which is to be rendered while that url is active.

_Check code above_

- `<Link>` replaces the anchor tag and `href` attribute is replaced by `to` .

- `<NavLink>` A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current [URL](https://github.com/remix-run/react-router/blob/main/docs/components/nav-link.md) .

- Use `<NavLink>` only when active class is needed. it automaticall adds the active class to selected link

  ```javascript
  <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
   <Link className="nav-link" to="/about">
                about
              </Link>

  //
  //
  //

  import { useNavigate } from "react-router-dom";

  function Home(props) {
    const navigate = useNavigate();

    return (
      <div>
        Home
        <button className="btn btn-danger" onClick={() => navigate("order")}>

          CLick me
        </button>
      </div>
    );
  }
  ```

- We can use `useNaviagte()` hook to run the navigation based on some events.

- We can use a value of (-1) inside the navigate object to go back one step in history.

  ```javascript
  <button className="btn btn-success" onClick={() => navigate(-1)}>
    go back
  </button>
  ```

- A `{replace : true}` object can also be passed to navigate for replacing the action from history stack. `onclick={()=>navigate('order',{replace:true})}`
- use a `*` to link a page not found option. this route will only run when no other route will match.

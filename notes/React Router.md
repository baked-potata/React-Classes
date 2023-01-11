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


 
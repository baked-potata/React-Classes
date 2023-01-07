# Youtube Clone

This i a youtyube clone made in React JS for practise.
It is gonna be using Material UI for design and styling.
[Rapid Api](https://rapidapi.com/ytdlfree/api/youtube-v31?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel) is used for the API's.
Routing is being done by react-router-dom and API Calls are being managed by axios.

```bash 
npx create-react-app youtube_clone

cd youtube_clone

npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios react-router-dom

```

Fonts and web icons will alos need to be added from material ui site and pasted in `public/index.html` to link as a stylesheet.


## API data fetching from Rapid API
- import `axios`
- create or paste options object. 
- create a `BASE_URL` inside the object, or to another file. 
- Store the key in enviroment variable or some place secure





## Observations and new things

- `exact` keyword in `<Routes>` matches the exact path. more explanation [here](https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path)
-  We can also create a index.js file to handle all the exported components.
```javascript 
components/index.html >
export { default as Navbar } from "./Navbar";

export { default as Feed } from "./Feed";

export { default as VideoDetail } from "./VideoDetail";

export { default as ChannelDetail } from "./ChannelDetail";

export { default as SearchFeed } from "./SearchFeed";

App.js
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

//This method helps in keeping the exported components in a single page instead of 
//importing all of them one by one and cluttering the index file.

```

- The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.
- We can alos pass on css properties via props to conditional render or change style of a component 
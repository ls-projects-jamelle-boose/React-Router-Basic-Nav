import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
    </div>
  </Router>
);

export default App;

/* You'll notice we've already installed react-router-dom for you.
import your BrowserRouter as Router inside your index.js file.
Wrap your <App /> component that you're passing to ReactDOM.render() with your new Router component.
open up your chrome REACT DEV TOOLS and notice your app is now all wrapped in BrowserRouter
inside the REACT DEV TOOLS expand <BrowserRouter> and highlight <Router> and notice that here is a "history" object on props and a "match" object on its state. These two objects are how all of our Router is going to work.

Steps for "Declaring" your routes
Inside of your App.js file import { Route } from 'react-router-dom';
This is where we're going to declare and specify our router.
Create 3 <Route /> setting their path prop equal to /, /about, /contact with their respective components.
Be sure to incluce the exact prop on the root component for / to make sure that it's rendering the exact component and not all the other components.
You should now be able to type /, /about, /contact after localhost:PORT/ to see what's a

Steps for setting up your Navigation
Inside of Navigation.js import { Link } from 'react-router-dom'.
Declare the `to` as the href on `<Link>` and specify the correct routes for your app to navigate towards.
Head over to your app and start navigating. You should be able to see your URLS changing their paths as you go. Each path should display the proper component.

*/
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link exact to="/">
            Home
          </Link>
        </div>
        <div>
          <Link exact to="/about">
            About
          </Link>
        </div>
        <div>
          <Link exact to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
/* Steps for setting up your Navigation
Inside of Navigation.js import { Link } from 'react-router-dom'.
Declare the `to` as the href on `<Link>` and specify the correct routes for your app to navigate towards.
Head over to your app and start navigating. You should be able to see your URLS changing their paths as you go. Each path should display the proper component.

      <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>

*/

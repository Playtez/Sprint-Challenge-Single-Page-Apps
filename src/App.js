import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard.js";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const App = () => {
  return (
    <main>
      <Header />
      <Router>
        <div>
          <nav className="main-nav">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/character">
              Character
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/character" component={CharacterCard} />
          </Switch>
        </div>
      </Router>
    </main>
  );
};
export default App;

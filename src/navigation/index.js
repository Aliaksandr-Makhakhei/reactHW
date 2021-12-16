import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from '../components/NavBar'
import Figure from '../components/Figure'

export default function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route path="/figure/:type/:color/">
           <Figure />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
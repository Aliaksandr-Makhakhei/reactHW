import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from '../components/NavBar'

export default function App() {
  return (
    <Router>
      <div>
      < NavBar />
        <Switch>
          <Route path="/figure/:item">
          < NavBar />
          </Route>
          <Route path="/figure">
            
          </Route>
          <Route path="/">
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
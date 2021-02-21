import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { addEntry } from "./components/addEntry/addEntry.js";
import { phonebook } from "./components/phonebook/phonebook.js";
// import { Login } from "./components/Login/Login.js";
// import { Signup } from "./components/Signup/Signup.js";
// import { PrivateRoute } from "./components/PrivateRoute.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route path="/new" component={addEntry} />
            <Route path="/" component={phonebook} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

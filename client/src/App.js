import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { addEntry } from "./components/addEntry/addEntry.js";
import { phonebook } from "./components/phonebook/phonebook.js";
import { editEntry } from "./components/editEntry/editEntry.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Phonebook</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/new">Add entry</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/new" component={addEntry} />
            <Route path="/edit" component={editEntry} />
            <Route path="/" component={phonebook} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AboutTutorial from "./components/about-tutorial.component";
import AppFooter from "./components/app-footer.component";

class App extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/tutorials"} className="navbar-brand">
            <span style={{color: 'green'}}>Ark Application</span>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
              <span style={{color: 'orange'}}>Tutorials</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
              <span style={{color: 'orange'}}>Add</span>
              </Link>
            </li>
          </div>
          <div className="navbar-nav mr-auto">
           <li className="nav-item">
             <Link to={"/about"} className="nav-link">
             <span style={{color: 'orange'}}>About</span>
             </Link>
           </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/about" element={<AboutTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
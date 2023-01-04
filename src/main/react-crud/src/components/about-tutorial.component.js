import React, { Component } from "react";

export default class AboutTutorial extends Component {

  render() {
    return (
      <div>
            <div className="form-group">
            <h4>Tutorial Details</h4><br/>
              <p style={{color: 'green'}}>The Website will gives the user the ability
              to add the Tutorials and able to see the
               Tutorials as a list and once a tutorial is selected, on right side you will be
               able to see the more details around it.
              </p>
              <h5>user actions:</h5>
              <li>Add</li>
              <li>Delete</li>
              <li>View</li>
              <br/><br/><br/><br/><br/><br/>
              <p style={{color: 'red'}}>More Details to Come........ </p>
            </div>
     </div>
    );
  }
}
import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePublished = this.onChangePublished.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePublished(e) {
        this.setState({
        published: e.target.value
        });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      published: this.state.published
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: true,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>

            <div className="form-group">
              <h3 style={{color: 'green', fontFamily:'cursive'}}>Enter Tutorial Details</h3>
            </div>
            < br/>< br/>
            <div class="d-inline-flex align-items-center" style={{fontFamily:'Verdana'}}>
              <label htmlFor="title">Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
               <br />
            </div>
            < br/>< br/>
            <div class="d-inline-flex align-items-center" style={{fontFamily:'Verdana'}}>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            < br/>< br/>
            <div class="d-inline-flex align-items-center" style={{fontFamily:'Verdana'}}>
                   <label htmlFor="published">Published:&nbsp;&nbsp;</label>
                    <input
                       type="text"
                       className="form-control"
                       id="published"
                       required
                       value={this.state.published}
                       onChange={this.onChangePublished}
                       name="published"
              />
              </div>
            < br/>< br/>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
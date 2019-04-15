import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyProject = {
  name: '',
  description: '',
  thumbnail: '',
  website: '',
  github: '',
  date_completed: '',
  tag_id: 0
}

class AdminForm extends Component {

  state = {
    newProject: emptyProject
  }

  handleChangeFor = propertyName => {
    return (event) => {
      this.setState({
        newProject: {
          ...this.state.newProject,
          [propertyName]: event.target.value,
        }
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch( { type: 'ADD_PROJECT', payload: this.state.newProject })
    this.setState({
      ...emptyProject
    })
  }

  render() {
    return (
      <section>
          <h2>Add Project</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" 
                   onChange={this.handleChangeFor('name')} 
                   value={this.state.newProject.name}></input>
            <br />
            <label>Description:</label>
            <input type="text" 
                   onChange={this.handleChangeFor('description')}
                   value={this.state.newProject.description}></input>
            <br />
            <input type="text" disabled hidden
                   onChange={this.handleChangeFor('thumbnail')}
                   value={this.state.newProject.thumbnail}></input>
            <br />
            <label>Website:</label>
            <input type="text" 
                   onChange={this.handleChangeFor('website')}
                   value={this.state.newProject.website}></input>
            <br />
            <label>Github:</label>
            <input type="text" 
                   onChange={this.handleChangeFor('github')}
                   value={this.state.newProject.github}></input>
            <br />
            <label>Date Completed:</label>
            <input type="date" 
                   onChange={this.handleChangeFor('date_completed')}
                   value={this.state.newProject.date_completed}></input>
            <br />
            <label>Tag ID:</label>
            <input type="text" 
                   onChange={this.handleChangeFor('tag_id')}
                   value={this.state.newProject.tag_id}></input>
            <br />
            <button type="submit">Add</button>
          </form>
        </section>
    )
  }

}

export default connect()(AdminForm);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  // load projects before rendering
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PROJECTS'
    })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ProjectList} />

          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from '../Header/Header';

class App extends Component {

  // 
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PROJECTS'
    })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);

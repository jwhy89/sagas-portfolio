import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class ProjectList extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ProjectList);
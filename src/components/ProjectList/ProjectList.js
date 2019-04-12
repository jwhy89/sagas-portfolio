import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class ProjectList extends Component {
    render() {
        return (
            <section>
                <div>
                    <Header />
                </div>
                <div>

                </div>
            </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ProjectList);
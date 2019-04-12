import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src='images/goat_small.jpg'
                    height="100" width="100" alt="my picture"/>
                    <h1 className="App-title">Jarvis Yang</h1>
                </header>
                <br />
            </div>
        );
    }
}

export default Header;
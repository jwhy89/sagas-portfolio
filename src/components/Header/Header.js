import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src='images/goat_small.jpg'
                    height="100" width="100" alt="my-display-pix"/> */}
                    <img src="https://avatars1.githubusercontent.com/u/45811933?s=460&v=4"
                    height="100" width="100" style={{borderRadius: '50px'}} alt="my-display-pix"/> 
                    <h1 className="App-title">Jarvis Yang</h1>
                </header>
                <br />
            </div>
        );
    }
}

export default Header;
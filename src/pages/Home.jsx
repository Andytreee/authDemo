import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };

    }


    render() {
        return (
            <div className="home-box">
                Welcome to home page!
            </div>
        );
    }
}


export default Home;

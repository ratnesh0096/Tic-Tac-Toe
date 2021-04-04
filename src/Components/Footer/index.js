import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <h1> {this.props.turn}'s turn </h1>
            </div>
        );
    }
}

export default Footer;
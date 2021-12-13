import React from 'react';
import '../styles.css';


export default class ToggleVisibility extends React.Component {

    constructor() {
        super();
        this.state = { isVisible: false };
    }

    toggle() {
        const box = document.querySelector('.box');
        box.classList.toggle('hide');
    }

    render() {

        return (
            <div className="container">
                <button onClick={this.toggle}>show/hide</button>
                <div className="box"></div>
            </div>
        );
    }
}
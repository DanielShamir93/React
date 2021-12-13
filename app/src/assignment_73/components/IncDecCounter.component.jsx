import React from 'react';
import '../styles.css'


export default class IncDecCounter extends React.Component {

    constructor() {
        super();
        this.state = { 
            counter: 0 ,
            color: 'black'
        };
    }

    increment() {
        if (this.state.counter < 10) {
            this.setState({ counter: this.state.counter + 1 });
        }
    }

    decrement() {
        if (this.state.counter > -10) {
            this.setState({ counter: this.state.counter - 1 });
        }
    }

    setColor = () => {
        if (this.state.counter > 0) return "green";
        if (this.state.counter < 0) return "red";
        return "black";
    }

    render() {
        return (
            <div>
                <button onClick={ this.decrement.bind(this) } className="decrement">-</button>
                <span className={`counter ${this.setColor()}`}>{ this.state.counter }</span>
                <button onClick={ this.increment.bind(this) } className="increment">+</button>
            </div>
        );
    }
}
import React from 'react';

export default class Increment extends React.Component {

    constructor() {
        super();
        this.state = { counter: 0 };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {

        return (
            <div>
                <button onClick={this.increment.bind(this)} className="increment">increment</button>
                <span>{ this.state.counter }</span>
            </div>
        );
    }
}
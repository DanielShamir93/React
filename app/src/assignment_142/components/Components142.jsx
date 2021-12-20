import React, { createRef } from 'react';
import '../styles.css'

export default class Components142 extends React.Component {

    constructor() {
        super()
        this.inputRef =  createRef();
    }
    

    copyEventHandler = () => {
        const text = this.inputRef.current.value;
        navigator.clipboard.writeText(text);
    }

    render = () => {

        return (
            <div className="cont">
                <h1>A day without a smile is a day wasted!</h1>
                <textarea ref={this.inputRef} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={this.copyEventHandler}>Copy</button>
            </div>
        );

    }

}

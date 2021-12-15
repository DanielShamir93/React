import React from 'react';
import '../styles.css'

export default class Button extends React.Component {

    state = {
        color: this.props.color,
        cb: this.props.cb
    }

    render = () => {

        return (
            <button 
                onClick={
                    () => {this.state.cb(this.state.color)}
                } 
                className="Button" 
                style={{background: this.state.color}}>
            </button>
        );
    }
}
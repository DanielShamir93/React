import React from 'react';
import '../styles.css'

export default class Box extends React.Component {
    
    getStyle = () => {
        return {width: `${this.props.size}px`, height: `${this.props.size}px`}
    }

    render() {
        return (
            <div className={`box ${this.props.color}`} style={this.getStyle()}></div>
        );
    }
}
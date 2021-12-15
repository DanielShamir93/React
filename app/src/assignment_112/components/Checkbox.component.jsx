import React from 'react';
import '../styles.css'

export default class Checkbox extends React.Component {

    state = {
        id: this.props.id,
        term: this.props.term,
        isChecked: this.props.isChecked,
        cb: this.props.cb
    }

    render = () => {
        return (
            <div>
                <input id={`My-checkbox-${this.state.id}`} type="checkbox" checked={this.props.isChecked} onChange={(e) => {this.state.cb(this.state.id)}}/>
                <label htmlFor={`My-checkbox-${this.state.id}`}>{this.state.term}</label>
            </div>
        );
    }
}
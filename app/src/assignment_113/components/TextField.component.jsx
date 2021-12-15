import React from 'react';
import '../styles.css'

export default class TextField extends React.Component {

    state = { 
        lbl: this.props.lbl,
        term: '',
    }

    render = () => {
        return (
            <div>
                <label htmlFor="name">{this.state.lbl}</label>
                <input 
                    type="text" 
                    id="name" 
                    value={this.state.term} 
                    onChange={(e) => {
                        this.setState({term: e.target.value});
                        const callbackObject = {};
                        callbackObject[this.props.stateKey] = e.target.value;
                        this.props.callback(callbackObject);
                    }}
                />
            </div>
        );
    }
}
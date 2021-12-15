import React from 'react';
import '../styles.css'

export default class NumberSelect extends React.Component {

    state = { 
        lbl: this.props.lbl,
        term: ''
    }

    render = () => {
        return (
            <div>
                <label htmlFor="age">{this.state.lbl}</label>
                <select 
                    id="age" 
                    value={this.state.term} 
                    onChange={(e) => {
                        this.setState({term: e.target.value});
                        const callbackObject = {};
                        callbackObject[this.props.stateKey] = e.target.value;
                        this.props.callback(callbackObject);
                    }}
                >
                    <option value="young">0-15</option>
                    <option value="adult">15-70</option>
                    <option value="old">70-120</option>
                </select>
            </div>
        );
    }
}
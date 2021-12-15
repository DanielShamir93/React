import React from 'react';
import '../styles.css'

export default class TextField extends React.Component {

    state = { 
        lbl: this.props.lbl,
        term: ''
    }

    render = () => {
        return (
            <div>
                <label htmlFor="freetext">{this.state.lbl}</label>
                <textarea 
                    id="freetext" 
                    cols="25" 
                    rows="2" 
                    value={this.state.term} 
                    onChange={(e) => {
                        this.setState({term: e.target.value});
                        const callbackObject = {};
                        callbackObject[this.props.stateKey] = e.target.value;
                        this.props.callback(callbackObject);
                    }}></textarea>
            </div>
        );
    }
}
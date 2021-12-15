import React from 'react';
import '../styles.css'

export default class FormReview extends React.Component {

    state = {}

    

    render = () => {
        return (
            <div>
                <p>First Name: {this.props.formData.firstName}</p>
                <p>Last Name: {this.props.formData.lastName}</p>
                <p>Age: {this.props.formData.age}</p>
                <p>Free Text: {this.props.formData.freetext}</p>
                <button type="button" onClick={() => {this.props.backCallback()}}>Back</button>
                <button type="button" onClick={(e) => {this.props.submitCallback(e)}}>Send Survey</button>
            </div>
        );
    }
}
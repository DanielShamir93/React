import React from 'react';
import TextField from './TextField.component';
import NumberSelect from './NumberSelect.component';
import TextArea from './TextArea.component';
import FormReview from './FormReview.component';

export default class Components112 extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '0-15',
        freetext: '',
        isFormReview: false
    }

    setTerm = (callbackObject) => {
        this.setState(callbackObject)
    }

    showFormData = () => {
        if (Object.values(this.state).every((value) => {
            return value !== '';
        })) {
            // All fields where filled
            this.setState({isFormReview: true});
        }
    }

    backToForm = () => {
        this.setState({isFormReview: false});
    }

    onFormSubmit = (e) => {
        alert('Submitted Form');
    }

    render() {
        return (
            <div>
                <form className="Form-review">
                    {!this.state.isFormReview && <TextField lbl="First Name: " callback={this.setTerm} stateKey="firstName" />}
                    {!this.state.isFormReview && <TextField lbl="Last Name: " callback={this.setTerm} stateKey="lastName" />}
                    {!this.state.isFormReview && <NumberSelect lbl="Age: " callback={this.setTerm} stateKey="age" />}
                    {!this.state.isFormReview && <TextArea lbl="Free Text: " callback={this.setTerm} stateKey="freetext"/>}
                    {!this.state.isFormReview && <button type="button" onClick={this.showFormData}>Continue</button>}
                    {this.state.isFormReview && <FormReview formData={this.state} backCallback={this.backToForm} submitCallback={this.onFormSubmit} />}
                </form>  
            </div>
        )
    }
}

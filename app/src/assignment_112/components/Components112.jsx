import React from 'react';
import Checkbox from './Checkbox.component'

const checkboxes = [
    {id: 0, term: 'I read the term of the app', isChecked: false},
    {id: 1, term: 'I accept the term of the app', isChecked: false},
    {id: 2, term: 'I want to get the weekly news letter', isChecked: true},
    {id: 3, term: 'I want to get scales and offers', isChecked: true},
]

export default class Components112 extends React.Component {

    state = { checkboxes: checkboxes }


    switchChecked = (checkboxId) => {
        const currentCheckbox = this.state.checkboxes.find((checkbox) => checkbox.id === checkboxId);
        currentCheckbox.isChecked = !currentCheckbox.isChecked;
        console.log(this.state.checkboxes)
        this.setState({checkboxes: this.state.checkboxes})
    }

    render() {
        return (
            <div>{
                this.state.checkboxes.map((checkbox) => {
                    return <Checkbox
                        id={checkbox.id}
                        key={checkbox.id}
                        term={checkbox.term}
                        isChecked={checkbox.isChecked}
                        cb={this.switchChecked}
                    />
                }
            )}</div>   
        )
    }
}

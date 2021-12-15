import React from 'react';
import Button from './Button.component'


const colors = [
    {
        id: 0,
        name: 'red'
    },
    {
        id: 1,
        name: 'green'
    },
    {
        id: 2,
        name: 'blue'
    }
];

export default class Components111 extends React.Component {

    state = {
        selectedColor: ''
    }

    getChildColor = (color) => {
        console.log(this)
        this.setState({selectedColor: color});
    }

    render() {
        return (
            <div>
                <h1 className="title">Child-button clicked was: <span style={{color: this.state.selectedColor}}>{this.state.selectedColor}</span></h1>
                <div className="Buttons">{
                    colors.map((color) => {
                        return <Button key={color.id} cb={this.getChildColor} color={color.name} />
                    })
                }
                </div>
            </div>   
        )
    }
}

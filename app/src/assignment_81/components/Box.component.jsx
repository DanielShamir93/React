import React from 'react';
import '../styles.css'

export default class Box extends React.Component {
    
    state = {favoriteColor: ''}

    componentDidMount = () => {
        this.setState({favoriteColor: this.props.color})
    }

    componentDidUpdate = () => {
        setTimeout(() => {
            this.setState({favoriteColor: 'red'})
        }, 1000)
    }

    render = () => {
        
        return (
            <div>
                <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
            </div>
        );

    }
}
import React from 'react';
import '../styles.css'

export default class Box extends React.Component {
    
    state = {
        angle: 0,
        shape: '',
        round: 1
    };

    componentDidMount = () => {
        this.setState({angle: 30})
    }

    componentDidUpdate = () => {
        const angleDelta = 30;
        setTimeout(() => {
            if (this.state.round === 5) {
                this.setState({shape: 'circle'})
            }
            this.setState((prevState) => {
                return {
                    angle: prevState.angle + angleDelta,
                    round: prevState.round + 1
                };
            })

        }, 500)
        
    }

    render = () => {
        return (
            <div className={`Box ${this.state.shape}`} style={{background: `hsl(${this.state.angle}, 100%, 50%)`}}></div>
        );
    }
}
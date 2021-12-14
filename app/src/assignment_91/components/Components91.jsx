import React from 'react';
import Spinner from './Spinner.component'

export default class Components91 extends React.Component {

    state = {
        timer: 10,
        spinnerShow: true
    }

    componentDidMount() {
        let interval = setInterval(() => {
            this.setState((prevState) => {
                return {timer: prevState.timer - 1}
            })
            if (this.state.timer === 0) {
                clearInterval(interval);
                this.setState({spinnerShow: false})
            }
        }, 1000);
    }

    render() {

        return (
            <div>
                <h1>{this.state.timer}</h1>
                <Spinner spinnerShow={this.state.spinnerShow}/>
            </div>
        )

    }
    
}

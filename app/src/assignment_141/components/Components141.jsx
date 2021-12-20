import React, { createRef } from 'react';
import '../styles.css'

export default class Components141 extends React.Component {

    constructor() {
        super();
        this.inputRef =  createRef();
    }
    

    componentDidMount = () => {
        this.inputRef.current.focus();
    }

    render = () => {

        return (
            <div>
                <input ref={this.inputRef} type="text" />
            </div>
        );

    }

}

import React from 'react';
import '../styles.css'

export default class Spinner extends React.Component {

    render = () => {

        return (
            <div>
                {this.props.spinnerShow && <div className="Spinner"></div>}
            </div>
        );
    }
}
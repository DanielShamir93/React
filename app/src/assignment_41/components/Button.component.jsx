import React from 'react';

// export default function Button(props) {
//     return (
//         <button class="button" style={props.styles}>
//             {props.text}
//         </button>
//     )
// }


// assignment [6.1]
export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: props.text, styles: props.styles };
    }

    render() {
        return (
            <button class="button" style={ this.state.styles }>
                    { this.state.text }
            </button>
        )
        
    }
}
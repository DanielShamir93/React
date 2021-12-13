import React from 'react';

// export default function Card(props) {

//     return (
//         <div className="card">
//             <img className="image" src={ `${props.imageSrc}` } alt="img" />
//             <h1 className="title">{ props.title }</h1>
//             <p className="description">{ props.description }</p>
//             <div className="links">
//                 <a href="https://picsum.photos/200">SHARE</a>
//                 <a href="https://picsum.photos/200">EXPLORE</a>
//             </div>
//         </div>
//     )
// }

// assignment [6.1]
export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imageSrc: props.imageSrc, title: props.title, description: props.description };
    }

    render() {
        return (
            <div className="card">
                <img className="image" src={ `${this.state.imageSrc}` } alt="img" />
                <h1 className="title">{ this.state.title }</h1>
                <p className="description">{ this.state.description }</p>
                <div className="links">
                    <a href="https://picsum.photos/200">SHARE</a>
                    <a href="https://picsum.photos/200">EXPLORE</a>
                </div>
            </div>
        )
    }
}
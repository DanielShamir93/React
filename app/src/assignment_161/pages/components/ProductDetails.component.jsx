import React from 'react';
import {Link} from 'react-router-dom';
import store from '../../store.js';

export default class ProductDetails extends React.Component {

    state = { store };

    renderProductDetails = () => {
        const product = this.state.store.find((product) => product.id === parseInt(this.props.match.params.id));
        const {title, imageUrl, price, size} = product;

        return (
            <div>
                <p>{title}</p>
                <img src={imageUrl} alt="" width="100"/>
                <p>{`price: ${price}`}</p>
                <p>{`size: ${size}`}</p>
            </div>
        );
    }

    render = () => {
        
        return (
            <div>
                {this.renderProductDetails()}
                <Link to="/products"><button>Back</button></Link>
            </div>
        );

    }
}
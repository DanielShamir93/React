import React from 'react';
import {Link} from 'react-router-dom';
import store from '../../store.js';

export default class Products extends React.Component {

    state = { store }

    renderProductsLinks = () => {
        return (
            this.state.store.map((product) => {
                return <Link className="products-titles" to={`/product/${product.id}`} key={product.id}>{product.title}</Link>
            })
        );
    }

    render = () => {
        return (

            <div>
                {this.renderProductsLinks()}
            </div>

        );
    }
}
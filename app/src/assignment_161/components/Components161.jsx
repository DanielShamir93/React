import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import '../styles/components161.styles.css';
import Header from './header.component';
import Homepage from '../pages/components/homepage.component';
import Products from '../pages/components/products.component';
import ProductDetails from '../pages/components/ProductDetails.component';

export default class Components161 extends React.Component {

    render = () => {

        return (
            <div>
                <BrowserRouter>
                    <div className="cont">
                        <Header/>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/products/" exact component={Products} />
                        <Route path="/product/:id" exact component={ProductDetails} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

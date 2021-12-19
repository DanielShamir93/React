import React from 'react';
import { data } from './../data.js';

import '../styles.css'

export default class Components131 extends React.Component {

    state = {
        names: [],
        personsBeforeYear: []
    }

    componentDidMount = () => {
        this.setState({
            names: this.getNames(),
            personsBeforeYear: this.getPersonsBeforeYear(1990)
        })
    }

    getNames = () => {
        return data.map((person) => {
            return person.name;
        });
    }

    getPersonsBeforeYear = (year) => {
        return data.filter((person) => {
            return +person.birthday.match(/\d{4}/)[0] < year;
        });
    }

    renderNames = () => {
        return this.state.names.map((name, index) => {
            return <span key={index}>{`${name} `} </span>;
        });
    }

    renderPersons = () => {
        return this.state.personsBeforeYear.map((person, index) => {
            return <p key={index}>{`${person.name}: ${person.birthday}, ${person.favoriteFoods.meats}, ${person.favoriteFoods.fish}`}</p>;
        });
    }

    render = () => {

        return (
            <div>
                <h1>{this.renderNames()}</h1>
                <h2>{this.renderPersons()}</h2>    
            </div>
            
        );

    }
}

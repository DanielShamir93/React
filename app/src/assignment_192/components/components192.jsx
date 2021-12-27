import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function Components192() {

    const [countriesArray, setCountriesArray] = useState([]);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        const getCountries = async (api) => {
            try {
                const { data } = await axios.get(api, {
                    params: { 
                        access_key: '6c818e9c7c5b5717e0132e404d43fc8b'
                    }
                });
                setCountriesArray(data);
            } catch(err) {
                console.log(err);
            }
        }
        getCountries('http://api.countrylayer.com/v2/all');
    }, []);

    const renderCountries = () => {

        const filteredCountriesArray = countriesArray.filter((country) => {
            return country.name.toLowerCase().includes(filter);
        });

        return (
            <ul> {
                filteredCountriesArray.map((country) => {
                return <li key={country.alpha2Code}>{country.name}</li>
                })
            }</ul>
        );
    }

    const filterCountries = (e) => {
        setFilter(e.target.value.toLowerCase());
    }

    return (
        <div className="countries">
            <input className="country-filter" type="text" onChange={(e) => {filterCountries(e)}} value={filter}/>
            {renderCountries()}
        </div>
    );
};
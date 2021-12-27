import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function Components193() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('query');
    const [userInput, setUserInput] = useState('hooks');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const search = async (url) => {
            try { 
                const { data } = await axios.get(url, {
                    params: { query }
                });
                setData(data.hits);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        if (query.length > 0) {
            setLoading(true);
            search('https://hn.algolia.com/api/v1/search/');
        }

    }, [query]);

    const renderData = () => {
        return (
            data.map((hit) => {
                if (hit.title !== null && hit.title !=='') {
                    return <li key={hit.objectID}>{hit.title}</li>
                }
            })
        );
    }

    return (
        <div>
            <h1>Alogolia API</h1>
            <input className="hits-input" type="text" onChange={(e) => {setUserInput(e.target.value)}} value={userInput} />
            <button onClick={() => {setQuery(userInput)}}>Search</button>
            <ul>
                {!loading && renderData()}
            </ul>
            {loading && <span>Loading...</span>}
        </div>
    );
};
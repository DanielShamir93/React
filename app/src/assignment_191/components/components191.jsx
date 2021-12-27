import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Components191() {
    

    const [movie, setMovie] = useState({title: '', director: ''});

    useEffect(() => {
        const getMovie = async (api) => {
            try {
                const { data } = await axios.get(api);
                setMovie({ 
                    title: data.title, 
                    director: data.director, 
                });
            } catch(err) {
                console.log(err);
            }
        }
        getMovie('https://swapi.dev/api/films/1/');
    }, []);

    return (
        <div>
            <p>{`${movie.title}`}</p>
            <p>{`${movie.director}`}</p>
        </div>
    );
};
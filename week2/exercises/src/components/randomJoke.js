import React, { useState, useEffect } from 'react';
import Joke from './joke';

const RandomJoke = () => {

    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);


    useEffect( () => {

        setLoading(true);
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            setJoke(data);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        });

    }, []);


    return (

        <div>
            {isLoading && <p>Loading ....</p>}

            {!hasError && <Joke joke = {joke} />}

            {hasError && <p>Something went wrong</p>}

        </div>

    )


}

export default RandomJoke;
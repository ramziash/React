import React, { useState } from 'react';
import Search from './searchbar';
import CityDetails from './cityDetails';



const CityForcast = () => {

    const [city, setCity] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [indexMessage, setIndexMessage] = useState('Input City name below');


    const getCity =  (cityReq) => {

        setLoading(true)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityReq}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setCity(data);
            setIndexMessage('Received');
            
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        }) 

    }
    

    return (

        <div>
            {<h3>{indexMessage}</h3>}
            {<Search getCity = {getCity}/>}
            {isLoading && <p>Loading ...</p>}
            {city && <CityDetails cityInfo = {city}/>}
            {hasError && <p>Something went Wrong</p>}

        </div>
        
    )

};

export default CityForcast;
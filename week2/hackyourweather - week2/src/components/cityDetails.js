import React from 'react'

const kelvinCelcius = (kelvin)=> {return (kelvin-273).toFixed(2)};

const CityDetails = ( {cityInfo} ) => {

    return (

        <div>

            <h1 style = {{fontSize : '1.5em'}}> {cityInfo.name}, {cityInfo.sys.country}</h1>
            <p style={{fontWeight:'bold', fontSize:'1em'}}> {cityInfo.weather[0].description}</p>
            <div style={{lineHeight:'1em', paddingTop : '1em' }}>
                <p> min temp: {kelvinCelcius (cityInfo.main.temp_min)} °C</p>
                <p> max temp: {kelvinCelcius (cityInfo.main.temp_max)} °C</p>
                <p> Location: {cityInfo.coord.lat}, {cityInfo.coord.lon}</p>
            </div>

        </div>

    )

}

export default CityDetails;
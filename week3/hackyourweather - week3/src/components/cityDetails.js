import React from 'react'
import DeleteButton from './DeleteButton'

const kelvinCelcius = (kelvin)=> {return (kelvin-273).toFixed(2)};

const CityDetails = ( {cityInfo, deleteItem} ) => {

    return cityInfo.map((item, index) => {

        return (

            <div className = 'details' key= {index}>
    
                <h1 style = {{fontSize : '1.5em'}}> {item.name}, {item.sys.country}</h1>
                <p style={{fontWeight:'bold', fontSize:'1em'}}> {item.weather[0].description}</p>
                <div style={{lineHeight:'1em', paddingTop : '1em' }}>
                    <p> min temp: {kelvinCelcius (item.main.temp_min)} °C</p>
                    <p> max temp: {kelvinCelcius (item.main.temp_max)} °C</p>
                    <p> Location: {item.coord.lat}, {item.coord.lon}</p>
                </div>

                <DeleteButton handleOnClick = {deleteItem} item={item}/>
    
            </div>
    
        )

    } )

}

export default CityDetails;
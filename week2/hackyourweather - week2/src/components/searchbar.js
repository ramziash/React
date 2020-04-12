import React, { useState } from 'react'

// i read that it is good practise to add all styles related to a component within the component. So, here. 

const searchBarStyle = {
    display : 'flex',
    flexDirection : 'column',
    margin : 'auto' 
}

const inputStyle = {
    border : 'black'
}


const buttonStyle = {
    margin : 'auto',

}



const Search = ( {getCity} ) => {

    const [cityReq, setCityReq] = useState('');
    
    return (

        <div style = {searchBarStyle}>

            <input style = {inputStyle} placeholder = 'Input City' type='text' value = {cityReq} onChange = {event => {
                setCityReq(event.target.value);
            }} 
            /> 

            <button style = {buttonStyle} onClick = {event => {
                event.preventDefault();  // prevents a browser from reloading the page. 
                getCity(cityReq); // upon clicking, run getCity.
                setCityReq(' '); // to empty it for a new entry.
            }}>Search</button>

        </div>

    )

    

}

export default Search;

import React from 'react';


const hobbyList = () => {

    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    
    return (
        <ul>
            {hobbies.map(hobby => {
                return <li>{hobby}</li>
        })}
        </ul>
    )
}

export default hobbyList;
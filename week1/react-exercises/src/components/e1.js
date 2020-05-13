import React from 'react';


const Hobby= ( {hobby} ) => {
    return <li> {hobby} </li>
} 


const hobbyList = () => {
   
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

    return (
        <ul>
            {hobbies.map(item => (
                <Hobby hobby ={item}/>
            ))}
        </ul>
    )
}


hobbyList()


export default hobbyList;
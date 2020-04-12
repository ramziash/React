import React, {useState} from 'react';
import Button from './button';
import FriendProfile from './friendProfile';



const Friend = () => {

    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);   


    const getFriend = () => {

        setLoading(true);
        fetch('https://www.randomuser.me/api?results=1')
        .then(res => res.json())
        .then(data => {
            setFriend(data.results[0]);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        })
    }
    
    return (

        <div>
            {isLoading && <p>Loading ....</p>}
            {friend.name && <FriendProfile friend = { friend } />}
            {hasError && <p>Something went wrong</p>}
            <Button handles= { getFriend } text = 'Get Friend!'/>
        </div>
    )

}



export default Friend;

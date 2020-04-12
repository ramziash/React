import React from 'react';

const FriendProfile = ( {friend} ) => {
    return (
        <ul>
            <li>{friend.name.first} {friend.name.last}</li>
            <li>{friend.location.street.name}</li>
            <li>{friend.location.country}</li>
            <li>{friend.cell}</li>
        </ul>
    )

}

export default FriendProfile;
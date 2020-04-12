import React, { useState } from 'react';
import Button from './button';
import DogPhoto from './dogPhoto';


/**Part 6 of the question was not clear. So i improvised and made all pictures appear.  */

const DogGallery = () => {

    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [indexMessage, setIndexMessage] = useState('Get your first dog by clicking the Button');


    const getDogPhoto = () => {

        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            const newUrl = data.message
            setDogPhotos(oldUrl => [...oldUrl, newUrl ]);
            setLoading(false);
            setIndexMessage('Click for more')
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        })
    }
  


    return (

        <div>
            {isLoading && <p>Loading ....</p>}
            {<h3>{indexMessage}</h3>}
            {dogPhotos.map(dogUrl => {
                return (
                    <DogPhoto dogPhoto ={dogUrl} alt="doggos"  />
                )
            })}
            
            {hasError && <p>Something went wrong</p>}
            <Button handles= { getDogPhoto } text = 'Get Doggo!'/>
        </div>

    )

}

export default DogGallery;
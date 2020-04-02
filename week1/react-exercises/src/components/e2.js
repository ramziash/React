import React from 'react';
import coin from './coin.png'
import chat from './chat.png';
import fdelivery from './f-delivery.png';


const Guarantee = () => {

    const guaranteeitems = [
        {
            props : coin,
            title : 'Refund your money',
            description : '100 % money returned on items'
        },
        {
            props : chat,
            title : 'Chat with us',
            description : '24/7 chat with customer service'
        },
        {
            props : fdelivery,
            title : 'Delivery',
            description : 'We deliver your package to anywhere in the world'
        }
    ];


    return (
        guaranteeitems.map(item => {
            return (
            <div className = 'guarantee' style = {{display : 'inline-block', width : '33.3%' }} >
                <img src= {item.props} alt =''/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        )})
    )

};

export default Guarantee;
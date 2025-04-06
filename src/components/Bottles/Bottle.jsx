import React from 'react'
const Bottle = ({bottle}) => {
    const {img,name,price,stock}=bottle
    return ( 
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Available: {stock}</p>
            <button>Purchase Now</button>
        </div>
     );
}
 
export default Bottle;
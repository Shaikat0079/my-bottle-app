import React, { use, useState } from 'react'
import Bottle from './Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)
    const [cart,setCart] = useState([]);

    const handleAddToCart = (bottle)=>{
        console.log("Bottle will be added to the Cart",bottle)
        const newCart=[... cart,bottle];
        setCart(newCart) ;
    }
    return ( 
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
            <div className='bottles-container'>
            {
                bottles.map(bottle=><Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
     );
}
 
export default Bottles;
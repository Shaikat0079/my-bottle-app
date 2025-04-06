import React, { use, useState } from 'react'
import './Bottle.css'
import Bottle from './Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)
    const [cart,setCart] = useState([]);
    return ( 
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <div className='bottles-container'>
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
     );
}
 
export default Bottles;
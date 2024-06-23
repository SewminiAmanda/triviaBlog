import React from 'react'
import esp32 from '../Shopping/Assets/esp32.jpg'
const Shopcard = () => {
  return (
    <div className='shoppingcard'>
        <img src={esp32} alt=''/>
        <div className='shopcardtext'>
            <div className='shopcardtitle'>
                ESP 32
            </div>
            <div className='shopcardprice'>
                Rs.1500
            </div>

        </div>

      
    </div>
  )
}

export default Shopcard

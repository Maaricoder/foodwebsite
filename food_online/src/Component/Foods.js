import React from 'react'
import { useContext ,useState} from 'react'
import { Link } from 'react-router-dom'
import Cartcontext from './Cartcontext';
// import { useState } from 'react';

function Foods(props) {
  const [isadding, setIsadding] = useState(false);
  const { cart, setCart } = useContext(Cartcontext)


  const { alldata } = props;

  const addtocart = (e, alldata) => {
    e.preventDefault();

    let _cart = { ...cart }

    if (!cart.items) {
      _cart.items = {}

    }

    if (_cart.items[alldata._id]) {

      _cart.items[alldata._id] += 1;

    } else {

      _cart.items[alldata._id] = 1;

    }


    if (!_cart.totalItems) {

      _cart.totalItems = 0
    }
    _cart.totalItems += 1

    setCart(_cart);

    setIsadding(true)

    setTimeout(()=>{

      setIsadding(false)

    },600)
  
    

    console.log(alldata._id)


  }
  // console.log(alldata._id)


  return (
    <>
      <Link to={`/menu/${alldata._id}`} >
        <div className=''>
          <img className='h-30' src={alldata.image} alt='foods' />
          <div className='flex flex-col items-center'>
            <h4 className='text-lg font-bold ' >{alldata.name}</h4>
            <span className='bg-gray-300 rounded-full px-1 ' >{alldata.size}</span>
          </div>
          <div className='flex justify-between items-center '>
            <span className='text-black-700 font-bold'> ₹{alldata.price}</span>
            <button disabled={isadding} onClick={(e) => { addtocart(e, alldata) }} className={`${isadding ? 'bg-green-500':  'bg-yellow-500'} bg-yellow-500 py-1 px-4 rounded-full font-bold`}>add{isadding ? 'ed' : ' '}</button>
          </div>
        </div>
      </Link>

    </>

  )
}

export default Foods

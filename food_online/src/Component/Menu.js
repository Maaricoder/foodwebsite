import React from 'react'
import Foods from './Foods'
import { useState, useEffect } from "react"

import Cartcontext from './Cartcontext';
import { useContext } from 'react';

function Menu() {
  const [products, setProducts] = useState([]);

  // const {sale}=useContext(Cartcontext)



  useEffect(() => {

    // fetch('https://ecom-rest-apis.herokuapp.com/api/products')
    // .then((response)=>response.json())
    // .than((data)=>{
    //   console.log(data)
    //   setProducts(data)
    // })


     fetch('https://ecom-rest-apis.herokuapp.com/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));




  }, [])

  // console.log("hello", products)



  return (
    
      <div className='container mx-auto py-2  ' >
        <h1 className='text-lg font-bold my-8 '>  </h1>

        <div className='grid grid-cols-5  gap-28' >

          {
            products.map((products_data, product_id) => <Foods key={product_id} alldata={products_data} />)
          }
        </div>
      </div>
    


  )
}

export default Menu

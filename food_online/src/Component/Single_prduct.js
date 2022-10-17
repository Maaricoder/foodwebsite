import React from "react";
import { useState,useEffect } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import Home from "./Home";
import "../Style/Single_product.css"


function Single_prduct() {

  const [single_product, setSingle_product] = useState([]);
  
  const params= useParams()

  const navigation= useNavigate()

  useEffect(() => {
    
   const  productsapi= async ()=>{
     await fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params.id}`)
    .then(response=> response.json())
    .then(data=>  setSingle_product(data))
    }

    productsapi();

   
    
    // console.log(params)
    
   
  }, [params.id]);




 

  const back_tohome = () => {
    navigation('/')
    
    
  };

  return (
    <div className=" container mx-auto my-12">
      <button onClick={back_tohome} className="mb-12 font-bold bg-green-100">
     
      🠔 back to home page
      </button>

      <div className="container image ">
        <div className="image">
          {" "}
          <img
            style={{ height: 300 }}
            src={single_product.image}
            alt="logo"
          />
        </div>
        <div className="title  ">
          <h1 className="text-3xl	 font-weight-900  "  >{single_product.name} </h1>
          <span className="text-xl my-2">{single_product.size}</span>
          <span className="text-xl">₹{single_product.price}</span>
          <button className="text-xl font-bold  rounded-md bg-yellow-500 font-bold hover:bg-yellow-600 text-white align-center container py-1 text-center my-2 ">add to card</button>
        </div>
      </div>
    </div>
  );
}

export default Single_prduct;

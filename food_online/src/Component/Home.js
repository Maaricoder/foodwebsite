import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState,useEffect } from "react";

function Home() {
  const [Banner, setBanner] = useState([]);

useEffect(() => {
  fetch('https://ecom-rest-apis.herokuapp.com/api/products')
      .then((response) => response.json())
      .then((data) => setBanner(data));
  
}, []);

  // console.log(Banner)
  
  return (
    <>
    
    <Link to={`/menu/hdkadhf`}>
    
      <div className="hero py-2">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="w-1/2  ">
            <h6 className="text-lg pb-7">
              <em>Are You Hungry ?</em>
            </h6>
            <h1 className="text-3xl font-semibold md:text-5xl font-bold ml-6 ">
              Dont wait
            </h1>
            <button className="py-2 my-5  bg-yellow-500 font-bold hover:bg-yellow-600 rounded-full px-5 md:font-semibold py1 px-2 text-xs ">
              Order Know
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5 " src="/img/main_resize.png" alt="" />
          </div>
        </div>
      </div>
      </Link>
      <Menu></Menu>
      </>
    
  );
}

export default Home;

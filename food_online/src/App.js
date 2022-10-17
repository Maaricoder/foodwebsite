
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Component/Home';

import Menu from './Component/Menu';
import Cart from './Component/Cart';
import Navigation from "./Component/Navigation"
import Single_prduct from './Component/Single_prduct';
import { useState,useEffect } from 'react';

import Cartcontext from '../src/Component/Cartcontext'



function App() {
    const [cart,setCart]= useState({});

    useEffect(() => {
    const cart=   window.localStorage.getItem("cart")
    setCart(JSON.parse(cart))
      
    }, []);

    useEffect(()=>{
      window.localStorage.setItem("cart",JSON.stringify(cart));
      
    },[])

    console.log('thsi is new',cart);


  return (
    <>
      <BrowserRouter>
        <Cartcontext.Provider  value={ {cart,setCart} } >
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home />} exact ></Route>
            <Route path='/menu' element={<Menu></Menu>} exact ></Route>
            <Route path='/menu/:id' exact element={<Single_prduct />} ></Route>
            <Route path='/cart' element={<Cart></Cart>} exact ></Route>
          </Routes>
        </Cartcontext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App;

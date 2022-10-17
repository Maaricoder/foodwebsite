import React from "react";
import { Link } from "react-router-dom";
import Cartcontext from "./Cartcontext";
import { useContext } from "react";

function Navigation() {
  const cartStyle = {
    background: "#F5B041",
    display: "flex",
    padding:"2px 8px",
    // alienItam:"center"
    borderRadius:"40px"
  };
  const {cart}=useContext(Cartcontext);

  return (
    <nav className="container mx-auto flex justify-between itam-center py-4 bg-gray-200	 ">
      <Link to="/">
        <img style={{ height: 40 }} src="/img/logo_pizza.png" alt="" />
      </Link>

      <ul className="allul flex itams-center   my-auto mx-5 ">
        <li className="my-3 ml-4 " >
          <Link to="/"> Home </Link>
        </li>

        <li className="my-3 ml-4 ">
          <Link  to="/menu"> Menu </Link>
        </li>
        <li className="ml-4">
          <Link to="/cart">
            <div style={cartStyle} className="my=auto"  >
              <span className="itams-center my-auto ml-3 ">{cart.totalItems}</span>{" "}
              <img style={{ height: 40 }} src="/img/cart2.png" alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

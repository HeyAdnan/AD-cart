import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {amount} = useSelector((store) => store.cart);//here we can use any other name also instead of store to accesss entire state/store
  return (
    <nav>
      <div className="nav-center">
        <h3>AD-Cart Store</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

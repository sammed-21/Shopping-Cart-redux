import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart.slice";
// import { cartSlice } from "../store/cart.slice";
const Cart = () => {
  // const quantity = 5;
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  // const cartvsible = useSelector((state) => state.cart.setShowCart);
  const setShowCart = () => {
    console.log("clicked");
    dispatch(cartActions.setShowCart());
  };

  // console.log(items);
  return (
    <div className="cartIcon">
      <h3 onClick={setShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

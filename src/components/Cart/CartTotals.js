import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

import PayPal from "./PayPal";

const CartTotals = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const cartSubTotal = +cartItems.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);

  const cartTax = +(cartSubTotal * 0.1).toFixed(2);

  const cartTotal = cartTax + cartSubTotal;

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Fragment>
      <div className="container" style={{ direction: "rtl" }}>
        <div className="row">
          <div className="col-10 mt-2 col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={clearCartHandler}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span
                style={{
                  fontFamily: "Permanent Marker, cursive",
                  letterSpacing: "0.3rem",
                }}
                className="text-title"
              >
                {" "}
                subtotal :
              </span>{" "}
              <strong>$ {cartSubTotal} </strong>
            </h5>
            <h5>
              <span
                style={{
                  fontFamily: "Permanent Marker, cursive",
                  letterSpacing: "0.3rem",
                }}
                className="text-title"
              >
                {" "}
                tax :
              </span>{" "}
              <strong>$ {cartTax} </strong>
            </h5>
            <h5>
              <span
                style={{
                  fontFamily: "Permanent Marker, cursive",
                  letterSpacing: "0.3rem",
                }}
                className="text-title"
              >
                {" "}
                total :
              </span>{" "}
              <strong>$ {cartTotal} </strong>
            </h5>
            <PayPal cartTotal={cartTotal} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotals;

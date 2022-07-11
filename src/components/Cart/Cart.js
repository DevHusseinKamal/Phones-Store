import { Fragment } from "react";
import { useSelector } from "react-redux";

import Title from "../UI/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);

  let result = <EmptyCart />;
  if (items && items.length > 0) {
    return (result = (
      <Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList />
        <CartTotals />
      </Fragment>
    ));
  }
  return <section>{result}</section>;
};

export default Cart;

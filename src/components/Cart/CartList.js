import { useSelector } from "react-redux";

import Loading from "../UI/Loading";
import CartItem from "./CartItem";
const CartList = () => {
  const items = useSelector((state) => state.cart.cartItems);

  if (!items) {
    return <Loading title="Loading" />;
  }

  const setItems = items.map((item) => <CartItem key={item.id} item={item} />);

  return <div className="container-fluid">{setItems}</div>;
};

export default CartList;

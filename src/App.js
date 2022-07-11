import React, { Fragment, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { sendData, getData } from "./components/store/cart-actions";

import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import Loading from "./components/UI/Loading";

import { storeProducts } from "./data";

const Cart = React.lazy(() => import("./components/Cart/Cart"));
const ProductList = React.lazy(() =>
  import("./components/Product/ProductList")
);
const Details = React.lazy(() => import("./components/Details/Details"));
const Default = React.lazy(() => import("./components/UI/Default"));

let isBlock = true;

const App = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.ui.modalOpen);
  const modal = useSelector((state) => state.cart.modalItem);
  const items = useSelector((state) => state.cart.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const changed = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(sendData(storeProducts, "phones"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (isBlock) {
      isBlock = false;
      return;
    }
    if (changed) {
      dispatch(sendData(cartItems, "cart"));
    }
    dispatch(sendData(items, "phones"));
  }, [dispatch, cartItems, changed, items]);

  return (
    <Fragment>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Suspense>
      {modalOpen && <Modal modal={modal} />}
    </Fragment>
  );
};

export default App;

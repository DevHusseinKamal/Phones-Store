import { Fragment } from "react";
import { useSelector } from "react-redux";

import Product from "./Product";
import Title from "../UI/Title";
import Loading from "../UI/Loading";

const ProductList = () => {
  const loading = useSelector((state) => state.ui);
  const phones = useSelector((state) => state.cart.items);

  if (!phones) {
    return <Loading />;
  }

  const insertData = phones.map((phone) => {
    return <Product key={phone.id} phone={phone} />;
  });

  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          {loading.showLoading && <Loading title={loading.title} />}
          <div className="row">{insertData}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;

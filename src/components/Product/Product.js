import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";

import { BsFillCartPlusFill } from "react-icons/bs";
import { ProductWrapper } from "../UI/ProductWrapper";

const Product = (props) => {
  const { id, title, img, inCart, price } = props.phone;

  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(cartActions.addItem(id));
    dispatch(uiActions.openModal());
  };

  const checkCart = inCart;

  const checkCartBtn = checkCart ? (
    <p className="text-capitalize mb-0" disabled={checkCart}>
      in cart
    </p>
  ) : (
    <BsFillCartPlusFill />
  );

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/details/${title}`}>
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={checkCart}
            onClick={addItemHandler}
          >
            {checkCartBtn}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

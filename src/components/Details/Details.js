import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

import ButtonContainer from "../UI/ButtonContainer";
import Loading from "../UI/Loading";

import classes from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const items = useSelector((state) => state.cart.items);

  const productDetail = items.find((phone) => phone.title === params.productId);

  if (!productDetail) {
    return <Loading title="Loading" />;
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItem(productDetail.id));
  };

  const changeColorWhenInCart = {
    borderColor: productDetail.inCart ? "#ffa400" : "",
    color: productDetail.inCart ? "#ffa400" : "",
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{productDetail.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={productDetail.img} className="img-fluid" alt="" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>model : {productDetail.title}</h1>
          <h4
            className={`text-title text-uppercase text-muted mt-3 mb-2 ${classes.txt}`}
          >
            made by :{" "}
            <span className="text-uppercase">{productDetail.company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {productDetail.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product :
          </p>
          <p className="text-muted lead">{productDetail.info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <button
              style={changeColorWhenInCart}
              className={classes.button}
              disabled={productDetail.inCart ? true : false}
              onClick={addItemHandler}
            >
              {productDetail.inCart ? "in cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

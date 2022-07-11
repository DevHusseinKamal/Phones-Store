import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

import Loading from "../UI/Loading";
import ButtonContainer from "../UI/ButtonContainer";

import ModalContainer from "./ModalContainer";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  if (!props.modal) {
    return <Loading title="Loading" />;
  }

  const { title, img, price } = props.modal;

  const closeModalHandler = () => dispatch(uiActions.closeModal());

  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
            id="modal"
          >
            <h5>item added to cart</h5>
            <img src={img} className="img-fluid" alt="" />
            <h5>{title}</h5>
            <h5 className="text-muted">price : ${price}</h5>
            <Link to="/" onClick={closeModalHandler}>
              <ButtonContainer>Shop</ButtonContainer>
            </Link>
            <Link
              to="/cart"
              style={{ color: "#ffa400" }}
              onClick={closeModalHandler}
            >
              <div className={classes.button}>Go To Cart</div>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

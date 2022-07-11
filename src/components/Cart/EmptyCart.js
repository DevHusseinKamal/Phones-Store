const EmptyCart = () => {
  return (
    <div
      className="container mt-5"
      style={{ fontFamily: "Permanent Marker, cursive" }}
    >
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

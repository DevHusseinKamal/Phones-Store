const columnsData = [
  "products",
  "name of product",
  "price",
  "quantity",
  "remove",
  "total",
];

const CartColumns = () => {
  const columns = columnsData.map((title, index) => {
    return (
      <div key={index + 1} className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">{title}</p>
      </div>
    );
  });

  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row ">{columns}</div>
    </div>
  );
};

export default CartColumns;

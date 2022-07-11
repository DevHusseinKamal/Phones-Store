import { useLocation } from "react-router-dom";

const Default = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div
      className="container"
      style={{ fontFamily: "Permanent Marker, cursive" }}
    >
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL
            <span className="text-danger">"{path}"</span>
            was not found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;

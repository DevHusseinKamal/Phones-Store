import { Fragment, useEffect, useRef } from "react";

import classes from "./PayPal.module.css";

const PayPal = () => {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal.Buttons().render(paypalRef.current);
  }, []);

  return (
    <Fragment>
      <div className={classes.paypal} ref={paypalRef}></div>
    </Fragment>
  );
};

export default PayPal;

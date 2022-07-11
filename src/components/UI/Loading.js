import classes from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className="d-flex align-items-center flex-column mt-5">
      <div className={`${classes.loading} rounded-circle mb-2`}></div>
      <p className={classes.p}>{props.title}</p>
    </div>
  );
};

export default Loading;

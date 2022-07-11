import classes from "./ButtonContainer.module.css";

const ButtonContainer = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default ButtonContainer;

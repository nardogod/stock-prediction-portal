import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link className={props.className} to={props.url}>
      {props.text}
    </Link>
  );
};

export default Button;

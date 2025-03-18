import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar container justify-content-between pt-3 pb-3 align-items-start">
      <Link className="navbar-brand text-light" to="/">
        Stock Prediction Portal
      </Link>

      <div>
        <Button text="Login" className="btn btn-outline-info" url="/login" />
        &nbsp;
        <Button text="Register" className="btn btn-info" url="/register" />
      </div>
    </nav>
  );
};

export default Header;

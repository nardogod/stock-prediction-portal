import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Button from "./Button";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar container justify-content-between pt-3 pb-3 align-items-start">
      <Link className="navbar-brand text-light" to="/">
        Stock Prediction Portal
      </Link>

      <div>
        {isLoggedIn ? (
          <>
          <Button text="Dashboard" className="btn btn-info" url="/dashboard" />
          &nbsp;
          <button onClick={handleLogout} className="btn btn-outline-danger">
            Logout
          </button>
          </>
        ) : (
          <>
            <Button text="Login" className="btn btn-outline-info" url="/login" />
            
            &nbsp;
            <Button text="Register" className="btn btn-info" url="/register" />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

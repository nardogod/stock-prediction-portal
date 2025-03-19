import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Validação do password antes da requisição
    if (password.length < 8) {
      setErrors({ password: "Password must be at least 8 characters long." });
      setLoading(false);
      return;
    }

    const userData = { username, email, password };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      console.log("response.data ==>", response.data);
      console.log("Registration Successful");
      setErrors({});
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrors(error.response?.data || {});
      console.error("Registration Error: ", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center">Create an Account</h3>
          <form onSubmit={handleRegistration}>
            {/* Nome */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <small className="text-danger">{errors.username}</small>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Senha */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <small className="text-danger">{errors.password}</small>}
            </div>

            {/* Mensagem de sucesso */}
            {success && <div className="alert alert-success">Registration Successful</div>}

            {/* Botão de Registro */}
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Please wait...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;

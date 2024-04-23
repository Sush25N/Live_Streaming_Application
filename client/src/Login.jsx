import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(""); // Reset error message on input change
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating form validation using regular expressions
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!usernameRegex.test(data.name) || !passwordRegex.test(data.password)) {
      setError("Invalid username or password format.");
      setLoading(false);
      return;
    }

    // Simulating hardcoded login credentials
    if (data.name === "sushrut" && data.password === "sush@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/app/welcome");
    } else {
      setError("Invalid username or password.");
      setLoading(false);
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating form validation using regular expressions
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!usernameRegex.test(data.name) || !passwordRegex.test(data.password)) {
      setError("Invalid username or password format.");
      setLoading(false);
      return;
    }

    // Simulating hardcoded registration process
    // Assuming successful registration
    localStorage.setItem("isLoggedIn", "true");
    navigate("/app/welcome");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {showLogin ? (
          <>
            <div className="heading">Sign In</div>
            <form className="form" onSubmit={loginHandler}>
              <input
                required
                className="input"
                type="text"
                name="name"
                placeholder="User-name"
                onChange={changeHandler}
              />
              <input
                required
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
              />
              <span className="forgot-password">
                <Link to="#">Forgot Password ?</Link>
              </span>
              <button className="login-button" type="submit">
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="heading">Create your Account</div>
            <form className="form" onSubmit={signUpHandler}>
              <input
                required
                className="input"
                type="text"
                name="name"
                placeholder="User-name"
                onChange={changeHandler}
              />
              <input
                required
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={changeHandler}
              />
              <input
                required
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
              />
              <button className="login-button" type="submit">
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </>
        )}
        {error && <div className="error-message">{error}</div>}
        <div className="para">
          <p className="para-text">
            {showLogin
              ? "Don't have an Account ?"
              : "Already have an Account ?"}
            <span
              className="hyper"
              onClick={() => {
                setShowLogin(!showLogin);
                setError(""); // Reset error message when switching between sign-in and sign-up forms
              }}
            >
              {showLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

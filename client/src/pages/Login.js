import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigatePage = useNavigate();

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const user = await axios.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/api/login",
      data: { email: email, password: password },
    });

    if (user.data.status === "ok") {
      localStorage.setItem("token", user.data.token);
      navigatePage("/");
    }
  };

  return (
    <section className="login" onSubmit={handleLoginUser}>
      <h1 className="login__title">Login to your account</h1>

      <form className="form">
        <div className="field field--email">
          <label className="field__label">Email</label>
          <input
            type="email"
            className="field__input"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field field--password">
          <label className="field__label">Password</label>
          <input
            type="password"
            className="field__input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="form__button">
          Login
        </button>
      </form>

      <p className="login__signup">
        Don't have an account yet?{" "}
        <Link to="/register" className="login__link">
          Sign up here!
        </Link>
      </p>
    </section>
  );
}

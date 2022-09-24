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
      data: { email, password },
    });

    if (user.data.status === "ok") {
      localStorage.setItem("token", user.data.token);
      navigatePage("/");
    }
  };

  return (
    <section className="login" onSubmit={handleLoginUser}>
      <h2 className="login__title">Login to your account</h2>

      <form className="form">
        <div className="email">
          <label className="email__label">Email</label>
          <input
            type="email"
            className="email__input"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label className="password__label">Password</label>
          <input
            type="password"
            className="passsword__input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account yet? <Link to="/register">Sign up here!</Link>
      </p>
    </section>
  );
}

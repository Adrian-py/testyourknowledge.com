import React from "react";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <h2 className="login__title">Login to your account</h2>

      <form className="form">
        <div className="name">
          <label className="name__label">Username</label>
          <input
            type="text"
            className="name__input"
            placeholder="Enter your username"
          />
        </div>

        <div className="password">
          <label className="password__label">Password</label>
          <input
            type="password"
            className="passsword__input"
            placeholder="Enter your password"
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

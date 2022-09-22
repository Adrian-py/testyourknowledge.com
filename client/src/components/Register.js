import React from "react";

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <h2 className="register__title">Register a new account</h2>

      <form className="form">
        <div className="name">
          <label className="name__label">Username</label>
          <input
            type="text"
            className="name__input"
            placeholder="Enter your username"
          />
        </div>

        <div className="email">
          <label className="email__label">Email</label>
          <input
            type="email"
            className="name__input"
            placeholder="Enter your email"
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

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </section>
  );
}

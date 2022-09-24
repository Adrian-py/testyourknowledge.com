import React, { useState, useEffect } from "react";
import axios from "axios";

import getLoginStatus from "../helper/getLoginStatus";

import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigatePage = useNavigate();

  const handleRegisterUser = async (event) => {
    event.preventDefault();

    const newUser = await axios.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/api/register",
      data: { username, email, password },
    });

    if (newUser.data.status === "error") {
      alert("Register Failed! Email has been used.");
      event.target.reset();
      return;
    }
    navigatePage("/login");
  };

  useEffect(() => {
    if (getLoginStatus()) navigatePage("/");
  }, [navigatePage]);

  return (
    <section className="register">
      <h2 className="register__title">Register a new account</h2>

      <form className="form" onSubmit={handleRegisterUser}>
        <div className="field field--name">
          <label className="field__label">Username</label>
          <input
            type="text"
            className="field__input"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="field field--email">
          <label className="field__label">Email</label>
          <input
            type="email"
            className="field__input"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field field--password">
          <label className="field__label">Password</label>
          <input
            type="password"
            autoComplete="on"
            className="field__input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="form__button">
          Register
        </button>
      </form>

      <p className="register__login">
        Already have an account?{" "}
        <Link to="/login" className="register__link">
          Login here!
        </Link>
      </p>
    </section>
  );
}

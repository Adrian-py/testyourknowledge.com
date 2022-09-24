import React, { useState } from "react";
import axios from "axios";

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

  return (
    <section className="register">
      <h2 className="register__title">Register a new account</h2>

      <form className="form" onSubmit={handleRegisterUser}>
        <div className="name">
          <label className="name__label">Username</label>
          <input
            type="text"
            className="name__input"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="email">
          <label className="email__label">Email</label>
          <input
            type="email"
            className="name__input"
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

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </section>
  );
}

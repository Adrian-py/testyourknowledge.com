import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUsername(jwt_decode(token).username);
  }, []);

  return { username };
};

export default function Header() {
  const { username } = useHeader();

  const navigatePage = useNavigate();

  const handleLogoutUser = () => {
    localStorage.removeItem("token");
    navigatePage("/login");
  };

  return (
    <header>
      <h1 className="title">testyournkowledge.com</h1>
      <div className="logout">
        <p className="logout__text">Hi, {username}</p>
        <button className="logout__button" onClick={handleLogoutUser}>
          Logout
        </button>
      </div>
    </header>
  );
}

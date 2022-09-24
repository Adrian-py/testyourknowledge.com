import React from "react";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigatePage = useNavigate();

  const handleLogoutUser = () => {
    localStorage.removeItem("token");
    navigatePage("/login");
  };

  return (
    <header>
      <h1 className="title">testyournkowledge.com</h1>
      <div className="logout">
        <p>Logout Account</p>
        <button onClick={handleLogoutUser}>Logout</button>
      </div>
    </header>
  );
}

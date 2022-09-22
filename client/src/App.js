import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styling/css/style.css";

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

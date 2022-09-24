import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styling/css/style.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import BackgroundShapes from "./components/BackgroundShapes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <BackgroundShapes />
      </div>
    </Router>
  );
}

export default App;

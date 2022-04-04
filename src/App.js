import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<h1>Checkout</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;

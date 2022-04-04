import { Routes, Route } from "react-router-dom";

import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage/>} />
        <Route path="login" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;

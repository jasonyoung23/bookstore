import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./contexts/cartcontext";
import Header from "./components/header";
import Login from "./components/login";
import Frontpage from "./components/frontpage";
import BookDetail from "./components/bookdetail";
import Cart from "./components/cart";
import PersonalInfo from "./components/personalinfo";
import "./output.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate replace to="/frontpage" />
              )
            }
          />
          <Route path="/frontpage" element={<Frontpage />} />
          <Route path="/book/:alt" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          {}
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

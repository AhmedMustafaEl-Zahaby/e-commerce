import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Components/Assets/banner_mens.png";
import womens_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory category="men" banner={mens_banner} />}
            />
            <Route
              path="/women"
              element={<ShopCategory category="women" banner={womens_banner} />}
            />
            <Route
              path="/kids"
              element={<ShopCategory category="kid" banner={kids_banner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

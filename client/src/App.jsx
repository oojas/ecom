import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { productsData } from "./api/Api.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Home from "./Home.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* ScrollRestoration doesn't exist in React Router v6 */}
      <Routes>
        <Route path="/" element={<Home />} loader={productsData} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;

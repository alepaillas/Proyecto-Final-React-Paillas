import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  // materialize javascript
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App container">
          <Header />
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category/:categoryId" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/artist/:artistId"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/product/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/UserDashboard/login/Login";
import Register from "./pages/UserDashboard/register/Register";
import Cart from "./pages/UserDashboard/cart/Cart";
import ProductDetails from "./components/productDetails/productDetails";
import ProductPage from "./components/productDetails/ProductPage";
import Order from "./components/order/Order";
import InfoAccount from "./pages/UserDashboard/infoAccount/InfoAccount";
import SaleProduct from "./components/Sale/SaleProduct";
import Accessory from "./components/accessory/Accessory";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/product-page/:slug" element={<ProductPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/info-account" element={<InfoAccount />} />
          <Route path="/sale-product" element={<SaleProduct />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

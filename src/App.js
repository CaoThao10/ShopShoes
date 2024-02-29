import "./App.css";
import React, { useEffect, useState } from "react";
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
import AdminLayout from "./pages/AdminDashboard/AdminLayout";
import Home from "./pages/AdminDashboard/Home";
import ManageCustomer from "./pages/AdminDashboard/ManageCustomer";
import ManageOrder from "./pages/AdminDashboard/ManageOrder";
import ManageProduct from "./pages/AdminDashboard/ManageProduct";
import CreateProduct from "./pages/AdminDashboard/CreateProduct";
import ManageUser from "./pages/AdminDashboard/ManageUser";
import Supplier from "./pages/AdminDashboard/Supplier";
import ManageNotification from "./pages/AdminDashboard/ManageNotification";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong Local Storage không
    const storedUser = localStorage.getItem("user");

    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng và cập nhật state
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
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
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="manage-user" element={<ManageCustomer />} />
          <Route path="manage-order" element={<ManageOrder />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product/:id" element={<CreateProduct />} />
          <Route path="manage-customer" element={<ManageUser />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="manage-notification" element={<ManageNotification />} />
        </Route>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

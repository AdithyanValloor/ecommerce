import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import AllProducts from "../pages/AllProducts";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} /> 
          <Route path="all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

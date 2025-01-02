import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Services from "./components/services";
import Product from "./components/Products";
import AdminLayout from "./Layout/AdminLayout";
import AdminHome from "./AdminComponents/AdminHome";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import Dashboard from "./AdminComponents/Dashboard";
import AddServices from "./AdminComponents/AddService";
import Loginuser from "./components/LoginUser";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="loginuser" element={<Loginuser />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addservice" element={<AddServices />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
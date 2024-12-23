import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Layout from './Layout';
import NotFound from './pages/NotFound'
import Services from "./components/services";
import Product from "./components/Products";
import AdminLayout from "./Layout/AdminLayout";
import AdminHome from "./AdminComponents/AdminHome";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import Dashboard from "./AdminComponents/Dashboard";
<<<<<<< HEAD
import AddServices from "./AdminComponents/AddService";



=======
import AdminHome from "./AdminComponents/AdminHome";
import LoginUser from "./components/LoginUser";
>>>>>>> 3a5cad03f2d60cf3e699465e8672b3b811b81f3b
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
            <Route path="profile" element={<Profile/>} />
            <Route path="loginuser" element={<LoginUser/>} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="dashboard" element={<Dashboard/>} />
            
          </Route>
<<<<<<< HEAD
          <Route path="addservice" element={<AddServices/>} />
=======
            <Route path="*" element={<NotFound />} /> 
>>>>>>> 3a5cad03f2d60cf3e699465e8672b3b811b81f3b
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

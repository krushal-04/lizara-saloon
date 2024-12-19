import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Layout from './Layout';
import NotFound from './pages/NotFound'
import Services from "./components/services";
import Product from "./components/Products";
import Form from "./components/Form"
import AdminLayout from "./Layout/AdminLayout";
import AdminHome from "./AdminComponent/AdminHome";

// import DashboardLayoutBasic from "./AdminComponent/Dashboard";
import Dashboard from "./AdminComponent/Dashboard";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="Form" element={<Form />} />

          </Route>
          <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<AdminHome/>}/>
            
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

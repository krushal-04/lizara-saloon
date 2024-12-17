import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Layout from './Layout';
import NotFound from './pages/NotFound'
import Services from "./components/services";
import Product from "./components/Products";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

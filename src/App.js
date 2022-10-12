import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { Products } from "./Components/Products";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { NewProducts } from "./Components/NewProducts";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route path='feactured' element={<FeaturedProducts />}/>
          <Route path='new' element={<NewProducts />}/>
        </Route>
        <Route path="*" element={<h3>Page Not found</h3>} />
      </Routes>
    </div>
  );
}

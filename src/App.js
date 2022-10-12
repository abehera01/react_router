import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="*" element={<h3>Page Not found</h3>} />
      </Routes>
    </div>
  );
}

import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './Components/Auth'
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { Products } from "./Components/Products";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { NewProducts } from "./Components/NewProducts";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";
import { Profile } from "./Components/Profile";


// const LazyAbout = React.lazy(() => import("./Components/About"));

export default function App() {
  return (
    <AuthProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* <Route
          path="/about"
          element={
            <React.Suspense fallback="Looding...">
              <LazyAbout />
            </React.Suspense>
          }
        /> */}
        
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="feactured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        /{" "}
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<h3>Page Not found</h3>} />
      </Routes>
    </AuthProvider>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Nav from "./components/Nav";
import { ShoppingContextProvider } from "./Context/ShoppingContext";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ShoppingContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShoppingContextProvider>
    </div>
  );
}

export default App;

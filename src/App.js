import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Iphone from "./iphone";
import Ipad from "./ipad";
import Laptop from "./laptop";
import Navigation from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="backgroundImage">
        <Navigation />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/laptop" element={<Laptop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


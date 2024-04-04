import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {
  return (
    <div>
      <h2>Hello! I am a Tech Vending Machine.
      <br></br>
      Choose Your Tech:</h2>
      <ul className="ul">
        <li className="li"><Link to="/iphone">Iphone</Link></li>
        <li className="li"><Link to="/ipad">Ipad</Link></li>
        <li className="li"><Link to="/laptop">Laptop</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;

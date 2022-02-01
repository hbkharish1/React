import React from "react";
import { Link} from "react-router-dom";
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary fixed-right">
          <div className="container">
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Redux"}>Redux</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Dashboard"}>API</Link>
                </li>              
                <li className="nav-item">
                  <Link className="nav-link" to={"/ProductList"}>Context</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
    );
  }

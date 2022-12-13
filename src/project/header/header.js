import React from "react";
import '../header/header.css'
function Header (){
    return(
        <div className="header">
            <div className="logo">
                <h1>Kasuka</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Team</a></li>
            </ul>
            <button>
                <a href="#">Start</a>
            </button>
        </div>
    )
}
export default Header;
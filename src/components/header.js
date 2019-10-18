import React from "react";
import { Link, } from 'react-router-dom';


function Header() {
        return (
            <header>
                <h1>TO-DO List</h1>
                <div>
                <Link className="botones" to="/">Home</Link>
                <Link className="botones" to="/about">About</Link>
                </div>
            </header>
        )
    }




export default Header
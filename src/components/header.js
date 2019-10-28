import React from "react";
import { Link, } from 'react-router-dom';


function Header() {
    return (
        <header>
            <h1>TO-DO List</h1>
            <div>
                <Link className="botones" to="/pendiente">Home</Link>
                <Link className="botones" to="/input">Busqueda</Link>
            </div>
        </header>
    )
}




export default Header
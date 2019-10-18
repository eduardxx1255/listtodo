import React from "react";
import { Link, } from 'react-router-dom';

function Header() {
        return (
            <header>
                <h1>TO-DO List</h1>
                <Link to="/">Home</Link>
            </header>
        )
    }




export default Header
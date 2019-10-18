import React from "react"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends React.component {
    render () {
        return (
            <header>
                <h1>TO-DO List</h1>
                <Link>Home</Link>
                <Link>about</Link>
            </header>
        )
    }
}

export default Header
import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg " >
                    <Link className="navbar-brand" to="/">Home Page</Link>
                    <div id="navbarNav" style={{ marginLeft: "auto" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/family">Family</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
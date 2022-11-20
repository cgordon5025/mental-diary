import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home'
const Header = () => {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg " >
                    <Link className="navbar-brand" to="/">Home Page</Link>
                    <div id="navbarNav" style={{ marginLeft: "auto" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/test">Family</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Portfolio/project">Diary</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Portfolio/resume">login/out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
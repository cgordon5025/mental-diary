import React from 'react'
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

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
                                <Link className="nav-link" to="/diary">Diary</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/singlefamily">My Family</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/mydiary">My Diary</Link>
                            </li>
                            {Auth.loggedIn() ?
                                (<li className="nav-item ">
                                    <Link onClick={Auth.logout} className="nav-link" to="/">Logout</Link>
                                </li>) :
                                (<li className="nav-item ">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>)}


                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
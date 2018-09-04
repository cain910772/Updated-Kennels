import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


function logout() {
     localStorage.clear();

}

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Locations">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Assignments">Assignments   </Link> </li>
                        
                       
                 
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login"><div onClick={logout}>Logout</div></Link>
                        </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
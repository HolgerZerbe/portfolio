import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <Link className="linkNavbar" to="/">Start</Link>
                <Link className="linkNavbar" to="/about">About me</Link>
                <Link className="linkNavbar" to="/portfolio">My Portfolio</Link>
                <Link className="linkNavbar" to="/impressum">Impressum</Link>

            </div>
        )
    }
}

export default Navbar
import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt, faEnvelope, faLock, faUndo, faUserPlus} from "@fortawesome/free-solid-svg-icons";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar className ="navbar-custom">
                <Link to={""} className="navbar-brand">
                    <img className="img" src="logo.png" alt="logo" />
                </Link>
                <Nav className="navbar-right">
                    <Link to="login" className="nav-link"><FontAwesomeIcon icon={faUserPlus}/>Login</Link>
                    <Link to="register" className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/>Register</Link>
                </Nav>
            </Navbar>

        );
    }
}

export default NavigationBar;

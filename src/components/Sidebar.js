import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            // <Nav defaultActiveKey="/" className="flex-column">
            //     <Link to="programming" className="nav-link">Programming</Link>
            //     <Link to="productionTest" className="nav-link">Production Test</Link>
            //     <Link to="administration" className="nav-link">Administration</Link>
            //     <Link to="support" className="nav-link">Support</Link>
            //     <Link to="logout" className="nav-link">Logout</Link>
            // </Nav>

            <div id="sidebar">
                <ul class="nav">
                    <li>
                        <i class="zmdi zmdi-view-dashboard"></i> <Link to="programming" className="nav-link">Programming</Link>
                    </li>
                    <li>
                        <i class="zmdi zmdi-view-dashboard"></i><Link to="productionTest" className="nav-link">Production Test</Link>
                    </li>
                    <li>
                        <i class="zmdi zmdi-view-dashboard"></i><Link to="administration" className="nav-link">Administration</Link>
                    </li>
                    <li>
                        <i class="zmdi zmdi-view-dashboard"></i><Link to="support" className="nav-link">Product Support</Link>
                    </li>
                    <li>
                        <i class="zmdi zmdi-view-dashboard"></i><Link to="logout" className="nav-link">Logout User</Link>
                    </li>
                </ul>
            </div>
        )
    }
}



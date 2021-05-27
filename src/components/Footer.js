import React, { Component } from 'react'
import { Navbar, Container, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" className= "navbar-custom">
                <Container>
                    <Col lg={12} className="text-center">
                        <div>All Rights Reserved by Raytelligence.</div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

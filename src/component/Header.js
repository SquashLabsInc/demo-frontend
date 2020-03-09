import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";
  
class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark">
                    <Navbar.Brand href="https://www.squash.io/"><img src="https://www.squash.io/wp-content/uploads/2019/03/logo.svg" alt="" width="157" height="22" title="Squash" className="blog-hide"></img></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header


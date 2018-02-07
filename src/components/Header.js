import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
    <Navbar inverse fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <NavLink to="/" exact={true}>PS Dashboard</NavLink>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavDropdown eventKey={1} title="Repository Management" id="basic-nav-dropdown">
                <LinkContainer to="/repository-creator">
                    <MenuItem eventKey={1.1}>Repository Creator</MenuItem>
                </LinkContainer>
                <LinkContainer to="/repository-refresh">
                    <MenuItem eventKey={1.2}>Repository Refresh</MenuItem>
                </LinkContainer>
            </NavDropdown>
        </Nav>
    </Navbar>
)

export default Header
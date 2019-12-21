import React from 'react';
import {NavLink as RouterNavLink} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand component={RouterNavLink}>Quotes Central</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <RouterNavLink component={NavLink} to="/">Quotes | </RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink component={NavLink} to="/quotes/new">Submit new quote</RouterNavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    );
};

export default Header;
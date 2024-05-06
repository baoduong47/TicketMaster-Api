import {
  NavbarBrand,
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar color="dark" dark sticky="top" expand="md">
      <NavbarBrand className="ms-5 navheader" href="/">
        <h1 className="mt-1 header-title">TicketHub</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/favorites">
              <i className="fa fa-gratipay"></i> Favorites
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

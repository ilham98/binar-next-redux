import Link from "next/link";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Binar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/" passHref>
                <NavLink>Users</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/posts" passHref>
                <NavLink>Posts</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/shop" passHref>
                <NavLink>Shop</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

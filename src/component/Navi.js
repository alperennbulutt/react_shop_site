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
import CartSummary from "./CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log("asdasdasd", props.cart);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Cizmeli Alışveriş</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Categories/">Kişisel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/alperennbulutt" target="blank">
                GitHub
              </NavLink>
            </NavItem>

            <CartSummary
              removeFromCart={props.removeFromCart}
              cart={props.cart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;

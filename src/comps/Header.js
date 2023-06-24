import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import { NewContext } from "./Context";
import Minicart from "./Minicart";

const Header = () => {
  const {
    state: { cart },
    dispatchFilter,
  } = useContext(NewContext);
  return (
    <div>
      <Navbar bg="secondary" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <h3>Products</h3>
            </Link>
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              <FaShoppingCart />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <DropdownMenu style={{ paddingLeft: 10 }}>
              {cart.length > 0 ? <Minicart /> : "cart is empty"}
            </DropdownMenu>
          </Dropdown>
          <Link to="/cart" className="cartN">
            <h3>Cart</h3>
          </Link>
          <FormControl
            style={{ width: 280 }}
            className="search"
            placeholder="Search..."
            onChange={(e) =>
              dispatchFilter({ type: "BY_SEARCH", payload: e.target.value })
            }
          ></FormControl>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

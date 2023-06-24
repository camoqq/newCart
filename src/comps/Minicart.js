import React, { useContext } from "react";
import { NewContext } from "./Context";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Minicart = () => {
  const {
    state: { products, cart },
  } = useContext(NewContext);
  return (
    <div>
      {cart.map((item) => (
        <div className="cartItem">
          <img src={item.image} alt="" className="cartItemImg" />
          <span className="cartItemDetail"> {item.name}</span>
          <span className="cartItemDetail">${item.price}</span>
          <span className="cartItemDetail">
            <FaTrash />
          </span>
        </div>
      ))}
      <Link to="/cart">
        <Button style={{ width: "97%" }}>Go to Cart</Button>
      </Link>
    </div>
  );
};

export default Minicart;

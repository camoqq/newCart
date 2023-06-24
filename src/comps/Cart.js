import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { NewContext } from "./Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(NewContext);

  const [total, setTotal] = useState(0);
  const tax = total * 0.0875;
  const grandtotal = total + tax;
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item) => (
            <>
              <ListGroupItem>
                <Row>
                  <Col>
                    <span>
                      <Image src={item.image} fluid rounded />
                    </span>
                  </Col>
                  <Col>{item.name}</Col>
                  <Col>${item.price}</Col>
                  <Col>
                    <FormControl
                      as="select"
                      onChange={(e) =>
                        dispatch({
                          type: "ADD_QTY",
                          payload: {
                            id: item.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(5)].map((_, i) => (
                        <option>{i + 1}</option>
                      ))}
                    </FormControl>
                  </Col>

                  <Col>
                    <FaTrash
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    />
                  </Col>
                </Row>
              </ListGroupItem>
            </>
          ))}
        </ListGroup>
      </div>
      <div className="filters">
        <p className="t">subtotal $ {total.toFixed(0)}</p>
        <p>tax $ {tax.toFixed(0)}</p>
        <p>
          <h4>
            Total <span>$ {grandtotal.toFixed(0)}</span>
          </h4>
        </p>

        <Button variant="light">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;

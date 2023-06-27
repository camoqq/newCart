import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { NewContext } from "./Context";
import Rating from "./Rating";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(NewContext);
  return (
    <div className="products">
      <Card bg="light">
        <Card.Img src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{ marginBottom: 12 }}>
            <span>$ {item.price}</span>
            <span>
              <Rating rate={item.ratings} />
            </span>
            {item.fastDelivery ? "Tomorrow" : "4 days delivery"}
          </Card.Subtitle>

          {cart.some((p) => p.id === item.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!item.inStock}
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              {item.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default SingleProduct;

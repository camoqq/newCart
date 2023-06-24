import React, { useContext } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { NewContext } from "./Context";
import Rating from "./Rating";

const Filters = () => {
  // const [rate, setRate] = useState(2);
  const {
    stateFilter: { byRatings, byFastDelivery, byStock },
    dispatchFilter,
  } = useContext(NewContext);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <FormCheck
          label="Include out of stock"
          onClick={() => dispatchFilter({ type: "BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <FormCheck
          label="Fast delivery only"
          onClick={() => dispatchFilter({ type: "BY_FAST_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label>Rating:</label>
        <Rating
          // rate={rate}
          // click={(i) => setRate(i + 1)}
          rate={byRatings}
          click={(i) => dispatchFilter({ type: "BY_RATINGS", payload: i + 1 })}
          checked={byRatings}
        />
      </span>
      <Button
        variant="light"
        onClick={() => dispatchFilter({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;

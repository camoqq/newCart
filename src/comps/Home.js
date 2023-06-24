import React, { useContext } from "react";
import { NewContext } from "./Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    stateFilter: { byStock, byFastDelivery, byRatings, bySearch },
  } = useContext(NewContext);

  const transformed = () => {
    let newProds = products;
    if (!byStock) {
      newProds = newProds.filter((item) => item.inStock);
    }
    if (byFastDelivery) {
      newProds = newProds.filter((item) => item.fastDelivery);
    }
    if (byRatings) {
      newProds = newProds.filter((item) => item.ratings >= byRatings);
    }
    if (bySearch) {
      newProds = newProds.filter((item) =>
        item.name.toLowerCase().includes(bySearch)
      );
    }
    return newProds;
  };

  return (
    <div className="home">
      <Filters className="t" />

      <div className="productContainer">
        {transformed().map((item) => (
          <SingleProduct item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

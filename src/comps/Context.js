import React, { createContext, useReducer } from "react";
import { Reducer, Reducer2 } from "./Reducers";
import { faker } from "@faker-js/faker";

export const NewContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(18)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(1, 1000, 0, ""),
    image: faker.image.business(640, 480, true), //dont forget true to randomize image
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  console.log(products);

  const [state, dispatch] = useReducer(Reducer, {
    products: products,
    cart: [],
  });
  const [stateFilter, dispatchFilter] = useReducer(Reducer2, {
    byStock: false,
    byFastDelivery: false,
    byRatings: 0,
    bySearch: "",
  });
  return (
    <NewContext.Provider
      value={{ state, dispatch, stateFilter, dispatchFilter }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default Context;

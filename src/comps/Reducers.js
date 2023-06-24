export const Reducer = (state, action) => {
  // action takes type and payload
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };
    case "ADD_QTY":
      return {
        ...state,
        cart: state.cart.filter((x) =>
          x.id === action.payload.id ? (x.qty = action.payload.qty) : x.qty
        ),
      };
    default:
      return state;
  }
};

export const Reducer2 = (state, action) => {
  switch (action.type) {
    case "BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "BY_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "BY_RATINGS":
      return { ...state, byRatings: action.payload };
    case "BY_SEARCH":
      return { ...state, bySearch: action.payload };
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRatings: 0,
        bySearch: "",
      };

    default:
      return state;
  }
};

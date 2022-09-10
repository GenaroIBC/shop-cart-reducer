import { CART_TYPES } from "../actions/cartActions";

export const INITIAL_CART = {
  products: [
    {
      id: 1,
      title: "table",
      price: 300,
    },
    {
      id: 2,
      title: "phone",
      price: 750,
    },
    {
      id: 3,
      title: "home studio",
      price: 1200,
    },
    {
      id: 4,
      title: "airpods",
      price: 120,
    },
    {
      id: 5,
      title: "bread :(",
      price: 20,
    },
  ],
};

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_TYPES.ADD_TO_CART:
      break;

    case CART_TYPES.CLEAR_CART:
      break;

    default:
      break;
  }
};

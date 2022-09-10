import { useReducer } from "react";
import { cartReducer, INITIAL_CART } from "./reducers/cartReducer";
import "./App.css";
import { CART_TYPES } from "./actions/cartActions";
import { Cart } from "./components/Cart/Cart";
import { ProductsList } from "./components/ProductsList/ProductsList";

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, INITIAL_CART);

  const addToCart = id => {
    cartDispatch({ type: CART_TYPES.ADD_TO_CART, payload: id });
  };

  const clearCart = () => {
    cartDispatch({ type: CART_TYPES.CLEAR_CART });
  };

  return (
    <>
      <ProductsList addToCart={addToCart} products={cartState.products} />
      <Cart clearCart={clearCart} products={cartState.cart} />
    </>
  );
}

export default App;

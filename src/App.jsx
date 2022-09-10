import { useReducer } from "react";
import { cartReducer, INITIAL_CART } from "./reducers/cartReducer";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { CART_TYPES } from "./actions/cartActions";

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, INITIAL_CART);

  const addToCart = id => {
    cartDispatch({ type: CART_TYPES.ADD_TO_CART, payload: id });
  };

  console.log(cartState);
  return (
    <>
      <div className="products-container">
        {cartState.products.map(product => (
          <ProductCard addToCart={addToCart} key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default App;

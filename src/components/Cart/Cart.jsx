import { CartProduct } from "./CartProduct";

export function Cart({ products }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <h3>Your products:</h3>
      {products.length === 0 ? (
        <h4>No data</h4>
      ) : (
        products.map(item => <CartProduct {...item} key={Math.random()} />)
      )}
    </section>
  );
}

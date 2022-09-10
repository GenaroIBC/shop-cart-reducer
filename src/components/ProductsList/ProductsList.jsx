import { ProductCard } from "../ProductsList/ProductCard";

export function ProductsList({ products, addToCart }) {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard addToCart={addToCart} key={product.id} data={product} />
      ))}
    </div>
  );
}

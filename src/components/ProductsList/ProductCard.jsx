export function ProductCard({ data, addToCart }) {
  const { id, title, price } = data;
  return (
    <article className="product-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{id}</h4>
      <button onClick={() => addToCart(id)}>Add</button>
    </article>
  );
}

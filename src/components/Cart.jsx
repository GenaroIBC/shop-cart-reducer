export function Cart({ products }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <h3>Your products:</h3>
      {products.map(({ title, price, id }) => {
        return (
          <article>
            {title} - {price} - {id}
          </article>
        );
      })}
    </section>
  );
}

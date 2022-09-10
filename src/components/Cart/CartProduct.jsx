export function CartProduct({ title, price, id }) {
  console.log([title, price, id]);

  return (
    <article className="cart__product">
      {title} - {price} - {id}
    </article>
  );
}

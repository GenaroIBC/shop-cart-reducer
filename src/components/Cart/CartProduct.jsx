export function CartProduct({ title, price, id, amount }) {
  return (
    <article className="cart__product">
      {title} - {price} - {id} |{" "}
      <span className="cart__product__amount">{amount}</span>
    </article>
  );
}

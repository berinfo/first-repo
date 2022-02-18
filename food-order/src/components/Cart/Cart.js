import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;

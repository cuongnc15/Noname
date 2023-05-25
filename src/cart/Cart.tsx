import { useSelector } from "react-redux";
import classes from "./cart.module.css"
import { useEffect } from "react";
import CartItem from "./CartItem";
let initial = false;

const Cart = () => {
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    const items = useSelector((state: any) => state.cart.items);
    const id = useSelector((state: any) => state.cart.id);
    const totalPrice = items
      .map((item: any) => item.amount * item.price)
      .reduce((el: any, num: any) => el + num, 0)
      .toFixed(2);
    useEffect(() => {
      if (!initial) {
        initial = true;
        return;
      }
      if (isLogin) {
        const sendCart = async () => {
          const response = await fetch(
            `https://react-http-9e6b9-default-rtdb.firebaseio.com/myCart/${id}/items.json`,
            {
              method: "PUT",
              body: JSON.stringify([0, ...items]),
              headers: { "Content-Type": "application/json" },
            }
          );
        };
        sendCart();
      }
    }, [items]);
    if (items.length === 0) {
      return (
        <main className={classes["main__cart"]}>
          <div className={classes.note}>Your cart is empty</div>
        </main>
      );
    }
    return (
      <main className={classes["main__cart"]}>
        <ul className={classes["item__list"]}>
          {items.map((item: any) => (
            <CartItem
              key={item.id}
              image={item.image}
              price={item.price}
              amount={item.amount}
              name={item.name}
              id={item.id}
            />
          ))}
        </ul>
  
        <div className={classes.total}>Total: $ {totalPrice}</div>
      </main>
    );
  };
  export default Cart;
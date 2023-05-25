import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../component/store/store";
import classes from "./CartItem.module.css"
const CartItem = (props: any) => {
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
    const itemTotal = props.amount * props.price;
    const formattedItemTotal = itemTotal.toFixed(2);
    useEffect(() => {
      if (isLogin) {
        localStorage.setItem(
          "userAccount",
          JSON.stringify({ isLogin: true, showLoginForm: true })
        );
        localStorage.setItem("userCart", JSON.stringify(cart));
      }
    }, [cart]);
    const addItemHadnler = () => {
      dispatch(
        cartAction.addItem({
          id: props.id,
          image: props.image,
          price: props.price,
          name: props.name,
          amount: 1,
        })
      );
    };
    const removeItemHandler = () => {
      dispatch(cartAction.removeItem(props.id));
    };
    return (
      <li className={classes.list}>
        <div className={classes["image__container"]}>
          <img src={props.image} alt="image" />
        </div>
        <div className={classes["item__info"]}>
          <p className={classes["item__name"]}>{props.name}</p>
          <p className={classes["item__price"]}>
            {props.amount} x $ {props.price}= ${formattedItemTotal}
          </p>
          <div className={classes.btn}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHadnler}>+</button>
          </div>
        </div>
      </li>
    );
  };
  export default CartItem;
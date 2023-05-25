import { Link } from "react-router-dom";
import classes from "./productItem.module.css";
const ProductItem = (props: any) => {
  return (
    <li className={classes.container}>
      <div className={classes["products__card"]}>
        <div className={classes["products__img"]}>
          <img src={props.image} alt="image" />
        </div>
        <div className={classes.action}>
          <p className={classes["product__name"]}>{props.title}</p>
          <h5 className={classes["product__price"]}>$ {props.price}</h5>
          <Link className={classes["btn__buy"]} to={`/products/${props.id}`}>
            Buy now
          </Link>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
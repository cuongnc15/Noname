import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import classes from "./SelectedProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/store";
import Skeleton from "react-loading-skeleton";
import { StarOutlined } from "@ant-design/icons";
import "../../dist/output.css"

library.add(fas);
let initial = false;
const SelectedProduct = () => {
  const isLogin = useSelector((state: any) => state.auth.isLogin);
  const id = useSelector((state: any) => state.cart.id);
  console.log('id ',id);
  const items = useSelector((state: any) => state.cart.items);
  console.log(items);
  const cart = useSelector((state: any) => state.cart.cart);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    price: "",
    title: "",
    image: "",
    rating: {
        rate: ""
    },
    category: "",
    description: "",
  });
  const params = useParams();
  const { productId } = params;
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const getSingleProduct = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setIsLoading(false);
      setProduct(data);
    };
    getSingleProduct();
  }, []);
  useEffect(() => {
    if (!initial) {
      initial = true;
      return;
    }
    if (isLogin) {
      const sendCart = async () => {
        await fetch(
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
  useEffect(() => {
    if (isLogin) {
      localStorage.setItem(
        "userAccount",
        JSON.stringify({ isLogin: true, showLoginForm: true })
      );
      localStorage.setItem("userCart", JSON.stringify(cart));
    }
  }, [cart]);
  const addToCartHandler = () => {
    dispatch(
      cartAction.addItem({
        id: productId,
        price: product.price,
        name: product.title,
        image: product.image,
        amount: 1,
      })
    );
    enqueueSnackbar("You have added an item", { variant: "info" });
  };
  const Loading = (
    <div className={classes.product}>
      <div className={classes["product__preview"]}>
        <Skeleton height={200} width={200}/>
      </div>
      <div className={classes["product__overview"]}>
        <h3 className={classes["product__category"]}>
          <Skeleton count={1} width={100} />
        </h3>
        <p className={classes["product__name"]}>
          <Skeleton count={1} width={400} />
        </p>
        <p className={classes["product__rating"]}>
          <Skeleton count={1} width={100} />
        </p>
        <h2 className={classes["product__price"]}>
          <Skeleton count={1} width={100} />
        </h2>
        <p className={classes["product__desc"]}>
          <Skeleton count={5} width={400} />
        </p>
        <div>
          <Skeleton count={1} width={80} />
        </div>
      </div>
    </div>
  );
  if (isLoading) {
    return <div>{Loading}</div>;
  }
  return (
    <div className={classes.product}>
      <div className={classes["product__preview"]}>
        <img src={product.image} alt={product.title} />
      </div >
      <div className={classes["product__overview"]}>
        <h3 className={classes["product__category"]}>{product.category}</h3>
        <p className={classes["product__name"]}>{product.title}</p>
        <p className={classes["product__rating"]}>
          Rating {product.rating && product.rating.rate}{" "}
          
            
            <StarOutlined className={classes["rate__icon"]}/>
          
        </p>
        <h2 className={classes["product__price"]}>$ {product.price}</h2>
        <p className={classes["product__desc"]}>{product.description}</p>
        <div>
          <button        
            className={classes["product__btn"]}
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
          <NavLink className={classes["product__link"]} to="/cart">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SelectedProduct;
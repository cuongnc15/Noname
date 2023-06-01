import classes from "./productList.module.css";
import ProductItem from "./ProductItem";

const ProductList = (props: any) => {
  const { items } = props;
  return (
    <ul className={classes["product__list"]}>
      {props.items.map((item: any) => (
        <ProductItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ProductList;
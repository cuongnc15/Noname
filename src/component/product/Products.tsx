import { useEffect, useRef, useState } from "react";
import ProductList from "./ProductList";
import classes from "./products.module.css";
import { Skeleton } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const inputSearchRef = useRef("");

  const itemChooseHandler = (event: any) => {
    const { id, name } = event.target;
    setIsActive(+id);
    if (name === "All") {
      setFilteredItems((prevItems) =>
        prevItems.splice(prevItems.length).concat(items)
      );
    } else {
      const filteredArr = items
        .slice(0)
        .filter((item: any) => item.category === name.toLowerCase());
      setFilteredItems((prevItems) =>
        prevItems.splice(prevItems.length).concat(filteredArr)
      );
    }
  };
  const itemSearchHandler = () => {
    const valueSearch = inputSearchRef.current.toLowerCase();
    const updateList = items
      .slice()
      .filter((item: any) => item.title.toLowerCase().includes(valueSearch));

    setFilteredItems(updateList);
    inputSearchRef.current = "";
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      itemSearchHandler();
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems((prevItems) => prevItems.concat(data));
      setFilteredItems((prevItems) => prevItems.concat(data));
      setIsLoading(false);
    };
    getProducts();
  }, []);
  const categories = [
    {
      id: "",
      name: "All",
    },
    {
      id: "",
      name: "Men's Clothing",
    },
    {
      id: "",
      name: "Women's Clothing",
    },
    {
      id: "",
      name: "Jewelery",
    },
    {
      id: "",
      name: "Electronics",
    },
  ];
  const btnList = (
    <ul className={classes["button__list"]}>
      {categories.map((cat) => (
        <li key={cat.id}>
          <button
            className={
              isActive.toString() === cat.id
                ? `${classes["btn__active"]}`
                : `${classes.btn}`
            }
            id={cat.id}
            name={cat.name}
            onClick={itemChooseHandler}
          >
            {cat.name}
          </button>
        </li>
      ))}
    </ul>
  );
  const loading = (
    <div>
      <div className={classes.mb}>
        <Skeleton/>
      </div>
      <div className={classes.mb}>
        <Skeleton />
      </div>
      <div className={classes.mb}>
        <Skeleton />
      </div>
      <div className={classes.mb}>
        <Skeleton />
      </div>
    </div>
  );
  return (
    <div className={classes.products}>
      <h1>Latest products </h1>
      <div className={classes["products__search"]}>
        <input type="text" />
        <SearchOutlined 
        onClick={itemSearchHandler}
        />
      </div>
      {btnList}
      <div className="container">
        {isLoading && loading}
        {filteredItems.length === 0 && !isLoading && <h3>No items found!</h3>}
        {!isLoading && <ProductList items={filteredItems} />}
      </div>
    </div>
  );
};
export default Products;
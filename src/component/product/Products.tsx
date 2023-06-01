import { useEffect, useRef, useState } from "react";
import ProductList from "./ProductList";
import classes from "./products.module.css";
import { SearchOutlined } from "@ant-design/icons";
import Skeleton from "react-loading-skeleton";
const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const inputSearchRef = useRef<any>("");

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
    const valueSearch = inputSearchRef.current.value.toLowerCase();
    const updateList = items
      .slice()
      .filter((item: any) => item.title.toLowerCase().includes(valueSearch));

    setFilteredItems(updateList);
    console.log(valueSearch);
  };
  const handleKeyPress = (event: any) => {
    
    if (event.key === "Enter") {
      itemSearchHandler();
      console.log("asa");
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
      id: "1",
      name: "All",
    },
    {
      id: "2",
      name: "Men's Clothing",
    },
    {
      id: "3",
      name: "Women's Clothing",
    },
    {
      id: "4",
      name: "Jewelery",
    },
    {
      id: "5",
      name: "Electronics",
    },
  ];
  const btnList = (
    <div className={classes["button__list"]}>
      {categories.map((cat) => (
        <div key={cat.id}>
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
        </div>
      ))}
    </div>
  );
  const loading = (
    <div>
      <div className={classes.mb}>
        <Skeleton height={100} width={900}/>
      </div>
      <div className={classes.mb}>
        <Skeleton height={100} width={900}/>
      </div>
      <div className={classes.mb}>
        <Skeleton height={100} width={900}/>
      </div>
      <div className={classes.mb}>
        <Skeleton height={100} width={900}/>
      </div>
    </div>
  );
  return (
    <div className={classes.products}>
      <h1>Latest products </h1>
      <div className={classes["products__search"]}>
        <input type="text" ref={inputSearchRef} onKeyDown={handleKeyPress}/>
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
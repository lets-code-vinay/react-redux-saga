import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  emptyProduct,
  getProducts,
  removeProduct,
} from "../../redux/products.actions";
import "./style.css";

const cart = [{ name: "iPhone 14 pro max", id: "10", manufacturer: "Apple" }];

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const handleProductData = (type) => () => {
    if (type === "add") dispatch(addProduct(cart));
    if (type === "remove") dispatch(removeProduct());
    if (type === "empty") dispatch(emptyProduct());

    // firing action to getDispatch
    if (type === "get") dispatch(getProducts());
  };

  const abc = {
    brand: "Apple",
    category: "smartphones",
    description: "An apple mobile which is nothing like apple",
    discountPercentage: 12.96,
    id: 1,
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
    length: 5,
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    title: "iPhone 9",
  };

  return (
    <>
      <div style={style.buttons} className="button">
        <button onClick={handleProductData("get")}>Get Products</button>
        <button onClick={handleProductData("add")}>Add Product</button>
        <button onClick={handleProductData("remove")}>Remove Product</button>
        <button onClick={handleProductData("empty")}>Empty Product</button>
      </div>

      <div className="product-body">
        {products.map(
          (
            {
              brand = "",
              category = "",
              description = "",
              discountPercentage = 0,
              id = 0,
              images = [],
              thumbnail = "",
              price = 0,
              rating = 0,
              stock = 0,
              title = "",
            },
            index
          ) => {
            return (
              <div class="product" key={`${id}-${index}-${title}`}>
                <img class="item-image" src={thumbnail} alt={title} />
                <h3 class="sub-title">{title}</h3>
                <h5 class="brand">
                  Brand:<strong>{brand}</strong>
                </h5>
                <p class="category">
                  Category:<strong>{category}</strong>
                </p>
                <p class="surfboard-price">
                  Starts at <strong>${price}</strong>
                </p>
                <p class="description">
                  Description: <strong>{description}</strong>
                </p>
                <p class="rating">
                  Rating:<strong>{rating}</strong>
                </p>
                <p class="stock">
                  In Stock:<strong>{stock}</strong>
                </p>
                <p class="discountPercentage">
                  Discount:<strong>{discountPercentage}%</strong>
                </p>

                <a href="/" class="button">
                  BUY
                </a>
                <button>Add to cart</button>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Product;

const style = {
  buttons: {
    // marginTop: "10%",
  },
};

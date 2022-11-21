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
                <div class="item-sub-image-container">
                  {images.map((image, index) => {
                    if (index > 3) return "";
                    return (
                      <img class="item-sub-image" src={image} alt={title} />
                    );
                  })}
                </div>
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

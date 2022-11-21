import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/actions";
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

  React.useEffect(() => {
    // firing action to getDispatch
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div style={style.buttons} className="button">
        {/* <button onClick={handleProductData("get")}>Get Products</button>
        <button onClick={handleProductData("add")}>Add Product</button>
        <button onClick={handleProductData("remove")}>Remove Product</button> */}
        <button onClick={handleProductData("empty")}>Empty Product</button>
      </div>

      <div className="product-body">
        {products.map((cart, index) => {
          const {
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
          } = cart || {};
          return (
            <div className="product" key={`${id}-${index}-${title}`}>
              <img className="item-image" src={thumbnail} alt={title} />
              <div className="item-sub-image-container">
                {images.map((image, index) => {
                  if (index > 3) return "";
                  return (
                    <img
                      key={index}
                      className="item-sub-image"
                      src={image}
                      alt={title}
                    />
                  );
                })}
              </div>
              <h3 className="sub-title">{title}</h3>
              <h5 className="brand">
                Brand:<strong>{brand}</strong>
              </h5>
              <p className="category">
                Category:<strong>{category}</strong>
              </p>
              <p className="surfboard-price">
                Starts at <strong>${price}</strong>
              </p>
              <p className="description">
                Description: <strong>{description}</strong>
              </p>
              <p className="rating">
                Rating:<strong>{rating}</strong>
              </p>
              <p className="stock">
                In Stock:<strong>{stock}</strong>
              </p>
              <p className="discountPercentage">
                Discount:<strong>{discountPercentage}%</strong>
              </p>

              <a href="/" className="button">
                BUY
              </a>
              <button onClick={dispatch(addToCart(cart))}>Add to cart</button>
              <button onClick={dispatch(removeToCart(id))}>
                Remove from cart
              </button>
            </div>
          );
        })}
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

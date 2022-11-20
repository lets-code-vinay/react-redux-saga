import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../redux/actions";

const cart = [{ name: "iPhone 14 pro max", id: "10", manufacturer: "Apple" }];

function Cart() {
  const dispatch = useDispatch();
  const handleCartData = (type) => () => {
    if (type === "add") dispatch(addToCart(cart));
    if (type === "remove") dispatch(removeToCart());
  };

  return (
    <>
      <div style={style.button} className="button">
        <button onClick={handleCartData("add")}>Add</button>
        <button onClick={handleCartData("remove")}>Remove</button>
      </div>
    </>
  );
}

export default Cart;

const style = {
  button: {
    // marginTop: "10%",
  },
};

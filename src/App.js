import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/actions";
import Navbar from "./Components/Navbar";

const cart = { name: "iPhone 14 pro max", id: "10", manufacturer: "Apple" };
function App() {
  const dispatch = useDispatch();
  const getCartData = () => {
    dispatch(addToCart(cart));
  };
  return (
    <>
      <Navbar />
      <button onClick={getCartData}>Click</button>
    </>
  );
}

export default App;

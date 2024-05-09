import { CartContainer } from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(calculateTotal());
  }, [cartItems]);
  useEffect(() => {
    Dispatch(getCartItems());
  }, []);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;

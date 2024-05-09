import { useDispatch,useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { clearCart} from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
export const CartContainer = () => {
  const Dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => {
    return state.cart;
  });

  if (amount < 1) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total
            <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>Dispatch(openModal())}>Clear Cart</button>
      </footer>
    </section>
  );
};

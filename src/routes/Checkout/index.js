import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import CheckoutItem from "../../components/CheckoutItem";
import "./style.scss";

const Checkout = () => {
  const { cartItems, total } = useContext(CartDropdownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;

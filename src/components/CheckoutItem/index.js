import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import "./style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { deleteItemFromCart, addItemsToCart, removeItemFromCart } =
    useContext(CartDropdownContext);

  const decrementHandler = () => removeItemFromCart(cartItem);
  const incrementhandler = () => addItemsToCart(cartItem);
  const removeHandler = () => deleteItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementhandler}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

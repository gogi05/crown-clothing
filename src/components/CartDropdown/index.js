import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BUTTON_TYPE } from "../Button";
import CartItem from "../CartItem";
import {
  StyledCartDropdownContainer,
  StyledEmptyMessage,
  StyledCartItems,
  StyledButton,
} from "./style.js";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <StyledCartDropdownContainer>
      {cartItems ? (
        <>
          <StyledCartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </StyledCartItems>
          <StyledButton onClick={checkoutHandler} buttonType={BUTTON_TYPE.BASE}>
            GO TO CHECKOUT
          </StyledButton>
        </>
      ) : (
        <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
      )}
    </StyledCartDropdownContainer>
  );
};

export default CartDropdown;

import { useContext } from "react";

import {
  StyledCartIconContainer,
  StyledShoppingIcon,
  StyledItemCount,
} from "./style.js";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const CartIcon = () => {
  const { toggleCartState, setToggleCartState, totalQuantity } =
    useContext(CartDropdownContext);
  const toggleFn = () => {
    setToggleCartState(!toggleCartState);
  };

  return (
    <StyledCartIconContainer onClick={toggleFn}>
      <StyledShoppingIcon />
      <StyledItemCount>{totalQuantity}</StyledItemCount>
    </StyledCartIconContainer>
  );
};

export default CartIcon;

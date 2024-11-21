import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  StyledNavigation,
  StyledNavLinksContainer,
  StyledLogoContainer,
  StyledLink,
} from "./style";

import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";

import { CartDropdownContext } from "../../context/cartDropdownContext";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { toggleCartState } = useContext(CartDropdownContext);

  const signOutHandler = async () => {
    await signOutUser();
    await setCurrentUser(null);
  };

  return (
    <>
      <StyledNavigation>
        <StyledLogoContainer to="/">
          <Logo />
        </StyledLogoContainer>
        <StyledNavLinksContainer>
          <StyledLink to="/shop">SHOP</StyledLink>
          {currentUser ? (
            <StyledLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </StyledLink>
          ) : (
            <StyledLink to="/auth">SIGN IN</StyledLink>
          )}
          <CartIcon />
        </StyledNavLinksContainer>
        {toggleCartState && <CartDropdown />}
      </StyledNavigation>
      <Outlet />
    </>
  );
};

export default Navigation;

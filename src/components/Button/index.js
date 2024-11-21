import { BaseButton, GoogleButton, InvertedButton } from "./style.js";

export const BUTTON_TYPE = {
  BASE: BaseButton,
  GOOGLE: GoogleButton,
  INVERTED: InvertedButton,
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = BUTTON_TYPE[buttonType] || BaseButton;
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

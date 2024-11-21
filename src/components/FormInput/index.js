import { StyledGroup, StyledLabel, StyledInput } from "./style.js";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <StyledGroup>
      <StyledInput {...otherProps} />
      {label && (
        <StyledLabel shrink={otherProps.value.length}>{label}</StyledLabel>
      )}
    </StyledGroup>
  );
};

export default FormInput;

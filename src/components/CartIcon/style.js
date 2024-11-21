import styled from "styled-components";
import { ReactComponent as ShoppinSvg } from "../../assets/shopping-bag.svg";

export const StyledCartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledShoppingIcon = styled(ShoppinSvg)`
  width: 24px;
  height: 24px;
`;

export const StyledItemCount = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

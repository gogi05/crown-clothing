import { useContext } from "react";
import Button, { BUTTON_TYPE } from "../Button";
import "./style.scss";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemsToCart } = useContext(CartDropdownContext);

  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE.INVERTED}
        onClick={() => addItemsToCart(product)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

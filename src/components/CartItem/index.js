import "./style.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="class-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

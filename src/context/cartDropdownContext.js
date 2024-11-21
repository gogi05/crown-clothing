import { createContext, useEffect, useState } from "react";

export const CartDropdownContext = createContext({
  toggleCartState: false,
  setToggleCartState: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  total: 0,
});

const addItem = (cartItems, productItem) => {
  const existingItem = cartItems.find((item) => item.id === productItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productItem, quantity: 1 }];
  }
};

const removeItem = (cartItems, cartItemToRemove) => {
  const removeItem = cartItems.find((item) => item.id === cartItemToRemove.id);

  if (removeItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const deleteItem = (cartItems, itemToDelete) => {
  return cartItems.filter((item) => item.id !== itemToDelete.id);
};

export const CartDropdownContextProvider = ({ children }) => {
  const [toggleCartState, setToggleCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemsToCart = (productItem) => {
    setCartItems(addItem(cartItems, productItem));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (itemToDelete) => {
    setCartItems(deleteItem(cartItems, itemToDelete));
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotalQuantity(newTotal);
  }, [cartItems]);
  useEffect(() => {
    const finalTotal = cartItems.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setTotal(finalTotal);
  }, [cartItems]);

  const togglevalue = {
    toggleCartState,
    setToggleCartState,
    addItemsToCart,
    removeItemFromCart,
    cartItems,
    totalQuantity,
    deleteItemFromCart,
    total,
  };

  return (
    <CartDropdownContext.Provider value={togglevalue}>
      {children}
    </CartDropdownContext.Provider>
  );
};

import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  cartCounter: 0,
  totalCounter: 0,
  isCartOpen: false,
  getItemQuantity: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteItemToCart: () => {},
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  const getItemQuantity = (id) => {
    const quantity = cartItems.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = (product) => {
    const quantity = getItemQuantity(product.id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const removeOneToCart = (product) => {
    const quantity = getItemQuantity(product.id);

    if (quantity === 1) {
      deleteItemToCart(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const deleteItemToCart = (product) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== product.id;
      })
    );
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCounter(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCounter = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalCounter(newTotalCounter);
  }, [cartItems]);

  const value = {
    cartItems,
    isCartOpen,
    cartCounter,
    totalCounter,
    getItemQuantity,
    addOneToCart,
    removeOneToCart,
    deleteItemToCart,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

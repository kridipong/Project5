import React, { useState } from "react";

const DUMMY_LIST = [{ id: "1", meal: "Capucino", amount: "120" }];

const StatusContext = React.createContext({
  cartItem: DUMMY_LIST,
  showCart: false,
  onShowCart: () => {}, //passing function
  onHideCart: () => {},
  addItem:(item) => {},
  removeItem:(id) => {},
});

export const StatusContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState(DUMMY_LIST);

  const addCartHandler =(item)=>{



  }

  const removeCartHandler =(id) => {


  }

  const showCartHandler = () => {
    setShowCart(true);
    console.log(showCart);
  };

  const hideCartHandler = () => {
    setShowCart(false);
    console.log(showCart);
  };

  return (
    <StatusContext.Provider
      value={{
        cartItem: cartItems,
        showCart: showCart,
        onShowCart: showCartHandler,
        onHideCart: hideCartHandler,
        addItem:addCartHandler,
        removeItem:removeCartHandler,
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusContext;

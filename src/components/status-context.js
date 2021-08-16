import React, { useState, useReducer } from "react";

// const DUMMY_LIST = [{ id: "1", meal: "Capucino", amount: 2, price: 120 }];

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = +state.totalAmount + action.item.price*action.item.amount;
    // console.log(state.totalAmount);
    // console.log(action.item.price);
    // console.log(action.item.amount);
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }

  if (action.type === "REMOVE") {
  }

  return { items: [], totalAmount: 0 };
};

const StatusContext = React.createContext({
  cartItem: [],
  totalAmount:0,
  showCart: false,
  onShowCart: () => {}, //passing function
  onHideCart: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const StatusContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);


  const [cartState, dispacthCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addCartHandler = (item) => {
    dispacthCartAction({ type: "ADD", item: item });
  };

  const removeCartHandler = (id) => {
    dispacthCartAction({ type: "REMOVE", id: id });
  };

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
        cartItem: cartState.items,
        totalAmount:cartState.totalAmount,
        showCart: showCart,
        onShowCart: showCartHandler,
        onHideCart: hideCartHandler,
        addItem: addCartHandler,
        removeItem: removeCartHandler,
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusContext;

import React, { useState, useReducer } from "react";

// const DUMMY_LIST = [{ id: "1", meal: "Capucino", amount: 2, price: 120 }];

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {


    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
  
    let updatedItems;

    if (!(existingCartItem == null)) {

      let updatedItem = {...existingCartItem, amount: existingCartItem.amount+action.item.amount};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
    +state.totalAmount + action.item.price * action.item.amount;


    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
  }

                                                                                                                                                                                          

  return { items: [], totalAmount: 0 };
};

const StatusContext = React.createContext({
  cartItem: [],
  totalAmount: 0,
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

  };

  const hideCartHandler = () => {
    setShowCart(false);

  };

  return (
    <StatusContext.Provider
      value={{
        cartItem: cartState.items,
        totalAmount: cartState.totalAmount,
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

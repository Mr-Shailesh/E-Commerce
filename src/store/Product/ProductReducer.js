export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_SINGLE_ITEM = "REMOVE_SINGLE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

const initialState = {
  data: [],
  loading: false,
  cartItem: [],
  cartTotal: 0,
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true };

    case GET_DATA_SUCCESS:
      return { ...state, data: payload, loading: false };

    case ADD_TO_CART:
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItem = [...state.cartItem];
        updatedCartItem[existingItemIndex] = {
          ...updatedCartItem[existingItemIndex],
          quantity: updatedCartItem[existingItemIndex].quantity + 1,
        };

        const updatedCartTotal =
          state.cartTotal + updatedCartItem[existingItemIndex].price;

        return {
          ...state,
          cartItem: updatedCartItem,
          cartTotal: updatedCartTotal,
        };
      } else {
        const newItem = { ...payload, quantity: 1 };
        const updatedCartTotal = state.cartTotal + newItem.price;

        return {
          ...state,
          cartItem: [...state.cartItem, newItem],
          cartTotal: updatedCartTotal,
        };
      }

    case REMOVE_SINGLE_ITEM:
      const itemToRemove = state.cartItem.find((item) => item.id === payload);
      if (!itemToRemove) {
        return state;
      }

      if (itemToRemove.quantity > 1) {
        const updatedCartItem = state.cartItem.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        );

        const updatedCartTotal = state.cartTotal - itemToRemove.price;

        return {
          ...state,
          cartItem: updatedCartItem,
          cartTotal: updatedCartTotal,
        };
      } else {
        const updatedCartItem = state.cartItem.filter(
          (item) => item.id !== payload
        );
        const updatedCartTotal = state.cartTotal - itemToRemove.price;

        return {
          ...state,
          cartItem: updatedCartItem,
          cartTotal: updatedCartTotal,
        };
      }

    case REMOVE_ITEM:
      const itemToRemoveCompletely = state.cartItem.find(
        (item) => item.id === payload
      );
      if (!itemToRemoveCompletely) {
        return state;
      }

      const updatedCartItemCompletely = state.cartItem.filter(
        (item) => item.id !== payload
      );
      const updatedCartTotalCompletely =
        state.cartTotal -
        itemToRemoveCompletely.price * itemToRemoveCompletely.quantity;

      return {
        ...state,
        cartItem: updatedCartItemCompletely,
        cartTotal: updatedCartTotalCompletely,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItem: [],
        cartTotal: 0,
      };

    default:
      return state;
  }
};

import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_DATA_REQUEST,
  REMOVE_ITEM,
  REMOVE_SINGLE_ITEM,
} from "./ProductReducer";

export const getProductData = () => ({
  type: GET_DATA_REQUEST,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const removeSingleItem = (itemId) => ({
  type: REMOVE_SINGLE_ITEM,
  payload: itemId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

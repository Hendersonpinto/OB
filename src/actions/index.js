import { ADD_TO_CART } from "./types";
import { REMOVE_FROM_CART } from "./types";
import { SHOW_MODAL } from "./types";
import { FILTER_PRODUCTS } from "./types";
import { CHECK_OUT } from "./types";

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
};

export const checkOut = () => {
  return {
    type: CHECK_OUT,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const filterProducts = (filterElement) => {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      filterBy: filterElement.dataset.filterattr,
      filterValue: filterElement.dataset.filtervalue,
    },
  };
};

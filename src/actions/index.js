import { ADD_TO_CART } from "./types";
import { SHOW_MODAL } from "./types";
import { FILTER_PRODUCTS } from "./types";

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
};

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const filterProducts = (filterElement) => {
  console.log("My filter element is");
  console.dir(filterElement);
  console.log(filterElement.dataset.filtervalue);
  console.log(filterElement.dataset.filterattr);

  return {
    type: FILTER_PRODUCTS,
    payload: {
      filterBy: filterElement.dataset.filterattr,
      filterValue: filterElement.dataset.filtervalue,
    },
  };
};

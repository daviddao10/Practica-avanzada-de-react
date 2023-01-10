import { SET_PRODUCTS } from "./tipos";

export const setProducts = (payload: object) => ({
  type: SET_PRODUCTS,
  payload,
});

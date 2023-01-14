import { setAuthorizationHeader } from "../../api/api";
import { deleteProducts } from "../../api/service/setProducts";
import {
  DELETE_PRODUCTS,
  REMEMBER,
  SET_LOADING,
  SET_PRODUCTS,
  LOGIN,
  SET_SEARCH,
} from "./tipos";

export const setProducts = (payload: object) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

export const setSearch = (payload: any) => {
  return {
    type:SET_SEARCH,
    payload
  }

};

export const setDeletedProducts = (payload: string) => {
  deleteProducts(payload);
  
  return {
    type: DELETE_PRODUCTS,
    payload,
  };
};
export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setAutho = (payload: any) => {
  return { type: LOGIN, payload };
};

export const setRELogging = (payload: any) => {
  setAuthorizationHeader(payload);

  return { type: LOGIN, payload };
};

import {
  DELETE_PRODUCTS,
  LOGIN,
  SET_LOADING,
  SET_PRODUCTS,
  SET_SEARCH,
} from "../action/tipos";

import { TypeProducts } from "../../Types/Products";

const initialState: {
  products: Array<TypeProducts>;
  loadingProducts: boolean;
  stautsSearch: boolean;
  Search: Array<TypeProducts>;
  auth: boolean;
  token: string;
} = {
  products: [],
  loadingProducts: true,
  stautsSearch: false,
  Search: [],
  auth: false,
  token: "",
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loadingProducts: action.payload };

    case DELETE_PRODUCTS:
      const newProducts = state.products.filter((product) => {
        return !(product.id === action.payload);
      });

      const productosSearch = state.Search.filter((product) => {
        return !(product.id === action.payload);
      });


      return { ...state, products: newProducts,Search:productosSearch };




    case LOGIN:
      return {
        ...state,
        auth: action.payload.remember,
        token: action.payload.token.accessToken,
      };

    case SET_SEARCH:

      if (!!action.payload) {
        const search = state.products.filter((product) => {
          return product.name === action.payload;
        });

        return { ...state, Search: search ,stautsSearch:true};
      }
      if (!action.payload){

        return {...state, stautsSearch:false}

      }
      return state;

    default:
      return state;
  }
};

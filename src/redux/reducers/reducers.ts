import { DELETE_PRODUCTS, LOGIN, REMEMBER, SET_LOADING, SET_PRODUCTS } from "../action/tipos";
import { deleteProducts } from "../../api/service/setProducts";
const initialState = {
  products: [],
  loadingProducts: true,
  auth:false,

};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loadingProducts: action.payload };

    case DELETE_PRODUCTS:
      return state;

    case LOGIN:
      //console.log("🚀 ~ file: Products.ts:25 ~ producstReducer ~  { ...state, remember: action.payload.remember}",  { ...state, auth: action.payload})
      return  { ...state, auth: action.payload};
      

    default:
      return state;
  }
};

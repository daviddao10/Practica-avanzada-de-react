import { DELETE_PRODUCTS, REMEMBER, SET_LOADING, SET_PRODUCTS } from "../action/tipos";
import { deleteProducts } from "../../api/service/setProducts";
const initialState = {
  products: [],
  loadingProducts: false,
  token:'',
  remember:false,

};

export const producstReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loadingProducts: action.payload };

    case DELETE_PRODUCTS:
      return state;

    case REMEMBER:
      //console.log("🚀 ~ file: Products.ts:25 ~ producstReducer ~  { ...state, remember: action.payload.remember}",  { ...state, remember: action.payload})
      return  { ...state, remember: action.payload};
      

    default:
      return state;
  }
};

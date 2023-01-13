import { DELETE_PRODUCTS, LOGIN, REMEMBER, SET_LOADING, SET_PRODUCTS } from "../action/tipos";
import { deleteProducts } from "../../api/service/setProducts";
import Product from "../../views/Products/CardProducts";
import { TypeProducts } from "../../Types/Products";

const initialState:{
  products: Array<TypeProducts>;
  loadingProducts: boolean;
  auth:boolean;
  token:string;
} = {
  products: [],
  loadingProducts: true,
  auth:false,
  token:''

}

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loadingProducts: action.payload };

    case DELETE_PRODUCTS:
      

      const newProducts = state.products.filter((product)=>{
        return !(product.id ===action.payload)
      })
      return {...state,products:newProducts }

    case LOGIN:
      
      return  { ...state, auth: action.payload.remember,token:action.payload.token.accessToken };
      

    default:
      return state;
  }
};

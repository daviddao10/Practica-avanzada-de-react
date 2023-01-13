
import { setAuthorizationHeader } from "../../api/api";
import { DELETE_PRODUCTS, REMEMBER, SET_LOADING, SET_PRODUCTS,LOGIN } from "./tipos";


export const setProducts = (payload: object) => {
  //console.log("🚀 ~ file: index.ts:5 ~ setProducts ~ payload", payload);

  return {
    type: SET_PRODUCTS,
    payload,
  };
};
export const setDeletedProducts = (payload: string) => {
  return {
    type: DELETE_PRODUCTS,
    payload,
  };
};
export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setRemember =  (payload: any) => {
  
  return { type: LOGIN, payload };
};

export const setLogging =(payload:any)=>{

 setAuthorizationHeader(payload)
 
  return { type:LOGIN , payload };
}

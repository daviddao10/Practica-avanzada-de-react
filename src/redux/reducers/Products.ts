import { SET_PRODUCTS } from "../action/tipos";

const initialState = {
  products: [],
};

export const producstReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

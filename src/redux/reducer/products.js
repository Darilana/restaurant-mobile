import { SET_CLIENT_TABLE, ADD_TO_CART, SET_PRODUCTS, SET_PRODUCT } from "../actionTypes/products";

const initialState = {
	clientTable: null,
	products: [],
	selectedProduct: null,
    cartProducts: []
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CLIENT_TABLE:
			return {
				...state,
				clientTable: action.payload
			};
		case ADD_TO_CART:
			return {
				...state,
        cartProducts: [...state.cartProducts, action.payload],
			};
		case SET_PRODUCTS:
			return {
				...state,
				products: [...action.payload],
			};
    case SET_PRODUCT:
      return {
        ...state,
        selectedProduct: {...action.payload},
      };
		default:
			return state;
	}
};

export default reducer

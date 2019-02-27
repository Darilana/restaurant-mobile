import { SET_CLIENT_TABLE, ADD_TO_CART, SET_PRODUCTS, SET_PRODUCT } from "../actionTypes/products";

export const setClientTableAction = payload => ({
	type: SET_CLIENT_TABLE,
	payload
});

export const setProducts = products => ({
	type: SET_PRODUCTS,
	payload: products
});

export const setProduct = selectedProduct => ({
  type: SET_PRODUCT,
  payload: selectedProduct
});

export const addToCart = cartProducts => ({
  type: ADD_TO_CART,
  payload: cartProducts
});

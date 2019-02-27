import {productsListMock} from "../mocks";
import { setProducts, setProduct } from "../actions/products";

export const getProducts = () => async (dispatch) => {
	try {
		const response = await Promise.reject('Not implemented');
		dispatch(setProducts(response.data))
	} catch (error) {
		dispatch(setProducts(productsListMock))
	}
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const response = await Promise.reject('Not implemented');
    dispatch(setProduct(response.data));
  } catch (error) {
    dispatch(setProduct(productsListMock.find((item) => item.id === +id)));
  }
};

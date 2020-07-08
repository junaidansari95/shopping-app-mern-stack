import axios from 'axios';
import { history } from "../Assets/history";
export const getCartItems = () => dispatch => {
  dispatch({ type: 'GET_ALL_CART_ITEMS_REQUEST' })
  axios.get('/api/v1/cart')
    .then(result => {
      dispatch({ type: 'GET_ALL_CART_ITEMS_SUCCESS', payload: result.data.data })
    })
    .catch(err => {
      dispatch({ type: 'GET_ALL_CART_ITEMS_FAILURE', payload: err.response.data })
    });
};

export const addCartItem = (data) => dispatch => {
  dispatch({ type: 'ADD_CART_ITEM_REQUEST', data })
  axios.post('/api/v1/cart',data)
    .then(result => {
      dispatch({ type: 'ADD_CART_ITEM_SUCCESS', payload: result.data })
      getCartItems();
      history.push('/cart');
    })
    .catch(err => {
      dispatch({ type: 'ADD_CART_ITEM_FAILURE', payload: err.response.data })
    });
};

export const deleteCartItem = (id) => dispatch => {
  dispatch({ type: 'DELETE_CART_ITEM_REQUEST', id })
  axios.delete(`/api/v1/cart/${id}`)
    .then(result => {
      dispatch({ type: 'DELETE_CART_ITEM_SUCCESS', payload: result.success });
      dispatch(getCartItems())
    })
    .catch(err => {
      dispatch({ type: 'DELETE_CART_ITEM_FAILURE', payload: err.response.data })
    });
};

export const addToCart = (data) => dispatch => {
  console.log(" ADD TO CART Action called")
  dispatch({ type: "ADD TO CART", payload: data })
}
export const removeFromCart = (data) => dispatch => {
  console.log(" REMOVE FROM CART Action called")
  dispatch({ type: "REMOVE FROM CART", payload: data })
}
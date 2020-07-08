import axios from 'axios';

export const getProducts = () => dispatch => {
  dispatch({ type: 'GET_ALL_PRODUCTS_REQUEST' })
  axios.get('/api/v1/products')
    .then(result => {
      dispatch({ type: 'GET_ALL_PRODUCTS_SUCCESS', payload: result.data.data })
    })
    .catch(err => {
      dispatch({ type: 'GET_ALL_PRODUCTS_FAILURE', payload: err.response.data })
    });
};

export const addProducts = (data) => dispatch => {
  dispatch({ type: 'ADD_PRODUCT_REQUEST', data })
  axios.post('/api/v1/products')
    .then(result => {
      dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: result.data.data })
    })
    .catch(err => {
      dispatch({ type: 'ADD_PRODUCT_FAILURE', payload: err.response.data })
    });
};

export const deleteProducts = (id) => dispatch => {
  dispatch({ type: 'DELETE_PRODUCT_REQUEST', id })
  axios.delete(`/api/v1/products${id}`)
    .then(result => {
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: result.data.success })
    })
    .catch(err => {
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: err.response.data })
    });
};
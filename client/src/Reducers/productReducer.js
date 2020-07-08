const initialState = {};
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS_REQUEST':
            return {
                ...state, isGetProductsRequestLoading: true
            }
        case 'GET_ALL_PRODUCTS_SUCCESS':
            return {
                ...state, isGetProductsRequestLoading: false, all_products: action.payload
            }
        case 'GET_ALL_PRODUCTS_FAILURE':
            return {
                ...state, isGetProductsRequestLoading: false
            }
        case 'ADD_PRODUCT_REQUEST':
            return {
                ...state, isAddProductRequestLoading: true
            }
        case 'ADD_PRODUCT_SUCCESS':
            return {
                ...state, isAddProductRequestLoading: false, added_product: action.payload
            }
        case 'ADD_PRODUCT_FAILURE':
            return {
                ...state, isAddProductRequestLoading: false
            }
        case 'DELETE_PRODUCT_REQUEST':
            return {
                ...state, isDeleteProductRequestLoading: true
            }
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                ...state, isDeleteProductRequestLoading: false, product_deleted: action.payload
            }
        case 'DELETE_PRODUCT_FAILURE':
            return {
                ...state, isDeleteProductRequestLoading: false
            }
        default:
        return state;
    }
}
export { productReducer };
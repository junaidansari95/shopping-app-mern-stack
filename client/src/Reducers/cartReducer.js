const initialState = {};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CART_ITEMS_REQUEST':
            return {
                ...state, isGetAllCartItemRequestLoading: true
            }
        case 'GET_ALL_CART_ITEMS_SUCCESS':
            return {
                ...state, isGetAllCartItemRequestLoading: false, all_cartItems: action.payload
            }
        case 'GET_ALL_CART_ITEMS_FAILURE':
            return {
                ...state, isGetAllCartItemRequestLoading: false
            }
        case 'ADD_CART_ITEM_REQUEST':
            return {
                ...state, isAddCartItemRequestLoading: true
            }
        case 'ADD_CART_ITEM_SUCCESS':
            return {
                ...state, isAddCartItemRequestLoading: false, added_cartItem: action.payload
            }
        case 'ADD_CART_ITEM_FAILURE':
            return {
                ...state, isAddCartItemRequestLoading: false
            }
        case 'DELETE_CART_ITEM_REQUEST':
            return {
                ...state, isDeleteCartItemRequestLoading: true
            }
        case 'DELETE_CART_ITEM_SUCCESS':
            return {
                ...state, isDeleteCartItemRequestLoading: false, cartItem_deleted: action.payload
            }
        case 'DELETE_CART_ITEM_FAILURE':
            return {
                ...state, isDeleteCartItemRequestLoading: false
            }
        default:
        return state;
    }
}
export { cartReducer };



// const initialState = {
//     cart:[]
// };
// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD TO CART':
//             initialState.cart.push(action.payload)
//             return {
//                 ...state, cart: initialState.cart
//             }
//         case "REMOVE FROM CART":
//             let removeItem = action.payload
//             const index = initialState.cart.indexOf(removeItem);
//             initialState.cart.splice(index, 1);
//             const { cart } = initialState;
//             return {
//                     ...state, cart: cart
//                 }
//         default:
//         return state;
//     }
// }
// export { cartReducer };
import { ADD_ITEM, REMOVE_ITEM, DELETE_CART } from "../types";

// initial state

const initialState = {
    cart: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {

        //add item case
        case ADD_ITEM:
            const findItem = state.cart.findIndex((item) => item.id === action.payload.id)

            if (findItem >= 0) {
                state.cart[findItem].qtn += 1
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else {
                const item = { ...action.payload, qtn: 1 }
                return {
                    ...state,
                    cart: [...state.cart, item]
                }
            }

        //remove item case
        case REMOVE_ITEM:
            const findItemIndex = state.cart.findIndex((item) => item.id === action.payload.id)

            if (state.cart[findItemIndex].qtn >= 1) {
                state.cart[findItemIndex].qtn -= 1

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else if (state.cart[findItemIndex].qtn === 1) {
                const deleteCart = state.cart.filter((item) => item._id !== action.payload)
                return {
                    ...state,
                    cart: deleteCart
                }
            }

        //delete cart case
        case DELETE_CART:
            const deleteCart = state.cart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                cart: deleteCart
            }
        default:
            return state;
    }
}


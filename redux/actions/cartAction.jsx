import { ADD_ITEM, REMOVE_ITEM, DELETE_CART } from "../types";

// add item function for action

export const add_item = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

// remove item function for action

export const remove_item = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

// delete cart item function for action

export const delete_cart = (id) => {
    return {
        type: DELETE_CART,
        payload: id
    }
}
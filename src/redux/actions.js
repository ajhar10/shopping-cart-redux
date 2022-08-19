import {INCREMENT,DECREMENT,ADD_TO_CART} from './actionsTypes'

export const addToCart = (itemID)=>{
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const increment = (itemID)=>{
    return {
        type: INCREMENT,
        payload:{
            id: itemID
        }
    }
}

export const decrement = (itemID)=>{
    return {
        type: DECREMENT,
        payload:{
            id: itemID
        }
    }
}
import {actionTypes} from '../constants/action-types';

const initialState = {
    products:[]
}

export const productReducer = (state = initialState,action) => {
    const {type,payload} = action;
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products:payload
            }
            default:
            return state;
    }
    
}

export const selectedProductReducer = (state = {}, action) => {
    const {type,payload} = action;
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
        return {
            ...state,
            ...payload
        }
        default:
        return state;
    }
};
// import {
//     FETCHING_COIN_DATA,
//     FETCHING_COIN_DATA_SUCCESS,
//     FETCHING_COIN_DATA_FAIL
// } from './../Utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: null,
    hasError: false,
    errorMessage: null
}

export default function(state = initialState, action) {
     console.log('action.payload')
    switch(action.type) {

        case 'FETCHING_COIN_DATA':
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });

        case 'FETCHING_COIN_DATA_SUCCESS':
            console.log("action payload", action.payload.data)
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload.data,
                hasError: false,
                errorMessage: null
            });

        case 'FETCHING_COIN_DATA_FAIL':
            return Object.assign(state, {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            });

    
        default:
            return state;
    }
    
}
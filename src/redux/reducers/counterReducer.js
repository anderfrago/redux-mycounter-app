import * as types from "../actions/actionTypes";

export default function counterReducer(state=0, action) {
    switch (action.type) {            
        case types.INCREMENT:
            return  state + action.payload ;
        case types.DECREMENT:
            return state - action.payload;
        default:
            return   state;
    }
}
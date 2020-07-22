import * as types from "./actionTypes";

export function incrementCounter(amount) {
  return {
     type: types.INCREMENT,
      payload: 1 
    };
}

export function decrementCounter(amount) {
  return { 
    type: types.DECREMENT, 
    payload: 1 
  };
}

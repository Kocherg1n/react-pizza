import {SET_PIZZAS, SET_IS_LOADING} from './actionTypes';

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    payload: items
  }
};

export const setIsLoading = (value) => {
  return {
    type: SET_IS_LOADING,
    payload: value
  }
}

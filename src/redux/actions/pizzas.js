import {SET_PIZZAS, SET_IS_LOADING} from './actionTypes';

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
});

export const setIsLoading = (value) => ({
  type: SET_IS_LOADING,
  payload: value
});

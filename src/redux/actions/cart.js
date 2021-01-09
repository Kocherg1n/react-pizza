import {} from './actionTypes';
import {ADD_PIZZA_TO_CART} from './actionTypes';

export const addPizzaToCart = pizzaObj => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj
});



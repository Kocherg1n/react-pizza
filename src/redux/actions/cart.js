import {ADD_PIZZA_TO_CART, REMOVE_ALL_PIZZAS, REMOVE_CART_ITEM} from './actionTypes';

export const addPizzaToCart = pizzaObj => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj
});

export const removeAllPizzas = () => ({
  type: REMOVE_ALL_PIZZAS,
});

export const removeCartPizza = (pizzaId) => ({
  type: REMOVE_CART_ITEM,
  payload: pizzaId
});

import axios from 'axios'
import {setIsLoading, setPizzas} from './actions/pizzas'

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const order = (sortBy === 'name' ? '&_order=asc' : '&_order=desc');
  try {
    const {data} = await axios(`http://localhost:3001/pizzas${
      category !== 0 
        ? `?category=${category}&_sort=${sortBy}${order}` 
        : `?_sort=${sortBy}${order}`}`)

    dispatch(setPizzas(data));
    dispatch(setIsLoading(false))
  } catch (e) {
    console.log('SOME ERROR ', e)
  }

};

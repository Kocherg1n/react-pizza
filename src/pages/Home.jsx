import React, {useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import {fetchPizzas} from '../redux/middleware'

const plugs = Array(10).fill(0);
const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  {name: 'популярности', type: 'rating', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
  const dispatch = useDispatch();
  const {items, isLoading, sortBy, category} = useSelector(state => {
    return {
      items: state.pizzas.items,
      isLoading: state.pizzas.isLoading,
      sortBy: state.filters.sortBy,
      category: state.filters.category,
    }
  });

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [dispatch, category, sortBy]);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          categoryActive={category}
        />
        <SortPopup
          items={sortNames}
          activeSortType={sortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? plugs.map((el, idx) => <Loader key={el + idx}/>)
          : items.map((pizza, idx) => <PizzaBlock key={pizza.id} isLoading {...pizza}/>)}
      </div>
    </div>
  );
};

export default Home;

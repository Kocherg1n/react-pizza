import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'proptypes'
import Button from './Button';

const PizzaBlock = ({id, imageUrl, name, price, types, sizes, onClickAddPizza, cartItems}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const currentPizzaPrice = price[activeSize];

  const onSelectType = idx => setActiveType(idx);
  const onSelectSize = size => setActiveSize(size);
  const onAddPizza = () => {
    const pizzaObj = {
      id,
      imageUrl,
      name,
      price,
      size: activeSize,
      type: availableTypes[activeType]
    };
    onClickAddPizza(pizzaObj);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {
            availableTypes.map((type, idx) => (
              <li
                onClick={() => onSelectType(idx)}
                key={type + idx}
                className={classNames({
                  active: activeType === idx,
                  disabled: !types.includes(idx)
                })}
              >{type}</li>))
          }
        </ul>
        <ul>
          {
            availableSizes.map((size, idx) => (
              <li
                onClick={() => onSelectSize(size)}
                key={size + idx}
                className={classNames({
                  active: size === activeSize,
                  disabled: !sizes.includes(size)
                })}
              >{size} см. </li>))
          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {currentPizzaPrice} ₽</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"/>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"/>
          </svg>
          <span>Добавить</span>
          {cartItems && <i>{cartItems}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;

PizzaBlock.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
  cartItems: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.null])
};

PizzaBlock.defaultProps = {
  cartItems: null
};

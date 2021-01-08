import React, {useState} from 'react'
import classNames from 'classnames'
import plusSvg from '../assets/img/plus.svg'
import PropTypes from 'proptypes'

const PizzaBlock = ({imageUrl, name, price, types, sizes}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = idx => setActiveType(idx);
  const onSelectSize = size => setActiveSize(size);

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
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <img src={plusSvg} alt=''/>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

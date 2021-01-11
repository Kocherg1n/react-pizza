import React from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'proptypes'

import {setCategoryById} from '../redux/actions/filters'

const Categories = React.memo(({items, categoryActive}) => {
  const dispatch = useDispatch();
  const onSelectItemHandler = idx => dispatch(setCategoryById(idx));

  return (
    <div className='categories'>
      <ul>
        {
          items.map((item, idx) => {
            return (
              <li
                className={categoryActive === idx ? 'active' : ''}
                onClick={() => onSelectItemHandler(idx)}
                key={item + idx}
              >{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
});

Categories.propTypes = {
  items: PropTypes.array.isRequired,
  categoryActive: PropTypes.number.isRequired
};

Categories.defaultProps = {
  items: [],
  categoryActive: 0
};

export default Categories;

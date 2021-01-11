import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'proptypes'

import sortArrowSvg from '../assets/img/arrow-top.svg'
import {setSortBy} from '../redux/actions/filters'

const SortPopup = React.memo(({items, activeSortType}) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const dispatch = useDispatch();
  const sortRef = React.useRef(null);
  const activeLabel = items.find(obj => obj.type === activeSortType);

  const onTogglePopupHandler = () => setPopupIsVisible(!popupIsVisible);

  const onSelectCategoryHandler = type => {
    dispatch(setSortBy(type))
    setPopupIsVisible(false)
  };

  const onOutsidePopupClick = e => {
    const path = e.path || (e.composedPath && e.composedPath())
    if (!path.includes(sortRef.current)) {
      setPopupIsVisible(false)
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onOutsidePopupClick)
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={sortArrowSvg} className={popupIsVisible ? 'rotated' : ''} alt=''/>
        <b>Сортировка по:</b>
        <span onClick={onTogglePopupHandler}>{activeLabel.name}</span>
      </div>
      {
        popupIsVisible && (
          <div className="sort__popup">
            <ul>
              {
                items.map((item, idx) => {
                  return (
                    <li
                      onClick={() => onSelectCategoryHandler(item.type)}
                      className={activeSortType === item.type ? 'active' : ''}
                      key={item.type + idx}
                    >
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortType: PropTypes.string.isRequired
};

SortPopup.defaultProps = {
  items: [],
  activeSortType: 0
};

export default SortPopup;

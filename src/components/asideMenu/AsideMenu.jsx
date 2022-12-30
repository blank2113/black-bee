import React from 'react'
import './asideMenu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch} from 'react-redux'
import { getItem } from '../../store/slices/getAsideItem'



function AsideMenu() {
    const dispatch = useDispatch();
    const getAsideItem = useSelector(state => state.getAsideItem.value)

    const navItems =[{"id":1,"name": "Список товаров","icon":faList},{"id":2, "name": "Лучшие товары","icon":faCoins},{"id":3,"name":"Товары по скидку","icon":faPercent}]
  return (
    <div className='aside-menu'>
        <div className='aside-menu-inner'>
            <ul className='aside-menu-inner__nav'>
                {navItems.map(item => <li 
                className={item.name === getAsideItem ? "aside-menu-inner__nav-item active" : "aside-menu-inner__nav-item"}
                key={item.id} 
                onClick={()=> dispatch(getItem(item.name))}>
                    <span>{item.name}</span>
                    <FontAwesomeIcon icon={item.icon}/>
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default AsideMenu
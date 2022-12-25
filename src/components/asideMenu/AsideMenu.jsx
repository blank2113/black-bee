import React from 'react'
import './asideMenu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'

function AsideMenu() {
    const navItems =[{"id":1,"name": "Список товаров","icon":faList},{"id":2, "name": "Лучшие товары","icon":faCoins},{"id":3,"name":"Товары по скидку","icon":faPercent}]
  return (
    <div className='aside-menu'>
        <div className='aside-menu-inner'>
            <ul className='aside-menu-inner__nav'>
                {navItems.map(item => <li>
                    <span>{item.name}</span>
                    <FontAwesomeIcon icon={item.icon}/>
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default AsideMenu
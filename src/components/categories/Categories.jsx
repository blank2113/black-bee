import React from 'react'
import './categories.css'
import {useGetProductsQuery } from '../../store';
import { useSelector, useDispatch} from 'react-redux'
import {getCategoriesItem} from '../../store/getCategories'

function Categories() {
    const getCategories = useSelector(state => state.getCategories.value);
    const dispatch = useDispatch();
  const {data=[]} = useGetProductsQuery(); 
const arr = [...new Set( data.map(el => el.type))];
  return (
    <div className='categories'>
        <div className='categories-inner'>
            <ul className='categories-inner__nav'>
                {arr.map(item => <li key={item} 
                className={getCategories === item ? "categories-inner__nav-item active" :
              "categories-inner__nav-item" }
                onClick={()=> dispatch(getCategoriesItem(item))}>{item}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Categories
import React from 'react'
import './table.css'
import THead from './THead/THead'
import { useGetBestProductsQuery } from '../../store/bestProductApi';
import { useGetProductsQuery } from '../../store';
import { useGetBestSalesQuery } from '../../store/bestSalesApi';
import {useSelector, useDispatch} from 'react-redux';
import TBody from './TBody/TBody';
// import getItem from '../../store/getAsideItem'

function Table() {
  
  const {data:products=[]} = useGetProductsQuery();

  const {data:bestProducts=[],isError} = useGetBestProductsQuery();
  const {data: bestSales=[]} = useGetBestSalesQuery();
  const getAsideItemName = useSelector(state => state.getAsideItem.value)


  return (
    <div className='table'>
        <table>
          <THead/>
          <TBody data={  getAsideItemName === "Список товаров" ? products : 
          getAsideItemName === "Лучшие товары"? bestProducts : bestSales }/>
        </table>    
    </div>
  )
}

export default Table
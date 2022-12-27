import React from 'react'
import './tBody.css'
import {useSelector} from 'react-redux'
import { useGetProductsQuery } from '../../../store';

function TBody({data}) {
  const {data:product=[]} = useGetProductsQuery();
  const getCategories = useSelector(state => state.getCategories.value)
  
  console.log(getCategories);
  return (
    <tbody>
        {data === product? data.filter(el => getCategories === el.type).map(item => <tr 
        className='listed'
        key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.items.map(el => <td className='brand'>{el.brand}</td> )}</td>
            <td>{item.items.map(el => <td className='price'>{el.price}</td> )}</td>
            <td>{item.items.map(el => <td className='status'>{el.status}</td> )}</td>
        </tr>):data.map(item => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.prevPrice? item.prevPrice : "---"}</td> 
            <td>{item.price}</td> 
            <td>{item.status}</td> 
            </tr>)}
    </tbody>
  )
}

export default TBody
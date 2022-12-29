import React from 'react'
import {motion } from 'framer-motion'
import './tBody.css'
import {useSelector} from 'react-redux'
import { useGetProductsQuery } from '../../../store';


const container={
  hiden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      delayChildren: 3
    }
  }
}
const itemA = {
  hidden: { opacity: 0,scale: 0 },
  show: { opacity: 1,scale:1,transition:{
    duration: .5
  } }
}


function TBody({data}) {
  const {data:product=[]} = useGetProductsQuery();
  const getCategories = useSelector(state => state.getCategories.value)
  
  console.log(getCategories);
  return (
    <motion.tbody initial="hiden" animate="show" variants={container}>
        {data === product? data.filter(el => getCategories === el.type).map(item => <motion.tr 
        variants={itemA}
        initial="hidden" animate="show"
        className='listed'
        key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.items.map(el => <td className='brand'>{el.brand}</td> )}</td>
            <td>{item.items.map(el => <td className='price'>{el.price}</td> )}</td>
            <td>{item.items.map(el => <td className='status'>{el.status}</td> )}</td>
        </motion.tr>):data.map(item => <tr 
        key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.prevPrice? item.prevPrice : "---"}</td> 
            <td>{item.price}</td> 
            <td>{item.status}</td> 
            </tr>)}
    </motion.tbody>
  )
}

export default TBody
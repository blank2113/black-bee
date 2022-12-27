import React from 'react'
import './tHead.css'
import { useSelector} from 'react-redux'

function THead() {
  const getAsideItemName = useSelector(state => state.getAsideItem.value);
  const variant1 = ["ID","Категория","Бренд","Цена","Статус"];
  const variant2 = ["ID","Категория","Цена со скидкой","Цена","Статус"]
  return (
    <thead>
       <tr>
        {getAsideItemName === "Список товаров"? variant1.map(item => <td key={item}>{item}</td>):
        variant2.map(item => <td key={item}>{item}</td>)}
    </tr>
    </thead>
   
  )
}

export default THead
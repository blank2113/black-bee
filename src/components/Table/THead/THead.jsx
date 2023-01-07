import React from 'react'
import './tHead.css'


function THead() {
  const variant = ["ID","Тип","Категория","Бренд","Имя","Цена","Статус"];
  return (
    <thead>
       <tr>
        {variant.map(item => <td key={item}>{item}</td>)}
    </tr>
    </thead>
   
  )
}

export default THead
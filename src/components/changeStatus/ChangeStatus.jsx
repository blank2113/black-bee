import "./changeStatus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {  useSelector,useDispatch } from "react-redux";
import { motion} from 'framer-motion'
import { getActiveBtnValue } from "../../store/slices/getActiveBtn";
import { useState } from "react";
import axios from 'axios'

function ChangeStatus({active}) {
  const id = useSelector(state => state.getId.value)
  const[ stock, setStock] = useState('true')
  const[ popular, setPopular] = useState('true')
  const[ sales, setSales] = useState('true')
  const obj = {"in_sales":sales,
  "in_popular":popular,
"in_stock":stock}
const dispatch = useDispatch()

const handleSend= async(e)=>{
  axios({
    method:'POST',
    url: `http://164.92.147.133:8000/set_status?product_id=${Number(id)}`,
    data: obj,
    headers: {"Authorization" : `bearer ${sessionStorage.getItem('token')}`}
  }).then(res => console.log(res)).catch(e=> console.log(e))
  dispatch(getActiveBtnValue(false))
}

  return (
    <motion.div 
    initial={{scale:0,opacity:0}}
    animate={active ? {scale:1, opacity:1}: {scale:0,opacity:0}}
    exit={{opacity:0, scale:0}}
    className="chnage-status">
      <div className="selection">
        <p>Категория</p>
        <FontAwesomeIcon
          className="exit-btn-f"
          icon={faXmark}
          onClick={() => dispatch(getActiveBtnValue(false))}
        />
        <form>
          <div className="wrap-select-arrow">
            <label htmlFor="group">Наличие:</label>
            <select name="in_stoke" onChange={e=> setStock(e.target.value)} >
              <option name="true" value={true}>
                В наличии
              </option>
              <option name="false" value={false}>
                Нет в наличии
              </option>
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div> 
          <div className="wrap-select-arrow">
            <label htmlFor="in_popular">Лучшие товары:</label>
            <select name="in_popular" onChange={e => setPopular(e.target.value)}>
              <option name="true" value={true}>
                да
              </option>
              <option name="false" value={false}>
                нет
              </option>
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="wrap-select-arrow">
            <label htmlFor="in_sales">Товары по скидке:</label>
            <select name="in_sales" onChange={e => setSales(e.target.value)}>
              <option name="true" value={true}>
                да
              </option>
              <option name="false" value={false}>
                нет
              </option>
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
        </form>
        <div className="btns-status">
        <motion.button 
        initial={{scale:1}}
        whileHover={{scale:1.04}}
        whileTap={{scale:1.1}}
        onClick={handleSend} className="add_btn">Добавить</motion.button>
        <motion.button 
        initial={{scale:1}}
        whileHover={{scale:1.04}}
        whileTap={{scale:1.1}}
        className="delet-btn" onClick={()=> dispatch(getActiveBtnValue(false))}>Отменить</motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ChangeStatus;

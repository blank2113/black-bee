import React, { useState } from "react";
import "./addProdWindow.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
import axios from "axios";
import { useGetTypeQuery } from "../../store/middlewares/typeApi";
import { useGetAnimalsQuery } from "../../store/middlewares/animalsApi";
import { useGetBrandsQuery} from '../../store/middlewares/brandApi'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function AddProdWindow() {
  const {data:brand=[]} = useGetBrandsQuery()
  const {data:category=[]}= useGetAnimalsQuery()
  const {data:types=[]} = useGetTypeQuery()
  const [categoryType, setCategoryType] = useState('');
  const [type, setType]= useState('')
  const [option, setOption] = useState(1)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null)
  // const [addNewAnimals] = useAddNewAnimalsMutation();

  const dispatch = useDispatch();
  console.log(categoryType);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", Number(price));
    formData.append("status_id", '');
    formData.append("brand_id", Number(option));
    formData.append("type_id", Number(type));
    formData.append("category_id", Number(categoryType));
    formData.append("image", image);

    console.log(formData);

    axios({
      method: "post",
      url: "http://164.92.147.133:8000/product",
      data: formData,
      // headers: { "Content-Type": "multipart/form-data" },
    }).then(res => dispatch(getStatusValue(false)) && console.log(res)).catch(e => console.log(e))
  };

  return (
    <motion.div
      className="addProdWindow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="addProdWindow-inner"
      >
        
          <p>Создание товара</p>
      
        <form>
         <div className="prod-name">
         <label htmlFor="name">Имя:</label>
         <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className='input-name'
          />
         </div>
          <div className="prod-price">
            <label htmlFor="number">Цена:</label>
            <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            className='input-price'
          />
          </div>
          <div className="wrap-select-arrow">
          <label htmlFor="types">Бренд:</label>
            <select className="sform-control active" name="brand" id="brand" onChange={e => setOption(e.target.value)} >
              {brand.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
            <div className="select-arrow">
    <div className="arrow-up"></div>
    <div className="arrow-down"></div>
  </div>
          </div>
          <div className="wrap-select-arrow">
          <label htmlFor="category">Категория:</label>
            <select name="category" id="category" onChange={e => setCategoryType(e.target.value)}>
              {category.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
            <div className="select-arrow">
    <div className="arrow-up"></div>
    <div className="arrow-down"></div>
  </div>
          </div>
          <div className="wrap-select-arrow">
            <label htmlFor="types">Тип:</label>
            <select name="types" id="types" onChange={e => setType(e.target.value)}>
              {types.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
            <div className="select-arrow">
    <div className="arrow-up"></div>
    <div className="arrow-down"></div>
  </div>
          </div>
          <div className="prod-file">
            <label htmlFor="file">Картинка</label>            
          <input type="file" className="input-file" onChange={e => setImage(e.target.files[0])}/>
          </div>
          <div className="btns">
          <button onClick={handleSubmit} className="create-btn">Создать</button>
          <button  className="reset-btn" onClick={() => dispatch(getStatusValue(false))}>Отменить</button>
          </div>
          
        </form>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() => dispatch(getStatusValue(false))}/>
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;
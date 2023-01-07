import React, { useEffect, useState } from "react";
import "./addProdWindow.css";
import {
  getFormDataName,
  getFormDataPrice,
  getFormDataBrandId,
  getFormDataTypeId,
  getFormDataCategoryId
} from "../../store/slices/getFormData";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAddNewProductMutation } from "../../store/middlewares/productsApi";

function AddProdWindow({brand,category,types}) {
 
  const name = useSelector(state => state.getFormData.name)
  const price = useSelector(state => state.getFormData.price)
  const status_id = useSelector(state => state.getFormData.status_id)
  const brand_id = useSelector(state => state.getFormData.brand_id)
  const type_id = useSelector(state => state.getFormData.type_id)
  const category_id = useSelector(state => state.getFormData.category_id)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch();
  const [addNewProd, { isError }] = useAddNewProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("status_id", status_id);
    formData.append("brand_id", brand_id);
    formData.append("type_id", type_id);
    formData.append("category_id", category_id);
    formData.append("image", image);

    if (formData) {
      await addNewProd(formData);
    
    }
    dispatch(getStatusValue(false));
  };

  return (
    <motion.div className="addProdWindow">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="addProdWindow-inner"
      >
        <p>Создание товара</p>

        <form>
          <div className="prod-name">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => dispatch(getFormDataName(e.target.value))}
              className="input-name"
            />
          </div>
          <div className="prod-price">
            <label htmlFor="number">Цена:</label>
            <input
              type="number"
              name="price"
              onChange={(e) => dispatch(getFormDataPrice(e.target.value))}
              className="input-price"
            />
          </div>
          <div className="wrap-select-arrow">
            <label htmlFor="types">Бренд:</label>
            <select
              className="sform-control active"
              name="brand"
              id="brand"
              onChange={(e) => dispatch(getFormDataBrandId(e.target.value))}
            >
              {brand.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="wrap-select-arrow">
            <label htmlFor="category">Категория:</label>
            <select
              name="category"
              id="category"
              onChange={(e) => dispatch(getFormDataCategoryId(e.target.value))}
            >
              {category.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="wrap-select-arrow">
            <label htmlFor="types">Тип:</label>
            <select
              name="types"
              id="types"
              onChange={(e) => dispatch(getFormDataTypeId(e.target.value))}
            >
              {types.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="prod-file">
            <label htmlFor="file">Картинка</label>
            <input
              type="file"
              className="input-file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="btns">
            <button onClick={handleSubmit} className="create-btn">
              Создать
            </button>
            <button
              className="reset-btn"
              onClick={() => dispatch(getStatusValue(false))}
            >
              Отменить
            </button>
          </div>
        </form>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => dispatch(getStatusValue(false))}
        />
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;

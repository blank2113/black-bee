import React, { useState } from "react";
import "./addProdWindow.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
import axios from "axios";
import { useAddNewProductMutation } from "../../store/middlewares/productsApi";

function AddProdWindow() {
  // const [addNewProd, response] = useAddNewProductMutation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [addNewAnimals] = useAddNewAnimalsMutation();

  const dispatch = useDispatch();

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   const { name, price } = e.target.elements
  //   let formData = {
  //     name: name.value,
  //     price: price.value,
  //   }
  //   await addNewProd(formData)
  //     .unwrap()
  //     .then(() => {})
  //     .then((error) => {
  //       console.log(error)
  //     })
  // }

  // const handleSubmit = async ()=>{
  //   if(data.name){
  //     await addNewAnimals({name: data}).unwrap();
  //     setData('');
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", Number(price));
    formData.append("status_id", '');
    formData.append("brand_id", '');
    formData.append("type_id", '');
    formData.append("category_id", '');
    formData.append("image", '');

    console.log(formData);
    // JSON.stringify(formData)
    axios({
      method: "post",
      url: "http://164.92.147.133:8000/product",
      data: formData,
      // headers: { "Content-Type": "multipart/form-data" },
    }).then(res => console.log(res)).catch(e => console.log(e))
  };

  return (
    <motion.div
      //   initial={{ opacity: 0, scale: 0 }}
      //   whileInView={{ opacity: 1, scale: 1 }}
      className="addProdWindow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="addProdWindow-inner"
      >
        <form>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSubmit}>send</button>
        </form>
        <button onClick={() => dispatch(getStatusValue(false))}>close</button>
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;
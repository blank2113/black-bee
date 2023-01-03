import React, { useState} from "react";
import "./addProdWindow.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
import axios from "axios";
import { useAddNewProductMutation} from '../../store/middlewares/productsApi'

function AddProdWindow() {
  const [addNewProd, response] = useAddNewProductMutation();
  const [data, setData] = useState({
    name:"",
    price:""
  })
  // const [addNewAnimals] = useAddNewAnimalsMutation();
  
  const dispatch = useDispatch();
  
  const onSubmit = async (e) => {
    e.preventDefault()
    const { name, price } = e.target.elements
    let formData = {
      name: name.value,
      price: price.value,
    }
    await addNewProd(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error)
      })
  }

// const handleSubmit = async ()=>{
//   if(data.name){
//     await addNewAnimals({name: data}).unwrap();
//     setData('');
//   }
// }
// let formData = new FormData();
  
// console.log(formData);
//   const  handleSubmit = (event)=> {
//     event.preventDefault();
//     formData.append('name',data.name)
//     formData.append("price", Number(data.price))
   
//     // JSON.stringify(formData)
//     axios({
//       method: "post",
//       url: "http://164.92.147.133:8000/products",
//       data: formData,
//       headers: { "Content-Type": "multipart/form-data" },
//     }).then(res => console.log(res)).catch(e => console.log(e))
//   }
  

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
        <form action="" onSubmit={onSubmit}>
          <input type="text"  name="name" id="name" />
          <input type="number" name="price"  />
          <button type="submit" >send</button>
        </form>
        <button onClick={() => dispatch(getStatusValue(false))}>close</button>
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;

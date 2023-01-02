import React, { useState} from "react";
import "./addProdWindow.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
import axios from "axios";
import { useAddNewAnimalsMutation} from '../../store/middlewares/animalsApi'

function AddProdWindow() {
  const [data, setData] = useState('')
  // const [addNewAnimals] = useAddNewAnimalsMutation();
  
  const dispatch = useDispatch();


// const handleSubmit = async ()=>{
//   if(data.name){
//     await addNewAnimals({name: data}).unwrap();
//     setData('');
//   }
// }
let formData = new FormData();
  const getValues = (e) => {
    if(e.target ){
      formData.append('name', e.target.value)
    formData.append('price', e.target.value)
    }
    
  }

  const  handleSubmit = (event)=> {
    event.preventDefault();

   
    
    axios.post('http://164.92.147.133:8000/products',{formData}).then(res => console.log(res)).catch(e => console.log(e))
  }
  

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
          <input type="text"  name="name" id="name" onChange={getValues}/>
          <input type="number" name="price"  id="price" onChange={getValues}/>
          <button onClick={handleSubmit}>send</button>
        </form>
        <button onClick={() => dispatch(getStatusValue(false))}>close</button>
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;

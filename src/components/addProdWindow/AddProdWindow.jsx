import React, { useState, useRef } from "react";
import "./addProdWindow.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getStatusValue } from "../../store/slices/getStatus";
// import { useAddNewProductMutation } from "../../store/middlewares/productsApi";

function AddProdWindow() {
  const [newProductName, setNewProductName] = useState(null)
  const dispatch = useDispatch();
  const form = useRef(null)


  const submit = e => {
    e.preventDefault()
    const data = new FormData(form.current)
    fetch('http://164.92.147.133:8000/products', { method: 'POST', body: data })
      .then(res => res.json())
      .then(json => setNewProductName(json.newProductName))
  }
console.log(form);
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
        <form ref={form} onSubmit={submit}>
          <input type="text"  name={newProductName}/>
          <input type="number" />
          <input type="submit" />
        </form>
        <button onClick={() => dispatch(getStatusValue(false))}>close</button>
      </motion.div>
    </motion.div>
  );
}

export default AddProdWindow;

import React from "react";
import { motion } from "framer-motion";
import "./tBody.css";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../store/middlewares/productsApi";

const container = {
  hiden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 3,
    },
  },
};
const itemA = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function TBody({ data }) {
  const { data: product = [] } = useGetProductsQuery();
  const getCategories = useSelector((state) => state.getCategories.value);
  console.log();
  return (
    <motion.tbody initial="hiden" animate="show" variants={container}>
      {data === product && getCategories !== 'Все категории'
        ? data
            .filter((el) => el.type)
            .filter((e) => e.type.name === getCategories )
            .map((item) => (
              <motion.tr
                variants={itemA}
                initial="hidden"
                animate="show"
                className="listed"
                key={item.id}
              >
                <td>{item.id}</td>
                <td>{item.category? item.category.name : null}</td>
                <td>{item.name}</td>
                <td>
                {item.price} сум
                </td>
                <td>{item.stats? item.status.in_stock : '---'}</td>
              </motion.tr>
            ))
        : data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* <td>{item.prevPrice ? item.prevPrice : "---"}</td> */}
              <td>{item.price}</td>
              {/* <td>{item.status}</td> */}
            </tr>
          ))}
    </motion.tbody>
  );
}

export default TBody;

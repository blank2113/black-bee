import React, { useState } from "react";
import { motion } from "framer-motion";
import "./tBody.css";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../../store/middlewares/productsApi";
import AdditionalEditPanel from "../../additonalEditPanel/AdditionalEditPanel";
import { getIdValue } from "../../../store/slices/getId";

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
  const { data: product = [] } = useGetProductsQuery(
    {},
    { pollingInterval: 3000, refetchOnMountOrArgChange: true, skip: false }
  );

  const getCategories = useSelector((state) => state.getCategories.value);
  const getId = useSelector((state) => state.getId.value);
  const dispatch = useDispatch();

  return (
    <motion.tbody initial="hiden" animate="show" variants={container}>
      {data === product && getCategories !== "Все категории"
        ? data
            .filter((el) => el.type)
            .filter((e) => e.type.name === getCategories)
            .map((item) => (
              <motion.tr
                variants={itemA}
                initial="hidden"
                animate="show"
                className={getId === item.id ? "listed active" : "listed"}
                key={item.id}
                onClick={() => dispatch(getIdValue(item.id))}
              >
                <td>{item.id}</td>
                <td>{item.type ? item.type.name : null}</td>
                <td>{item.brand ? item.brand.name : null}</td>
                <td>{item.name}</td>
                <td>{item.price} сум</td>
                <td>{item.stats ? item.status.in_stock : "---"}</td>
                <td>
                  <AdditionalEditPanel />
                </td>
              </motion.tr>
            ))
        : data.map((item) => (
            <tr
              className={getId === item.id ? "listed active" : "listed"}
              key={item.id}
              onClick={() => dispatch(getIdValue(item.id))}
            >
              <td>{item.id}</td>
              <td>{item.type ? item.type.name : null}</td>
              <td>{item.brand ? item.brand.name : null}</td>
              <td>{item.name}</td>
              
              <td>{item.price}</td>
              <td>{item.status ? item.status.in_stock : "---"}</td>
              <td></td>
              {/* <td>{item.status}</td> */}
              <td>
                <AdditionalEditPanel />
              </td>
            </tr>
          ))}
    </motion.tbody>
  );
}

export default TBody;

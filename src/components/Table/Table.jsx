import React from "react";
import "./table.css";
import THead from "./THead/THead";
import { useGetBestProductsQuery } from "../../store/middlewares/bestProductApi";
import { useGetProductsQuery } from "../../store/middlewares/productsApi";
import { useGetBestSalesQuery } from "../../store/middlewares/bestSalesApi";
import { useSelector } from "react-redux";
import TBody from "./TBody/TBody";
import { motion } from "framer-motion";

function Table() {
  const { data: products = [] } = useGetProductsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );

  const { data: bestProducts = [] } = useGetBestProductsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: bestSales = [] } = useGetBestSalesQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const getAsideItemName = useSelector((state) => state.getAsideItem.value);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        transition: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      className="table">
      <table>
        <THead />
        <TBody
          data={
            getAsideItemName === "Список товаров"
              ? products
              : getAsideItemName === "Лучшие товары"
              ? bestProducts
              : bestSales
          }
        />
      </table>
    </motion.div>
  );
}

export default Table;

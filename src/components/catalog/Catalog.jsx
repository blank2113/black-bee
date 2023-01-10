import React from "react";
import "./catalog.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/Menu";
import Products from "../products/Products";
import SubMenu from "../SubMenu/SubMenu";


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const blockAnimation = {
  hidden: {
    transform: { scale: 0 },
    opacity: 0,
  },
  visible: (custom) => ({
    transition: { delay: custom * 0.2 },
    transform: { scale: 1 },
    opacity: 1,
  }),
};

function Catalog({types}) {
  return (
    <motion.section
      className="catalog"
      initial="hidden"
      variants={blockAnimation}
      whileInView="visible"
      id="goods"
    >
      <div className="catalog-inner container">
        <motion.h2 variants={textAnimation} custom={2} className="title">
          Лучшие зоотовары по лучшим ценам
        </motion.h2>
        <motion.div
          custom={3}
          variants={blockAnimation}
          className="catalog-inner__sub-title"
        >
          <p>Каталог</p>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </motion.div>
        <div className="catalog-inner__nav">
          <Menu />
        </div>
          <SubMenu types={types}/>
        <div>
          <Products />
        </div>
      
      </div>
    </motion.section>
  );
}

export default Catalog;

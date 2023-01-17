import "./catalog.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/Menu";
import Products from "../products/Products";
import SubMenu from "../SubMenu/SubMenu";
import {blockAnimation2} from '../../animation/animation.js'



function Catalog({ types, animals, products }) {
  return (
    <motion.section
      className="catalog"
      initial="hidden"
      variants={blockAnimation2}
      whileInView="visible"
      id="goods"
    >
      <div className="catalog-inner container">
        <h2  className="title">
          Лучшие зоотовары по лучшим ценам
        </h2>
        <div
        
          className="catalog-inner__sub-title"
        >
          <p>Каталог</p>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
        <div className="catalog-inner__nav">
          <Menu animals={animals} />
        </div>
        <SubMenu types={types} />
        <div >
          <Products data={products} />
        </div>
      </div>
    </motion.section>
  );
}

export default Catalog;

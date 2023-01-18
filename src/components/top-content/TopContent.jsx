import "./topContent.css";
import animals from "../../assets/bb-PhotoRoom.png-PhotoRoom.png";
import { motion } from "framer-motion";
import {textAnimation,imgAnimation} from '../../animation/animation.js'


function TopContent() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="top-content"
      id="main"
    >
      <div className="top-content-inner container">
        <div className="top-content-text">
          <motion.h1 custom={1} variants={textAnimation} className="title">
            Ваш лучший зоомагазин с расширенным ассортиментом
          </motion.h1>
          <motion.p custom={2} variants={textAnimation} className="text">
            Онлайн-магазин для домашних животных - удобное решение экономии
            времени
          </motion.p>
          <motion.a
            custom={2}
            variants={imgAnimation}
            href="#goods"
            className="button-see"
          >
            Посмотреть товары
          </motion.a>
        </div>
        <div className="top-content-images">
          <motion.img  custom={1} variants={imgAnimation} src={animals} alt=""/>
        </div>
      </div>
    </motion.section>
  );
}

export default TopContent;

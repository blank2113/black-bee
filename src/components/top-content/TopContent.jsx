import "./topContent.css";
import animals from "../../assets/img1.png";
import { motion } from "framer-motion";

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

const imgAnimation = {
  hidden: {
    transform: { scale: 0 },
    opacity: 0,
  },
  visible: custom=>({
    transition: { delay: custom * 0.2 },
    transform: { scale: 1 },
    opacity: 1,
  }),
};

function TopContent() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="top-content"
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
            href="#as"
            className="button-see"
          >
            Посмотреть товары
          </motion.a>
        </div>
        <div className="top-content-images">
          <motion.img  custom={1} variants={imgAnimation} src={animals} alt="img" />
        </div>
      </div>
    </motion.section>
  );
}

export default TopContent;

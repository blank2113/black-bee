import React from 'react'
import './contacts.css'
import telegram from "../../assets/telegram.svg";
import insta from "../../assets/insta.svg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
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


function Contacts() {
  const defaultState = {
    center: [41.250029, 69.302070],
    zoom: 16,
  };
  return (
    <motion.section initial='hidden' whileInView='visible' id='contact' className="contacts">
    <div className="contacts-inner container">
      <motion.h6 custom={1} variants={textAnimation} className="title">Где мы находимся?</motion.h6>
      <div className="contacts-inner__wrapper">
        <div className="contacts-inner__content">
          <ul className="contacts-inner__content-list">
            <motion.li custom={2} variants={textAnimation} className="contacts-inner__content-list-item">
              <p className='sub-title'>Адрес:</p>
              <p>г. Ташкент, Мирабадский р-н, улица Куйлюк, дом 11</p>
            </motion.li>
            <motion.li custom={3} variants={textAnimation} className="contacts-inner__content-list-item">
              <p className='sub-title' >Наш номер телефона:</p>
              <a href='tel:+99897 777 77 77'>+99897 777 77 77</a>
            </motion.li>
            <motion.li custom={4} variants={textAnimation} className="contacts-inner__content-list-item">
              <p className='sub-title'>Мы в соц. сетях:</p>
              <div className="socials">
                <img src={telegram} alt="telegram" />
              <a href='https://www.instagram.com/blackbee_market/'>
              <img src={insta} alt="instagram" className='instagram'/>
              </a> 
              </div>
            </motion.li>
          </ul>
        </div>
        <motion.div custom={2} variants={imgAnimation} className="map">
          <YMaps className="ymap" style={{ width: '600px', height: '240px'}}>
            <Map defaultState={defaultState} style={{ width: '600px', height: '240px' }} className="as">
              <Placemark geometry={[41.250029, 69.302070]}/>
            </Map>
          </YMaps>
        </motion.div>
      </div>
    </div>
  </motion.section>
  )
}

export default Contacts
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./bestSales.css";
import {motion, AnimatePresence} from 'framer-motion'
import { Scrollbar } from "swiper/core";
import { Pagination, Navigation } from "swiper";
import { useGetBestSalesQuery } from "../../store/middlewares/bestSalesApi";

function BestSales() {
  const { data = [] } = useGetBestSalesQuery();
  return (
    <AnimatePresence>
    <section className="best-sales">
      <div className="container">
        <motion.h5 
         initial={{opacity: 0, x: -400}}
        whileInView={{opacity: 1, x:0 }}
        transition={{duration: .3}}
        className="title">Успейте купить по лучшей цене!</motion.h5>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          cssMode={true}
          scrollbar={{ draggable: true, dragSize: 240 }}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 480px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="swiper"
        >
          {data.map((item) => (
            <SwiperSlide className="swiper-card" key={item.id}>
              <img src={item.picture} alt="2" />
              <p className="card-text">{item.name}</p>
              <p className="swiper-card__curr">{item.price} сум</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </AnimatePresence>
  );
}

export default BestSales;

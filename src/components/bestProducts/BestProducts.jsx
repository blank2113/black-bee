import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "./bestProducts.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/core";
import { Pagination, Navigation} from "swiper";

function BestProducts({ bestProducts }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="best-products"
    >
      <div className="container">
        <h4 className="title">Самые востребованные товары</h4>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          cssMode={true}
          scrollbar={{ draggable: true}}
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
          {bestProducts.map((item) => (
            <SwiperSlide className="swiper-card" key={item.id}>
              <img
                src={`https://api.blackbee.uz${item.image}`}
                alt="bestProducts-img"
              />
              <p className="card-text">{item.name}</p>
              <p className="swiper-card__curr">{item.price} сум</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default BestProducts;

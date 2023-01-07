import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./bestProducts.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import  { Scrollbar } from "swiper/core";
import { Pagination, Navigation } from "swiper";
import { useGetBestProductsQuery } from "../../store/middlewares/bestProductApi";

function BestProducts() {
  const { data = [] } = useGetBestProductsQuery(
    {},
    { pollingInterval: 3000, refetchOnMountOrArgChange: true, skip: false }
  );
  return (
    <section className="best-products">
      <div className="container">
        <h4 className="title">Самые востребованные товары</h4>
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
              <img src={item.picture} alt="bestProducts-img" />
              <p className="text">{item.name}</p>
              <p className="swiper-card__curr">{item.price} сум</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestProducts;

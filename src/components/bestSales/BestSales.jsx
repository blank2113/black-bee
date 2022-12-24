import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./bestSales.css";
import SwiperCore, { Scrollbar } from "swiper/core";
import { Pagination, Navigation } from "swiper";
import { useGetBestSalesQuery } from "../../store/bestSalesApi";
import { EffectFade } from "swiper";

function BestSales() {
  const { data = [] } = useGetBestSalesQuery();
  return (
    <section className="best-sales">
      <div className="container">
        <h5 className="title">Успейте купить по лучшей цене!</h5>
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
              <p className="swiper-card__prev">{item.prevPrice} сум</p>
              <p className="swiper-card__curr">{item.price} сум</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestSales;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Box from "../Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/feature/product/ProductSlice";

const CarouselMini = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  let { data, loading } = useSelector((state) => state.product);

  return (
    <div className="my-3">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {loading ? (
          <h2 className="text-center">Loading...</h2>
        ) : (
          data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <Box item={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default CarouselMini;

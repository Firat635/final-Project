import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper/modules";
import Box from "../Box/Box";

const CarouselMini = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="my-3">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box />
        </SwiperSlide>
        <SwiperSlide>
          <Box />
        </SwiperSlide>
        <SwiperSlide>
          <Box />
        </SwiperSlide>
        <SwiperSlide>
          <Box />
        </SwiperSlide>
        <SwiperSlide>
          <Box />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselMini;

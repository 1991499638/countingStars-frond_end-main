import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// 引入基础样式
import 'swiper/css';
// 进入分页器相关样式
import 'swiper/css/pagination';

function Carouse() {
  return (
    <Swiper
      // 使用分页器模块
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{ background: 'lightblue', height: '200px' }}>
        Slide 1
      </SwiperSlide>
      <SwiperSlide style={{ background: 'lightblue', height: '200px' }}>
        Slide 2
      </SwiperSlide>
      <SwiperSlide style={{ background: 'lightblue', height: '200px' }}>
        Slide 3
      </SwiperSlide>
      <SwiperSlide style={{ background: 'lightblue', height: '200px' }}>
        Slide 4
      </SwiperSlide>
    </Swiper>
  );
}

export default Carouse;

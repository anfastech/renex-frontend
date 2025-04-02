// components/Slider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation module
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className='lg:w-50'
    >
      <SwiperSlide>
        <img className='rounded-lg' src="/images/sldier11.jpeg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src="/images/slider111.jpeg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src="/images/slider111.jpeg" alt="Slide 3" />
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default Slider;

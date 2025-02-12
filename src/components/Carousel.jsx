import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper

      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop = {true}
    //   speed={1000}
      autoplay={{ 
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      pagination={{ clickable: true }}
      className="w-full h-full bg-green-500"
    >
      <SwiperSlide><img className="w-full h-full object-cover" src="https://mobirise.com/extensions/commercem4/assets/images/gallery02.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-full object-cover" src="https://mobirise.com/extensions/commercem4/assets/images/3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-full object-cover" src="https://mobirise.com/extensions/commercem4/assets/images/gallery00.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
};

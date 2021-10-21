import React, { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import CardBlog from '../CardBlog'
import Blog1 from '../../assets/blog_image_1.svg'
import Blog2 from '../../assets/bloco_image_2.svg'
import Blog3 from '../../assets/bloco_image_3.svg'
import Blog4 from '../../assets/bloco_image_4.svg'
import User from '../../assets/user.png'

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}//4.7
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><CardBlog img={Blog1} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Rodrigo Guedes" ft={User} color="red"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog2} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Raul Biscaro" ft={User} color="orange"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog3} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Ricardo Pereira" ft={User} color="blue"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog4} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Luiz Gustavo" ft={User} color="purple"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog1} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Rodrigo Guedes" ft={User} color="red"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog2} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Raul Biscaro" ft={User} color="orange"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog3} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Ricardo Pereira" ft={User} color="blue"/></SwiperSlide>
        <SwiperSlide><CardBlog img={Blog4} altbox="img box comida" title="The top 10 benefits of eating healthy" nameuser="Luiz Gustavo" ft={User} color="purple"/></SwiperSlide>
      </Swiper>
    </>
  );
}
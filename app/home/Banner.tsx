'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


const Banner = () => {
  return (
    <div className='max-h-[350px]'>
      <Swiper
         slidesPerView={1}
         spaceBetween={30}
         loop={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="mySwiper"
      >
        <SwiperSlide>
          <div className=' relative w-full  h-[170px] md:h-[300px]'>
            <Image
              className=''
              src="/k_cookie.jpeg"
              alt=""
              fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' relative w-full  h-[170px] md:h-[300px]'>
            <Image
              className=''
              src="/k_latte.jpeg"
              alt=""
              fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' relative w-full  h-[170px] md:h-[300px]'>
            <Image
              className=''
              src="/k_latte.jpeg"
              alt=""
              fill />
          </div>
        </SwiperSlide>


      </Swiper>
    </div>


    // <div className="w-full relative h-[170px] md:h-[300px]">
    //   <Image src='/out-1.png'
    //     fill
    //     alt="Yok"
    //     className="object-cover" />


    // </div>
  )
}

export default Banner

{/* <div className="relative h-[150px] ">
<Image src='/out-1.png'
  fill
  alt="Yok"
  className="object-contain" />
</div> */}
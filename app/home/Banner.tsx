'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import BannerSideContent from './BannerSideContent';

const Banner = () => {
  return (
    <div className=' md:flex '>
      <div className='md:w-3/5 w-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=' relative w-full  h-[170px] md:h-[300px]'>
              <Image
                className=''
                src="/qrmenu_banner1.jpeg"
                alt=""
                fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' relative w-full  h-[170px] md:h-[300px]'>
              <Image
                className=''
                src="/qrmenu_banner.jpg"
                alt=""
                fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' relative w-full  h-[170px] md:h-[300px]'>
              <Image
                className=''
                src="/qrmenu_banner1.jpeg"
                alt=""
                fill />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='md:2/5  w-full'>
        <BannerSideContent />
      </div>
    </div>
  )
}

export default Banner


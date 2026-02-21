import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { GatsbyImage } from 'gatsby-plugin-image'
// Import Swiper styles
import 'swiper/css'
import "swiper/css/effect-fade";
import 'swiper/css/navigation'

import 'swiper/css/pagination'
// import required modules

import { Navigation, Pagination, Keyboard, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/homepage/gallery.scss'

export const SwiperHomeGallery = ({ images }) => {
    return <Swiper spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        keyboard={{
            enabled: true,
        }}
        autoplay={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
        className="mySwiper">
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
            </SwiperSlide>
        ))}
    </Swiper>
}

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'

import '../styles/homepage/gallery.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

export const SwiperHomeGallery = ({ images }) => (
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} autoplay={true} modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} className="mySwiper">
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
            </SwiperSlide>
        ))}
    </Swiper>
)

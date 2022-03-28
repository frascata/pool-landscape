import * as React from 'react'

import { GALLERY_IMAGES } from '../data/homepage'
import { SwiperHomeGallery } from '../components/homepage/gallery'
import Header from '../components/layouts/header'

import '../styles/homepage/index.scss'

const IndexPage = () => {
    return (
        <main className="full">
            <Header />
            <SwiperHomeGallery images={GALLERY_IMAGES} />
        </main>
    )
}

export default IndexPage

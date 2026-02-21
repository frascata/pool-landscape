// import * as React from "react"
import React, { useState } from "react";
import { graphql } from 'gatsby'

import Cookies from 'js-cookie'
import Header from '../components/layouts/header'
import { SwiperHomeGallery } from '../components/HomePageGallery'

import { AnimatedLogo } from "../components/AnimatedLogo";
import { CookieLawBanner } from "../components/CookieLawBanner";
import { SEO } from "../components/seo";

import '../styles/index.scss'


const IndexPage = ({ data }) => {
    const animationCookie = Cookies.get('animation');

    const [isAnimationViewed, setAnimationViewed] = useState(animationCookie);

    const containerShowStyle = {
        visibility: 'visible',
        opacity: 1,
        transition: 'opacity 0.5s ease-in'
    }

    const containerHiddenStyle = {
        visibility: 'hidden',
        opacity: 0
    }

    const onAnimationComplete = () => {
        setAnimationViewed(true)
        Cookies.set('animation', '1', { expires: 7 })
    }

    const images = data.images.edges.map((edge: any, i: number) => ({ gatsbyImageData: edge.node.gatsbyImageData, alt: edge.node.original?.src || `Pool Landscape project ${i}` }))

    return (
        <div>
            {isAnimationViewed ?
                <main className="full" style={isAnimationViewed ? containerShowStyle : containerHiddenStyle}>
                    <Header />
                    <SwiperHomeGallery images={images} />
                    <CookieLawBanner />
                </main> : <AnimatedLogo onAnimationComplete={onAnimationComplete} />}
        </div>
    )
}

export default IndexPage

export const query = graphql`
    {
            images: allImageSharp(filter: { original: { src: { regex: "/home-gallery/" } } }, sort: { original: { src: ASC } }) {
        edges {
        node {
        id
                    gatsbyImageData
                    original {
        src
    }
                }
            }
        }
    }
`

export const Head = () => (
    <SEO
        title="Pool Landscape | Studio di Architettura del Paesaggio e Giardini"
        description="Pool Landscape è uno studio specializzato in architettura del paesaggio. Progettiamo spazi aperti, giardini ecosostenibili e piazze urbane per enti pubblici e privati."
    />
)
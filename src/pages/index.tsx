// import * as React from "react"
import React, {useState} from "react";
import {graphql} from 'gatsby'

import Cookies from 'js-cookie'
import Header from '../components/layouts/header'
import {SwiperHomeGallery} from '../components/HomePageGallery'

import {AnimatedLogo} from "../components/AnimatedLogo";
import {CookieLawBanner} from "../components/CookieLawBanner";

import '../styles/index.scss'


const IndexPage = ({data}) => {
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
        Cookies.set('animation', '1', {expires: 7})
    }

    const images = data.images.edges.map((edge) => ({gatsbyImageData: edge.node.gatsbyImageData, alt: edge.node.id}))

    return (
        <div>
            {isAnimationViewed ?
            <main className="full" style={isAnimationViewed ? containerShowStyle: containerHiddenStyle}>
                <Header/>
                <SwiperHomeGallery images={images}/>
                <CookieLawBanner/>
            </main> : <AnimatedLogo onAnimationComplete={onAnimationComplete}/> }
        </div>
    )
}

export default IndexPage

export const query = graphql`
    {
        images: allImageSharp(filter: { original: { src: { regex: "/home-gallery/" } } }, sort: { fields: [original___src], order: ASC }) {
            edges {
                node {
                    id
                    gatsbyImageData
                }
            }
        }
    }
`

export const Head = () => (
    <>
        <title>Pool Landscape</title>
        <meta name="description"
              content="Pool landscape è un progetto creativo tra architettura e paesaggio Dal giardino, alla piazza, all’ambito urbano, affianchiamo i clienti pubblici e privati con un approccio sostenibile e una visione condivisa dello spazio aperto in relazione alle esigenze dell’abitare contemporaneo"/>
    </>
)
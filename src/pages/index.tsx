import React from 'react'
import { graphql } from 'gatsby'

import { SwiperHomeGallery } from '../components/HomePageGallery'

import Header from '../components/layouts/header'
import '../styles/index.scss'

const IndexPage = ({ data }) => {
    const images = data.images.edges.map((edge) => ({ gatsbyImageData: edge.node.gatsbyImageData, alt: edge.node.id }))
    return (
        <main className="full">
            <Header />
            <SwiperHomeGallery images={images} />
        </main>
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

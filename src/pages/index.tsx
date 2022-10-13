import * as React from "react"
import {graphql} from 'gatsby'

import {SwiperHomeGallery} from '../components/HomePageGallery'

import Header from '../components/layouts/header'
import '../styles/index.scss'

const IndexPage = ({data}) => {
    const images = data.images.edges.map((edge) => ({gatsbyImageData: edge.node.gatsbyImageData, alt: edge.node.id}))
    return (
        <main className="full">
            <Header/>
            <SwiperHomeGallery images={images}/>
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

export const Head = () => (
    <>
        <title>Pool Landscape</title>
        <meta name="description"
              content="Pool landscape è un progetto creativo tra architettura e paesaggio Dal giardino, alla piazza, all’ambito urbano, affianchiamo i clienti pubblici e privati con un approccio sostenibile e una visione condivisa dello spazio aperto in relazione alle esigenze dell’abitare contemporaneo"/>
    </>
)
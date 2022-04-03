import React from 'react'
import Layout from './layouts'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../styles/components/project-view.scss'
import '../styles/components/project-header.scss'
import '../styles/components/project-description.scss'

/*
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive
 * */
const columnPartition = (arr, length) => {
    let rest = arr.length % length
    let size = Math.floor(arr.length / length)
    let j = 0
    return Array.from({ length }, (_, i) => arr.slice(j, (j += size + (i < rest))))
}

const ProjectGallery = ({ gallery }) => {
    const imagesColumns = columnPartition(gallery, 3)
    return (
        <div className="row">
            {imagesColumns.map((column, index) => {
                return (
                    <div key={index} className="column">
                        {column.map((image, index) => (
                            <GatsbyImage key={index} alt={image.alt} image={image.gatsbyImageData} />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export const ProjectView = ({ project, gallery, allprojects }) => {
    return (
        <Layout>
            <main>
                <div className="project-header">
                    <h1>{project.name}</h1>
                    <h2>{project.subtitle}</h2>
                </div>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <div className="project-gallery">
                    <ProjectGallery gallery={gallery} />
                </div>
                <div className="project-navigation"></div>
            </main>
        </Layout>
    )
}

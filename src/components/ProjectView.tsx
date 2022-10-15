import React from 'react'
import Layout from './layouts'
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import {ROUTES} from '../data/env'
import '../styles/components/project-view.scss'
import '../styles/components/project-header.scss'
import '../styles/components/project-description.scss'
import '../styles/components/project-navigation.scss'

const ProjectHeader = ({name, subtitle}) => {
    return (
        <div className="project-header">
            <h1>{name}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
const ProjectDescription = ({description}) => {
    return (
        <div className="project-description">
            <p dangerouslySetInnerHTML={{__html: description}}/>
        </div>
    )
}

/*
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive
 * */
const columnPartition = (arr, length) => {
    let rest = arr.length % length
    let size = Math.floor(arr.length / length)
    let j = 0
    return Array.from({length}, (_, i) => arr.slice(j, (j += size + (i < rest))))
}

const ProjectGallery = ({gallery}) => {
    const imagesColumns = columnPartition(gallery, 3)
    return (
        <div className="project-gallery">
            <div className="image-gallery">
                {imagesColumns.map((column, index) => {
                    return (
                        <div key={index} className="column">
                            {column.map((image, index) => (
                                <div className="image-item" key={index}>
                                    <GatsbyImage alt={image.alt} image={image.gatsbyImageData}/>
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const ProjectNavigation = ({allProjects}) => {
    const allProjectRoute = ROUTES.find((route) => route.url.indexOf('lavori') !== -1)
    return (
        <div className="project-navigation">
            <p>
                <Link to={allProjectRoute.url}>TUTTI</Link>
                {allProjects.map((project) => {
                    return (
                        <Link key={project.meta.slug} to={project.url} activeClassName="active">
                            {project.name}
                        </Link>
                    )
                })}
            </p>
        </div>
    )
}

export const ProjectView = ({project, gallery, allProjects}) => {
    const {name, subtitle, description} = project
    return (
        <Layout>
            <main>
                <ProjectHeader {...{name, subtitle}} />
                <ProjectDescription {...{description}} />
                <ProjectGallery {...{gallery}} />
                <ProjectNavigation {...{allProjects}} />
            </main>
        </Layout>
    )
}

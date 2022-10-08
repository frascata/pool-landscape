import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../styles/components/projects-grid.scss'

const ProjectItem = ({ image, title, link }) => {
    return (
        <div className="grid-item">
            <Link to={link}>
                <div className="image-wrapper">{image && <GatsbyImage image={image} alt={title} />}</div>
                <div className="caption">{title}</div>
            </Link>
        </div>
    )
}

export const ProjectsGrid = ({ data }) => {
    const defaultImage = data.defaultImage.edges[0].node.gatsbyImageData
    return (
        <div className="grid-container">
            {data.projects.nodes.map((project) => {
                const projectEdge = data.images.edges.filter((edge) => edge.node.original.src.indexOf(project.meta.slug) !== -1) // find image by name
                const coverImage = projectEdge.length ? projectEdge[0].node.gatsbyImageData : defaultImage
                return <ProjectItem key={project.meta.id} image={coverImage} title={project.name} link={project.url} />
            })}
        </div>
    )
}

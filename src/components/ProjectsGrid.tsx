import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import '../styles/components/projects-grid.scss'

const ProjectItem = ({ image, title, link }) => {
    const img = getImage(image)

    return (
        <div className="grid-item">
            <Link to={link}>
                <div className="image-wrapper">{img && <GatsbyImage image={img} alt={title} />}</div>
                <div className="caption">{title}</div>
            </Link>
        </div>
    )
}

export const ProjectsGrid = ({ data }) => {
    return (
        <div className="grid-container">
            {data.projects.nodes.map((project) => {
                const projectEdge = data.images.edges.filter((edge) => edge.node.original.src.indexOf(project.meta.slug) !== -1) // find image by name
                return <ProjectItem key={project.meta.id} image={projectEdge[0].node.gatsbyImageData} title={project.name} link={project.url} />
            })}
        </div>
    )
}

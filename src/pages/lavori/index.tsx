import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layouts'

import '../../styles/lavori/index.scss'

export const ProjectItem = ({ image, title, link }) => {
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

const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <main className="works-page">
                <div className="grid-container">
                    {data.projects.nodes.map((project) => {
                        const projectEdge = data.images.edges.filter((edge) => edge.node.original.src.indexOf(project.meta.slug) === -1) // find image by name
                        return <ProjectItem key={project.meta.id} image={projectEdge[0].node.gatsbyImageData} title={project.name} link={project.nameSlug} />
                    })}
                </div>
            </main>
        </Layout>
    )
}

export default ProjectsPage

export const query = graphql`
    {
        projects: allProject {
            nodes {
                name
                nameSlug: gatsbyPath(filePath: "/lavori/{Project.name}")
                meta {
                    id
                    slug
                }
            }
        }
        images: allImageSharp(filter: { original: { src: { regex: "/project-cover/" } } }) {
            edges {
                node {
                    gatsbyImageData
                    original {
                        src
                    }
                }
            }
        }
    }
`

import React from 'react'
import { graphql } from 'gatsby'
import { ProjectView } from '../../components/ProjectView'
import { SEO } from '../../components/seo'

const Project = ({ data }) => {
    const { project, allGallery, allProjects } = data
    const projectGallery = allGallery.edges.filter((edge) => edge.node.original.src.indexOf(`project-gallery-${project.meta.slug}`) !== -1)
    const gallery = projectGallery.map((pGallery: any) => ({ gatsbyImageData: pGallery.node.gatsbyImageData, alt: pGallery.node.original?.src || pGallery.node.id }))
    return <ProjectView project={project} gallery={gallery} allProjects={allProjects.nodes} />
}

export default Project

export const query = graphql`
    query ($id: String!) {
        project(id: { eq: $id }) {
            name
            subtitle
            description
            meta {
                slug
            }
        }
        allGallery: allImageSharp(
            filter: { original: { src: { regex: "/project-gallery-/" } } },
            sort: { original: { src: ASC } }
            ) {
            edges {
                node {
                    gatsbyImageData
                    original {
                        src
                    }
                    id
                }
            }
        }
        allProjects: allProject {
            nodes {
                name
                url: gatsbyPath(filePath: "/lavori/{Project.meta__slug}")
                meta {
                    slug
                }
            }
        }
    }
`

export const Head = ({ data }: any) => {
    const { project } = data
    const { name, subtitle, description } = project

    return (
        <SEO
            title={`Pool Landscape | ${name}`}
            description={`${name} | ${subtitle} : ${description}`}
            article={true}
        />
    )
}
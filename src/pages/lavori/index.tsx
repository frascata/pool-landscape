import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layouts'
import { ProjectsGrid } from '../../components/ProjectsGrid'
import '../../styles/index.scss'

const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <main>
                <ProjectsGrid data={data} />
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
                url: gatsbyPath(filePath: "/lavori/{Project.meta__slug}")
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
        defaultImage: allImageSharp(filter: { original: { src: { regex: "/project-cover-default/" } } }) {
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

export const Head = () => (
    <>
        <title>Pool Landscape | Progetti</title>
        <meta name="description"
              content="Pool landscape è un progetto creativo tra architettura e paesaggio Dal giardino, alla piazza, all’ambito urbano, affianchiamo i clienti pubblici e privati con un approccio sostenibile e una visione condivisa dello spazio aperto in relazione alle esigenze dell’abitare contemporaneo"/>
    </>
)
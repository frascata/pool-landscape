import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../../components/layouts'
import { ProjectItem } from './index'

const ProjectView = ({ project }) => {
    return (
        <Layout>
            <main className="works-page">{project.name}</main>
        </Layout>
    )
}

const Project = ({ data }) => {
    const { project } = data
    return <ProjectView project={project} />
}

export default Project

export const query = graphql`
    query ($id: String!) {
        project(id: { eq: $id }) {
            name
            subtitle
            description
        }
    }
`

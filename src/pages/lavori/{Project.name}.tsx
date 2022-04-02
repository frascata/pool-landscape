import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

function ProjectView({ project }) {
    return (
        <div className="wrapper">
            <header>
                <Link to="/">Go back to "Home"</Link>
            </header>
            <main>
                <h1>{project.name}</h1>
                <h2>{project.subtitle}</h2>
                <p>{project.description}.</p>
            </main>
        </div>
    )
}

function Project(props) {
    const { project } = props.data
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

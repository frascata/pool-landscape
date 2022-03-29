import * as React from 'react'
import Layout from '../components/layouts'

import { WORKS } from '../data/lavori'

import '../styles/lavori/index.scss'

const WorkLinkItem = ({ image, title, link }) => {
    return (
        <div className="grid-item">
            <a href={link} style={{ backgroundImage: `url(${image})` }}>
                <img alt={title} src={image} />
                <div>{title}</div>
            </a>
        </div>
    )
}

const WorksPage = () => {
    return (
        <Layout>
            <main className="works-page">
                <div className="grid-container">
                    {WORKS.map((work) => (
                        <WorkLinkItem image={work.image} title={work.title} link={work.link} />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default WorksPage

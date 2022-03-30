import * as React from 'react'
import Layout from '../components/layouts'
import { WorkLinkItem } from '../components/lavori'

import { WORKS } from '../data/lavori'
import '../styles/lavori/index.scss'

const WorksPage = () => {
    return (
        <Layout>
            <main className="works-page">
                <div className="grid-container">
                    {WORKS.map((work, index) => (
                        <WorkLinkItem key={index} image={work.image} title={work.title} link={work.link} />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default WorksPage

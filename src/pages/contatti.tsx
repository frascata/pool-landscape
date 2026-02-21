import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import Layout from '../components/layouts'
import { SEO } from '../components/seo'
import '../styles/contatti/index.scss'

const ContactsPage = () => {
    return (
        <Layout>
            <main className="contacts-page">
                <div className="col-left">
                    <StaticImage src={'../images/contatti/contatti.jpg'} alt={'Contatti'} />
                </div>
                <div className="col-right">
                    <div className="contact-email">
                        <a href="mailto:info@pool-landscape.it">info@pool-landscape.it</a>
                    </div>
                    <div className="contact-columns">
                        <div className="contact-col">
                            <h3>VERONA</h3>
                            <address>
                                Caterina Gerolimetto<br />
                                Via Macello, 5<br />
                                37121 Verona
                            </address>
                        </div>
                        <div className="contact-col">
                            <h3>BERGAMO</h3>
                            <address>
                                Ilaria Sangaletti<br />
                                Via Sant’Alessandro, 34<br />
                                24122 Bergamo
                            </address>
                        </div>
                        <div className="contact-col">
                            <h3>PESARO - AREZZO</h3>
                            <address>
                                Elisa Frappi<br />
                                Via XI Febbraio, 42<br />
                                61122 Pesaro
                            </address>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ContactsPage

export const Head = () => (
    <SEO
        title="Contatti | Pool Landscape - Studi a Verona, Bergamo e Pesaro"
        description="Richiedi una consulenza a Pool Landscape per il tuo progetto di architettura e verde sostenibile. Sedi attive a Verona, Bergamo e Pesaro."
    />
)

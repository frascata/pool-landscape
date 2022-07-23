import * as React from 'react'
import Layout from '../components/layouts'

import '../styles/contatti/index.scss'
import ContattiImg from "../images/contatti/contatti.jpeg";

const ContactsPage = () => {
    return (
        <Layout>
            <main className="contacts-page">
                <div className="col-left">
                    <img src={ContattiImg} alt={'Contatti'}/>
                </div>
                <div className="col-right">
                    <div className="contact-email">
                        <a href="mailto:info@pool-landscape.it">info@pool-landscape.it</a>
                    </div>
                    <div className="contact-columns">
                        <div className="contact-col">
                            <h3>VERONA</h3>
                            <address>
                                Caterina Gerolimetto<br/>
                                Via Macello, 5<br/>
                                37121 Verona
                            </address>
                        </div>
                        <div className="contact-col">
                            <h3>BERGAMO</h3>
                            <address>
                                Ilaria Sangaletti<br/>
                                Via Sant’Alessandro, 34<br/>
                                24122 Bergamo
                            </address>
                        </div>
                        <div className="contact-col">
                            <h3>PESARO - AREZZO</h3>
                            <address>
                                Elisa Frappi<br/>
                                Via XI Febbraio, 42<br/>
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

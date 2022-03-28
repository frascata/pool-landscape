import * as React from 'react'
import Layout from '../components/layouts'

import ContattiImg from '../images/contatti/contatti.jpeg'

import '../styles/contatti/index.scss'

const ContactsPage = () => {
    return (
        <Layout>
            <main className="about-page">
                <div className="col-2">
                    <img src={ContattiImg} alt={'Contatti'} />
                    <div>
                        <p>Pool landscape è un progetto creativo tra architettura e paesaggio, fondato da Caterina Gerolimetto, Elisa Frappi e Ilaria Sangaletti.</p>
                        <p>
                            Pool landscape è un progetto creativo tra architettura e paesaggio, fondato da Caterina Gerolimetto, Elisa Frappi e Ilaria Sangaletti. Saper cogliere lo spirito del luogo, la sua storia e reinterpretarne le
                            qualità all’interno di un progetto che coniughi gli aspetti funzionali alla sostenibilità ambientale; questo è il nostro approccio alla progettazione. Le stagioni, la luce, il vento e il fogliame che reagisce
                            agli elementi naturali sono i nostri materiali da costruzione. I nostri progetti nascono da un’accurata analisi del luogo: la storia, le preesistenze, i materiali, l’atmosfera e i segni del paesaggio vengono
                            reinterpretati e fusi con le esigenze del cliente. La materia vegetale, in continua evoluzione, diventa protagonista dello spazio così come il tempo che ne plasma le forme e l’aspetto. Con l’interazione tra
                            l’ambiente e l’uomo che lo vive, lo spazio progettato diventa luogo abitato.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <p>
                        Dal giardino, alla piazza, all’ambito urbano, affianchiamo i clienti pubblici e privati con un approccio sostenibile e una visione condivisa dello spazio aperto in relazione alle esigenze dell’
                        <b>abitare contemporaneo.</b> <br />
                        Con il nostro approccio multidisciplinare affrontiamo diversi aspetti della progettazione che vanno dal design, agli aspetti agronomici, alla scelta di materiali e arredi, in un processo di trasformazione degli spazi
                        aperti. Dinamismo, velocità, e presenza diffusa sul territorio (Veneto, Lombardia, Marche, Toscana) ci permettono di rispondere tempestivamente alle esigenze del cliente, affiancandolo anche nella fase realizzativa,
                        attraverso un attento coordinamento del cantiere nelle sue diverse fasi. Dalla raccolta delle esigenze del cliente e dall’analisi del luogo, nascono le nostre riflessioni, sintesi delle esperienze e delle sensibilità
                        di ognuna, che trasferiamo al progetto seguendo questi principi:
                    </p>
                    <ul>
                        <li> analizziamo il genius loci e reinterpretiamo la sua unicità nel progetto, valorizzando le specificità del territorio</li>
                        <li>incrementiamo la biodiversità attraverso la ricerca e l’utilizzo di consociazioni di specie autoctone capaci di innescare processi naturali</li>
                        <li>promuoviamo un basso impatto ambientale privilegiando l’utilizzo di materiali locali ed ecocompatibili e scegliendo specie resilienti a bassa manutenzione, con particolare attenzione alle esigenze idriche</li>
                        <li>progettiamo spazi inclusivi con percorsi accessibili e attrezzature pensate per tutte le fasce d’età e tipologie di utenza</li>
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default ContactsPage

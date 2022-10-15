import React from 'react'
import {CookieNotice} from "gatsby-cookie-notice";

import '../styles/components/cookie-law-banner.scss'

export const CookieLawBanner = () => {
    return <CookieNotice
        backgroundWrapperClasses={'cookie-law-banner'}
        acceptButtonText={'OK'}
        declineButton={false}
        personalizeButtonEnable={false}
    >
        <div>
            Il portale utilizza cookie tecnici per il corretto funzionamento delle pagine web e cookie di tracciamento anonimizzati per la produzione di statistiche sugli accessi che non necessitano
            del
            preventivo consenso dell'utente. Non sono utilizzati cookie di terze parti per la fruizione dei contenuti media.
        </div>
    </CookieNotice>
}
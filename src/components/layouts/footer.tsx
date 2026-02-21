import React from 'react'

import FacebookImg from '../../images/facebook.svg'
import InstagramImg from '../../images/instagram.svg'
import LinkedinImg from '../../images/linkedin.svg'

import '../../styles/layouts/footer.scss'

const Footer = ({ style = {} }: any) => (
    <footer>
        <div className="socials">
            <a href="https://www.facebook.com/poollandscape/" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Facebook">
                <img src={FacebookImg} alt="" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/poollandscape/" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Instagram">
                <img src={InstagramImg} alt="" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/11034879/" target="_blank" rel="noopener noreferrer" aria-label="Seguici su LinkedIn">
                <img src={LinkedinImg} alt="" width={24} height={24} />
            </a>
        </div>
        <div className="company-info">
            © 2022 Pool Landscape s.r.l | <a href="mailto:info@pool-landscape.it" aria-label="Invia email a info@pool-landscape.it">info@pool-landscape.it</a> | P. Iva 02653120416
        </div>
    </footer>
)

export default Footer

import React from 'react'

import FacebookImg from '../../images/facebook.svg'
import InstagramImg from '../../images/instagram.svg'
import LinkedinImg from '../../images/linkedin.svg'

import '../../styles/layouts/footer.scss'

const Footer = ({ style = {} }) => (
    <footer>
        <div className="socials">
            <a href="https://www.facebook.com/poollandscape/" target="_blank">
                <img src={FacebookImg} alt={'Facebook'} width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/poollandscape/" target="_blank">
                <img src={InstagramImg} alt={'Instagram'} width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/11034879/" target="_blank">
                <img src={LinkedinImg} alt={'Linkedin'} width={24} height={24} />
            </a>
        </div>
        <div className="company-info">
            © 2022 Pool Landscape s.r.l | <a href="mailto:info@pool-landscape.it">info@pool-landscape.it</a> | P. Iva 02653120416
        </div>
    </footer>
)

export default Footer

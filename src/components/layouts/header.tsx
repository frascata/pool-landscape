import React, { Fragment } from 'react'
import LogoImg from '../../images/logo.png'

import '../../styles/layouts/header.scss'
import { ROUTES } from '../../data/env'

const Logo = ({}) => (
    <a href={'/'}>
        <img src={LogoImg} alt="Logo" height={80} />
    </a>
)

const Navbar = ({}) => (
    <ul className="navbar">
        {ROUTES.map((route, index) => (
            <li className="" key={index}>
                <a href={route.url}>{route.label}</a>
            </li>
        ))}
    </ul>
)

const MobileMenu = ({}) => {
    const openMobileMenu = () => {
        document.querySelector('.mobile-menu-btn')?.classList.toggle('not-active')
        document.querySelector('.mobile-menu')?.classList.toggle('hide')
    }

    return (
        <div className="mobile-menu-content">
            <div className="mobile-menu-btn active not-active" onClick={openMobileMenu}>
                <span />
                <span />
                <span />
            </div>
            <div className="mobile-menu hide">
                <ul className="navbar-mobile">
                    {ROUTES.map((route, index) => (
                        <li className="" key={index}>
                            <a href={route.url}>{route.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Header = ({ style = {} }) => (
    <header style={style}>
        <div className="container">
            <Logo />
            <Navbar />
            <MobileMenu />
        </div>
    </header>
)

export default Header

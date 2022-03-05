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

const MobileMenu = ({}) => (
    <div className="mobile-icon">
        <div className="menu_icon">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
        </div>
    </div>
)

const Header = ({ style = {} }) => (
    <header style={style}>
        <div className="container">
            <Logo />
            <Navbar />
            {/*<MobileMenu />*/}
        </div>
    </header>
)

export default Header

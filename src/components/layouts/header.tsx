import React from 'react'
import { Link } from 'gatsby'
import { BASE_URL, ROUTES } from '../../data/env'
import LogoImg from '../../images/logo.png'
import '../../styles/layouts/header.scss'

const Logo = ({ }: any) => (
    <Link to="/" className="logo" aria-label="Torna alla Homepage - Pool Landscape">
        <img src={LogoImg} alt="Pool Landscape Logo" width={131} height={80} />
    </Link>
)

const Navbar = ({ }: any) => (
    <nav aria-label="Navigazione principale">
        <ul className="navbar">
            {ROUTES.map((route: any, index: number) => (
                <li className="" key={index}>
                    <Link to={route.url}>{route.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
)

const MobileMenu = ({ }: any) => {
    const openMobileMenu = () => {
        const btn = document.querySelector('.mobile-menu-btn');
        const menu = document.querySelector('.mobile-menu');
        if (btn && menu) {
            btn.classList.toggle('not-active');
            menu.classList.toggle('hide');
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', (!isExpanded).toString());
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openMobileMenu();
        }
    }

    return (
        <div className="mobile-menu-content">
            <div
                className="mobile-menu-btn active not-active"
                onClick={openMobileMenu}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label="Menu di navigazione"
                aria-expanded="false"
            >
                <span />
                <span />
                <span />
            </div>
            <nav className="mobile-menu hide" aria-label="Navigazione Mobile">
                <ul className="navbar-mobile">
                    {ROUTES.map((route: any, index: number) => (
                        <li className="" key={index}>
                            <Link to={route.url} onClick={openMobileMenu}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

const Header = ({ style = {} }: any) => (
    <header style={style}>
        <div className="container">
            <Logo />
            <Navbar />
            <MobileMenu />
        </div>
    </header>
)

export default Header

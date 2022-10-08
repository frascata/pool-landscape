import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'

import '../../styles/index.scss'

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
)

export default Layout

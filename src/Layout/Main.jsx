import React from 'react'
import Header from '../Pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'

function Main() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main
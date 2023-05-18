import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ResNav from "./ResNav";

function Layout({children}) {
  return (
    <>
    <NavBar/>
    <ResNav/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
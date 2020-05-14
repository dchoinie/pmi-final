import React from "react"
import NavLarge from "./navLarge"
import NavSmall from "./navSmall"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavLarge />
      <NavSmall />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

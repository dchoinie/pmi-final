import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import LargeNav from "../components/largeNav"
import MobileNav from "../components/mobileNav"
import Nav51120 from "../components/nav51120"

const Layout = ({ children }) => {
  return (
    <>
      <Nav51120 />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

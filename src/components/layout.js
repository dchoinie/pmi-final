import React from "react"
import NavLarge from "./navLarge"
import NavSmall from "./navSmall"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
    <div className="flex justify-center bg-red-500 py-2">
      <p className="text-white">
        Due to COVID-19 restrictions, PMI is temporarily closed. To schedule a workout appointment visit our <a href="https://www.facebook.com/pmitotalfitness" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Facebook Page</a>
      </p>
    </div>
      <NavLarge />
      <NavSmall />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

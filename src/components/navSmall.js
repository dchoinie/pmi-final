import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaSignInAlt, FaShoppingBag, FaBars } from "react-icons/fa"

const NavSmall = () => {
  const [navOpen, setNavOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/placeholder-logo2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <nav className="lg:hidden relative z-40">
      <div className="flex justify-between bg-white p-4">
        <Link to="/">
          <Img fluid={data.logo.childImageSharp.fluid} className="w-56" />
        </Link>
        <div className="flex text-primary self-center text-2xl">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {navOpen && (
        <div
          className="flex bg-white"
          style={{ border: "1px solid red", height: "calc(100vh - 78.31px)" }}
        ></div>
      )}
    </nav>
  )
}

export default NavSmall

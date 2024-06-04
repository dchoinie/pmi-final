import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaSignInAlt, FaShoppingCart, FaBars } from "react-icons/fa"

const NavSmall = () => {
  const [navOpen, setNavOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <nav className="lg:hidden relative">
      <div className="flex justify-between bg-white p-4">
        <Link to="/">
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            className="w-56"
          />
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
          className="flex flex-col bg-white w-full h-full justify-center items-center px-4"
          style={{ height: "calc(100vh - 78.31px)" }}
        >
          <ul className="flex-flex-col text-center text-xl w-full text-gray-600">
            <li className="py-2 border-b border-gray-500">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 border-b border-gray-500">
              <Link to="/membership">Membership</Link>
            </li>
            {/* <li className="py-2 border-b border-gray-500">
              <Link to="/programs">Programs</Link>
            </li> */}
            <li className="py-2 border-b border-gray-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="py-2 border-b border-gray-500">
              <Link to="/hours">Hours</Link>
            </li>
            <li className="py-2 border-b border-gray-500">
              <Link to="/about">About</Link>
            </li>
            <li className="py-2 border-b border-gray-500">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="pt-2">
              <Link
                to="/membership"
                className="bg-primary text-white text-lg px-4 py-2 rounded-full shadow-md hover:bg-primary-light transition duration-150 ease-in-out"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavSmall

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaSignInAlt, FaShoppingBag, FaBars } from "react-icons/fa"

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/placeholder-logo1.png" }) {
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
    <nav className="lg:hidden relative">
      <div className="bg-primary">
        <div className="flex justify-between p-4">
          <div className="flex justify-start">
            <Img fluid={data.logo.childImageSharp.fluid} className="w-56" />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="relative focus:outline-none"
            >
              <FaBars className="text-white text-3xl self-center" />
            </button>
            {navOpen === true ? <></> : null}
          </div>
        </div>
        {navOpen === true ? (
          <div className="flex flex-col w-full text-xl text-white px-4">
            <Link
              to="/"
              className="w-full text-center py-2 border-b border-gray-300"
            >
              Membership
            </Link>
            <Link
              to="/"
              className="w-full text-center py-2 border-b border-gray-300"
            >
              Programs
            </Link>
            <Link
              to="/"
              className="w-full text-center py-2 border-b border-gray-300"
            >
              Services
            </Link>
            <Link
              to="/"
              className="w-full text-center py-2 border-b border-gray-300"
            >
              About
            </Link>
            <Link
              to="/"
              className="w-full text-center py-2 border-b border-gray-300"
            >
              Contact
            </Link>
            <div className="flex justify-center w-full py-2 text-base">
              <button className="snipcart-customer-signin flex px-2 py-1 shadow rounded-md self-center bg-secondary text-white transition duration-150 ease-in-out focus:outline-none hover:bg-secondary-dark mr-2">
                <FaSignInAlt className="self-center mr-2" />
                Sign-In
              </button>
              <button className="snipcart-checkout flex px-2 py-1 shadow rounded-md self-center bg-background text-primary transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500 hover:text-white ml-2">
                <FaShoppingBag className="self-center mr-2" />
                Cart
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default MobileNav

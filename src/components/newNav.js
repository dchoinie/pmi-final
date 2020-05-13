import React, { useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaSignInAlt,
  FaShoppingCart,
  FaBars,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa"

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "placeholder-logo1.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <nav className="top bg-primary text-white">
      <div className="flex justify-between max-w-screen-xl mx-auto py-4">
        <div className="flex w-1/4">
          <Link to="/">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="w-32 lg:w-56"
            />
          </Link>
        </div>
        <div className="flex w-1/2 self-center">
          <ul className="flex justify-center w-full text-lg">
            <li
              className="mr-2 relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => {
                setIsOpen(false)
              }}
            >
              <button className="flex px-2 py-1 bg-white text-primary rounded-md border border-gray-200">
                Membership
                {isOpen === true ? (
                  <FaAngleUp className="ml-1 self-center" />
                ) : (
                  <FaAngleDown className="ml-1 self-center" />
                )}
              </button>
              <div
                className={`bg-white py-2 px-12 absolute w-100 flex justify-center rounded-md shadow-md overflow-hidden transition-all duration-700 whitespace-no-wrap right-0 ${
                  isOpen ? "opacity-1 block" : "opacity-0 hidden"
                }`}
              >
                <ul className="flex flex-col text-black">
                  <li className="py-2">Item 1</li>
                  <li className="py-2">Item 2</li>
                  <li className="py-2">Item 3</li>
                </ul>
              </div>
            </li>
            <li className="mx-2">Programs</li>
            <li className="mx-2">Services</li>
            <li className="mx-2">About</li>
            <li className="ml-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-1/4 justify-end self-center">
          <button className="snipcart-customer-signin flex self-center mr-1 text-white py-1 px-2 rounded-md">
            <FaSignInAlt className="mr-1 self-center" />
            Sign In
          </button>
          <button className="snipcart-checkout flex self-center ml-1 py-1 px-2 text-white rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            <FaShoppingCart className="mr-1 self-center" />
            Cart
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NewNav

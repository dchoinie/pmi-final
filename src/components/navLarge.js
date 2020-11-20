import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaSignInAlt, FaShoppingCart } from "react-icons/fa"

const NavLarge = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/logo.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="bg-transparent hidden lg:block relative z-10 py-4">
      <div className="max-w-screen-xl mx-auto mb-2">
        <ul className="flex justify-end text-gray-700">
          <li className="mr-4">
            <button className="flex snipcart-customer-signin">
              <FaSignInAlt className="self-center mr-2" />
              Sign In
            </button>
          </li>
          <li className="flex">
            <button className="flex snipcart-checkout">
              <FaShoppingCart className="self-center mr-2" />
              Cart
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <div className="flex self-end">
          <Link to="/">
            <Img fluid={data.logo.childImageSharp.fluid} className="w-56" />
          </Link>
        </div>
        <ul className="flex text-gray-700">
          <li className="self-center mr-4 border-b border-transparent hover:border-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/membership">Membership</Link>
          </li>
          {/* <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/programs">Programs</Link>
          </li> */}
          <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/services">Services</Link>
          </li>
          <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/about">About</Link>
          </li>
          <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/hours">Hours</Link>
          </li>
          <li className="self-center mx-4 border-b border-transparent hover:border-primary">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="self-center ml-4">
            <Link
              to="/membership"
              className="bg-primary text-white text-lg px-4 py-2 rounded-full shadow-md hover:bg-primary-light transition duration-150 ease-in-out"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavLarge

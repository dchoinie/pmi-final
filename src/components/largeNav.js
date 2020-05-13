import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaSignInAlt, FaShoppingBag } from "react-icons/fa"

const LargeNav = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "placeholder-logo1.png" }) {
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
    <nav className="hidden lg:block">
      <div className="bg-primary">
        <div className="flex max-w-screen-xl mx-auto">
          <div className="flex justify-start w-1/4 py-4">
            <Link to="/">
              <Img fluid={data.logo.childImageSharp.fluid} className="w-56" />
            </Link>
          </div>
          <div className="flex w-1/2 p-4">
            <ul className="flex w-full justify-around self-center text-lg text-white">
              <li>
                <Link to="/membership">Membership</Link>
              </li>
              <li>
                <Link to="/">Programs</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end w-1/4 py-4">
            <button className="snipcart-customer-signin flex px-2 py-1 shadow rounded-md self-center mr-6 bg-secondary text-white transition duration-150 ease-in-out focus:outline-none hover:bg-secondary-dark">
              <FaSignInAlt className="self-center mr-2" />
              Sign-In
            </button>
            <button className="snipcart-checkout flex px-2 py-1 shadow rounded-md self-center bg-background text-primary transition duration-150 ease-in-out focus:outline-none hover:bg-gray-500">
              <FaShoppingBag className="self-center mr-2" />
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LargeNav

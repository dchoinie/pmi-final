import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
          address
          city
          email
          phone
          state
          zip
        }
      }
      logo: file(relativePath: { eq: "logos/logo.png" }) {
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
    <footer className="bg-primary-dark">
      <div className="max-w-screen-xl mx-auto p-12">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row justify-start w-full lg:w-1/2">
            {/* <div className="flex justify-center lg:self-start">
              <Img fluid={data.logo.childImageSharp.fluid} className="w-56" />
            </div> */}
            <div className="flex flex-col text-gray-500 text-center lg:text-left">
              <div className="flex flex-col self-center mb-2">
                <p>
                  {data.site.siteMetadata.address} {data.site.siteMetadata.city}
                  , {data.site.siteMetadata.state} {data.site.siteMetadata.zip}
                </p>
                <p>{data.site.siteMetadata.phone}</p>
                <p>{data.site.siteMetadata.email}</p>
              </div>
              <div className="flex justify-center lg:justify-start my-4">
                <div className="flex border border-gray-500 p-2 mr-1 rounded-full">
                  <FaFacebook className="text-xl" />
                </div>
                <div className="flex border border-gray-500 p-2 mx-1 rounded-full">
                  <FaTwitter className="text-xl" />
                </div>
                <div className="flex border border-gray-500 p-2 ml-1 rounded-full">
                  <FaInstagram className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-1/2 justify-around">
            <div className="my-2 lg:my-0">
              <ul className="flex flex-col text-gray-500 text-center lg:text-left">
                <li className="text-white">Navigate</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/membership">Membership</Link>
                </li>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="my-2 lg:my-0">
              <ul className="flex flex-col text-gray-500 text-center lg:text-left">
                <li className="text-white">Company</li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms Of Service</Link>
                </li>

                <li>
                  <Link to="/">Accessibility Policy</Link>
                </li>
              </ul>
            </div>
            <div className="my-2 lg:my-0">
              <ul className="flex flex-col text-gray-500 text-center lg:text-left">
                <li className="text-white">Members</li>
                <li>
                  <Link to="/">Sign In</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Guest &amp; Gym Policies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <hr className="my-4 border-gray-500" />
        </div>
        <div className="flex justify-center">
          <small className="text-gray-500 text-center">
            &copy; PMI Total Fitness {new Date().getFullYear()}, All Rights
            Reserved
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer

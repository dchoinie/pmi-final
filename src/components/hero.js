import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import Texture from "../images/brickwall.png"
import { FaUserPlus, FaSearch, FaUser } from "react-icons/fa"
import { IoMdFlashlight } from "react-icons/io"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
          city
          email
          phone
          state
          zip
          address
        }
      }
      pmi: file(relativePath: { eq: "pmi1.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="bg-background">
      <div
        className="max-w-screen-xl mx-auto flex h-screen"
        // style={{ height: "calc(100vh - 78.31px)" }}
      >
        <div className="flex flex-col lg:flex-row w-full px-6 lg:px-0 self-center">
          <div className="w-full items-center lg:items-start lg:w-1/2 flex flex-col self-center pr-6">
            <h1 className="text-3xl whitespace-no-wrap lg:text-huge font-bold leading-none text-primary uppercase">
              PMI <span className="text-secondary font-bold">Total</span>{" "}
              Fitness
            </h1>
            <h4 className="text-xl text-center lg:text-left lg:text-2xl text-gray-700">
              {data.site.siteMetadata.description}
            </h4>
            <div className="flex py-2">
              <Link
                to="/membership"
                className="flex self-center mr-1 bg-primary text-white text-lg px-3 py-2 rounded whitespace-no-wrap hover:bg-primary-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow-lg"
              >
                <FaUserPlus className="text-2xl mr-2 self-center" />
                Join Now
              </Link>
              <ScrollLink
                to="explore"
                smooth={true}
                duration={500}
                className="flex self-center ml-1 cursor-pointer text-primary bg-white text-lg px-3 py-2 rounded whitespace-no-wrap hover:text-primary-dark hover:border-purple-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow-lg"
              >
                <IoMdFlashlight className="text-2xl mr-2 self-center" />
                Explore PMI
              </ScrollLink>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-primary rounded shadow-md mt-12 lg:mt-0">
            <Img
              fluid={data.pmi.childImageSharp.fluid}
              className="rounded shadow-md transform -translate-x-6 -translate-y-6 pmi self-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

{
  /* <div
        className="flex justify-between self-center"
        style={{ border: "1px solid blue" }}
      >
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <h1 className="text-6xl font-bold leading-none yellow">
            {data.site.siteMetadata.title}
          </h1>
          <h4 className="text-2xl dark-accent">
            {data.site.siteMetadata.description}
          </h4>
          <p className="text-base main max-w-xl">
            <em>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              totam blanditiis omnis assumenda perferendis delectus dicta ipsa
              cumque.
            </em>
          </p>
          <div className="flex py-2">
            <Link to="/membership" className="outline-button self-center mr-1">
              Join Now
            </Link>
            <ScrollLink
              to="explore"
              smooth={true}
              duration={500}
              className="solid-button self-center ml-1 cursor-pointer"
            >
              Explore PMI
            </ScrollLink>
          </div>
        </div>
        <div className="w-1/2 pl-6">
          <div className="flex justify-center">
            <div className="w-full p-2 rounded shadow-xl border border-yellow-300">
              <Img
                fluid={data.pmi.childImageSharp.fluid}
                className="w-full rounded shadow"
              />
            </div>
          </div>
        </div>
      </div> */
}

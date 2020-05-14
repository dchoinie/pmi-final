import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Dots from "../images/texture/dot-grid.png"
import Img from "gatsby-image"
import { FaAngleRight, FaPhone } from "react-icons/fa"

const Join = () => {
  const data = useStaticQuery(graphql`
    {
      join: file(relativePath: { eq: "people/undraw_team_ih79.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="relative my-12 lg:my-0">
      <div
        className="hidden absolute lg:block"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          top: "0",
          left: "0",
          clipPath: "polygon(0 100%, 0 0, 100% 0)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto lg:h-screen px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex w-full lg:w-1/2 flex-col justify-center items-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-700">
              Ready To Join?
            </h2>
            <p className="text-gray-600">
              Get started on your membership today!
            </p>
            <div className="flex justify-center mt-6">
              <Link
                to="/membership"
                className="flex bg-primary text-white text-base whitespace-no-wrap lg:text-2xl px-4 py-1 rounded-full shadow mr-2 border border-transparent focus:outline-none"
              >
                Get Started <FaAngleRight className="self-center ml-2" />
              </Link>
              <Link
                to="/contact"
                className="flex bg-background text-primary text-base whitespace-no-wrap lg:text-2xl px-4 py-1 rounded-full shadow ml-2 border border-primary"
              >
                Contact Us <FaPhone className="self-center ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2">
            <Img
              fluid={data.join.childImageSharp.fluid}
              className="w-full self-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join

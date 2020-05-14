import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Dots from "../images/texture/dot-grid.png"
import { FaAngleRight } from "react-icons/fa"
import { IoMdFlashlight } from "react-icons/io"

const Hero2 = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "people/undraw_healthy_habit_bh5w.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          address
          city
          description
          email
          phone
          state
          title
          zip
        }
      }
    }
  `)
  return (
    <div className="flex h-screen relative hero-margin">
      <div
        className="hidden absolute lg:block"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          bottom: "0",
          right: "0",
          zIndex: "-1",
          clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto self-center w-full">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex flex-col justify-center w-full self-center lg:w-1/2 mb-6 lg:mb-0">
            <div className="flex flex-col self-center">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-primary lg:leading-none text-center lg:text-left">
                {data.site.siteMetadata.title}
              </h1>
              <h5 className="text-base lg:text-xl text-gray-700 text-center lg:text-left">
                {data.site.siteMetadata.description}
              </h5>
              <div className="flex justify-center lg:justify-start w-full mt-2">
                <button className="flex bg-primary text-white text-base whitespace-no-wrap lg:text-2xl px-4 py-1 rounded-full shadow mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out">
                  Get Started <FaAngleRight className="self-center ml-2" />
                </button>
                <button className="flex bg-background text-primary text-base whitespace-no-wrap lg:text-2xl px-4 py-1 rounded-full shadow ml-2 border border-primary focus:outline-none hover:border-transparent hover:bg-primary-light hover:text-white transition duration-150 ease-in-out">
                  Explore PMI <IoMdFlashlight className="self-center ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full lg:w-1/2 self-center mt-6 lg:mb-0">
            <Img fluid={data.hero.childImageSharp.fluid} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2

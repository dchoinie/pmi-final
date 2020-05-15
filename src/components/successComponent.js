import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaAngleLeft } from "react-icons/fa"
import Dots from "../images/texture/dot-grid.png"

const SuccessComponent = () => {
  const data = useStaticQuery(graphql`
    {
      success: file(
        relativePath: {
          eq: "people/undraw_finish_line_katerina_limpitsouni_xy20.png"
        }
      ) {
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
    <div className="relative">
      <div
        className="hidden absolute lg:block"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          bottom: "0",
          left: "0",
          zIndex: "-1",
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto lg:h-screen px-4 lg:px-0 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex w-full lg:w-1/2">
            <Img
              fluid={data.success.childImageSharp.fluid}
              className="w-full self-center"
            />
          </div>
          <div className="flex w-full lg:w-1/2">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-5xl font-extrabold text-gray-700">
                Success!
              </h2>
              <p className="text-gray-700">
                We have received your message and will get back to you shortly.
              </p>
              <div className="flex mt-6">
                <Link
                  to="/"
                  className="flex bg-primary text-white text-base whitespace-no-wrap lg:text-2xl px-4 py-1 rounded-full shadow mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
                >
                  <FaAngleLeft className="self-center mr-2" /> Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessComponent

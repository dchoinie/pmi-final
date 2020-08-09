import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Dots from "../images/texture/dot-grid.png"
import Img from "gatsby-image"

const AboutPMI = () => {
  const data = useStaticQuery(graphql`
    {
      about: file(relativePath: { eq: "pmi/pmi1.jpg" }) {
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
    <div className="relative hero-margin">
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
      <div className="max-w-screen-xl mx-auto h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex w-full lg:w-1/2 p-6">
            <Img
              fluid={data.about.childImageSharp.fluid}
              className="w-full self-center rounded-md shadow-md"
            />
          </div>
          <div className="flex w-full lg:w-1/2 p-6">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-5xl font-extrabold text-gray-700">
                About PMI
              </h2>
              <p className="text-gray-600 mb-4">
                PMI Total Fitness is a fitness and rehabilitation gym located in
                Waterville, Minnesota. Available amenities include free weights,
                weight and aerobic machines, yoga, personal training
                specializing in Post Rehabilitation, massage, tanning, &amp;
                more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPMI

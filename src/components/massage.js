import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Massage = () => {
  const data = useStaticQuery(graphql`
    {
      massage: file(
        relativePath: { eq: "people/undraw_mindfulness_scgo.png" }
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
    <div className="relative hero-margin px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex w-full lg:w-1/2">
            <Img
              fluid={data.massage.childImageSharp.fluid}
              className="self-center w-full"
            />
          </div>
          <div className="flex w-full lg:w-1/2">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-3xl lg:text-5xl text-gray-700 font-extrabold">
                Massage
              </h2>
              <p className="text-gray-700 mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quis delectus, ut cupiditate unde deleniti perferendis fugiat
                quidem animi id.
              </p>
              <div className="grid grid-cols-4 gap-2 w-full text-center">
                <div className="col-span-2 text-gray-700 font-bold">
                  Member Rates:
                </div>
                <div className="col-span-2 text-gray-700 font-bold">
                  Public Rates
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 underline">1/2 Hour</p>
                  <p className="text-gray-600">$30</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 underline">1 Hour</p>
                  <p className="text-gray-600">$50</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 underline">1/2 Hour</p>
                  <p className="text-gray-600">$38</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 underline">1 Hour</p>
                  <p className="text-gray-600">$60</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Massage

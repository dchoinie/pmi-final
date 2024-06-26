import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PersonalTraining = () => {
  const data = useStaticQuery(graphql`
    {
      pt: file(
        relativePath: { eq: "people/undraw_personal_trainer_ote3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <div className="relative hero-margin px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex w-full lg:w-1/2">
            <GatsbyImage
              image={data.pt.childImageSharp.gatsbyImageData}
              className="self-center w-full"
            />
          </div>

          <div className="flex w-full lg:w-1/2">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-3xl lg:text-5xl text-gray-700 font-extrabold">
                Personal Training
              </h2>
              <p className="mb-4 text-gray-600 text-center">
                With 30 years of experience, our National Academy of Sport
                Medicine (NASM) Certified Personal Trainer and
                Post-Rehabilitation Specialist is available for personal and
                group instruction, coaching and individualized program design to
                meet your specific goals.
              </p>
              <div className="flex flex-col lg:flex-row w-full">
                <div className="flex justify-center w-full lg:w-1/2 mb-4 lg:mb-0">
                  <ul className="flex flex-col text-gray-600 text-center">
                    <li className="text-gray-700 underline">Member Rates:</li>
                    <li>$35/hr</li>
                    <li>$65/2hrs</li>
                    <li>$90/3hrs</li>
                    <li>$112/4hrs</li>
                    <li>$200/8hrs</li>
                  </ul>
                </div>
                <div className="flex justify-center w-full lg:w-1/2">
                  <ul className="flex flex-col text-gray-600 text-center">
                    <li className="text-gray-700 underline">
                      Non Member Rates:
                    </li>
                    <li>$45/hr</li>
                    <li>
                      <p>Multi session discounts &amp; group rates available</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalTraining

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tanning = () => {
  const data = useStaticQuery(graphql`
    {
      tanning: file(relativePath: { eq: "people/undraw_sunlight_tn7t.png" }) {
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
          <div className="flex w-full lg:w-1/2 order-last lg:order-first">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-3xl lg:text-5xl text-gray-700 font-extrabold">
                Tanning
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                We have 2 units: Sunstar Speed 175, a 20' laydown bed and a
                Sunvision Elite Walff Tanning System 12' stand-up unit. We also
                have an assortment of tanning lotions, protective eyewear, nail
                and tattoo protectors available for purchase.
              </p>
              <div className="grid grid-cols-5 gap-2 w-full text-center text-gray-600">
                <div className="col-start-2 col-span-2 font-bold text-gray-700">
                  Member Rates:
                </div>
                <div className="col-span-2 font-bold text-gray-700">
                  Public Rates:
                </div>
                <div className="col-start-2 underline">Bed</div>
                <div className="underline">Stand Up</div>
                <div className="col-start-4 underline">Bed</div>
                <div className="underline">Stand Up</div>
                <div className="lg:whitespace-no-wrap">Single</div>
                <div>$4.00</div>
                <div>$5.00</div>
                <div>$5.00</div>
                <div>$6.00</div>
                <div className="lg:whitespace-no-wrap">10 Session Package</div>
                <div>$30</div>
                <div>$40</div>
                <div>$40</div>
                <div>$60</div>
                <div className="lg:whitespace-no-wrap">1 Month Unlimited</div>
                <div>$40</div>
                <div>$50</div>
                <div>$50</div>
                <div>$60</div>
                <div className="lg:whitespace-no-wrap">1 Year Unlimited</div>
                <div>$17</div>
                <div>-</div>
                <div>$20</div>
                <div>-</div>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2">
            <Img
              fluid={data.tanning.childImageSharp.fluid}
              className="self-center w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tanning

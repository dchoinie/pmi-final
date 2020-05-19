import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Dots from "../images/texture/dot-grid.png"
import { FaPhone } from "react-icons/fa"

const Explore2 = () => {
  const data = useStaticQuery(graphql`
    {
      explore: file(
        relativePath: { eq: "people/undraw_activity_tracker_1l9o.png" }
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
    <div className="lg:h-screen relative px-6 lg:px-0">
      <div
        className="hidden absolute lg:block"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          top: "0",
          left: "0",
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
        }}
      ></div>
      <div className="bg-white h-full flex max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex w-full lg:w-1/2 justify-center">
            <Img
              fluid={data.explore.childImageSharp.fluid}
              className="w-full self-center"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-700">
              Explore PMI
            </h2>
            <p className="text-center text-gray-600">
              PMI offers a wide variety of free weights, weight machines &amp;
              cardio equipment along with many services &amp; amenities.
            </p>
            <div className="flex flex-col lg:flex-row w-full mt-6">
              <ul className="flex flex-col text-center text-gray-600 w-full lg:w-1/3">
                <li className="text-gray-600 text-2xl underline">Equipement</li>
                <li className="text-gray-500">Aerobic Equipment</li>
                <li className="text-gray-500">Free Weights</li>
                <li className="text-gray-500">Weight Machines</li>
              </ul>
              <ul className="flex flex-col text-center text-gray-600 w-full lg:w-1/3">
                <li className="text-gray-600 text-2xl underline">Services</li>
                <li className="text-gray-500">Personal Training</li>
                <li className="text-gray-500">Tanning</li>
                <li className="text-gray-500">Massage</li>
              </ul>
              <ul className="flex flex-col text-center text-gray-600 w-full lg:w-1/3">
                <li className="text-gray-600 text-2xl underline">Amenities</li>
                <li className="text-gray-500">Locker Room</li>
                <li className="text-gray-500">24-Hour Access</li>
                <li className="text-gray-500">Wi-Fi</li>
              </ul>
            </div>
            <div className="flex flex-col items-center mt-12">
              <h2 className="text-2xl text-gray-700">Have More Questions?</h2>
              <Link
                to="/contact"
                className="flex bg-primary text-white px-4 py-1 rounded-full text-lg"
              >
                Contact Us <FaPhone className="self-center ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore2

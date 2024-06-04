import React from "react"
import Dots from "../images/texture/dot-grid.png"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaAngleRight } from "react-icons/fa"
import Testimonial from "../components/testimonial"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      testimonial: file(
        relativePath: { eq: "people/undraw_personal_opinions_g3kr.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      girl1: file(relativePath: { eq: "people/girl1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      guy1: file(relativePath: { eq: "people/guy1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      guy2: file(relativePath: { eq: "people/guy2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
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
          bottom: "0",
          right: "0",
          zIndex: "-1",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto lg:h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full px-6 lg:px-0">
          <div className="flex w-full lg:w-1/2">
            <GatsbyImage
              image={data.testimonial.childImageSharp.gatsbyImageData}
              className="w-full self-center"
            />
          </div>
          <div className="flex w-full lg:w-1/2 flex-col justify-center items-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-700">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <Testimonial
                text="I love to go to PMI Total Fitness. Everyone is friendly, professional and the place is clean. My favorite is the tanning beds. 😎"
                name="Christina"
                date="9/20/2018"
                img={data.girl1.childImageSharp.gatsbyImageData}
              />
              <Testimonial
                text="Amazing equipment, great staff and phenomenal work-outs.💯⭐⭐⭐⭐⭐"
                name="Brett"
                date="1/20/2020"
                img={data.guy1.childImageSharp.gatsbyImageData}
              />
              <Testimonial
                text="Excellent gym, owners and employees are very helpful and professional."
                name="Nicholas"
                date="7/25/2018"
                img={data.guy2.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

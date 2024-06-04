import React from "react"
import Dots from "../images/texture/dot-grid.png"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaAngleRight } from "react-icons/fa"

const Programs = () => {
  const data = useStaticQuery(graphql`
    {
      programs: file(
        relativePath: { eq: "people/undraw_healthy_lifestyle_6tyl.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      silverSneakers: file(
        relativePath: { eq: "thirdPartyLogos/silver-sneakers-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      silverFit: file(
        relativePath: { eq: "thirdPartyLogos/silver-and-fit.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      hp: file(relativePath: { eq: "thirdPartyLogos/health-partners.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      medica: file(relativePath: { eq: "thirdPartyLogos/medica.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      ucare: file(relativePath: { eq: "thirdPartyLogos/ucare_logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      bcbs: file(
        relativePath: { eq: "thirdPartyLogos/blue-cross-blue-shield-logo.png" }
      ) {
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
          top: "0",
          right: "0",
          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto lg:h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-700">
              Programs
            </h2>
            <p className="text-center text-gray-600 px-4 lg:px-0">
              PMI supports a variety of reimbursement/incentive programs. Log in
              to:{" "}
              <a
                href="https://nihcarewards.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                nihcarewards.org
              </a>{" "}
              to check eligibility.
            </p>
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 col-gap-6 mt-6 px-4 lg:px-0">
              <GatsbyImage
                image={data.silverSneakers.childImageSharp.gatsbyImageData}
                className="self-center"
              />
              <GatsbyImage
                image={data.silverFit.childImageSharp.gatsbyImageData}
                className="self-center"
              />
              <GatsbyImage
                image={data.hp.childImageSharp.gatsbyImageData}
                className="self-center"
              />
              <GatsbyImage
                image={data.medica.childImageSharp.gatsbyImageData}
                className="self-center"
              />
              <GatsbyImage
                image={data.bcbs.childImageSharp.gatsbyImageData}
                className="self-center"
              />
              <GatsbyImage
                image={data.ucare.childImageSharp.gatsbyImageData}
                className="self-center"
              />
            </div>
            <Link
              to="/programs"
              className="flex bg-primary text-white rounded-full self-center px-4 py-1"
            >
              Learn More <FaAngleRight className="self-center ml-2" />
            </Link>
          </div>
          <div className="flex w-full lg:w-1/2 self-center order-first lg:order-last">
            <GatsbyImage
              image={data.programs.childImageSharp.gatsbyImageData}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs

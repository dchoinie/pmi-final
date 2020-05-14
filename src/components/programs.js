import React from "react"
import Dots from "../images/texture/dot-grid.png"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"

const Programs = () => {
  const data = useStaticQuery(graphql`
    {
      programs: file(
        relativePath: { eq: "people/undraw_healthy_lifestyle_6tyl.png" }
      ) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      silverSneakers: file(
        relativePath: { eq: "thirdPartyLogos/silver-sneakers-logo.png" }
      ) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      silverFit: file(
        relativePath: { eq: "thirdPartyLogos/silver-and-fit.png" }
      ) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      hp: file(relativePath: { eq: "thirdPartyLogos/health-partners.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      medica: file(relativePath: { eq: "thirdPartyLogos/medica.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      ucare: file(relativePath: { eq: "thirdPartyLogos/ucare_logo.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      bcbs: file(
        relativePath: { eq: "thirdPartyLogos/blue-cross-blue-shield-logo.png" }
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
              <Img
                fluid={data.silverSneakers.childImageSharp.fluid}
                className="self-center"
              />
              <Img
                fluid={data.silverFit.childImageSharp.fluid}
                className="self-center"
              />
              <Img
                fluid={data.hp.childImageSharp.fluid}
                className="self-center"
              />
              <Img
                fluid={data.medica.childImageSharp.fluid}
                className="self-center"
              />
              <Img
                fluid={data.bcbs.childImageSharp.fluid}
                className="self-center"
              />
              <Img
                fluid={data.ucare.childImageSharp.fluid}
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
          <div className="flex w-full lg:w-1/2 self-center">
            <Img
              fluid={data.programs.childImageSharp.fluid}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs

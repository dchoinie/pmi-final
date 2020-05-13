import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const LogoCloud = () => {
  const data = useStaticQuery(graphql`
    {
      silverSneakers: file(relativePath: { eq: "silver-sneakers-logo.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      silverFit: file(relativePath: { eq: "silver-and-fit.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueCross: file(relativePath: { eq: "blue-cross-blue-shield-logo.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      medica: file(relativePath: { eq: "medica.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      uCare: file(relativePath: { eq: "ucare_logo.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      healthPartners: file(relativePath: { eq: "health-partners.png" }) {
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
    <div className="flex max-w-screen-xl mx-auto py-6">
      <div className="flex w-full justify-between">
        <Img
          fluid={data.silverSneakers.childImageSharp.fluid}
          className="w-40 self-center"
        />
        <Img
          fluid={data.silverFit.childImageSharp.fluid}
          className="w-40 self-center"
        />
        <Img
          fluid={data.blueCross.childImageSharp.fluid}
          className="w-40 self-center"
        />
        <Img
          fluid={data.medica.childImageSharp.fluid}
          className="w-40 self-center"
        />
        <Img
          fluid={data.uCare.childImageSharp.fluid}
          className="w-40 self-center"
        />
        <Img
          fluid={data.healthPartners.childImageSharp.fluid}
          className="w-40 self-center"
        />
      </div>
    </div>
  )
}

export default LogoCloud

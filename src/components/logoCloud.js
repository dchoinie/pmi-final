import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const LogoCloud = () => {
  const data = useStaticQuery(graphql`
    {
      silverSneakers: file(relativePath: { eq: "silver-sneakers-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      silverFit: file(relativePath: { eq: "silver-and-fit.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      blueCross: file(relativePath: { eq: "blue-cross-blue-shield-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      medica: file(relativePath: { eq: "medica.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      uCare: file(relativePath: { eq: "ucare_logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      healthPartners: file(relativePath: { eq: "health-partners.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <div className="flex max-w-screen-xl mx-auto py-6">
      <div className="flex w-full justify-between">
        <GatsbyImage
          image={data.silverSneakers.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
        <GatsbyImage
          image={data.silverFit.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
        <GatsbyImage
          image={data.blueCross.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
        <GatsbyImage
          image={data.medica.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
        <GatsbyImage
          image={data.uCare.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
        <GatsbyImage
          image={data.healthPartners.childImageSharp.gatsbyImageData}
          className="w-40 self-center"
        />
      </div>
    </div>
  )
}

export default LogoCloud

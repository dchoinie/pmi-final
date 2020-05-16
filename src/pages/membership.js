import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import PricingCard from "../components/pricingCard"
import NoContractBtn from "../components/joinButtons/noContract"
import NoContract24Btn from "../components/joinButtons/noContract24"

export const MembershipImage = graphql`
  {
    addUser: file(relativePath: { eq: "people/undraw_add_user_ipe3.png" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    m2m: file(relativePath: { eq: "people/undraw_fitness_stats_sht6.png" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Membership = ({ data }) => {
  return (
    <Layout>
      <div className="relative">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row w-full h-screen">
            <div className="flex w-1/2">
              <Img
                fluid={data.addUser.childImageSharp.fluid}
                className="w-full self-center"
              />
            </div>
            <div className="flex flex-col w-1/2 self-center">
              <div className="flex flex-col self-center items-center w-full">
                <h2 className="text-5xl font-extrabold text-gray-700">
                  Membership Options
                </h2>
                <p className="text-gray-600 text-center">
                  With both month-to-month and yearly contract options, we are
                  confident we have a membership that will fit your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 h-full">
              <PricingCard
                title="Individual (Month-To-Month)"
                desc="Access to PMI for 1 month"
                price="35"
                feat1="No commitment"
                feat2="Access to all equipment"
                feat3="Locker room access"
                feat4="Welcome 50% off services"
                button={<NoContractBtn />}
              />
              <PricingCard
                title="Individual (Month-To-Month) With 24-Hr Access"
                desc="24-Hour access to PMI for 1 month"
                price="40"
                feat1="No commitment"
                feat2="Access to all equipment"
                feat3="Locker room access"
                feat4="Welcome 50% off services"
                button={<NoContract24Btn />}
              />
            </div>
            <div className="flex flex-col items-center w-1/2 self-center">
              <h2 className="text-4xl font-extrabold text-gray-700">
                Month-To-Month Options
              </h2>
              <Img fluid={data.m2m.childImageSharp.fluid} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Membership

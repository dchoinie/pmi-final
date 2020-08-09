import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import PricingCard from "../components/pricingCard"
import NoContractBtn from "../components/joinButtons/noContract"
import NoContract24Btn from "../components/joinButtons/noContract24"
import ContractBtn from "../components/joinButtons/contract"
import Contract24Btn from "../components/joinButtons/contract24"
import SpecialBtn from "../components/joinButtons/special"
import Special24Btn from "../components/joinButtons/special24"

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
    contract: file(relativePath: { eq: "people/undraw_contract_uy56.png" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    student: file(relativePath: { eq: "people/undraw_exams_g4ow.png" }) {
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
      <div className="relative hero-margin">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row w-full h-screen justify-center">
            <div className="flex w-full lg:w-1/2">
              <Img
                fluid={data.addUser.childImageSharp.fluid}
                className="w-full self-center"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 self-center">
              <div className="flex flex-col self-center items-center w-full">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-700 text-center">
                  Membership Options
                </h2>
                <p className="text-gray-600 text-center">
                  With both month-to-month and yearly contract options, we are
                  confident we have a membership that will fit your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-1/2 h-full">
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
            <div className="flex flex-col items-center w-full lg:w-1/2 self-center order-first lg:order-last">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-700">
                Month-To-Month Options
              </h2>
              <Img fluid={data.m2m.childImageSharp.fluid} className="w-full" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-24">
            <div className="flex flex-col items-center w-full lg:w-1/2 self-center">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-700">
                12-Month Contract Options
              </h2>
              <Img
                fluid={data.contract.childImageSharp.fluid}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 h-full">
              <PricingCard
                title="Individual (Contract)"
                desc="Access to PMI for 12 months"
                price="25"
                feat1="Discounted rate"
                feat2="Access to all equipment"
                feat3="Locker room access"
                feat4="Welcome 50% off services"
                button={<ContractBtn />}
              />
              <PricingCard
                title="Individual (Contract) With 24-Hr Access"
                desc="Access to PMI for 12 months, with 24-hour access"
                price="30"
                feat1="Discounted rate"
                feat2="Access to all equipment"
                feat3="Locker room access"
                feat4="Welcome 50% off services"
                button={<Contract24Btn />}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Membership

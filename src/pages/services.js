import React from "react"
import Layout from "../components/layout"
import PersonalTraining from "../components/personal-training"
import Tanning from "../components/tanning"
import Massage from "../components/massage"

const Services = () => {
  return (
    <Layout>
      <PersonalTraining />
      <Tanning />
      <Massage />
    </Layout>
  )
}

export default Services

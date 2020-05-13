import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero2 from "../components/hero2"
import Explore2 from "../components/explore2"
import Membership2 from "../components/membership2"
import Programs from "../components/programs"
import Testimonials from "../components/testimonials"
import Join from "../components/join"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero2 />
    <Explore2 />
    <Membership2 />
    <Programs />
    <Testimonials />
    <Join />
  </Layout>
)

export default IndexPage

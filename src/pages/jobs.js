import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Jobs = () => {
  return <Layout>
    <div className="flex justify-center py-12">
    <p>Please <Link to="/contact" className="text-blue-500 underline">Contact Us</Link> for potential employment opportunities.</p>
    </div>
  </Layout>
}

export default Jobs

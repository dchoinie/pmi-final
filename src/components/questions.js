import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Questions = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          phone
        }
      }
    }
  `)
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold text-gray-600">
            Have more questions?
          </h2>
          <h2 className="text-3xl font-extrabold text-primary">
            Contact Us Today!
          </h2>
        </div>
        <div className="flex flex-col self-center">
          <Link
            to="/contact"
            className="bg-primary text-white px-5 py-3 rounded-md self-center hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Contact Us
          </Link>
          <p className="mt-2 text-gray-600">
            Or call {data.site.siteMetadata.phone}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questions

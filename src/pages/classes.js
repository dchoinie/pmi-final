import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { Link } from "gatsby"
import { FaInfoCircle } from "react-icons/fa"

const Classes = () => {
  return (
    <Layout>
      <div className="my-24">
        <div className="max-w-screen-xl mx-auto">
          <PageTitle
            title="Classes"
            subTitle="Contact us directly to sign up for a class"
          />
          <iframe
            src="https://calendar.google.com/calendar/embed?src=f3qg34gum8ds1rhiil0vi0cb8o%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: "0", height: "75vh" }}
            frameBorder={0}
            scrolling="no"
            className="w-full"
          ></iframe>
          <div className="flex justify-between bg-primary rounded p-6 my-6">
            <div className="flex">
              <div className="flex mr-4">
                <FaInfoCircle className="text-3xl text-gray-300 self-center" />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-200">
                  To sign up for a class, please contact us directly.
                </p>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facilis, unde.
                </p>
              </div>
            </div>
            <div className="flex self-center">
              <Link
                to="/contact"
                className="back-light px-3 py-2 rounded purple"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Classes

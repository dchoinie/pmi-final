import React from "react"
import { graphql, useStaticQueryl, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import Dots from "../images/texture/dot-grid.png"

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    {
      contact: file(relativePath: { eq: "people/undraw_contact_us_15o2.png" }) {
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
    <div className="relative">
      <div
        className="absolute"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          bottom: "0",
          left: "0",
          zIndex: "-1",
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      ></div>
      <div
        className="max-w-screen-xl mx-auto h-screen"
        // style={{ marginTop: "-110.31px" }}
      >
        <div className="flex w-full h-full">
          <div className="flex w-1/2">
            <Img
              fluid={data.contact.childImageSharp.fluid}
              className="w-full self-center"
            />
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col self-center items-center w-full">
              <h2 className="text-5xl font-extrabold text-gray-700">
                Contact Us
              </h2>
              <form
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                name="Contact Form"
                className="w-full text-lg text-gray-700"
              >
                <input type="hidden" name="Contact Form" value="contact" />
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-500 rounded-md focus:outline-none mb-2"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-500 rounded-md focus:outline-none my-2"
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-2 border border-gray-500 rounded-md focus:outline-none my-2"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  className="w-full p-2 border border-gray-500 rounded-md focus:outline-none mt-2"
                ></textarea>
                <button
                  type="submit"
                  className="flex bg-primary text-white text-2xl px-4 py-1 rounded-full shadow mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
                >
                  Submit <FaAngleRight className="self-center ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

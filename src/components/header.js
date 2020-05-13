import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaShoppingBag,
  FaSignInAlt,
  FaShoppingCart,
  FaBars,
  FaArrowDown,
  FaAngleDown,
} from "react-icons/fa"
import ServicesDropdown from "../components/dropdowns/servicesDropdown"
import AboutDropdown from "../components/dropdowns/aboutDropdown"
import ProgramsDropdown from "../components/dropdowns/programsDropdown"

class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      menuOpen: false,
    })
  }

  toggleList() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }))
  }

  render() {
    const { menuOpen } = this.state
    return (
      <div className="flex lg:hidden text-primary">
        <div>
          <FaBars
            className="text-xl self-center"
            onClick={() => this.toggleList()}
          />
          <div className="absolute right-0 text-xl">
            {menuOpen && (
              <ul className="flex flex-col text-right">
                <li>
                  <Link to="/">Membership</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Classes</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "placeholder-logo1.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "placeholder-logo2.png" }) {
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
    <header className="bg-background text-gray-300">
      {/* <div className="flex bg-red-600 justify-center">
        <p className="text-gray-200 text-sm">
          PMI Total Fitness, under executive order, will be closed to comply
          with all the efforts to contain COVID-19
        </p>
      </div> */}
      <div className="flex justify-between max-w-screen-xl mx-auto py-4">
        <div className="flex w-1/4 justify-start pl-6 lg:px-0">
          <Link to="/">
            <Img
              fluid={data.logo2.childImageSharp.fluid}
              className="w-32 lg:w-56"
            />
          </Link>
        </div>
        <Hamburger />
        <div className="hidden lg:flex w-1/2 justify-center self-center text-gray-700">
          <ul className="flex text-lg">
            <li className="mx-2 self-center">
              <Link to="/membership" className="">
                Membership
              </Link>
            </li>
            <li className="mx-2 self-center relative">
              <ServicesDropdown />
            </li>
            <li className="mx-2 self-center relative">
              <ProgramsDropdown />
            </li>
            <li className="mx-2 self-center relative">
              <AboutDropdown />
            </li>
            <li className="mx-2 self-center">
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex w-1/4 justify-end self-center">
          <button className="snipcart-customer-signin flex self-center mr-1 bg-secondary py-1 px-2 text-white rounded hover:bg-secondary-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            <FaSignInAlt className="mr-1 self-center" />
            Sign In
          </button>
          <button className="snipcart-checkout flex self-center ml-1 bg-primary py-1 px-2 text-white rounded-md hover:bg-primary-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            <FaShoppingCart className="mr-1 self-center" />
            Cart
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

{
  /* <div className="flex justify-between px-6 py-2">
      <div className="flex">
        <ul className="flex self-center">
          <li className="mr-2">
            <Link to="/">
              <img src="https://via.placeholder.com/150x75?text=Logo" alt="" />
            </Link>
          </li>
          <li className="mx-2 self-center">
            <Link to="/membership">Membership</Link>
          </li>
          <li className="mx-2 self-center">
            <ServicesDropdown />
          </li>
          <li className="mx-2 self-center">
            <Link to="/classes">Classes</Link>
          </li>
          <li className="mx-2 self-center">
            <AboutDropdown />
          </li>
          <li className="ml-2 self-center">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button className="snipcart-customer-signin bg-teal-700 text-white px-5 py-3 rounded-md self-center mr-2 flex hover:bg-teal-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Sign In <FaSignInAlt className="self-center ml-2" />
        </button>
        <button className="snipcart-checkout bg-white text-teal-700 px-5 py-3 rounded-md self-center ml-2 flex hover:text-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          View Cart <FaShoppingBag className="self-center ml-2" />
        </button>
      </div>
    </div> */
}

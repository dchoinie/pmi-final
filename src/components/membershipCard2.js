import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaAngleRight } from "react-icons/fa"
import { Link } from "gatsby"

export default class membershipCard2 extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    large: PropTypes.string,
  }

  render() {
    return (
      <div
        className={`flex flex-col shadow-md rounded-md bg-white ${this.props.large}`}
      >
        <div className="flex justify-center w-full bg-primary text-white text-lg py-2 rounded-tl-md rounded-tr-md">
          <h2>{this.props.title}</h2>
        </div>
        <div className="flex justify-center p-6 h-full">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="">
              <p className="text-center text-gray-500">Starting At:</p>
              <p className="text-center text-5xl font-bold text-gray-700">
                ${this.props.price}{" "}
                <span className="text-lg self-center text-gray-600">/Mo</span>
              </p>
              <p className="text-center text-gray-600">
                {this.props.description}
              </p>
            </div>
            <div className="flex mt-6">
              <Link
                to="/membership"
                className="flex bg-primary text-white rounded-full self-center px-4 py-1"
              >
                Learn More <FaAngleRight className="self-center ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaCheckCircle, FaAngleRight } from "react-icons/fa"
import { Link } from "gatsby"

export default class PricingCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    feat1: PropTypes.string.isRequired,
    feat2: PropTypes.string.isRequired,
    feat3: PropTypes.string.isRequired,
    feat4: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    button: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="shadow-md rounded-md my-2 border border-gray-200">
        <div className="flex flex-col lg:h-40">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="flex flex-col w-full lg:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-700 text-center lg:text-left">
                {this.props.title}
              </h2>
              <p className="text-lg text-gray-600">{this.props.desc}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-center bg-background rounded-tr-md">
              <h2 className="text-5xl text-gray-700 font-extrabold leading-tight">
                ${this.props.price}
                <span className="text-base text-gray-600">/mo</span>
              </h2>
              <div className="flex justify-center mb-2">
                {this.props.button}
              </div>
              <Link to="/" className="text-sm text-gray-500 underline">
                Guest &amp; Gym Policies
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full px-6 my-2">
            <p className="whitespace-no-wrap text-primary uppercase">
              What's Included
            </p>
            <div className="border-t border-gray-500 w-full self-center ml-2"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 row-gap-2 px-6">
            <div className="flex">
              <FaCheckCircle className="text-green-500 self-center mr-2" />
              <p>{this.props.feat1}</p>
            </div>
            <div className="flex">
              <FaCheckCircle className="text-green-500 self-center mr-2" />
              <p>{this.props.feat2}</p>
            </div>
            <div className="flex">
              <FaCheckCircle className="text-green-500 self-center mr-2" />
              <p>{this.props.feat3}</p>
            </div>
            <div className="flex">
              <FaCheckCircle className="text-green-500 self-center mr-2" />
              <p>{this.props.feat4}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 py-2">
          <div className="flex flex-col">
            <p className="text-gray-700 lg:text-center mb-2 underline">
              Add additional members:
            </p>
            <div className="flex flex-col lg:flex-row justify-between text-gray-600">
              <div className="flex">1st Add-On: $15</div>
              <div className="flex">2nd Add-On: $5</div>
              <div className="flex">3rd Add-On: $5</div>
              <div className="flex">4th Add-On: $5</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

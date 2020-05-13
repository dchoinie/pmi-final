import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaCheck, FaBan } from "react-icons/fa"
import { Link } from "gatsby"

export default class membershipCard extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    perMonth: PropTypes.string,
    description: PropTypes.string.isRequired,
    feat1: PropTypes.string,
    feat2: PropTypes.string,
    feat3: PropTypes.string,
    feat4: PropTypes.string,
    feat5: PropTypes.string,
    btnText: PropTypes.string,
    dataItemId: PropTypes.string,
    dataItemName: PropTypes.string,
    snipPrice: PropTypes.string,
    href: PropTypes.string,
    snipcart: PropTypes.string,
  }

  render() {
    return (
      <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
        <div className="flex">
          <p className="bg-gray-300 text-purple-700 rounded-full px-2 uppercase font-bold text-sm">
            {this.props.type}
          </p>
        </div>
        <div className="flex">
          <h2 className="text-6xl font-bold text-gray-800">
            ${this.props.price}
            <span className="text-xl text-gray-700">{this.props.perMonth}</span>
          </h2>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex mt-2 mb-8 text-gray-700">
            <p>{this.props.description}</p>
          </div>

          <div className="flex">
            <ul className="flex flex-col">
              <li className="flex text-base my-1">
                <FaCheck className="self-center text-green-500 mr-2" />
                <p className="text-gray-600">{this.props.feat1}</p>
              </li>
              <li className="flex text-base my-1">
                <FaCheck className="self-center text-green-500 mr-2" />
                <p className="text-gray-600">{this.props.feat2}</p>
              </li>
              <li className="flex text-base my-1">
                <FaCheck className="self-center text-green-500 mr-2" />
                <p className="text-gray-600">{this.props.feat3}</p>
              </li>
              <li className="flex text-base my-1">
                <FaCheck className="self-center text-green-500 mr-2" />
                <p className="text-gray-600">{this.props.feat4}</p>
              </li>
              <li className="flex text-base my-1">
                <FaCheck className="self-center text-green-500 mr-2" />
                <p className="text-gray-600">{this.props.feat5}</p>
              </li>
            </ul>
          </div>
          <div className="flex mt-4">
            <a
              href={this.props.href}
              className={`${this.props.snipcart} back-dark text-white w-full rounded-lg py-2 text-center cursor-pointer`}
              data-item-id={this.props.dataItemId}
              data-item-price={this.props.snipPrice}
              data-item-url="/membership"
              data-item-description={this.props.description}
              data-item-name={this.props.dataItemName}
            >
              {this.props.btnText}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

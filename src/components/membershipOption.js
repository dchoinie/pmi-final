import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaAngleRight, FaCheck, FaBan } from "react-icons/fa"

export default class membershipOption extends Component {
  static propTypes = {
    type: PropTypes.string,
    description: PropTypes.string.isRequired,
    large: PropTypes.string,
    feat1: PropTypes.string,
    feat2: PropTypes.string,
    feat3: PropTypes.string,
    feat4: PropTypes.string,
    feat5: PropTypes.string,
    feat6: PropTypes.string,
    feat7: PropTypes.string,
    feat8: PropTypes.string,
    feat9: PropTypes.string,
    feat10: PropTypes.string,
    value: PropTypes.string,
  }

  render() {
    return (
      <div
        className={`flex flex-col items-center shadow-md rounded-md bg-white -mb-48 ${this.props.large}`}
      >
        {this.props.value === "" ? null : (
          <p className="bg-secondary text-white px-2 rounded-full uppercase text-sm -mt-3">
            {this.props.value}
          </p>
        )}
        <div className="flex flex-col items-center p-12">
          <h2 className="text-3xl uppercase font-semibold text-gray-800">
            {this.props.type}
          </h2>
          <hr className="border-t-2 border-gray-300 w-1/4 py-1" />
          <p className="text-center text-gray-700">{this.props.description}</p>
        </div>
        <div className="flex flex-col justify-between w-full items-center h-full bg-gray-100">
          <div className="flex p-6">
            <ul className="flex flex-col">
              <li className="flex pb-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat1}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat2}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat3}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat4}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat5}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat6}
                </p>
              </li>
              <li className="flex py-2">
                <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                <p className="text-gray-600 leading-tight">
                  {this.props.feat7}
                </p>
              </li>
              {this.props.feat8 === "" ? null : (
                <li className="flex py-2">
                  <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                  <p className="text-gray-600 leading-tight">
                    {this.props.feat8}
                  </p>
                </li>
              )}
              {this.props.feat9 === "" ? null : (
                <li className="flex py-2">
                  <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                  <p className="text-gray-600 leading-tight">
                    {this.props.feat9}
                  </p>
                </li>
              )}
              {this.props.feat10 === "" ? null : (
                <li className="flex pt-2">
                  <FaCheck className="flex-shrink-0 w-12 mr-2 text-secondary self-center" />
                  <p className="text-gray-600 leading-tight">
                    {this.props.feat10}
                  </p>
                </li>
              )}
            </ul>
          </div>
          <div className="p-6 w-full">
            <button className="text-white p-2 text-lg flex w-full bg-primary justify-center rounded-md hover:bg-primary-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaLock } from "react-icons/fa"

export default class exploreCard extends Component {
  static propTypes = {
    cardTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon1: PropTypes.element,
    icon1Desc: PropTypes.string,
    icon2: PropTypes.element,
    icon2Desc: PropTypes.string,
    icon3: PropTypes.element,
    icon3Desc: PropTypes.string,
  }

  render() {
    return (
      <div className="shadow-xl p-6 rounded-lg my-6 lg:my-0">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl text-primary font-bold">
              {this.props.cardTitle}
            </h2>
            <p className="text-gray-600 text-lg">{this.props.description}</p>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex my-2">
              <div className="self-start mr-2 bg-primary text-gray-300 p-2 rounded-full">
                {this.props.icon1}
              </div>
              <p className="text-primary self-center">{this.props.icon1Desc}</p>
            </div>
            <div className="flex my-2">
              <div className="self-start mr-2 bg-primary text-gray-300 p-2 rounded-full">
                {this.props.icon2}
              </div>
              <p className="text-primary self-center">{this.props.icon2Desc}</p>
            </div>
            <div className="flex my-2">
              <div className="self-start mr-2 bg-primary text-gray-300 p-2 rounded-full">
                {this.props.icon3}
              </div>
              <p className="text-primary self-center">{this.props.icon3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

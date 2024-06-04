import React, { Component } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

export default class testimonial extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string,
    date: PropTypes.string,
    img: PropTypes.string,
  }

  render() {
    return (
      <div className="flex bg-background rounded-md shadow-md">
        <div className="flex w-1/6 justify-center">
          <GatsbyImage
            image={this.props.img}
            className="w-12 lg:w-16 h-12 lg:h-16 rounded-full self-center shadow-md"
          />
        </div>
        <div className="flex w-5/6 flex-col p-2 text-sm lg:text-base">
          <p className="text-gray-700">{this.props.text}</p>
          <p className="text-gray-600">
            - {this.props.name} | {this.props.date}
          </p>
        </div>
      </div>
    )
  }
}

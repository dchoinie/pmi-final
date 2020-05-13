import React, { Component } from "react"
import PropTypes from "prop-types"

export default class PageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }
  render() {
    return (
      <div className="my-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl purple font-extrabold">{this.props.title}</h2>
          <h5 className="dark-accent max-w-2xl mx-auto text-center">
            {this.props.subTitle}
          </h5>
        </div>
      </div>
    )
  }
}

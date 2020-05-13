import React, { Component } from "react"
import { Link } from "gatsby"
import { FaAngleUp, FaAngleDown } from "react-icons/fa"

export default class ProgramsDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  render() {
    const { listOpen } = this.state
    return (
      <>
        <button
          onMouseEnter={() => this.toggleList()}
          onClick={() => this.toggleList()}
          className="flex relative z-10"
        >
          Programs{" "}
          {listOpen ? (
            <FaAngleUp className="self-center ml-1" />
          ) : (
            <FaAngleDown className="self-center ml-1" />
          )}
        </button>
        {listOpen && (
          <div
            className="bg-white rounded-md flex flex-col absolute right-0 w-48 shadow-md py-2"
            onMouseLeave={() => this.handleClickOutside()}
          >
            <Link
              to="/silver-sneakers"
              className="px-2 py-2 hover:bg-primary hover:text-white"
            >
              Silver Sneakers
            </Link>
            <Link
              to="/"
              className="px-2 py-2 hover:bg-primary hover:text-white"
            >
              Yoga
            </Link>
            <Link
              to="/"
              className="px-2 py-2 hover:bg-primary hover:text-white"
            >
              Water Aerobics
            </Link>
          </div>
        )}
      </>
    )
  }
}

import React from "react"
import { FaAngleRight } from "react-icons/fa"

const Special24Btn = () => {
  return (
    <button
      className="snipcart-add-item flex bg-primary text-white text-base whitespace-no-wrap lg:text-lg px-4 py-1 rounded-full shadow-md mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
      data-item-id="special-24"
      data-item-price="25.00"
      data-item-url="/membership"
      data-item-description="Special rate for current students/military/seniors(65+). Access to PMI for 12 months. Members will be required to present proof of student/military/senior(65+) upon purchase completion."
      data-item-name="Student/Military/Senior(65+) 24-Hour"
      data-item-max-quantity="5"
    >
      Join Now <FaAngleRight className="self-center ml-1" />
    </button>
  )
}

export default Special24Btn

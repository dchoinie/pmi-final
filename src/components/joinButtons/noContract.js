import React from "react"
import { FaAngleRight } from "react-icons/fa"

const NoContractBtn = () => {
  return (
    <button
      className="snipcart-add-item flex bg-primary text-white text-base whitespace-no-wrap lg:text-lg px-4 py-1 rounded-full shadow-md mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
      data-item-id="m2m-base"
      data-item-price="35.00"
      data-item-url="/membership"
      data-item-description="No long term commitment. Pay for 1 month of access to PMI, valid from the date of purchase"
      data-item-name="Month-To-Month"
      data-item-max-quantity="5"
    >
      Join Now <FaAngleRight className="self-center ml-1" />
    </button>
  )
}

export default NoContractBtn

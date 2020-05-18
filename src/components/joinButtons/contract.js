import React from "react"
import { FaAngleRight } from "react-icons/fa"

const ContractBtn = () => {
  return (
    <button
      className="snipcart-add-item flex bg-primary text-white text-base whitespace-no-wrap lg:text-lg px-4 py-1 rounded-full shadow-md mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
      data-item-id="contract-base"
      data-item-price="25.00"
      data-item-url="/membership"
      data-item-description="Discounted rate for 12-month commitment. First and last month payment due up front.  If Contract is cancelled early, the charge is simply the difference in the rate plans for each month. "
      data-item-name="Contract"
      data-item-max-quantity="5"
    >
      Join Now <FaAngleRight className="self-center ml-1" />
    </button>
  )
}

export default ContractBtn

import React from "react"
import { FaAngleRight } from "react-icons/fa"

const NoContract24Btn = () => {
  return (
    <button
      className="snipcart-add-item flex bg-primary text-white text-base whitespace-no-wrap lg:text-lg px-4 py-1 rounded-full shadow-md mr-2 border border-transparent focus:outline-none hover:bg-primary-light transition duration-150 ease-in-out"
      data-item-id="m2m-24"
      data-item-price="40.00"
      data-item-url="/membership"
      data-item-description="No long term commitment. Pay for 1 month of access to PMI, valid from the date of purchase. 24-hour access card included."
      data-item-name="Month-To-Month (24 Hour Access)"
      data-item-max-quantity="5"
    >
      Join Now <FaAngleRight className="self-center ml-1" />
    </button>
  )
}

export default NoContract24Btn

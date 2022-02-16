import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const NoContract24Btn = () => {
  return (
    <Link to="/contact" className="flex">
      Contact Us <FaAngleRight className="self-center ml-1" />
    </Link>
  )
}

export default NoContract24Btn

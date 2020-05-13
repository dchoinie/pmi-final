import React from "react"
import MembershipCard2 from "./membershipCard2"
import Dots from "../images/texture/dot-grid.png"

const Membership2 = () => {
  return (
    <div className="bg-white relative z-10">
      <div
        className="absolute"
        style={{
          backgroundImage: `url(${Dots})`,
          backgroundPosition: "center",
          width: "50%",
          height: "50%",
          bottom: "0",
          left: "0",
          zIndex: "-1",
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto h-screen flex">
        <div className="flex flex-col w-full justify-center items-center self-center">
          <h2 className="text-5xl font-extrabold text-gray-700 mb-6">
            Membership Options
          </h2>
          <div className="w-full grid grid-cols-3 gap-6">
            <MembershipCard2
              title="Month-To-Month"
              price="35"
              description="Not ready to commit? Pay as you go with our month-to-month options"
            />
            <MembershipCard2
              title="Contract"
              price="25"
              description="Get our best value by signing up for a 12/mo contract"
              large="transform scale-110"
            />
            <MembershipCard2
              title="Senior/Military/Student"
              price="25"
              description="Are you a senior (65+), active or former military or current student? Take advantage of our discounted rates"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership2

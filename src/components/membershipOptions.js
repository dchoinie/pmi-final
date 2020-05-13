import React from "react"
import MembershipOption from "./membershipOption"

const MembershipOptions = () => {
  return (
    <div className="bg-primary flex py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center self-center w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-gray-200 font-bold">
            Membership Options
          </h2>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            consequuntur.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-16">
          <MembershipOption
            type="Month-To-Month"
            description="Not ready for a long term commitment? No problem! Sign up for a month-to-month membership"
            feat1="No long term commitment"
            feat2="Unlimited use of aeorbic equipement, free weights &amp; weight machines"
            feat3="Initial personal training session"
            feat4="Instruction on eqipment"
            feat5="Locker room access"
            feat6="24-hour access optional"
            feat7="Discounted rates on massage, tanning, yoga &amp; personal training"
            feat8=""
            feat9=""
            feat10=""
            large="transform scale-95"
          />
          <MembershipOption
            type="Contract"
            description="Save money! Get a discounted rate on membership if you register for a 12 mo. contract membership"
            feat1="Discounted membership rate"
            feat2="Unlimited use of aeorbic equipement, free weights &amp; weight machines"
            feat3="Initial personal training session"
            feat4="Instruction on eqipment"
            feat5="Locker room access"
            feat6="24-hour access optional"
            feat7="Discounted rates on massage, tanning, yoga &amp; personal training"
            feat8="One monthly guest pass"
            feat9="Discounted registration fee"
            feat10="Discounted 24-hour access card"
            large="transform scale-105 border-2 border-primary-dark"
            value="Best Value"
          />
          <MembershipOption
            type="Special"
            description="Get a discounted rate available for students, military or senior citizens (65+)"
            feat1="Same cost for month-to-month or contract"
            feat2="Unlimited use of aeorbic equipement, free weights &amp; weight machines"
            feat3="Initial personal training session"
            feat4="Instruction on eqipment"
            feat5="Locker room access"
            feat6="24-hour access optional"
            feat7="Discounted rates on massage, tanning, yoga &amp; personal training"
            feat8=""
            feat9=""
            feat10=""
            large="transform scale-95"
          />
        </div>
      </div>
    </div>
  )
}

export default MembershipOptions

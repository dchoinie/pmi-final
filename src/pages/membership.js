import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import MembershipCard from "../components/membershipCard"

const Membership = () => {
  return (
    <Layout>
      <div className="bg-background">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex w-full justify-between">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 text-4xl font-bold text-center">
                Regular
              </div>
              <h2 className="text-base text-center font-bold text-red-500">
                Individual (Contract)
              </h2>
              <h2 className="text-base text-center font-bold text-red-500">
                Individual (No Contract)
              </h2>
              <h2 className="text-base text-center font-bold text-red-500">
                Senior/Student/Military
              </h2>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 1
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 2
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 3
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 4
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 5
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 6
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 7
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 8
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 9
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 10
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 11
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 12
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 13
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 14
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 15
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 text-4xl font-bold text-center">
                24-Hour Access
              </div>
              <h2 className="text-base text-center font-bold text-red-500">
                Individual (Contract)
              </h2>
              <h2 className="text-base text-center font-bold text-red-500">
                Individual (No Contract)
              </h2>
              <h2 className="text-base text-center font-bold text-red-500">
                Senior/Student/Military
              </h2>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 1
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 2
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 3
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +1 Person</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 4
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 5
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 6
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +2 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 7
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 8
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 9
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +3 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 10
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 11
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 12
              </button>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <div className="flex justify-center">
                <p className="self-center">Add +4 People</p>
              </div>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 13
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 14
              </button>
              <button className="bg-gray-300 p-2 rounded-md text-primary">
                Button 15
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Membership

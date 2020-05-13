import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { FaSun, FaBed } from "react-icons/fa"
import { IoIosBody } from "react-icons/io"

const Tanning = () => {
  return (
    <Layout>
      <PageTitle
        title="Tanning"
        subTitle="Stand up and bed options available"
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 w-full my-12">
          <div className="flex flex-col items-center mr-2 text-center p-6">
            <FaSun className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">Tan</h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
          <div className="flex flex-col items-center mx-2 text-center p-6 border-r border-l border-gray-400">
            <FaBed className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">Bed</h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
          <div className="flex flex-col items-center ml-2 text-center p-6">
            <IoIosBody className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">
              Stand-Up
            </h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
        </div>
        <div className="shadow-xl py-6 my-12">
          <table className="w-full text-center">
            <thead className="text-xl">
              <tr className="back-purple light">
                <th className="py-2"></th>
                <th className="py-2" colSpan="2">
                  Member Rates
                </th>
                <th className="py-2" colSpan="2">
                  Public Rates
                </th>
              </tr>
              <tr className="main back-light">
                <th className="py-2"></th>
                <th className="py-2">Bed</th>
                <th className="py-2">Stand-Up</th>
                <th className="py-2">Bed</th>
                <th className="py-2">Stand-Up</th>
              </tr>
            </thead>
            <tbody className="text-lg dark-accent">
              <tr>
                <td className="py-2">Single</td>
                <td className="py-2">$3.50</td>
                <td className="py-2">$4.50</td>
                <td className="py-2">$4.50</td>
                <td className="py-2">$6.00</td>
              </tr>
              <tr>
                <td className="py-2">10-Session Package</td>
                <td className="py-2">$30</td>
                <td className="py-2">$40</td>
                <td className="py-2">$38</td>
                <td className="py-2">$48</td>
              </tr>
              <tr>
                <td className="py-2">1 Month Unlimited</td>
                <td className="py-2">$40</td>
                <td className="py-2">$50</td>
                <td className="py-2">$45</td>
                <td className="py-2">$58</td>
              </tr>
              <tr>
                <td className="py-2">Year Unlimited</td>
                <td className="py-2">$17</td>
                <td className="py-2">N/A</td>
                <td className="py-2">$20</td>
                <td className="py-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Tanning

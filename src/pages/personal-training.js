import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { FaHeart, FaStopwatch, FaMedal, FaInfoCircle } from "react-icons/fa"
import { Link } from "gatsby"

const PersonalTraining = () => {
  return (
    <Layout>
      <PageTitle
        title="Personal Training"
        subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        reiciendis accusantium exercitationem a, nemo voluptate? Quam
        aliquam sunt nemo fugiat!"
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 w-full my-12">
          <div className="flex flex-col items-center mr-2 text-center p-6">
            <FaHeart className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">
              Personalized
            </h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
          <div className="flex flex-col items-center mx-2 text-center p-6 border-r border-l border-gray-400">
            <FaStopwatch className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">
              Progressive
            </h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
          <div className="flex flex-col items-center ml-2 text-center p-6">
            <FaMedal className="text-4xl main" />
            <h3 className="text-2xl text-purple-500 font-bold my-4">
              Accountability
            </h3>
            <p className="dark-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis accusantium exercitationem a, nemo voluptate? Quam
              aliquam sunt nemo fugiat!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full my-6 p-6 rounded shadow-xl">
          <h3 className="text-2xl dark pb-2">Member Pricing</h3>
          <table className="w-full text-center text-xl">
            <thead className="back-purple light">
              <tr>
                <th className="py-2">1 hr</th>
                <th className="py-2">2 hrs</th>
                <th className="py-2">3 hrs</th>
                <th className="py-2">4 hrs</th>
                <th className="py-2">8 hrs</th>
              </tr>
            </thead>
            <tbody className="main back-light">
              <tr>
                <td className="py-2">$35</td>
                <td className="py-2">$65</td>
                <td className="py-2">$90</td>
                <td className="py-2">$112</td>
                <td className="py-2">$200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full my-6">
          <h3 className="text-2xl dark pb-2 text-center">Public Rates</h3>
          <div className="flex justify-between back-purple p-6 rounded">
            <div className="light flex">
              <FaInfoCircle className="text-3xl self-center mr-4" />
              <div className="flex flex-col">
                <p className="text-xl light">$45 / Hour</p>
                <p className="light-accent">
                  Multi session &amp; group rates available
                </p>
              </div>
            </div>
            <div className="flex self-center">
              <Link to="/" className="back-light px-3 py-2 rounded purple">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PersonalTraining

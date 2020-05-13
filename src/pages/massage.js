import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const Massage = () => {
  return (
    <Layout>
      <PageTitle
        title="Massage"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed!"
      />
      <div className="max-w-screen-xl mx-auto shadow-xl">
        <table className="w-full text-center my-12">
          <thead className="text-xl">
            <tr className="back-purple light">
              <th colSpan="2" className="py-2">
                Member Rates
              </th>
              <th colSpan="2" className="py-2">
                Public Rates
              </th>
            </tr>
            <tr className="main back-light">
              <th className="py-2">30 min</th>
              <th className="py-2">1 hour</th>
              <th className="py-2">30 min</th>
              <th className="py-2">1 hour</th>
            </tr>
          </thead>
          <tbody className="text-lg dark-accent">
            <tr>
              <td className="py-2">$30</td>
              <td className="py-2">$50</td>
              <td className="py-2">$35</td>
              <td className="py-2">$55</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Massage

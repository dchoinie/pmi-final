import React from "react"
import Layout from "../components/layout"

const Hours = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto flex mb-24">
        <div className="flex flex-col bg-white shadow-md rounded-md p-6 w-2/3 mx-auto">
          <p className="text-center text-red-500 text-2xl font-bold">Temporarily Closed</p>
          <h4 className="text-3xl font-bold uppercase text-primary p-2">
            PMI Hours
          </h4>
          <hr />
          <div className="flex flex-col text-lg my-6">
            <div className="flex justify-between pb-2 p-2">
              <p>Monday</p>
              <p>8am - 5pm</p>
            </div>
            <div className="flex justify-between py-2 bg-gray-200 p-2">
              <p>Tuesday</p>
              <p>8am - 5pm</p>
            </div>
            <div className="flex justify-between py-2 p-2">
              <p>Wednesday</p>
              <p>8am - 5pm</p>
            </div>
            <div className="flex justify-between py-2 bg-gray-200 p-2">
              <p>Thursday</p>
              <p>8am - 5pm</p>
            </div>
            <div className="flex justify-between py-2 p-2">
              <p>Friday</p>
              <p>8am - 5pm</p>
            </div>
            <div className="flex justify-between py-2 bg-gray-200 p-2">
              <p>Saturday</p>
              <p>9am - 2pm</p>
            </div>
            <div className="flex justify-between pt-2 p-2">
              <p>Sunday</p>
              <p>Closed</p>
            </div>
            <div className="flex justify-center py-2 p-2">
              <p className="capitalize">*24-hour access cards available*</p>
            </div>
            <div className="flex justify-center p-2">
              <p className="text-red-500 font-bold text-center">Due to COVID-19 restrictions, appointment required for use. Visit our <a href="https://www.facebook.com/pmitotalfitness/appointments" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Facebook page</a> to schedule an appointment</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Hours

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaChalkboardTeacher,
  FaLock,
  FaRegClock,
  FaRegCalendarAlt,
  FaDumbbell,
  FaRunning,
  FaDoorOpen,
  FaSun,
  FaHandsHelping,
  FaHands,
  FaClock,
  FaUserFriends,
  FaCalendar,
} from "react-icons/fa"
import { GiWeightLiftingUp } from "react-icons/gi"
import ExploreCard from "../components/exploreCard"
import Questions from "../components/questions"

const Explore = () => {
  const data = useStaticQuery(graphql`
    {
      aerobic: file(relativePath: { eq: "icons/treadmill_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      weight: file(relativePath: { eq: "icons/weight_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      machine: file(relativePath: { eq: "icons/machine_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      open: file(relativePath: { eq: "icons/open24_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      coach: file(relativePath: { eq: "icons/coach_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      tanning: file(relativePath: { eq: "icons/tanning_transparent.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="flex bg-white lg:h-screen max-w-screen-xl mx-auto px-6 lg:px-0"
      id="explore"
    >
      <div className="flex flex-col self-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-primary">Explore PMI</h2>
          <p className="text-gray-600 text-lg">
            Check out everything PMI has to offer!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 my-12">
          <ExploreCard
            cardTitle="Equipment"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing."
            icon1={<FaDumbbell className="text-xl" />}
            icon1Desc="Free Weights"
            icon2={<FaRunning className="text-xl" />}
            icon2Desc="Aerobic Machines"
            icon3={<GiWeightLiftingUp className="text-xl" />}
            icon3Desc="Weight Machines"
          />
          <ExploreCard
            cardTitle="Amenities"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing."
            icon1={<FaClock className="text-xl" />}
            icon1Desc="24-Hour Access"
            icon2={<FaLock className="text-xl" />}
            icon2Desc="Locker Room"
            icon3={<FaCalendar className="text-xl" />}
            icon3Desc="Variety of Classes"
          />
          <ExploreCard
            cardTitle="Services"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing."
            icon1={<FaChalkboardTeacher className="text-xl" />}
            icon1Desc="Personal Training"
            icon2={<FaSun className="text-xl" />}
            icon2Desc="Tanning"
            icon3={<FaHands className="text-xl" />}
            icon3Desc="Massage"
          />
        </div>
        <div className="flex flex-col">
          <Questions />
        </div>
      </div>
    </div>
  )
}

export default Explore

import React from "react"
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const PersonalAchievements = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="my-20 text-center text-5xl">
        Personal
        <span className="text-purple-600"> Achievements</span>
      </h1>

      <div className="flex flex-col max-w-3xl mx-auto text-lg space-y-6">
        <div>
          <p className="font-semibold text-purple-600">Fitness:</p>
          <p>Deadlift: 170kg | Bench Press: 120kg | 5km Run: 27 minutes</p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Entrepreneurship:</p>
          <p>Launched first business at age 16 – a local supermarket</p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Volunteer Work:</p>
          <p>5 months teaching English and Python</p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Scholarships:</p>
          <p>
            Private High School Tuition Scholarship
            <br />
            Undergraduate Full Scholarship – YTB
            <br />
            YTB Merit Scholarship – Master’s Studies at Yıldız Technical
            University
          </p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Academic Excellence:</p>
          <p>Graduated from Ankara University with 3.83 GPA</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalAchievements

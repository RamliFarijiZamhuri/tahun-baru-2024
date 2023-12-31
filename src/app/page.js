"use client"

import Particles from "react-particles"
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown"

const Home = () => {
  const [newYearMessage, setNewYearMessage] = useState(["HAPPY", "NEW", "YEAR", "FEBBY", "DI", "SANA"])

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  const particaleInitialization = async (engine) => {
    await loadFireworksPreset(engine)
  }

  return (
    <>
      <Particles
        init={particaleInitialization} options={{ preset: "fireworks" }} />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
        <Typewriter words={newYearMessage} loop={false} cursor={"_"} />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() =>  setNewYearMessage(["HAPPY", "NEW", "YEAR", "2024", "FEBBY", "CRESENCIA", "BARUS"])}/>
        </div>
      </div>
    </>
  );
}

export default Home
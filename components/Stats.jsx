"use client"

import CountUp from "react-countup"

const stats = [
  { num: 7, text: "Years of experience" },
  { num: 20, text: "Projects completed" },
  { num: 5, text: "Technologies mastered" },
  { num: 25, text: "Technologies" },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
          {
            stats.map((item, i) => {
              return (
                <div key={i} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                  <div className="flex items-center">
                    <span className="font-bold text-4xl">+</span>
                    <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                  </div>
                  <p className={`text-base leading-snug text-white/80`}>{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stats
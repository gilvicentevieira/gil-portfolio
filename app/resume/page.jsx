"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// about data
const about = {
  title: 'About me',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat ipsum deleniti, culpa nihil maiores? Error, totam.",
  info: [
    { fieldName: "Name", fieldvalue: "Gil Vieira" },
    { fieldName: "Phone", fieldvalue: "+351 910 466 938" },
    { fieldName: "Experience", fieldvalue: "+7 Years" },
    { fieldName: "Nationality", fieldvalue: "Portuguese" },
    { fieldName: "Email", fieldvalue: "gilvicentevieira@gmail.com" },
    { fieldName: "Languages", fieldvalue: "Portuguese, English, Spanish" }
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat ipsum deleniti, culpa nihil maiores? Error, totam.',
  items: [
    { company: "Nau21, Software For The Future", position: "Sofware Engineer Intern", duration: "2017" },
    { company: "Nau21, Software For The Future", position: "Full Stack Web Engineer", duration: "2017-2023" },
    { company: "SageByte", position: "Frontend Engineer (Freelance)", duration: "2019-2021" },
    { company: "SageByte", position: "Frontend Engineer (Freelance)", duration: "2024" },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat ipsum deleniti, culpa nihil maiores? Error, totam.',
  items: [
    { institution: "The Massachusetts Institute of Technology through edX", position: "Introduction to Computer Science and Programming", duration: "2014" },
    { institution: "The Massachusetts Institute of Technology through edX", position: "Introduction to Computational Thinking", duration: "2014" },
    { institution: "Instituto Superior de Engenharia do Porto", position: "Software Engineering Degree", duration: "2014-2017" },
    { institution: "Udemy", position: "JavaScript - The Complete Guide", duration: "2020" },
    { institution: "Udemy", position: "CSS - The Complete Guide", duration: "2020" },
    { institution: "Udemy", position: "React - The Complete Guide", duration: "2020" },
    { institution: "Udemy", position: "NextJS and OpenAI", duration: "2023" },    
    { institution: "Udemy", position: "ChatGPT Complete Guide: ChatGPT, Midjourney & More", duration: "2024" },
    { institution: "Udemy", position: "React Native - The Practical Guide", duration: "2024" },
    { institution: "Udemy", position: "Vue - The Complete Guide", duration: "2024" },
    { institution: "Udemy", position: "Angular - The Complete Guide", duration: "2024" },
    { institution: "Udemy", position: "UnderStanding TypeScript - The Complete Guide", duration: "2024" },
    { institution: "Udemy", position: "NodeJS - The Complete Guide", duration: "2024" },
    { institution: "Udemy", position: "MicroFrontends with React", duration: "2024" },
  ]
}

// skills data
const skills = {
  title: 'My Skills',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat ipsum deleniti, culpa nihil maiores? Error, totam.',
  skillList: [
    { icon: <FaHtml5 />, name: 'html 5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'NextJS' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <FaNodeJs />, name: 'NodeJS' },
    { icon: <FaFigma />, name: 'Figma' },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => {
                      return (
                        <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-3">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-sm text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-3">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-sm text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {
                    skills.skillList.map((skill, i) => {
                      return (
                        <li key={i}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>

            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ul className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, i)=>{
                    return (
                      <li key={i} className="flex items-start justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="break-words">{item.fieldvalue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
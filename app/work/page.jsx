"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'

import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Web Game Development',
    title: 'project 1',
    description: 'In 2014, before enrolling into my Software Engineering degree I developed 5 web based videogames. Similars to the classics Flappy Bird, and 2048 games.',
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "GameMaker" }, { name: "PhaserJS" }],
    image: '/assets/work/Flappy_Bird.webp',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'Ethereum Smart Contracts POC',
    title: 'project 2',
    description: `During my Academic Internship I was given the responsability to researched and analyzed distributed ledgers, blockchain technology, and smart contracts to inform company strategy. And to co-design and implement a proof of concept utilizing the Ethereum blockchain platform and smart contract to demonstrate practical applications for the technology`,
    stack: [{ name: 'DistributedLedgers' }, { name: 'Blockchain' }, { name: 'Ethereum' }, { name: "JavaScript" }, { name: 'Web3JS' }, { name: 'Truffle' }, { name: "NodeJS" }, { name: 'Chai' }, { name: 'Solidity' }],
    image: '/assets/work/blockchain.jpg',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'Hybrid Mobile Financial App',
    title: 'project 3',
    description: 'Hybrid Mobile Financial App for a Dutch Instituition. Deployed and supported for Android and iOS. It collected data for multiple Governmental Instituitions and multiple Banks, and displayed the data in several dashboard-a-like pages. Other small projects developed to support this Mobile App',
    stack: [{ name: "CSS3" }, { name: 'TypeScript' }, { name: "Ionic" }, { name: "Angular" }, { name: "React Native" }, { name: "HTML5" }, { name: "NodeJS" }, { name: "ReactJS" }, { name: "Jest" }],
    image: '/assets/work/hybrid-mobile-financial-app.webp',
    live: '',
    github: ''
  },
  {
    num: '04',
    category: 'Web Application - Insurance Product',
    title: 'project 4',
    description: 'Web Application that interacts with Insurance Policies, triggering actions, editing fields and displaying data.',
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: 'TypeScript' }, { name: "Angular" }, { name: "PrimeNG" }],
    image: '/assets/work/web_app_insurance.jpg',
    live: '',
    github: ''
  },
  {
    num: '05',
    category: 'A Collection of Microservices',
    title: 'project 5',
    description: 'Development of a collection of Microservices for leading Insurance companies such as Zurich Insurance, Fidelidade and Santander.',
    stack: [{ name: 'Java' }, { name: 'Spring' }, { name: 'MySQL' }, { name: 'PostgreSQL' }, { name: 'AS400' }, { name: 'Docker' }, { name: 'Nginx' }],
    image: '/assets/work/Monolith-vs-Microservices.jpg',
    live: '',
    github: ''
  },
  {
    num: '06',
    category: 'Web Application for data visualization',
    title: 'project 6',
    description: 'Development of a Web Application for data visualization for leading Insurance companies such as Zurich Insurance, Fidelidade and Santanderor. This application has the previously developed Microservices Collection feeding it the required data.',
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: 'TypeScript' }, { name: "Angular" }, { name: "PrimeNG" }],
    image: '/assets/work/data-visualization-web-app.webp',
    live: '',
    github: ''
  },
  {
    num: '07',
    category: 'Betting Web Application (PWA)',
    title: 'project 7',
    description: `A Progressive Web Application where the users can place bets, and interact with different user's bets. Including a feed page where the most recent bets or friend's bets would appear`,
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: 'JavaScript' }, { name: "ReactJS" }, { name: "StyledComponents" }, { name: "Redux" }, { name: "ServiceWorkers" }, { name: 'Firebase' }],
    image: '/assets/work/betting-app.jpg',
    live: '',
    github: ''
  },
  {
    num: '08',
    category: 'Book Social Media Web Application (PWA)',
    title: 'project 8',
    description: `A Progressive Web Application where users can see a feed of other user's interactions with books. Users can search for books, and add them to custom lists`,
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: 'JavaScript' }, { name: "ReactJS" }, { name: "StyledComponents" }, { name: "Redux" }, { name: "ServiceWorkers" }, { name: 'Firebase' }],
    image: '/assets/work/books-social-media-app.png',
    live: '',
    github: ''
  },
  {
    num: '09',
    category: 'ShareMe - A Pinterest clone',
    title: 'project 9',
    description: `A Web Application visually similar to Pinterest. Layout `,
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: 'JavaScript' }, { name: "ReactJS" }, { name: "TailwindCSS" }, { name: "Sanity" }],
    image: '/assets/work/shareme.png',
    live: 'https://sharemegilvicentevieira.netlify.app/',
    github: 'https://github.com/gilvicentevieira/shareme'
  },
  {
    num: '10',
    category: 'Jobs',
    title: 'project 10',
    description: `A React Native application to search for job opportunities `,
    stack: [{ name: "React Native" }, { name: "Expo" }, { name: 'JavaScript' }],
    image: '/assets/work/jobs-react-native.png',
    live: '',
    github: 'https://github.com/gilvicentevieira/Jobs'
  },
  {
    num: '11',
    category: 'Jobify - A Web Application',
    title: 'project 11',
    description: `A Web Application to log and visualize job applications `,
    stack: [{ name: "NextJS" }, { name: 'TypeScript' }, { name: "TailwindCSS" }, { name: "Shadcn" }, { name: "Clerk" }, { name: 'Prisma' }],
    image: '/assets/work/jobify.png',
    live: '',
    github: 'https://github.com/gilvicentevieira/jobify'
  },
  {
    num: '12',
    category: 'GPTGenius - A ChatGPT clone',
    title: 'project 12',
    description: `A chat Web Application, similar to ChatGPT that connects to OpenAI API.`,
    stack: [{ name: "NextJS" }, { name: 'JavaScript' }, { name: "TailwindCSS" }, { name: "Shadcn" }, { name: "Clerk" }, { name: 'Prisma' }],
    image: '/assets/work/GPTGenius.png',
    live: '',
    github: 'https://github.com/gilvicentevieira/gptgenius'
  }
]



const Work = () => {

  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide
    const currentIndex = swiper.activeIndex
    // update projects state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.9, duration: 0.4, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-white text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4 flex-wrap'>
                {project.stack.map((item, i) => {
                  return (<li key={i} className='text-xl text-accent'>{item.name}</li>)
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                {project.live &&
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                }
                {/* github project button */}
                {project.github &&
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                }
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide key={i} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image src={project.image} alt='project image' className='object-contain bg-primary' fill />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
  { icon: <FaPhoneAlt />, title: 'Phone or WhatsApp', description: '+351 910 466 938' },
  { icon: <FaEnvelope />, title: 'Email', description: 'gilvicentevieira@gmail.com' },
  { icon: <FaMapMarkedAlt />, title: 'Address', description: 'Web Development Street' }
]


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
            <h3 className='text-4xl text-accent'>Let's work together</h3>
            <p className='text-white/60'>Are you looking to network ? <br/> Or do you think we can work together ? <br/> <br/>Say hello </p>
          </div>
          {/* <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam a fugit exercitationem, repellat hic incidunt, deleniti, corrupti ipsum temporibus fugiat! Doloremque neque vero veritatis aut non laudantium facere harum!</p>
              <div className='grid grip-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type your message here." />

              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div> */}
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, i) => {
                return (<li key={i} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
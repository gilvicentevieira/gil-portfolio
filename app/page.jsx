import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-base">Full Stack && Frontend Engineer</span>
            <h1 className="h1">Hello I&apos;m <br />
              <span className="text-accent">Gil Vieira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Senior Engineer. <br /> Expertise and vast experience in the Javascript ecosystem. <br /> A bit of Java. <br /> I also have experience as a supervisor and a team leader. </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/CVitae.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <div className="container">
        <p className="inline-block bottom-0 left-auto text-[10px]">©Inspired by Cristian Mihai design</p>
      </div>
    </section>
  );
}

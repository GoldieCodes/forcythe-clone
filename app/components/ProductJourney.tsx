"use client"
import { useState } from "react"
import Image from "next/image"

type stepDetail = {
  id: ProcessStep
  title: string
  text: string
  img: string
}[]
type ProcessStep = "Idea" | "Design" | "Develop" | "Launch"

export default function ProductJourney() {
  const [activeStep, setActiveStep] = useState<ProcessStep>("Idea")

  const stepHeader: ProcessStep[] = ["Idea", "Design", "Develop", "Launch"]

  const steps: stepDetail = [
    {
      id: "Idea",
      title: "Your vision is unique.",
      text: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let us shape it.",
      img: "/images/camera-man.svg",
    },
    {
      id: "Design",
      title: "Crafting the blueprint for success",
      text: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      img: "/images/plan-design.svg",
    },
    {
      id: "Develop",
      title: "Turning blueprints into reality.",
      text: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
      img: "/images/plan-develop.svg",
    },
    {
      id: "Launch",
      title: "Your launchpad to the market.",
      text: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
      img: "/images/plan-launch.svg",
    },
  ]

  return (
    <section className="wrapper py-20">
      <div className="mb-12 xl:mb-0 max-w-[45rem]">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
          From <span className="text-[#60a6e7] capitalize">Spark</span> to{" "}
          <span className="text-[#60a6e7] capitalize">Spotlight:</span> we take
          you every step of the way to success.
        </h2>
      </div>

      {steps.map(
        (step) =>
          activeStep == step.id && (
            <div
              key={step.id}
              className="flex lg:items-end flex-col md:flex-row"
            >
              <div className="basis-1/2 flex mb-8 md:mb-0">
                <div className="md:pr-10">
                  {/* Steps Navigation */}
                  <div className="border-2 border-[#60A6E7] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                    {stepHeader.map((step) => (
                      <button
                        key={step}
                        onClick={() => setActiveStep(step)}
                        className={`
                    overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium 
                    cursor-pointer transition-all duration-300
                    ${
                      activeStep === step
                        ? "bg-[#60A6E7] text-black"
                        : "bg-transparent text-white"
                    }
                  `}
                      >
                        {step}
                      </button>
                    ))}
                  </div>

                  {/* Content */}

                  <h3 className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                    {step.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-base md:text-lg mb-8 leading-7">
                    {step.text}
                  </p>

                  {/* Call to Action Button */}
                  <div className="relative w-fit group">
                    <button
                      className="w-fit py-3 px-5 flex gap-2 items-center justify-center rounded-full 
                  bg-white text-black text-base relative z-10 font-semibold 
                  group-hover:bg-[#064386] group-hover:text-white 
                  transition-all duration-300 whitespace-nowrap cursor-pointer hover:shadow-md"
                    >
                      Book a call
                      <Image
                        src="/images/play.svg"
                        alt="play icon"
                        width={10}
                        height={10}
                        className="group-hover:hidden"
                      />
                      <Image
                        src="/images/play-white.svg"
                        alt="play icon hover"
                        width={10}
                        height={10}
                        className="hidden group-hover:block"
                      />
                    </button>
                    <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-[#064386]" />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                <Image
                  src={step.img}
                  alt="Design planning illustration"
                  width={800}
                  height={426}
                  className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                  priority
                />
              </div>
            </div>
          )
      )}
    </section>
  )
}

import Image from "next/image"
import ProjectsSlide from "./ProjectsSlide"

const HeroSection = () => {
  return (
    <header className="md:min-h-screen bg-[url('/images/header-background.svg')] bg-no-repeat bg-top">
      <div className="wrapper">
        <section className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 mt-[108px] mb-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            <div className="min-h-[180px]">
              <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                We build <span className="text-accent">products</span> that
                shape a better future
              </h1>
            </div>

            <div className="mb-8 max-w-3xl">
              <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                We&apos;re the architects of digital excellence across
                industries. We redefine business with cutting-edge digital
                strategies that invokes sector-wide transformation.
              </p>
            </div>

            <div className="mb-5">
              <div className="relative w-fit group">
                <button
                  className="action-button w-fit py-3 px-5 flex gap-2 items-center justify-center rounded-full 
                  bg-white text-black text-base relative z-10 font-semibold 
                  group-hover:bg-[#064386] group-hover:text-white transition-all duration-300
                  text-center whitespace-nowrap cursor-pointer hover:shadow-md"
                >
                  Book a Call
                  <Image
                    alt="icon"
                    src="/images/play.svg"
                    width={300}
                    height={300}
                    className="w-2.5 h-2.5 group-hover:hidden"
                  />
                  <Image
                    alt="icon"
                    src="/images/play-white.svg"
                    width={300}
                    height={300}
                    className="w-2.5 h-2.5 hidden group-hover:block"
                  />
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-[#064386]" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-10">
        <div className="min-h-[60px]">
          <h2
            className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] 
            lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center"
          >
            Success in <span className="text-[#60a6e7] capitalize">Motion</span>{" "}
            – <span className="capitalize">Our</span> clients&apos; journey
          </h2>
        </div>

        <div
          className="flex flex-col gap-5"
          style={{
            background:
              "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
          }}
        >
          <ProjectsSlide />
        </div>
      </section>
    </header>
  )
}

export default HeroSection

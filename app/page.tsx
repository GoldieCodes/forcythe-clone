import Navbar from "./components/Navbar"
import ProductFeatures from "@/app/components/ProductFeatures"
import ProductJourney from "@/app/components/ProductJourney"
import Hero from "@/app/components/Hero"
import TestimonialsSection from "./components/Testimonials"
import Footer from "./components/Footer"
import BlogSection from "./components/BlogSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TestimonialsSection />
        <ProductJourney />
        <ProductFeatures />
        <section
          className="py-14 md:py-20 xl:py-28"
          style={{
            background:
              "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
          }}
        >
          <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
            <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
              <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                  We build solutions that help{" "}
                  <span className="text-[#60a6e7]">businesses</span> of all
                  sizes to <span className="text-[#60a6e7]">scale</span>
                </p>
              </div>

              <div className="flex justify-evenly sm:justify-between items-center gap-3">
                {[
                  { metric: "50+", label: "Clients" },
                  { metric: "120+", label: "Projects" },
                  { metric: "10+", label: "Team Leads" },
                  { metric: "10+", label: "Glorious Years" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 text-left w-fit"
                  >
                    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                      {item.metric}
                    </div>
                    <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <BlogSection />
        <div className="section-padding py-10 text-center bg-[071626] bg-opacity-0 cta-bg">
          <div className="max-w-[45rem] mx-auto">
            <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
              <span className="text-accent">Ready to Scale?</span>
              <br /> Join successful brands that chose us as their
              <span className="text-accent"> growth accelerator</span>
            </h2>
            <div className="w-fit mx-auto mb-5">
              <div className="relative w-fit group">
                <button
                  data-cal-namespace=""
                  data-cal-link="forcythe/discovery"
                  data-cal-config='{"layout":"month_view"}'
                  className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
                     "
                >
                  Book a Call
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

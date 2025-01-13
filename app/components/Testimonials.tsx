"use client"
import Image from "next/image"
import { useState } from "react"

type Company = {
  id: string
  name: string
  logo: string
}

type Testimonial = {
  id: string
  content: string
  author: string
  role: string
  image: string
}

const companies: Company[] = [
  {
    id: "starks",
    name: "Starks",
    logo: "/images/starks.svg",
  },
  {
    id: "executivepros",
    name: "ExecutivePros",
    logo: "/images/ExecutivePros Logo.svg",
  },
  {
    id: "stacai",
    name: "Stac AI",
    logo: "/images/stacai.svg",
  },
  {
    id: "iwaria",
    name: "Iwaria",
    logo: "/images/iwaria.svg",
  },
  {
    id: "beaupreneur",
    name: "Beaupreneur",
    logo: "/images/Beaupreneur.svg",
  },
]

const testimonials: Testimonial[] = [
  {
    id: "starks",
    content:
      "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
    author: "John",
    role: "Management",
    image: "/images/john.svg",
  },
  {
    id: "executivepros",
    content:
      "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    author: "Testimony",
    role: "Co-founder",
    image: "/images/executive-pro-ceo.svg",
  },
  {
    id: "stacai",
    content:
      "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
    author: "Edwin",
    role: "Former CTO",
    image: "/images/edwin.svg",
  },
  {
    id: "iwaria",
    content:
      "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    author: "Iwaria",
    role: "Founder",
    image: "/images/iwaria-founder.svg",
  },
  {
    id: "beaupreneur",
    content:
      "I'm beyond impressed with the dedication Forcythe showed. They didn't just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers' hearts.",
    author: "Christiana",
    role: "Founder",
    image: "/images/christina.svg",
  },
]

export default function TestimonialsSection() {
  const [activeCompany, setActiveCompany] = useState<Company>(companies[0])

  return (
    <section className="wrapper py-10">
      <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
        Discover the{" "}
        <span className="text-[#60a6e7]">transformative stories</span> of
        startups that scaled new heights with us
      </h2>

      {/* testimonial header */}
      <div className="w-full overflow-x-scroll hide-scrollbar">
        <nav className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
          {companies.map((company, index) => (
            <button
              key={company.id}
              onClick={() => setActiveCompany(company)}
              className={`
                w-full p-[1.1rem] cursor-pointer transition-all duration-300
                ${index === 0 ? "rounded-s-full" : ""}
                ${index === companies.length - 1 ? "rounded-e-full" : ""}
                ${activeCompany.id === company.id ? "bg-accent3" : ""}
              `}
            >
              <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={20}
                  height={20}
                  className={`w-full ${company.id === "iwaria" ? "w-20" : ""} ${
                    company.id === "beaupreneur" ? "w-36" : ""
                  }`}
                />
                {company.id === "starks" && company.name}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* testimonial content */}
      {testimonials.map(
        (testimonial) =>
          activeCompany.id == testimonial.id && (
            <article
              key={testimonial.author}
              className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative"
              style={{ left: "50%" }}
            >
              <div className="sm:basis-[58%] pr-3">
                <h3 className="text-base font-bold mb-4">
                  {activeCompany.name}
                </h3>
                <blockquote className="text-base leading-7 mb-3">
                  {testimonial.content}
                </blockquote>
                <p className="text-[15px] font-semibold mb-4">
                  {testimonial.author}, {testimonial.role}
                </p>
              </div>

              <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl" />
                <div className="relative w-full h-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author} portrait`}
                    fill
                    className="rounded-xl relative object-top object-cover"
                  />
                </div>
              </div>
            </article>
          )
      )}
    </section>
  )
}

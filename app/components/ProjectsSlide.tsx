import Image from "next/image"

interface ProjectImage {
  id: number
  src: string
  alt: string
}

const projectImages: ProjectImage[] = [
  { id: 0, src: "/images/Project Images/stac.svg", alt: "STAC Project" },
  {
    id: 1,
    src: "/images/Project Images/activity.svg",
    alt: "Activity Project",
  },
  {
    id: 2,
    src: "/images/Project Images/africaFund.svg",
    alt: "Africa Fund Project",
  },
  { id: 3, src: "/images/Project Images/starks.svg", alt: "Starks Project" },
  {
    id: 4,
    src: "/images/Project Images/exec-pro.svg",
    alt: "Exec Pro Project",
  },
  { id: 5, src: "/images/Project Images/phone.svg", alt: "Phone Project" },
]

const ProjectsSlide = () => {
  return (
    <section>
      <div className="overflow-hidden flex">
        <div className="animate-to-left overflow-hidden flex min-w-max gap-5 ml-5">
          {projectImages.map((image) => (
            <div key={image.id} className="relative w-auto h-[340px]">
              <Image
                alt={image.alt}
                src={image.src}
                width={300}
                height={300}
                className="overflow-hidden w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="animate-to-left overflow-hidden flex min-w-max gap-5 ml-5">
          {projectImages.map((image) => (
            <div key={image.id} className="relative w-auto h-[340px]">
              <Image
                alt={image.alt}
                src={image.src}
                width={300}
                height={300}
                className="overflow-hidden w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden flex mt-5">
        <div className="animate-to-right overflow-hidden flex min-w-max gap-5 ml-5">
          {projectImages.map((image) => (
            <div key={image.id} className="relative w-auto h-[340px]">
              <Image
                alt={image.alt}
                src={image.src}
                width={300}
                height={300}
                className="overflow-hidden w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="animate-to-right overflow-hidden flex min-w-max gap-5 ml-5">
          {projectImages.map((image) => (
            <div key={image.id} className="relative w-auto h-[340px]">
              <Image
                alt={image.alt}
                src={image.src}
                width={300}
                height={300}
                className="overflow-hidden w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSlide

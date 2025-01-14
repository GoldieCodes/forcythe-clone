import Image from "next/image"

interface ProjectImage {
  id: number
  src: string
  alt: string
}

export type Direction = "left" | "right"

interface ScrollingAnimationProps {
  direction: Direction
  className?: string
  children: React.ReactNode
  duration?: number
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

export const ScrollingAnimation = ({
  direction,
  className = "",
  children,
}: ScrollingAnimationProps) => {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex min-w-max gap-5 ${
          direction === "right" ? "animate-to-right" : "animate-to-left"
        } ${className}`}
      >
        {children}
      </div>
      <div
        className={`flex min-w-max gap-5 ${
          direction === "right" ? "animate-to-right" : "animate-to-left"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

const ProjectsSlide = () => {
  return (
    <section>
      <ScrollingAnimation direction="left">
        {projectImages.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            width={300}
            height={300}
            className="w-full h-[340px]"
            loading="lazy"
          />
        ))}
      </ScrollingAnimation>
      <ScrollingAnimation direction="right" className="mt-5">
        {projectImages.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            width={300}
            height={300}
            className="w-full h-[340px]"
            loading="lazy"
          />
        ))}
      </ScrollingAnimation>
    </section>
  )
}
export default ProjectsSlide

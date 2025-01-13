import Image from "next/image"
import Link from "next/link"

type NavLink = {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services#portfolio", label: "Portfolio" },
  { href: "/studio", label: "Studio" },
  { href: "/foundation", label: "Foundation" },
]

export default function Navbar() {
  return (
    <header className="w-full top-0 left-0 py-[1.8rem] fixed backdrop-blur-md z-30">
      <div className="wrapper  flex justify-between gap-10 items-center ">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              src="/images/forcythe logo.svg"
              alt="Forcythe logo"
              width={150}
              height={10}
              priority
              className="w-28 sm:w-32 md:w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-base">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <div className="relative w-fit group">
            <button
              className="action-button custom-animate w-w-fit py-[12px] px-5 
              flex gap-2 items-center justify-center rounded-full 
              bg-white text-black text-base relative z-10 font-semibold 
              group-hover:bg-[#064386] group-hover:text-white text-center 
              whitespace-nowrap cursor-pointer hover:shadow-md"
              data-cal-namespace=""
              data-cal-link="forcythe/discovery"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
            </button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
          </div>
        </div>

        <button
          className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <Image
            src="/images/menu.svg"
            alt="Menu icon"
            width={18}
            height={18}
          />
        </button>
      </div>
    </header>
  )
}

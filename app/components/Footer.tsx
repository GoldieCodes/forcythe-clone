import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-10 bg-secondaryBackground">
      <div className="wrapper">
        <div className="lg:grid lg:grid-cols-3 my-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="w-full grid grid-cols-4">
              <input
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
                placeholder="Your Email Address"
                type="text"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                <input
                  className="hidden"
                  id="agreement"
                  type="checkbox"
                  name="agreement"
                />
              </div>
              <label htmlFor="agreement" className="text-sm cursor-pointer">
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <Image
                alt="Forcythe logo"
                width="130"
                height="9"
                decoding="async"
                data-nimg="1"
                className="mb-5 md:mb-8"
                src="/images/forcythe logo.svg"
              />
              <p className="text-base text-darkGrey leadin font-normal">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2">
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.facebook.com/forcythe/"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/facebook.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.instagram.com/forcythe"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/instagram.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://twitter.com/forcythe_"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/x.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.linkedin.com/company/forcythe/"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/linkedin.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.youtube.com/@forcythe"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/youtube.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://podcasters.spotify.com/pod/show/the-future-insight"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/Icon.svg"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-accent2 font-medium">
                  <Link href="/about">
                    <span>About</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/services">
                    <span>Services</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/services#portfolio">
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/studio">
                    <span>Studio</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/foundation">
                    <span>Foundation</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/career">
                    <span>Careers</span>
                  </Link>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <Link href="/blog">
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.facebook.com/forcythe/"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/facebook.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.instagram.com/forcythe"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/instagram.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://twitter.com/forcythe_"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/x.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.linkedin.com/company/forcythe/"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/linkedin.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://www.youtube.com/@forcythe"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/youtube.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href="https://podcasters.spotify.com/pod/show/the-future-insight"
                >
                  <Image
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="/images/Icon.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-t-[1px] border-accent">
          <p className="text-accent2 text-sm mt-5 text-center md:text-left">
            Copyright © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

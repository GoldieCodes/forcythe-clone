import Image from "next/image"
import Link from "next/link"

type BlogPost = {
  slug: string
  title: string
  imageUrl: string
  author: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "will-ai-take-over-art",
    title: "Will AI take over Art?",
    imageUrl:
      "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992357/Will_AI_take_over_cc9401fe38.jpg",
    author: "The Reformist",
    date: "May 29th, 2024",
  },
  {
    slug: "cryptocurrency-vs-tokens",
    title: "Cryptocurrency vs Tokens",
    imageUrl:
      "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992003/Cryptocurrency_vs_token_f8865950e7.jpg",
    author: "The Reformist",
    date: "May 29th, 2024",
  },
  {
    slug: "cryptocurrency-and-crypto-asset",
    title: "Cryptocurrency and Crypto asset",
    imageUrl:
      "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716991585/Cryptocurrency_and_crypto_assets_da92d172fc.jpg",
    author: "The Reformist",
    date: "May 29th, 2024",
  },
]

export default function BlogSection() {
  return (
    <section className="wrapper my-10 lg:mb-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
          Read our articles, news and product blog
        </h2>

        <div className="relative w-fit group">
          <Link
            href="/blog"
            className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
            bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            Visit Blog
            <Image
              src="/images/play.svg"
              alt="play"
              width={10}
              height={10}
              className="group-hover:hidden"
            />
            <Image
              src="/images/play-white.svg"
              alt="play"
              width={10}
              height={10}
              className="hidden group-hover:block"
            />
          </Link>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
        </div>
      </div>

      <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
          >
            <div className="h-60 sm:h-56 relative mb-6">
              <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
              <div className="relative w-full h-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
              <p className="text-lg font-semibold mb-1">Blog</p>
              <div className="text-base text-darkGrey flex items-center mb-6">
                <span>{post.author}</span>
                <div className="h-2 w-2 rounded-full bg-white mx-[6px]" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold line-clamp-2">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

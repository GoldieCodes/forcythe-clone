const ProductFeatures = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ]

  return (
    <section className="py-14 bg-gradient-to-t from-[rgb(12,38,69)] via-[rgb(3,5,22)] to-[rgb(3,5,22)]">
      <div className="wrapper">
        <h2 className="text-4xl lg:text-5xl mb-10 text-[#60A6E7] text-center">
          Your best call for B2B/B2C product innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-px rounded-2xl hover:shadow-[0_0_9px_rgba(0,0,0,0.4)] hover:shadow-sky-900 transition-shadow duration-1000"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <img
                      src="/images/layers-three.svg"
                      alt={feature.title}
                      className="w-8 h-8"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-2xl font-medium mb-5 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
              {/* Glow effect */}
              <div
                className="glow-dance absolute inset-[-1px] z-0 rounded-2xl opacity-50"
                style={{
                  filter: "blur(2px)",
                }}
              />
              {/* Background */}
              <div className="absolute inset-[2px] z-[1] bg-primaryBackground rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures

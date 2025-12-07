export default function CTA() {
  return (
    <section className="bg-[#0F3D2C] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-gray-400 text-sm ml-2">5.0</span>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Over 15k+ Downloads on Playstore
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Empowering Your Financial
          <br />
          Freedom
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Trust us to deliver cutting-edge innovation, transparency, and personalized
          services designed to help you achieve financial freedom.
        </p>

        {/* CTA Button */}
        <button className="bg-[#22C55E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#16A34A] transition-colors inline-flex items-center gap-2">
          <span>Try Euphoria</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

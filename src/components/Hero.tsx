"use client";

export default function Hero() {
  return (
    <section className="bg-[#0F3D2C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-medium">Trusted and secured</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cross-border payment made easy.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-8">
              We help individuals and businesses pay and send and receive money
              globally at the best rates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#22C55E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#16A34A] transition-colors flex items-center gap-2">
                <span>Create account</span>
                <svg
                  className="w-4 h-4"
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
              <button className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Book a demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockups */}
          <div className="relative lg:h-[500px]">
            {/* Balance Card - Top Left */}
            <div className="absolute top-0 left-0 bg-[#0A2A1E] rounded-2xl p-4 shadow-2xl w-48 hidden lg:block">
              <div className="text-xs text-gray-400 mb-1">Total Balance</div>
              <div className="text-xl font-bold text-white mb-2">
                $9,847.00{" "}
                <span className="text-[#22C55E] text-xs bg-[#22C55E]/20 px-1.5 py-0.5 rounded">
                  USD
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-500 -ml-2"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 -ml-2"></div>
              </div>
            </div>

            {/* Currency Market Card - Center */}
            <div className="bg-white rounded-2xl p-5 shadow-2xl max-w-xs mx-auto lg:absolute lg:top-4 lg:left-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-800 font-semibold">Currency Market</h3>
                <span className="text-xs text-gray-500">Live</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                      USD
                    </div>
                    <span className="text-gray-700 text-sm">US Dollar</span>
                  </div>
                  <span className="text-gray-800 font-medium">$1,200.16</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xs">
                      EUR
                    </div>
                    <span className="text-gray-700 text-sm">Euro</span>
                  </div>
                  <span className="text-gray-800 font-medium">$1,100.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-xs">
                      GBP
                    </div>
                    <span className="text-gray-700 text-sm">Pound</span>
                  </div>
                  <span className="text-gray-800 font-medium">$224,596</span>
                </div>
              </div>
            </div>

            {/* Amount Card - Top Right */}
            <div className="hidden lg:block absolute top-0 right-0 bg-white rounded-xl p-3 shadow-lg">
              <div className="text-2xl font-bold text-gray-800">$234.99</div>
              <div className="text-xs text-[#22C55E]">+12.5%</div>
            </div>

            {/* Mobile App Preview - Right */}
            <div className="hidden lg:block absolute bottom-0 right-0 bg-[#0A2A1E] rounded-3xl p-4 w-44 shadow-2xl">
              <div className="text-xs text-gray-400 mb-2">Send Money</div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                <div>
                  <div className="text-white text-sm font-medium">John Doe</div>
                  <div className="text-gray-400 text-xs">@johndoe</div>
                </div>
              </div>
              <div className="bg-[#22C55E] text-white text-center py-2 rounded-lg text-sm font-medium">
                Send $500
              </div>
            </div>

            {/* Stats Card - Bottom Left */}
            <div className="hidden lg:block absolute bottom-8 left-0 bg-white rounded-xl p-3 shadow-lg">
              <div className="text-sm text-gray-500">Portfolio</div>
              <div className="text-lg font-bold text-gray-800">
                $789,071.00
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-12 h-6 bg-gradient-to-r from-[#22C55E] to-[#86EFAC] rounded"></div>
                <span className="text-xs text-[#22C55E]">+8.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

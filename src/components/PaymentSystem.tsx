export default function PaymentSystem() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "First payment session fee",
      description: "Fee waived for your first transactions, making it easy to get started.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Pay simultaneously fee",
      description: "Send payments to multiple recipients at the same time with no extra fees.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "No more paper documents",
      description: "Go fully digital with our paperless solution for all your transactions.",
    },
  ];

  return (
    <section className="bg-[#F0FDF4] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Mobile App Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-xl max-w-sm mx-auto lg:mx-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Hi, Nathan</div>
                    <div className="text-xs text-gray-500">Welcome back</div>
                  </div>
                </div>
                <button className="p-2 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>

              {/* Balance Card */}
              <div className="bg-[#0F3D2C] rounded-2xl p-5 mb-6">
                <div className="text-sm text-gray-300 mb-1">Total Balance $</div>
                <div className="text-3xl font-bold text-white mb-4">$24,787.00</div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#22C55E] text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                    Transfer
                  </button>
                  <button className="flex-1 bg-white/20 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                    Receive
                  </button>
                </div>
              </div>

              {/* Quick Send */}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-900 mb-3">Quick Send</div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="w-10 h-10 rounded-full bg-gray-200"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">This Week</span>
                  <span className="text-xs text-[#22C55E]">+12.5%</span>
                </div>
                <div className="h-12 flex items-end justify-between gap-1">
                  {[30, 50, 40, 70, 55, 80, 65].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-[#22C55E] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our payment
              <br />
              system is easy to
              <br />
              start using.
            </h2>

            <p className="text-gray-600 mb-8">
              We have simplified onboarding to let your start using it effortlessly, making
              borderless payments simple and quick for businesses and individuals.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#22C55E] flex-shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

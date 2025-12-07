export default function MultiCurrency() {
  const currencies = [
    { code: "HKD", name: "Hong Kong Dollar", amount: "5,762 HKD", change: "+4.8%", flag: "🇭🇰", color: "bg-red-50" },
    { code: "EUR", name: "Euro", amount: "3,456 EUR", change: "+2.1%", flag: "🇪🇺", color: "bg-blue-50" },
    { code: "USD", name: "US Dollar", amount: "5,487 USD", change: "+3.5%", flag: "🇺🇸", color: "bg-green-50" },
    { code: "BTC", name: "Bitcoin", amount: "1.245 BTC", change: "+8.2%", flag: "₿", color: "bg-orange-50" },
  ];

  const features = [
    "Lower transaction costs and fees",
    "Simple and intuitive platform for managing",
    "Manage your currencies anytime, anywhere",
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F0FDF4] rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#22C55E]">Online payments</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              One account for
              <br />
              90+ currencies
              <br />
              worldwide.
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 max-w-lg">
              Our platform allows you to send, receive, and convert
              funds in hundreds of ways at no extra cost and no hassle at
              any time.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="bg-[#0F3D2C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0A2A1E] transition-colors flex items-center gap-2">
              <span>Get started now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - Currency Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {currencies.map((currency, index) => (
                <div
                  key={index}
                  className={`${currency.color} rounded-2xl p-4 hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{currency.flag}</span>
                    <span className="font-semibold text-gray-800">{currency.code}</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    {currency.amount}
                  </div>
                  <div className="text-sm text-[#22C55E]">{currency.change}</div>
                </div>
              ))}
            </div>

            {/* Chart Decoration */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Portfolio Growth</span>
                <span className="text-sm text-[#22C55E]">+24.5% this month</span>
              </div>
              <div className="h-24 flex items-end justify-between gap-1">
                {[40, 60, 45, 80, 65, 90, 75, 85, 95, 70, 88, 92].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-[#22C55E] to-[#86EFAC] rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

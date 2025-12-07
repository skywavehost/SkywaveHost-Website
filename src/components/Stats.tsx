export default function Stats() {
  const stats = [
    {
      value: "234",
      suffix: "M",
      label: "Supporting PayPal Checkout globally",
      color: "text-gray-900",
    },
    {
      value: "768",
      suffix: "B",
      label: "Building safe for every business need",
      color: "text-gray-900",
    },
    {
      value: "5.0",
      suffix: "★",
      label: "High star ratings from users worldwide",
      color: "text-gray-900",
    },
    {
      value: "$8.8",
      suffix: "B",
      label: "Unlocking increased global access",
      color: "text-gray-900",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
                <span className="text-[#22C55E]">{stat.suffix}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

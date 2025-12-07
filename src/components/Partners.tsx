export default function Partners() {
  const partners = [
    { name: "Bytesense", icon: "B" },
    { name: "WikiCreated", icon: "W" },
    { name: "Codecraft", icon: "C" },
    { name: "Convergence", icon: "Co" },
    { name: "IngCompany", icon: "I" },
    { name: "Epicstroke", icon: "E" },
    { name: "Watchhorse", icon: "Wh" },
    { name: "Renaissance", icon: "R" },
    { name: "ContrastM", icon: "Cm" },
    { name: "Notebone", icon: "N" },
  ];

  return (
    <section id="partners" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Recent Clients & Partners
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-8">
          {partners.slice(0, 5).map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold">
                {partner.icon}
              </div>
              <span className="font-medium text-sm sm:text-base">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-10">
          {partners.slice(5, 10).map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold">
                {partner.icon}
              </div>
              <span className="font-medium text-sm sm:text-base">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Join Text */}
        <p className="text-center text-gray-500 text-sm">
          Join 1,000+ companies already growing
        </p>
      </div>
    </section>
  );
}

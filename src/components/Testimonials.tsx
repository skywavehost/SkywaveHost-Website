export default function Testimonials() {
  const testimonials = [
    {
      name: "Brian Barnes",
      role: "CEO, TechStart",
      quote: "Getting paid for my consulting work used to be a nightmare with international clients. Euphoria changed everything.",
      avatar: "BB",
    },
    {
      name: "Daniel Anderson",
      role: "Freelance Designer",
      quote: "I have transferred money faster and at better rates than my old bank. Simply amazing experience.",
      avatar: "DA",
    },
    {
      name: "Janine Clarke",
      role: "Marketing Manager",
      quote: "This is getting really nice service. The customer support team is incredibly responsive.",
      avatar: "JC",
    },
    {
      name: "Saina Diaz",
      role: "Business Owner",
      quote: "I've been hit for more times about this app. The interface is intuitive and easy to use.",
      avatar: "SD",
    },
    {
      name: "John Mitchell",
      role: "Product Manager",
      quote: "I appreciate the transparency in fees. I always know exactly what I'm paying for.",
      avatar: "JM",
    },
    {
      name: "Sarah Walker",
      role: "Financial Analyst",
      quote: "The automated saving has changed my budgeting life. I'm saving more than ever before.",
      avatar: "SW",
    },
    {
      name: "William Johnson",
      role: "Entrepreneur",
      quote: "Seamless integration with my business tools. It just works perfectly every single time.",
      avatar: "WJ",
    },
    {
      name: "Andrew Hill",
      role: "Software Developer",
      quote: "The API is well-documented and easy to integrate. Great for building custom solutions.",
      avatar: "AH",
    },
  ];

  return (
    <section className="bg-[#F0FDF4] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Feedback from Satisfied
            <br />
            Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our customers have to say about how Euphoria has helped
            them achieve their goals and manage their finances effortlessly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22C55E] to-[#0F3D2C] flex items-center justify-center text-white text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

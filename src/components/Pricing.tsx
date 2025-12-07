"use client";

import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for individuals getting started with global payments.",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Account Signup",
        "Fiat Currency Trading",
        "Crypto Trading",
        "Bank Account Link",
        "Savings Vault",
        "24/7 Customer Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth Plan",
      description: "Ideal for growing businesses and frequent traders.",
      price: { monthly: 49, yearly: 470 },
      features: [
        "Account Signup",
        "Fiat Currency Trading",
        "Crypto Trading",
        "Advanced Analytics",
        "Premium Savings Vault",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business Plan",
      description: "Enterprise-grade solutions for large organizations.",
      price: { monthly: 99, yearly: 950 },
      features: [
        "Account Signup",
        "Unlimited Trading",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Enterprise Security",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Select a plan that will empower your
            <br />
            business growth
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Each plan offers unique features designed to meet your specific needs.
            Choose the one that fits your business.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly
                  ? "bg-[#0F3D2C] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly
                  ? "bg-[#0F3D2C] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 lg:p-8 ${
                plan.popular
                  ? "ring-2 ring-[#22C55E] shadow-lg relative"
                  : "shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-600">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#F0FDF4] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#22C55E]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? "bg-[#22C55E] text-white hover:bg-[#16A34A]"
                    : "bg-[#0F3D2C] text-white hover:bg-[#0A2A1E]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

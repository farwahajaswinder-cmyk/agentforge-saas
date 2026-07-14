import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners",
    features: [
      "1 AI Agent",
      "100 Requests / Month",
      "Community Support",
      "Basic Analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professionals",
    features: [
      "Unlimited AI Agents",
      "50,000 Requests / Month",
      "Priority Support",
      "Advanced Analytics",
      "Team Collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited Everything",
      "Dedicated Support",
      "Custom Integrations",
      "Advanced Security",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-lg ${
                plan.popular
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-2xl font-bold">{plan.name}</h3>

              <p className="mt-2 text-gray-600">{plan.description}</p>

              <div className="mt-6 text-5xl font-bold">{plan.price}</div>

              <button className="mt-8 w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800">
                Get Started
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
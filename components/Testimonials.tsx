import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechFlow",
    review:
      "AgentForge transformed how we build AI workflows. The platform is fast, intuitive, and reliable.",
  },
  {
    name: "David Miller",
    company: "InnovateX",
    review:
      "The dashboard is beautiful and the AI agent builder saved our team countless hours.",
  },
  {
    name: "Emily Carter",
    company: "CloudWorks",
    review:
      "Excellent user experience with enterprise-grade performance. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Loved by Developers & Businesses
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thousands of teams trust AgentForge to power their AI solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
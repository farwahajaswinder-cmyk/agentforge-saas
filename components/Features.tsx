import { Bot, Brain, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-indigo-600" />,
    title: "AI Agent Builder",
    description:
      "Create powerful AI agents with an intuitive no-code and developer-friendly interface.",
  },
  {
    icon: <Brain className="h-8 w-8 text-violet-600" />,
    title: "Smart Automation",
    description:
      "Automate workflows using intelligent AI models and custom prompts.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    title: "Enterprise Security",
    description:
      "Built with secure authentication, encrypted data, and enterprise-grade protection.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Lightning Fast",
    description:
      "Deploy AI agents in seconds with high performance and global scalability.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build, deploy, and manage AI agents.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>{feature.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
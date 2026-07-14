import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Ready to Build Your First AI Agent?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          Join thousands of developers and businesses using AgentForge to
          create, deploy, and scale AI-powered applications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:scale-105">
            Get Started Free
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-indigo-700">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
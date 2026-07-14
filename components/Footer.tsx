import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              AgentForge
            </h2>

            <p className="mt-4 text-gray-400">
              Build, deploy, and scale AI agents with a modern enterprise AI
              platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg border border-gray-700 px-4 py-2 transition hover:bg-gray-800"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-700 px-4 py-2 transition hover:bg-gray-800"
              >
                Website
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-700 px-4 py-2 transition hover:bg-gray-800"
              >
                Email
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-4 text-gray-400">
              Subscribe to receive the latest AgentForge updates.
            </p>

            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none"
              />

              <button className="flex items-center gap-2 rounded-r-xl bg-indigo-600 px-5 text-white transition hover:bg-indigo-700">
                Join
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 AgentForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
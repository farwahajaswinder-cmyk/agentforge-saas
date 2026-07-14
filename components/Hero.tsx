"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm">
              🚀 Trusted by 10,000+ Developers
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
              Build{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                AI Agents
              </span>
              <br />
              Without Limits
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Create, train, deploy, and scale enterprise-grade AI agents with
              an intuitive no-code and developer-friendly platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:bg-gray-100">
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-gray-500">Active Users</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">99.9%</h3>
                <p className="text-gray-500">Uptime</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-gray-500">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">AI Dashboard</h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Live
                </span>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-gray-100 p-5">
                  <div className="mb-2 flex justify-between">
                    <span>Agents Running</span>
                    <span className="font-bold">128</span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-300">
                    <div className="h-3 w-4/5 rounded-full bg-indigo-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-100 p-5">
                  <div className="mb-2 flex justify-between">
                    <span>API Requests</span>
                    <span className="font-bold">2.4M</span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-300">
                    <div className="h-3 w-3/4 rounded-full bg-cyan-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-100 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-semibold">Performance</h4>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                      Excellent
                    </span>
                  </div>

                  <div className="flex h-40 items-end gap-3">
                    {[30, 45, 70, 55, 90, 65, 100].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-indigo-600 to-cyan-400"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
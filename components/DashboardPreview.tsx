import { Bot, BarChart3, Users, Activity } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Manage Everything From One Dashboard
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Monitor your AI agents, analytics, projects, and team in one place.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-indigo-50 p-6">
              <Bot className="mb-4 h-10 w-10 text-indigo-600" />
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-gray-600">Active AI Agents</p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6">
              <BarChart3 className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="text-2xl font-bold">98.7%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-6">
              <Users className="mb-4 h-10 w-10 text-yellow-600" />
              <h3 className="text-2xl font-bold">2,340</h3>
              <p className="text-gray-600">Users</p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-6">
              <Activity className="mb-4 h-10 w-10 text-pink-600" />
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gray-100 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">AI Analytics</h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                Live
              </span>
            </div>

            <div className="flex h-64 items-end gap-4">
              {[35, 60, 80, 45, 95, 70, 100].map((height, index) => (
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
    </section>
  );
}
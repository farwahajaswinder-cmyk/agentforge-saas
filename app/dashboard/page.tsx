import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DashboardCard from "../../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100">
        <Header />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <DashboardCard title="Projects" value="12" />
  <DashboardCard title="AI Requests" value="1,248" />
  <DashboardCard title="Subscription" value="Pro" />
</div>
        </div>
      </main>
    </div>
  );
}
type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-gray-600 text-lg">{title}</h2>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}
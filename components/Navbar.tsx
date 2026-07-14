export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <h1 className="text-2xl font-bold">AgentForge</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
}
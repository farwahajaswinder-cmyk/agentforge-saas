import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-5xl font-bold">
          Build AI Agents Without Limits
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          The complete AI platform for creating, training, and deploying intelligent agents.
        </p>
      </main>
    </>
  );
}
import Logo from "./Logo";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Logo />

        <nav className="hidden md:flex gap-8">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
        </nav>

        <div className="flex items-center gap-3">

          <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg border">
            <Search size={18} />
          </button>

          <button className="rounded-lg bg-black px-4 py-2 text-white">
            Sign In
          </button>

          <button className="md:hidden">
            <Menu />
          </button>

        </div>

      </div>
    </header>
  );
}
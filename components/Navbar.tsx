"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Menu, Search } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-gray-600 hover:text-black">
            Features
          </Link>

          <Link href="#pricing" className="text-gray-600 hover:text-black">
            Pricing
          </Link>

          <Link href="#faq" className="text-gray-600 hover:text-black">
            FAQ
          </Link>

          <Link href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-lg border md:flex">
            <Search size={18} />
          </button>

          <SignInButton mode="modal">
            <button className="rounded-lg bg-black px-5 py-2 text-white">
              Sign In
            </button>
          </SignInButton>

          <UserButton />

          <button className="rounded-lg p-2 md:hidden">
            <Menu size={22} />
          </button>
        </div>

      </div>
    </header>
  );
}
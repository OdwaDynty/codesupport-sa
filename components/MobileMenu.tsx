"use client";

import Link from "next/link";
import { useState } from "react";
import AuthNavButton from "@/components/AuthNavButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/learn", label: "Learn" },
    { href: "/practice", label: "Practise" },
    { href: "/projects", label: "Projects" },
    { href: "/coding-help", label: "Coding Help" },
    { href: "/support", label: "1-on-1 Support" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-white/10 px-3 py-2 text-slate-300"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-slate-950 px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-300 transition hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4">
              <AuthNavButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthNavButton() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setLoggedIn(!!user);
    });
  }, []);

  // Avoid flashing "Sign In" for a split second before we know the real state
  if (loggedIn === null) {
    return <div className="h-5 w-16" />;
  }

  if (loggedIn) {
    return (
      <Link
        href="/account"
        className="text-sm text-slate-300 transition hover:text-emerald-400"
      >
        My Account
      </Link>
    );
  }

  return (
    <Link
      href="/account/login"
      className="text-sm text-slate-300 transition hover:text-emerald-400"
    >
      Sign In
    </Link>
  );
}
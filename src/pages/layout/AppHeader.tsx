"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useNavigate } from "@tanstack/react-router";

export function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // global redirect after logout
      navigate({ to: "/login" });

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-6 h-12 border-b bg-white/70 backdrop-blur">

      {/* Left */}
      <h1 className="text-lg font-bold text-indigo-600">
        Healthcare SaaS
      </h1>

      {/* Right */}
      <Button
        onClick={handleLogout}
        variant="outline"
        className="flex items-center gap-2 text-red-500 border-red-200 hover:bg-red-50"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>

    </header>
  );
}
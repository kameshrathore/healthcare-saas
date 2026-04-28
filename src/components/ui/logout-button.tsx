"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useNavigate } from "@tanstack/react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate({ to: "/login" }); // ✅ correct TanStack Router syntax
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center gap-2 text-red-500 border-red-200 hover:bg-red-50"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}

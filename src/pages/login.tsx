import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/ui/login-form";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 md:p-6">

      {/* 🌈 Background (light + dark) */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-blue-50 via-white to-indigo-50
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      " />

      {/* ✨ Glow effect */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-indigo-500/10 via-purple-500/10 to-pink-500/10
        dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5
        blur-3xl
      " />

      <div className="flex w-full max-w-sm flex-col gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2 self-center font-semibold text-foreground">
          <div className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="text-lg">HealthCare SaaS</span>
        </div>

        {/* Login Form */}
        <LoginForm />

      </div>
    </div>
  );
}

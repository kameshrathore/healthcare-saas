"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "@/services/firebase";
import { useRouter } from "@tanstack/react-router";

// 🔔 notification helper
function showNotification(title: string, body: string) {
  if (!("Notification" in window)) return;

  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/favicon.svg",
    });
  }
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      showNotification(
        "Login Successful 🎉",
        "Welcome back to Healthcare Dashboard"
      );

      router.navigate({ to: "/" });
    } catch {
      setError("Invalid email or password");

      showNotification("Login Failed", "Please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setError(null);

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      showNotification("Google Login Successful 🎉", "Welcome back!");

      router.navigate({ to: "/" });
    } catch {
      setError("Google login failed");

      showNotification("Login Failed", "Google authentication failed");
    }
  };

  const fillDemo = () => {
    setEmail("test@healthcare.com");
    setPassword("123456");
  };

  const loginDemo = () => {
    setEmail("test@healthcare.com");
    setPassword("123456");

    setTimeout(() => handleLogin(), 100);
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-md mx-auto", className)}
      {...props}
    >
      {/* ✅ FIXED GLOW FOR DARK MOBILE */}
      <div
        className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-indigo-500/10 via-purple-500/10 to-pink-500/10
        dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5
        blur-3xl"
      />

      {/* ✅ FIXED CARD CONTRAST */}
      <Card
        className="shadow-xl border border-border/50 backdrop-blur-xl 
        bg-white/90 dark:bg-gray-900/90"
      >
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Welcome back
          </CardTitle>
          <CardDescription>
            Sign in to continue to your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">

            {/* ✅ FIXED DEMO BOX */}
            <div className="bg-muted/70 dark:bg-gray-800/70 border rounded-lg p-3 text-sm space-y-2">
              <p className="font-medium text-foreground flex items-center justify-between">
                Demo Login
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                  Test Account
                </span>
              </p>

              <div className="text-muted-foreground text-xs space-y-1">
                <p>
                  Email:{" "}
                  <span className="font-medium text-foreground">
                    test@healthcare.com
                  </span>
                </p>
                <p>
                  Password:{" "}
                  <span className="font-medium text-foreground">
                    123456
                  </span>
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={fillDemo}
                >
                  Autofill
                </Button>

                <Button
                  type="button"
                  size="sm"
                  className="w-full"
                  onClick={loginDemo}
                >
                  1-click Login
                </Button>
              </div>
            </div>

            {/* Google Login */}
            <Field>
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 h-11 rounded-lg 
                bg-white dark:bg-gray-800"
                onClick={handleGoogle}
              >
                <img
                  src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                  alt="google icon"
                  className="h-5 w-5"
                />
                Sign in with Google
              </Button>
            </Field>

            <FieldSeparator>or continue with email</FieldSeparator>

            {/* Email */}
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-white dark:bg-gray-800 border-border"
                required
              />
            </Field>

            {/* Password */}
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Password</FieldLabel>
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary underline"
                >
                  Forgot password?
                </a>
              </div>

              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 bg-white dark:bg-gray-800 border-border"
                required
              />
            </Field>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400 
                bg-red-50 dark:bg-red-900/20 p-2 rounded-md">
                {error}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-11 font-medium 
              bg-indigo-600 hover:bg-indigo-700 
              dark:bg-indigo-500 dark:hover:bg-indigo-600"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            {/* Footer */}
            <FieldDescription className="text-center text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-primary font-medium hover:underline">
                Create account
              </a>
            </FieldDescription>
          </form>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-muted-foreground">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
}

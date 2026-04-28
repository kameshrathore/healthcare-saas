import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Dummy login logic
    router.navigate({ to: "/" }); // Redirect to Dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-text-h font-heading text-2xl">Login</h2>
      <p>Dummy login page for now.</p>
      <Button
        className="bg-accent text-white hover:bg-accent-border"
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}

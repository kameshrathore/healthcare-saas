import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-text-h font-heading text-2xl mb-4">Dashboard</h2>
      <p>Welcome to the Healthcare SaaS Dashboard!</p>

      {/* Navigation inside dashboard */}
      <nav className="flex gap-4 mt-6">
        <Button asChild><a href="/analytics">Analytics</a></Button>
        <Button asChild><a href="/patients">Patient Details</a></Button>
      </nav>
    </div>
  );
}

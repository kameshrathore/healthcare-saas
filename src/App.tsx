// src/App.tsx
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routes/index";
import { Button } from "@/components/ui/button";

// Create router
const router = createRouter({ routeTree });

function App() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-border">
        <h1 className="text-text-h font-heading text-2xl">Healthcare SaaS</h1>
        <nav className="flex gap-4">
          <Button asChild><a href="/">Dashboard</a></Button>
          <Button asChild><a href="/analytics">Analytics</a></Button>
          <Button asChild><a href="/patients">Patients</a></Button>
          <Button asChild><a href="/login">Login</a></Button>
        </nav>
      </header>

      {/* Router outlet */}
      <main className="flex-1 p-6">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;

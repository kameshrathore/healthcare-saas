import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routes/index";

const router = createRouter({ routeTree });

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
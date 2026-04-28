import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routes/index";

const router = createRouter({ routeTree });

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}
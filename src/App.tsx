// src/App.tsx
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routes/index";

const router = createRouter({ routeTree });

function App() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      {/* Router outlet renders the current page */}
      <main className="flex-1">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
